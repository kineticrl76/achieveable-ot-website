import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AchieveAble OT',
  description: 'Learn about AchieveAble OT — a pediatric occupational therapy practice in Queens and Western Nassau.',
};

const team = [
  {
    name: 'Our Clinical Team',
    desc: 'Our licensed occupational therapists bring deep expertise across sensory integration, neurodevelopmental treatment, and early childhood intervention. Every therapist is committed to ongoing professional development to deliver the highest standard of care.',
  },
];

const values = [
  { icon: '❤️', title: 'Child-Centered', desc: 'We see the whole child — not just the diagnosis. Every plan is built around each child\'s unique strengths, needs, and goals.' },
  { icon: '🔬', title: 'Evidence-Based', desc: 'Our treatments are grounded in the latest peer-reviewed research and best practices in pediatric occupational therapy.' },
  { icon: '👨‍👩‍👧', title: 'Family Partnership', desc: 'We treat families as essential partners in the therapy process, providing guidance and home strategies that extend progress beyond our clinic.' },
  { icon: '🌱', title: 'Growth-Focused', desc: 'We celebrate every milestone, no matter how small, and continuously reassess goals to keep your child moving forward.' },
  { icon: '🏠', title: 'Community Rooted', desc: 'Proudly serving Queens and Western Nassau for over a decade — deeply connected to the families we serve.' },
  { icon: '✅', title: 'Transparent', desc: 'We believe in clear communication — with families, schools, and other providers — to ensure continuity of care.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">About Us</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Expert Care. Lasting Results.</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            A pediatric OT practice built on compassion, science, and an unwavering belief that every child can achieve more.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Helping Children Reach Their Full Potential
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AchieveAble OT is a pediatric occupational therapy practice located in Bayside, Queens, serving children
                across Queens and Western Nassau. We specialize in treating children with a wide range of developmental,
                genetic, behavioral, and neurological conditions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our therapists deliver individualized, evidence-based treatment in a warm, nurturing environment where
                children feel safe to explore, challenge themselves, and grow.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work closely with families, schools, and other healthcare providers to ensure a holistic, coordinated
                approach to every child&apos;s care.
              </p>
            </div>
            <div className="bg-violet-50 rounded-3xl p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0 text-violet-700 font-bold">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600 text-sm">42-23 Francis Lewis Blvd, Ste LL107, Bayside, NY 11361</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0 text-violet-700 font-bold">📞</div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <a href="tel:7183571620" className="text-violet-700 hover:text-violet-900 text-sm">(718) 357-1620</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0 text-violet-700 font-bold">✉️</div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <a href="mailto:admin@achieveableot.com" className="text-violet-700 hover:text-violet-900 text-sm">admin@achieveableot.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600 font-bold">💳</div>
                <div>
                  <h4 className="font-bold text-gray-900">Payment</h4>
                  <p className="text-gray-600 text-sm">Private pay · Out-of-network benefits · DOE authorization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything we do is guided by a commitment to excellence, integrity, and compassionate care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Ready to Take the First Step?</h2>
          <p className="text-gray-500 mb-8">
            We&apos;d love to meet your child and learn how we can help. Book a session or contact us with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors">
              Book a Session
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white font-semibold rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
