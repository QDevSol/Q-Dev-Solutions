import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Our Projects | Q-Dev Solutions',
  description: 'Explore our completed projects and see how Q-Dev Solutions helps businesses succeed.',
};

const projects = [
  {
    id: 1,
    title: 'FinTech Analytics Dashboard',
    category: 'Web Application',
    description: 'A comprehensive financial analytics dashboard for real-time market data visualization and portfolio management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Next.js', 'D3.js', 'Node.js'],
    link: '#'
  },
  {
    id: 2,
    title: 'MediCare Telemedicine App',
    category: 'Mobile App',
    description: 'A secure telemedicine platform connecting patients with healthcare providers for virtual consultations.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Firebase', 'WebRTC', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Luxe E-commerce Store',
    category: 'E-commerce',
    description: 'A high-performance e-commerce solution with AI-driven product recommendations and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1472851294608-411346ade7f6?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Shopify API', 'Stripe', 'Redis'],
    link: '#'
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'SaaS Platform',
    description: 'An AI-powered content generation tool helping marketers create blog posts and social media copy in seconds.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['OpenAI API', 'Python', 'FastAPI', 'React'],
    link: '#'
  },
  {
    id: 5,
    title: 'Urban Real Estate Portal',
    category: 'Web Application',
    description: 'A modern real estate platform featuring virtual tours, advanced search filters, and mortgage calculators.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
    link: '#'
  },
  {
    id: 6,
    title: 'EduLearn LMS',
    category: 'EdTech',
    description: 'A scalable Learning Management System for educational institutions with live classes and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    tags: ['Moodle', 'PHP', 'MySQL', 'Bootstrap'],
    link: '#'
  },
  {
    id: 7,
    title: 'Global Tech SEO Growth',
    category: 'SEO Strategy',
    description: 'Achieved 300% organic traffic growth for a SaaS enterprise through technical SEO and content optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Technical SEO', 'Content Strategy', 'Link Building', 'Analytics'],
    link: '#'
  },
  {
    id: 8,
    title: 'E-commerce Conversion Boost',
    category: 'SEO & CRO',
    description: 'Comprehensive SEO audit and CRO implementation leading to a 45% increase in conversion rate.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    tags: ['E-commerce SEO', 'CRO', 'User Behavior', 'A/B Testing'],
    link: '#'
  },
  {
    id: 9,
    title: 'Local Business Dominance',
    category: 'Local SEO',
    description: 'Dominated local search results for a multi-location healthcare provider, increasing appointments by 150%.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    tags: ['Local SEO', 'GMB Optimization', 'Citation Building', 'Reviews'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0D0A1A] min-h-screen text-slate-50 pt-20">
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0D0A1A]">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-[#0D0A1A] to-amber-950/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto mb-20">
              <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
                Our Work
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Transforming Ideas into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                  Digital Reality
                </span>
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Explore our portfolio of successful projects where we've helped businesses innovate and grow through technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group relative bg-[#131126] rounded-2xl overflow-hidden border border-violet-900/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-900/10 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131126] to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-1 rounded-md bg-violet-500/5 text-violet-300 text-xs font-medium border border-violet-500/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
