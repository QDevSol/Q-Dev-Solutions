import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Careers | Q-Dev Solutions - Join Our Team',
  description: 'Explore career opportunities at Q-Dev Solutions. Discover our culture, benefits, and current job openings in web development, mobile apps, and AI.',
  keywords: ['careers', 'jobs', 'hiring', 'web development jobs', 'software engineer jobs', 'Q-Dev Solutions careers', 'remote jobs'],
  openGraph: {
    title: 'Careers at Q-Dev Solutions',
    description: 'Join our team of innovators and creators. Build the future with Q-Dev Solutions.',
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

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
    },
    {
      id: 3,
      title: 'Backend Engineer (Node.js)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
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
              We are hiring!
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Build the Future with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                Q-Dev Solutions
              </span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join a team of passionate developers, designers, and innovators. We are shaping the digital landscape one project at a time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#jobs"
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:from-violet-500 hover:to-purple-600 transition-all shadow-lg shadow-purple-700/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                View Open Positions
              </a>
              <a
                href="#life-at-qdev"
                className="px-8 py-3.5 rounded-lg border border-slate-700 hover:border-violet-500/50 hover:bg-violet-500/5 text-slate-300 hover:text-white transition-all"
              >
                Life at Q-Dev
              </a>
            </div>
          </div>
        </section>

        {/* Life at Q-Dev Section */}
        <section id="life-at-qdev" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080614] relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Life at Q-Dev</h2>
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

        {/* Jobs Section */}
        <section id="jobs" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-violet-600/5 blur-[100px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Ready to make an impact? Check out our current openings and apply to join our growing team.
              </p>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-xl bg-[#131126]/80 backdrop-blur-sm border border-slate-800/50 hover:border-violet-500/50 hover:bg-[#1A1633] transition-all duration-300"
                >
                  <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="w-full md:w-auto px-6 py-2.5 rounded-lg border border-violet-500/30 text-violet-300 font-medium hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all text-center"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">
                Don't see a role that fits? We're always looking for talent.
              </p>
              <a
                href="mailto:careers@qdevsolutions.com"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors border-b border-transparent hover:border-violet-300"
              >
                Send us your resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
