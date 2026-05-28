import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Session | AchieveAble OT',
  description: 'Schedule your child\'s session with AchieveAble OT online — quick, easy, and available 24/7.',
};

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Online Booking</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Book a Session</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            Select a time that works for your family. New patients welcome — we look forward to meeting your child!
          </p>
        </div>
      </section>

      {/* Setup Notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-4 px-4">
        <div className="max-w-4xl mx-auto text-sm text-amber-800 text-center">
          <strong>Site Owner:</strong> Replace <code className="bg-amber-100 px-1 rounded">YOUR_CALENDLY_USERNAME</code> below with your actual Calendly username (e.g., <code className="bg-amber-100 px-1 rounded">achieveableot</code>). Sign up free at calendly.com.
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            data-url="https://calendly.com/YOUR_CALENDLY_USERNAME"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Alternative contact */}
      <section className="py-12 bg-violet-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Prefer to Call?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Our team is happy to help you schedule over the phone or answer any questions before your first visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:7183571620"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-700 hover:bg-violet-800 text-white font-bold rounded-full transition-colors"
            >
              📞 (718) 357-1620
            </a>
            <a
              href="mailto:admin@achieveableot.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white font-semibold rounded-full transition-colors"
            >
              ✉️ admin@achieveableot.com
            </a>
          </div>
          <div className="mt-8 p-5 bg-white rounded-2xl text-left max-w-xl mx-auto">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">What to Expect at Your First Visit</h3>
            <ul className="space-y-2">
              {[
                'Initial intake forms sent via email — complete before your visit.',
                'A comprehensive evaluation of your child\'s strengths and needs.',
                'Discussion of goals and a proposed treatment plan.',
                'Insurance and payment options explained clearly.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                  <svg className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
