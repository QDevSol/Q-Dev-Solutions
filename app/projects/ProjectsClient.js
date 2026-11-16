'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

const fallbackProjects = [
  {
    id: 1,
    title: 'FinTech Analytics Dashboard',
    category: 'Web Application',
    caption: 'Real-time insights dashboard for financial performance.',
    description: 'A comprehensive financial analytics dashboard for real-time market data visualization and portfolio management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Next.js', 'D3.js', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    title: 'MediCare Telemedicine App',
    category: 'Mobile App',
    caption: 'Secure virtual care for patients and providers.',
    description: 'A secure telemedicine platform connecting patients with healthcare providers for virtual consultations.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    tags: ['React Native', 'Firebase', 'WebRTC', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 3,
    title: 'Luxe E-commerce Store',
    category: 'E-commerce',
    caption: 'Premium shopping experience with smart recommendations.',
    description: 'A high-performance e-commerce solution with AI-driven product recommendations and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1472851294608-411346ade7f6?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'Shopify API', 'Stripe', 'Redis'],
    link: '#',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Malik',
    role: 'Product Lead, Fintech',
    quote: 'Q-Dev ne hamare analytics platform ko enterprise-ready banaya. Delivery fast aur quality top-tier thi.',
  },
  {
    id: 2,
    name: 'Hassan Raza',
    role: 'Founder, HealthTech',
    quote: 'Telemedicine app ki UX itni smooth thi ke onboarding time half ho gaya.',
  },
  {
    id: 3,
    name: 'Noor Fatima',
    role: 'Marketing Director, Retail',
    quote: 'E-commerce revamp ke baad conversions noticeably improve hue.',
  },
  {
    id: 4,
    name: 'Usman Shah',
    role: 'CTO, SaaS',
    quote: 'Reliable team, clear communication, aur strong engineering culture.',
  },
];

export default function ProjectsClient() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      } catch {}
    };
    fetchProjects();
  }, []);

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Q-Dev Solutions Projects',
    description: 'A curated portfolio of web, mobile, and product work delivered by Q-Dev Solutions.',
    hasPart: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.caption || project.description,
      url: project.link || 'https://www.qdevsol.site/projects',
    })),
  }), [projects]);

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;
    const width = galleryRef.current.clientWidth;
    galleryRef.current.scrollBy({ left: width * direction, behavior: 'smooth' });
  };

  const visibleTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);

  return (
    <main className="bg-[#0D0A1A] min-h-screen text-slate-50 pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0A1A]">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-[#0D0A1A] to-amber-950/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Our Work
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
              Digital Reality
            </span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects where we&apos;ve helped businesses innovate and grow through technology.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="text-left">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Project Gallery</h2>
              <p className="text-slate-400 text-sm sm:text-base">Swipe on mobile or use arrows for quick navigation.</p>
            </div>
            <div className="hidden sm:flex gap-3">
              <button
                onClick={() => scrollGallery(-1)}
                className="w-10 h-10 rounded-full border border-violet-500/30 text-violet-300 hover:bg-violet-600 hover:text-white transition-all"
                aria-label="Previous projects"
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollGallery(1)}
                className="w-10 h-10 rounded-full border border-violet-500/30 text-violet-300 hover:bg-violet-600 hover:text-white transition-all"
                aria-label="Next projects"
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={galleryRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory md:hidden"
          >
            {projects.map((project) => {
              const tags = Array.isArray(project.tags) ? project.tags : [];
              const hasLink = typeof project.link === 'string' && project.link.trim() && project.link !== '#';
              return (
                <article
                  key={project.id}
                  className="min-w-[85%] snap-center bg-[#131126] rounded-2xl overflow-hidden border border-violet-900/20"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131126] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-slate-400 text-sm">
                      {project.caption || project.description || ''}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-violet-500/5 text-violet-300 text-xs font-medium border border-violet-500/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {hasLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-violet-300 text-sm font-medium hover:text-violet-200"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => {
              const tags = Array.isArray(project.tags) ? project.tags : [];
              const hasLink = typeof project.link === 'string' && project.link.trim() && project.link !== '#';
              return (
                <article
                  key={project.id}
                  className="group relative bg-[#131126] rounded-2xl overflow-hidden border border-violet-900/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-900/10 flex flex-col"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131126] to-transparent opacity-70" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.caption || project.description || ''}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-violet-500/5 text-violet-300 text-xs font-medium border border-violet-500/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {hasLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 text-violet-300 text-sm font-medium hover:text-violet-200"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto bg-[#131126] border border-violet-900/30 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Clients Love Working With Us
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real feedback from teams who trusted Q-Dev to ship high-impact products.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#0D0A1A] border border-violet-900/20 rounded-2xl p-6">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllTestimonials((prev) => !prev)}
              className="px-6 py-3 rounded-lg border border-violet-500/30 text-violet-300 font-medium hover:bg-violet-600 hover:text-white transition-all"
            >
              {showAllTestimonials ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
