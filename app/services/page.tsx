import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | AchieveAble OT',
  description: 'Explore our full range of pediatric occupational therapy services including sensory integration, feeding therapy, handwriting assessment, and more.',
};

const services = [
  {
    icon: '🧠',
    title: 'OT Evaluation & Treatment',
    desc: 'We conduct comprehensive occupational therapy evaluations to identify each child\'s strengths and areas of need, then develop individualized treatment plans targeting functional goals across daily life skills.',
  },
  {
    icon: '🥗',
    title: 'Feeding Therapy',
    desc: 'Addressing feeding difficulties including picky eating, oral sensory aversions, and motor challenges. We work with children and families to make mealtimes positive, functional, and safe.',
  },
  {
    icon: '🔬',
    title: 'Neurodevelopmental Treatment',
    desc: 'NDT is a hands-on approach used to assess and treat children with neurological conditions such as cerebral palsy, helping improve movement, posture, and functional independence.',
  },
  {
    icon: '✏️',
    title: 'Handwriting Assessment & Intervention',
    desc: 'Using evidence-based programs to evaluate and improve legibility, speed, and endurance in handwriting. We address underlying fine motor, visual-perceptual, and sensory factors.',
  },
  {
    icon: '🌀',
    title: 'Sensory Integration Therapy',
    desc: 'Helping children process and organize sensory information from their environment, reducing overwhelm and improving attention, behavior, and participation in daily activities.',
  },
  {
    icon: '⭐',
    title: 'Early Intervention',
    desc: 'Providing developmental support for infants and toddlers (birth to age 3) to address early signs of developmental delays and build foundational skills during the most critical window of development.',
  },
  {
    icon: '👗',
    title: 'Activities of Daily Living (ADL)',
    desc: 'Training children to independently manage self-care tasks such as dressing, grooming, hygiene, and feeding — building confidence and autonomy in everyday routines.',
  },
  {
    icon: '🎯',
    title: 'Executive Functioning & Emotional Regulation',
    desc: 'Building higher-level cognitive and behavioral skills including planning, organization, task initiation, flexible thinking, and strategies for managing emotions and behavior.',
  },
  {
    icon: '🤸',
    title: 'Small Sensorimotor Groups',
    desc: 'Structured small-group therapy sessions focused on sensory and motor skill development, offering a therapeutic social environment for children to practice skills alongside peers.',
  },
  {
    icon: '💼',
    title: 'Prevocational Training',
    desc: 'Preparing older children and teens for workplace readiness by building skills in task completion, time management, workplace behavior, and vocational interests.',
  },
  {
    icon: '☀️',
    title: 'Half-Day Summer Camp (Ages 3–5)',
    desc: 'A therapeutic summer program for young children integrating OT-based activities in a fun, camp-style environment. Focuses on social participation, sensory play, and school readiness.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">What We Offer</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            Eleven specialized therapy services — each designed to meet children where they are and help them get where they want to go.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-14 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Payment & Insurance</h2>
          <p className="text-gray-600 mb-6">
            We strive to make our services accessible. We currently accept:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Private Pay', 'Out-of-Network Benefits', 'DOE Authorization for IEEs'].map((item) => (
              <span key={item} className="px-5 py-2 bg-white border border-violet-200 text-violet-700 text-sm font-medium rounded-full shadow-sm">
                {item}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            Please contact us to discuss your specific insurance situation — we&apos;re happy to help you understand your benefits.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Not Sure Which Service Is Right?</h2>
          <p className="text-gray-500 mb-8">
            Contact us and we&apos;ll help identify the best starting point for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors">
              Book an Evaluation
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white font-semibold rounded-full transition-colors">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
