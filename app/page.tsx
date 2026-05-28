import Link from 'next/link';

const services = [
  { title: 'OT Evaluation & Treatment', icon: '🧠', desc: 'Comprehensive evaluations and individualized treatment plans.' },
  { title: 'Sensory Integration', icon: '🌀', desc: 'Targeted therapy to help children process and respond to sensory input.' },
  { title: 'Feeding Therapy', icon: '🥗', desc: 'Supporting children with feeding difficulties and oral motor challenges.' },
  { title: 'Handwriting Assessment', icon: '✏️', desc: 'Evidence-based handwriting evaluation and intervention programs.' },
  { title: 'Early Intervention', icon: '⭐', desc: 'Supporting developmental milestones from the earliest stages of life.' },
  { title: 'Executive Functioning', icon: '🎯', desc: 'Building skills in planning, organization, and emotional regulation.' },
];

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Children Helped' },
  { value: '11', label: 'Specialized Services' },
  { value: '2', label: 'Locations Served' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-violet-700 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400 rounded-full opacity-10 translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Pediatric Occupational Therapy · Queens &amp; Western Nassau
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Where Kids Become{' '}
              <span className="text-amber-400">Achievers!</span>
            </h1>
            <p className="text-violet-100 text-lg sm:text-xl mb-8 leading-relaxed">
              Empowering children with developmental, genetic, behavioral, and neurological conditions through
              individualized, evidence-based occupational therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold text-base rounded-full transition-colors shadow-lg"
              >
                Book a Session
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 hover:border-white text-white font-semibold text-base rounded-full transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-violet-50 border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold text-violet-700">{value}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Comprehensive, child-centered therapy tailored to each child&apos;s unique needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, icon, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-violet-700 font-semibold hover:text-violet-900 transition-colors"
            >
              View all 11 services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full mb-4">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Expert Care for Every Child&apos;s Journey
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AchieveAble OT is a pediatric occupational therapy practice serving Queens and Western Nassau. We
                specialize in children with developmental, genetic, behavioral, and neurological conditions —
                delivering individualized, evidence-based care in a warm, nurturing environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We accept private pay, out-of-network insurance benefits, and Department of Education authorization
                for Independent Educational Evaluations.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-full transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '❤️', title: 'Child-Centered', desc: 'Every plan is tailored to the individual child.' },
                { icon: '🏆', title: 'Evidence-Based', desc: 'Treatments rooted in the latest research.' },
                { icon: '👨‍👩‍👧', title: 'Family Focused', desc: 'Parents are partners in the therapy process.' },
                { icon: '📋', title: 'DOE Authorized', desc: 'Independent Educational Evaluations accepted.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-2xl mb-2">{icon}</div>
                  <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
                  <p className="text-gray-500 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-amber-100 text-lg mb-8">
            Schedule your child&apos;s first session online. Our friendly team will guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-violet-50 text-amber-600 font-bold text-base rounded-full transition-colors shadow-lg"
            >
              Book Online Now
            </Link>
            <a
              href="tel:7183571620"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-base rounded-full hover:bg-white/10 transition-colors"
            >
              Call (718) 357-1620
            </a>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-6">We Accept</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Private Pay', 'Out-of-Network Insurance', 'DOE Authorization', 'Independent Ed. Evaluations'].map(
              (item) => (
                <span
                  key={item}
                  className="px-5 py-2 border border-violet-200 text-violet-700 text-sm font-medium rounded-full bg-violet-50"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
