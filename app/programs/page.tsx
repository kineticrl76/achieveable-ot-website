import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs | AchieveAble OT',
  description: 'Explore AchieveAble OT\'s specialty programs including our Summer Camp and Small Sensorimotor Groups.',
};

const programs = [
  {
    tag: 'Ages 3–5',
    icon: '☀️',
    title: 'Half-Day Summer Camp',
    subtitle: 'A therapeutic summer experience for young children',
    desc: 'Our Summer Camp is a half-day therapeutic program that integrates occupational therapy principles into a fun, camp-style environment. Children participate in sensory play, gross motor activities, creative arts, and social skill-building — all guided by our licensed OTs.',
    highlights: [
      'Ages 3–5 years old',
      'Small group sizes for individualized attention',
      'OT-guided sensory and motor activities',
      'Social participation and peer interaction',
      'School readiness skill development',
      'Fun, play-based curriculum',
    ],
    color: 'amber',
  },
  {
    tag: 'All Ages',
    icon: '🤸',
    title: 'Small Sensorimotor Groups',
    subtitle: 'Structured group therapy for motor and sensory development',
    desc: 'Our Sensorimotor Groups bring together small numbers of children with similar needs and goals for structured, therapist-led sessions. These groups provide a therapeutic social context where children practice motor and sensory skills alongside peers.',
    highlights: [
      'Small groups (3–5 children)',
      'Matched by age and ability level',
      'Sensory processing skill development',
      'Gross and fine motor activities',
      'Social interaction in a structured setting',
      'Parent education component',
    ],
    color: 'violet',
  },
  {
    tag: 'Teens & Older Children',
    icon: '💼',
    title: 'Prevocational Training',
    subtitle: 'Building skills for workplace and community participation',
    desc: 'Our Prevocational Training program prepares older children and teenagers for greater independence in workplace and community settings. Sessions focus on building practical work-readiness skills tailored to each individual\'s interests and abilities.',
    highlights: [
      'Task sequencing and completion',
      'Time management strategies',
      'Workplace behavior and communication',
      'Community mobility skills',
      'Interest and strength identification',
      'Collaborative goal setting',
    ],
    color: 'teal',
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Specialty Programs</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Programs</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            Beyond individual therapy — structured programs that build skills, foster friendships, and make growth fun.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {programs.map(({ tag, icon, title, subtitle, desc, highlights, color }) => (
            <div key={title} className="grid md:grid-cols-2 gap-8 items-start p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div>
                <div className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                  color === 'amber' ? 'text-amber-700 bg-amber-100' :
                  color === 'teal' ? 'text-teal-700 bg-teal-50' :
                  'text-violet-700 bg-violet-100'
                }`}>
                  {tag}
                </div>
                <div className="text-4xl mb-3">{icon}</div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{title}</h2>
                <p className="text-violet-600 font-medium text-sm mb-4">{subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                <Link
                  href="/book"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm rounded-full transition-colors ${
                    color === 'amber'
                      ? 'bg-amber-500 hover:bg-amber-600 text-white'
                      : 'bg-violet-700 hover:bg-violet-800 text-white'
                  }`}
                >
                  Inquire About This Program
                </Link>
              </div>
              <div className="bg-violet-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Program Highlights</h3>
                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-violet-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Interested in a Program?</h2>
          <p className="text-gray-500 mb-8">Contact us to check availability, upcoming dates, and whether a program is right for your child.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-violet-700 hover:bg-violet-800 text-white font-bold rounded-full transition-colors">
              Contact Us
            </Link>
            <a href="tel:7183571620" className="px-8 py-3 border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white font-semibold rounded-full transition-colors">
              Call (718) 357-1620
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
