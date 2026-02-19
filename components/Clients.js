import Image from 'next/image';

const clients = [
  { name: 'Spotify', logo: '/clients/spotify.svg', hideName: true },
  { name: 'Slack', logo: '/clients/slack.svg', hideName: true },
  { name: 'Adobe', logo: '/clients/adobe.svg', hideName: true },
  { name: 'Shopify', logo: '/clients/shopify.svg', hideName: true },
  { name: 'Discord', logo: '/clients/discord.svg', hideName: true },
  { name: 'Zoom', logo: '/clients/zoom.svg', hideName: true },
];

const partners = [
  { name: 'AWS', logo: '/partners/aws.svg', hideName: true },
  { name: 'Google Cloud', logo: '/partners/google-cloud.svg', hideName: true },
  { name: 'Microsoft', logo: '/partners/microsoft.svg', hideName: true },
  { name: 'Vercel', logo: '/partners/vercel-white.svg', hideName: false },
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
                <div className="relative h-10 w-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={40}
                    sizes="(min-width: 1024px) 140px, 120px"
                    className="w-auto h-10 max-w-[80%] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                {!client.hideName && (
                  <span className="text-slate-400 text-xs font-medium group-hover:text-slate-300 transition-colors text-center mt-3">
                    {client.name}
                  </span>
                )}
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
                className="group flex items-center justify-center gap-3 px-8 py-6 rounded-xl bg-[#1A1330] border border-[#2D2050] hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 card-hover min-w-[160px]"
              >
                <div className="relative h-8 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={0}
                    height={0}
                    sizes="120px"
                    className="w-auto h-8"
                  />
                </div>
                {!partner.hideName && (
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
