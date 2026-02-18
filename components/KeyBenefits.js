const benefits = [
  {
    number: '01',
    title: 'Value-Focused Strategy',
    description:
      'We prioritize delivering exceptional value in every project we undertake. By thoroughly understanding the unique requirements of your business, we craft solutions that maximize your benefits and drive significant results.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Faster Time-to-Market',
    description:
      'Working according to the Agile project management methodology, we shorten the time-to-market of the solutions we develop and optimize the use of resources.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Flexible Collaboration',
    description:
      'We foster strong long-term partnerships built on open communication and an agile approach. This way, we ensure customer expectations are met, ideas are shared, and solutions are tailored to achieve optimal results.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Professional Team',
    description:
      'We are a team of professionals in our field, so you can focus on your business development, strategy, sales, and overall business vision. We will become your trusted technology partner for sustainable growth.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function KeyBenefits() {
  return (
    <section id="key-benefits" className="section-padding bg-[#0F0C1F] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Why Us?</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Key <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            What makes Q-Dev Solutions the right technology partner for your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.number}
              className="group relative p-8 rounded-2xl bg-[#1A1330] border border-[#2D2050] card-hover overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-6 font-display text-7xl font-bold text-violet-900/20 select-none leading-none">
                {benefit.number}
              </div>

              {/* Icon */}
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-600 to-purple-800 text-white mb-5 shadow-lg shadow-violet-700/30 group-hover:shadow-violet-500/50 transition-shadow">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
