import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | AchieveAble OT',
  description: 'Get in touch with AchieveAble OT. Located in Bayside, Queens, NY.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Get in Touch</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            Have a question, or want to learn more? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0 text-lg">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <p className="text-gray-600 text-sm">
                      42-23 Francis Lewis Blvd, Ste LL107<br />
                      Bayside, NY 11361
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0 text-lg">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <a href="tel:7183571620" className="text-violet-700 hover:text-violet-900 text-sm">(718) 357-1620</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0 text-lg">📠</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Fax</h3>
                    <p className="text-gray-600 text-sm">(718) 357-1623 &bull; (718) 799-5520</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0 text-lg">✉️</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <a href="mailto:admin@achieveableot.com" className="text-violet-700 hover:text-violet-900 text-sm">
                      admin@achieveableot.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-violet-50 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-2">Service Areas</h3>
                <p className="text-gray-600 text-sm">
                  We serve children across <strong>Queens</strong> and <strong>Western Nassau County</strong>, New York.
                  Teletherapy services are available throughout New York State.
                </p>
              </div>

              {/* Map embed placeholder */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  title="AchieveAble OT Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8!2d-73.77!3d40.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s42-23+Francis+Lewis+Blvd%2C+Bayside%2C+NY+11361!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Send Us a Message</h2>
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="(718) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Book an Evaluation</option>
                    <option>Insurance / Payment</option>
                    <option>Teletherapy</option>
                    <option>Programs</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your child and how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-violet-700 hover:bg-violet-800 text-white font-bold rounded-full transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 1–2 business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
