'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Team() {
  const defaultTeamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      bio: 'Visionary leader with 15+ years in tech innovation and strategic growth.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
      bio: 'Architecture expert passionate about scalable systems and emerging tech.',
      social: {
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      bio: 'Award-winning designer focused on creating intuitive and beautiful user experiences.',
      social: {
        linkedin: '#',
        dribbble: '#',
      },
    },
    {
      name: 'David Kim',
      role: 'Lead Backend Engineer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
      bio: 'Backend specialist with deep expertise in cloud infrastructure and API design.',
      social: {
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Lisa Patel',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&q=80&w=800',
      bio: 'Bridging the gap between user needs and technical implementation.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'James Wilson',
      role: 'Frontend Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      bio: 'Crafting performant and accessible web interfaces with modern frameworks.',
      social: {
        linkedin: '#',
        github: '#',
      },
    },
  ];
  const [teamMembers, setTeamMembers] = useState(defaultTeamMembers);

  useEffect(() => {
    const stored = localStorage.getItem('qd_admin_team');
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setTeamMembers(parsed);
      }
    } catch {}
  }, []);

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
              Our Team
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Meet the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                Experts
              </span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              The talented individuals working together to bring your ideas to life.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => {
                const socialEntries = Object.entries(member.social || {}).filter(([, link]) => link);
                return (
                <div
                  key={index}
                  className="group relative bg-[#131126] rounded-2xl overflow-hidden border border-slate-800/50 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131126] via-transparent to-transparent opacity-90" />
                    
                    {socialEntries.length > 0 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
                        {socialEntries.map(([platform, link]) => (
                          <a
                            key={platform}
                            href={link}
                            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-violet-600 transition-colors"
                            aria-label={`${member.name}'s ${platform}`}
                          >
                            {platform === 'linkedin' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            )}
                            {platform === 'twitter' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            )}
                            {platform === 'github' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            )}
                            {platform === 'dribbble' && (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm9.816-11.237c-.356-.275-.742-.524-1.157-.746.495 1.363.805 2.84.887 4.382 1.411-1.92 2.253-4.29 2.253-6.85 0-.585-.055-1.157-.156-1.714-.492.356-1.025.666-1.588.928-.081.001-.161.001-.239 0zm-11.127-10.748c1.325.321 2.545.895 3.61 1.677-.923 1.762-2.229 3.364-3.837 4.685-1.637-1.685-2.735-3.82-2.984-6.208 1.024-.103 2.079-.154 3.211-.154zm5.558 2.946c-.524-1.275-1.246-2.435-2.124-3.442 2.768.966 4.966 3.28 5.767 6.136-1.127-.47-2.339-.815-3.643-1.027v-1.667zm-7.794 3.664c1.696-1.348 3.08-3.008 4.027-4.886 1.487.218 2.887.584 4.156 1.085.061 1.488-.135 2.937-.565 4.302-2.338 1.087-4.912 1.742-7.618 1.916v-2.417zm-1.874 1.312c-2.493-.146-4.855-.705-7.005-1.624.582-2.733 2.304-5.066 4.693-6.386.302 2.628 1.545 4.982 3.361 6.829l-1.049 1.181zm-2.022 2.189c2.531.861 5.252 1.385 8.117 1.503-.049 1.554-.373 3.027-.929 4.382-3.111-1.378-5.908-3.483-8.158-6.176.284.103.578.201.883.291.029 0 .058 0 .087 0zm1.884 9.172c2.147 1.748 4.881 2.702 7.76 2.702 2.368 0 4.614-.649 6.574-1.805-.989-1.428-1.688-3.045-2.046-4.783-2.991-.078-5.834-.582-8.461-1.442 1.425 2.048 2.75 3.844 3.827 5.328zm10.704-4.22c.441 1.625 1.17 3.125 2.126 4.437 2.15-1.859 3.518-4.577 3.518-7.606 0-.256-.012-.509-.033-.761-.137-2.003-.585-3.896-1.285-5.617-1.372-.472-2.883-.815-4.484-1.002.483 1.502.695 3.102.613 4.717-.038.74-.132 1.465-.28 2.171-.242 1.155-.563 2.261-.95 3.313.266.113.528.232.775.348z"/></svg>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-violet-300 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              )})}
            </div>
            
            <div className="mt-20 text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Join Our Team</h3>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                We are always looking for talented individuals to join us. Check out our open positions and see if there is a fit for you.
              </p>
              <a
                href="/career"
                className="inline-block px-8 py-3.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:from-violet-500 hover:to-purple-600 transition-all shadow-lg shadow-purple-700/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                View Careers
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
