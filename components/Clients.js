const clients = [
  { name: 'TechCorp', initial: 'TC' },
  { name: 'InnovateCo', initial: 'IC' },
  { name: 'DataFlow', initial: 'DF' },
  { name: 'CloudBase', initial: 'CB' },
  { name: 'NexGen', initial: 'NG' },
  { name: 'DigitalEdge', initial: 'DE' },
];

const partners = [
  { name: 'AWS', initial: 'AW' },
  { name: 'Google Cloud', initial: 'GC' },
  { name: 'Microsoft', initial: 'MS' },
  { name: 'Vercel', initial: 'VC' },
];

export default function Clients() {
  return (
    <section id="clients" className="section-padding bg-[#0D0A1A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Clients */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Our Clients</span>
              <div className="w-8 h-px bg-amber-400" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Trusted by <span className="gradient-text">Businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#1A1330] border border-[#2D2050] hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center text-white font-bold text-sm mb-3 shadow-lg shadow-violet-700/30 group-hover:shadow-violet-500/50 transition-shadow">
                  {client.initial}
                </div>
                <span className="text-slate-400 text-xs font-medium group-hover:text-slate-300 transition-colors text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Our Partners</span>
              <div className="w-8 h-px bg-amber-400" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-[#1A1330] border border-[#2D2050] hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-amber-700/30 group-hover:shadow-amber-500/50 transition-shadow">
                  {partner.initial}
                </div>
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
