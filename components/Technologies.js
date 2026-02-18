const technologies = [
  'OpenAI', 'TypeScript', 'Node.js', 'PHP', 'JavaScript', 'Python',
  'C#', '.NET', 'React', 'Next.js', 'Vue.js', 'Angular', 'React Native',
  'AWS', 'Flutter', 'WordPress', 'Strapi', 'Drupal', 'Hugo', 'Docker',
];

// Duplicate for seamless loop
const allTechs = [...technologies, ...technologies];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-[#0D0A1A] relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Our Stack</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Technologies <span className="gradient-text">We Use</span>
          </h2>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="marquee-wrapper relative overflow-hidden mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0A1A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {allTechs.map((tech, i) => (
            <div
              key={`row1-${i}`}
              className="inline-flex items-center gap-2 mx-3 px-5 py-3 rounded-xl bg-[#1A1330] border border-[#2D2050] hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-amber-400 group-hover:scale-125 transition-transform" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="marquee-wrapper relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0A1A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee2 whitespace-nowrap">
          {[...allTechs].reverse().map((tech, i) => (
            <div
              key={`row2-${i}`}
              className="inline-flex items-center gap-2 mx-3 px-5 py-3 rounded-xl bg-[#1A1330] border border-[#2D2050] hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 cursor-default group"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-violet-500 group-hover:scale-125 transition-transform" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
