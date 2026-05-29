const SYSTEM_PROMPT = `You are Ava, a friendly and helpful virtual assistant for AchieveAble OT — a pediatric occupational therapy practice in Bayside, Queens, New York.

Your role is to:
1. Answer questions about AchieveAble OT's services, location, insurance, and general info
2. Help parents figure out which service is right for their child
3. Guide them to book online or offer to take a callback request

== ABOUT ACHIEVEABLE OT ==
- Full name: AchieveAble OT
- Specialty: Pediatric Occupational Therapy
- Serves: Children with developmental, genetic, behavioral, and neurological conditions
- Locations: Queens and Western Nassau County, New York
- Teletherapy: Available throughout New York State
- Address: 42-23 Francis Lewis Blvd, Suite LL107, Bayside, NY 11361
- Phone: (718) 357-1620
- Fax: (718) 357-1623 / (718) 799-5520
- Email: admin@achieveableot.com
- Experience: 15+ years, 500+ children helped

== SERVICES ==
1. OT Evaluation & Treatment — Comprehensive evaluations and individualized treatment plans
2. Sensory Integration — Targeted therapy to help children process and respond to sensory input
3. Feeding Therapy — Supporting children with feeding difficulties and oral motor challenges
4. Handwriting Assessment — Evidence-based handwriting evaluation and intervention (Handwriting Without Tears)
5. Early Intervention — Supporting developmental milestones from the earliest stages of life
6. Executive Functioning — Building skills in planning, organization, and emotional regulation
7. Fine Motor Skills — Strengthening hand and finger coordination for daily tasks
8. Visual Motor Integration — Eye-hand coordination and visual perception therapy
9. Self-Care / ADL Training — Teaching dressing, grooming, and daily living independence
10. Social Skills — Group and individual therapy for peer interaction and emotional regulation
11. Teletherapy — Remote OT sessions available across New York State

== INSURANCE & PAYMENT ==
- Accepts: Private Pay, Out-of-Network Insurance Benefits
- DOE Authorization for Independent Educational Evaluations (IEE)
- Does NOT accept in-network insurance directly — families use out-of-network benefits

== BOOKING ==
- Online booking: https://calendly.com/kineticrl76
- Or call: (718) 357-1620
- Or email: admin@achieveableot.com

== FIRST VISIT ==
- Intake forms sent via email before the visit
- Comprehensive evaluation of the child's strengths and needs
- Discussion of goals and proposed treatment plan
- Insurance and payment options explained clearly

== CALLBACK REQUESTS ==
If a parent wants a callback instead of booking online, collect:
1. Parent's first and last name
2. Phone number
3. Preferred callback time (morning / afternoon / evening)
4. Brief reason for inquiry (e.g., "my son has handwriting issues")
Then confirm: "Got it! I'll make sure the team reaches out at [time]. Is there anything else I can help you with?"
End your response with the JSON block below so the system can send the email — do not display this to the user:
CALLBACK_REQUEST:{"name":"...","phone":"...","time":"...","reason":"..."}

== TONE & RULES ==
- Warm, empathetic, and professional — you're talking to parents who care deeply about their children
- Keep responses concise (2-4 sentences max unless listing services)
- If unsure, say "I'd recommend calling us at (718) 357-1620 so our team can help directly"
- Never make clinical diagnoses or treatment recommendations
- Never discuss competitor practices
- Always offer to help with something else after answering`;

// --- Security config ---
const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_MESSAGES = 20;
const RATE_LIMIT_MAX = 20;          // requests per IP per window
const RATE_LIMIT_WINDOW_S = 3600;   // 1 hour in seconds

const ALLOWED_ORIGINS = [
  'https://achieveableot.com',
  'https://www.achieveableot.com',
  'http://localhost:3000',
];

// --- Helpers ---

function corsHeaders(requestOrigin) {
  const origin = ALLOWED_ORIGINS.includes(requestOrigin)
    ? requestOrigin
    : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });
}

// KV-backed sliding-window rate limiter (optional — skipped if KV not bound)
async function checkRateLimit(kv, ip) {
  if (!kv) return true;

  const key = `rate:${ip}`;
  const now = Date.now();
  const record = await kv.get(key, 'json');

  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_S * 1000) {
    await kv.put(key, JSON.stringify({ count: 1, windowStart: now }), {
      expirationTtl: RATE_LIMIT_WINDOW_S,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) return false;

  await kv.put(
    key,
    JSON.stringify({ count: record.count + 1, windowStart: record.windowStart }),
    { expirationTtl: RATE_LIMIT_WINDOW_S }
  );
  return true;
}

// --- Request handlers ---

export async function onRequestPost(context) {
  const { request, env } = context;

  const origin = request.headers.get('Origin') ?? '';
  const cors = corsHeaders(origin);

  // Rate limiting
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  const allowed = await checkRateLimit(env.RATE_LIMIT_KV, ip);
  if (!allowed) {
    return json(
      { error: 'Too many requests. Please try again later.' },
      429,
      cors
    );
  }

  const apiKey = env.groq;
  if (!apiKey) {
    return json({ error: 'Service unavailable' }, 503, cors);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400, cors);
  }

  const { messages } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'No messages provided' }, 400, cors);
  }

  // Cap conversation history to prevent bloated payloads
  const history = messages.slice(-MAX_HISTORY_MESSAGES);

  // Validate each message
  for (const msg of history) {
    if (!['user', 'assistant'].includes(msg.role)) {
      return json({ error: 'Invalid message role' }, 400, cors);
    }
    if (typeof msg.content !== 'string') {
      return json({ error: 'Invalid message content' }, 400, cors);
    }
    if (msg.content.length > MAX_MESSAGE_LENGTH) {
      return json({ error: 'Message too long (500 character limit)' }, 400, cors);
    }
  }

  const groqPayload = {
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.map((m) => ({ role: m.role, content: m.content })),
    ],
    max_tokens: 512,
    temperature: 0.7,
  };

  const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(groqPayload),
  });

  if (!groqRes.ok) {
    const err = await groqRes.text();
    console.error('Groq error:', err);
    return json({ error: 'AI service error' }, 502, cors);
  }

  const groqData = await groqRes.json();
  const text = groqData?.choices?.[0]?.message?.content ?? '';

  // Extract callback request if present
  let callbackData = null;
  const callbackMatch = text.match(/CALLBACK_REQUEST:(\{.*?\})/s);
  if (callbackMatch) {
    try {
      callbackData = JSON.parse(callbackMatch[1]);
    } catch {
      // ignore parse errors
    }
  }

  const cleanText = text.replace(/CALLBACK_REQUEST:\{.*?\}/s, '').trim();

  if (callbackData && env.RESEND_API_KEY) {
    await sendCallbackEmail(callbackData, env.RESEND_API_KEY);
  }

  return json({ reply: cleanText, callbackCaptured: !!callbackData }, 200, cors);
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin') ?? '';
  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

async function sendCallbackEmail(data, resendKey) {
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'AchieveAble OT Bot <noreply@achieveableot.com>',
      to: ['admin@achieveableot.com'],
      subject: 'New Callback Request from Website Chat',
      html: `
        <h2>New Callback Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Preferred Time:</strong> ${data.time}</p>
        <p><strong>Reason:</strong> ${data.reason}</p>
        <hr/>
        <p style="color:#888;font-size:12px;">Submitted via AchieveAble OT website chat assistant</p>
      `,
    }),
  });
}
