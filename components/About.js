const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '6', label: 'Core Services' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0D0A1A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-amber-400" />
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">What We Do</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              About <span className="gradient-text">Q-Dev Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Our company specializes in a comprehensive range of services, including mobile app
              development, website development, software development, UX/UI design, AI integrations,
              and quality assurance.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our unique selling point lies in our approach to scalability, security, and engagement,
              ensuring that the web applications we build are robust and intuitively designed to keep
              users coming back. With expertise spanning various industries, we deliver tailored
              solutions strategically aligned with your business goals.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors group"
            >
              Work with us
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 rounded-2xl bg-[#1A1330] border animated-border card-hover ${
                  i % 2 === 0 ? 'mt-0' : 'mt-6'
                }`}
              >
                <div className="font-display text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
