'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Jobs() {
  const defaultJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      applyUrl: '#',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
      applyUrl: '#',
    },
    {
      id: 3,
      title: 'Backend Engineer (Node.js)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      applyUrl: '#',
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      applyUrl: '#',
    },
  ];
  const [jobs, setJobs] = useState(defaultJobs);

  useEffect(() => {
    const stored = localStorage.getItem('qd_admin_jobs');
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setJobs(parsed);
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
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
              Current Openings
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Join Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                Growing Team
              </span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Find your place at Q-Dev Solutions. We're looking for passionate individuals to help us build the future.
            </p>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
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
                      <span className="hidden sm:inline">â€¢</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="hidden sm:inline">â€¢</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={job.applyUrl || '#'}
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
                href="mailto:support@qdevsol.site"
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
