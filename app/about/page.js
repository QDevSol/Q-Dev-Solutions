import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About Company | Q-Dev Solutions - Our Mission & Vision',
  description: 'Learn about Q-Dev Solutions, our mission, vision, and commitment to innovation in digital solutions.',
  keywords: ['about us', 'company', 'mission', 'vision', 'Q-Dev Solutions'],
  openGraph: {
    title: 'About Q-Dev Solutions',
    description: 'Learn about our mission, vision, and the values driving innovation at Q-Dev Solutions.',
    url: 'https://www.qdevsol.site/about',
    type: 'website',
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0D0A1A] min-h-screen text-slate-50 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0D0A1A]">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-[#0D0A1A] to-amber-950/10" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Driven by Innovation, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                United by Passion
              </span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We are a diverse team of problem solvers, creators, and thinkers dedicated to building exceptional digital experiences.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080614] relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
                alt="Team working together"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A1A] via-transparent to-transparent opacity-60" />
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth and efficiency. We believe in the power of code to transform ideas into reality and create lasting impact.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                    ðŸš€
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                    <p className="text-slate-400">Constantly exploring new technologies to deliver the best solutions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                    ðŸ¤
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Client Partnership</h3>
                    <p className="text-slate-400">Building long-term relationships based on trust and transparency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
