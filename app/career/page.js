import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Life at Q-Dev | Q-Dev Solutions - Culture & Benefits',
  description: 'Discover the culture, values, and benefits of working at Q-Dev Solutions. Learn about our remote-first environment and commitment to growth.',
  keywords: ['company culture', 'benefits', 'work-life balance', 'remote work', 'career growth', 'Q-Dev Solutions'],
  openGraph: {
    title: 'Life at Q-Dev Solutions',
    description: 'Experience our culture of innovation and collaboration. See what makes Q-Dev Solutions a great place to work.',
    url: 'https://qdevsolutions.com/career',
    type: 'website',
  },
};

export default function Career() {
  const lifeAtQDev = [
    {
      title: 'Team Collaboration',
      description: 'Working together to solve complex problems and deliver excellence.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Innovation & Growth',
      description: 'Constantly pushing boundaries and learning new technologies.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote-first culture that respects your time.',
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const benefits = [
    {
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world. We believe in output over hours.',
      icon: '🌍',
    },
    {
      title: 'Continuous Learning',
      description: 'Access to courses, conferences, and workshops to help you grow.',
      icon: '📚',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs for you and your family.',
      icon: '💪',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#0D0A1A] min-h-screen text-slate-50 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0D0A1A]">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-[#0D0A1A] to-amber-950/10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
              Our Culture
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Life at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                Q-Dev Solutions
              </span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join a team of passionate developers, designers, and innovators. We are shaping the digital landscape one project at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/jobs"
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:from-violet-500 hover:to-purple-600 transition-all shadow-lg shadow-purple-700/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>

        {/* Life at Q-Dev Section */}
        <section id="life-at-qdev" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080614] relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Why Join Us?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                We believe in a culture of learning, collaboration, and balance. Here, your work matters, and your growth is our priority.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {lifeAtQDev.map((item, index) => (
                <div
                  key={index}
                  className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/50"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A1A] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#131126] border border-slate-800/50 hover:border-violet-500/30 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-2xl mb-6 group-hover:bg-violet-500/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
