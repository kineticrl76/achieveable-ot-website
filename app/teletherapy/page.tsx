import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teletherapy | AchieveAble OT',
  description: 'Receive pediatric OT services from the comfort of your home through AchieveAble OT\'s secure teletherapy platform.',
};

const benefits = [
  { icon: '🏠', title: 'No Commute', desc: 'Attend sessions from home — no travel time, no parking, no waiting rooms.' },
  { icon: '📅', title: 'Flexible Scheduling', desc: 'More appointment slots available, making it easier to find a time that fits your family\'s schedule.' },
  { icon: '🔒', title: 'Secure & HIPAA-Compliant', desc: 'Sessions take place on a secure, HIPAA-compliant video platform to protect your privacy.' },
  { icon: '🌍', title: 'Accessible Anywhere', desc: 'Available to families across New York State — no geographic limitations.' },
  { icon: '🎮', title: 'Engaging Activities', desc: 'Therapists use creative, digital-friendly activities and home materials to keep children engaged.' },
  { icon: '👨‍👩‍👧', title: 'Family Involvement', desc: 'Parents observe and participate directly, reinforcing skills and strategies throughout the week.' },
];

const faqs = [
  {
    q: 'What equipment do I need?',
    a: 'A device with a camera and microphone (tablet, laptop, or desktop computer), a stable internet connection, and a quiet space. Your therapist will provide a list of any materials needed for specific activities.',
  },
  {
    q: 'Is teletherapy as effective as in-person therapy?',
    a: 'Research shows that teletherapy can be highly effective for many types of OT services. Our therapists adapt their techniques to deliver meaningful, goal-directed sessions via video.',
  },
  {
    q: 'What ages are appropriate for teletherapy?',
    a: 'Teletherapy can work for a wide range of ages with appropriate parent involvement. Your therapist will discuss whether it\'s the right fit for your child during an initial consultation.',
  },
  {
    q: 'Is teletherapy covered by insurance?',
    a: 'Coverage varies by plan. We accept out-of-network benefits and private pay for teletherapy. Contact us and we\'ll help you navigate your coverage.',
  },
];

export default function TeletherapyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Remote Care</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Teletherapy</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            High-quality pediatric OT services delivered to your home via secure video — convenient, flexible, and effective.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">OT From the Comfort of Home</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AchieveAble OT offers teletherapy services that bring the same expert, individualized care to your home via
                a secure video platform. Whether you&apos;re managing a busy schedule, live far from our clinic, or simply
                prefer the comfort of home — teletherapy makes quality care accessible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our therapists are experienced in conducting engaging, goal-directed sessions remotely, using creative
                digital activities and everyday household materials to deliver meaningful therapy outcomes.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors"
              >
                Book a Teletherapy Session
              </Link>
            </div>
            <div className="bg-violet-50 rounded-3xl p-8">
              <h3 className="font-bold text-gray-900 text-lg mb-4">What to Expect</h3>
              <ol className="space-y-4">
                {[
                  'Book your session online through our Calendly link.',
                  'Receive a secure video link via email before your session.',
                  'Join from any device with a camera and internet.',
                  'Your therapist will guide the session using engaging, age-appropriate activities.',
                  'Receive a follow-up summary with home strategies after each session.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Benefits of Teletherapy</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon, title, desc }) => (
              <div key={title} className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">Have more questions?</p>
            <Link href="/contact" className="px-6 py-3 border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white font-semibold rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
