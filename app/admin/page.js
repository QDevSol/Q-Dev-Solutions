'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const adminUser = {
  username: 'admin',
  password: 'admin123',
};

const defaultProjects = [
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
  {
    id: 4,
    title: 'Qdev-AI',
    category: 'AI & Machine Learning',
    caption: 'Intelligent enterprise AI assistant & automation suite.',
    description: 'An intelligent enterprise-grade AI automation and workflow assistant designed to accelerate software engineering and business operations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'Python', 'OpenAI / LLMs', 'Tailwind CSS', 'FastAPI'],
    link: '#',
  },
  {
    id: 5,
    title: 'Medbill',
    category: 'Healthcare SaaS',
    caption: 'Streamlined medical billing & claims management system.',
    description: 'A modern medical billing and claims processing system ensuring accurate invoicing, compliance, and automated insurance claim workflows.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    tags: ['React', 'Node.js', 'PostgreSQL', 'HIPAA Compliant', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 6,
    title: 'CSSdaily prep',
    category: 'EdTech & Learning',
    caption: 'Comprehensive competitive exam preparation platform.',
    description: 'A specialized online prep platform tailored for competitive CSS examination aspirants featuring daily quizzes, study resources, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Analytics'],
    link: '#',
  },
];

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
];

const defaultTeamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'Visionary leader with 15+ years in tech innovation and strategic growth.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    bio: 'Architecture expert passionate about scalable systems and emerging tech.',
    social: { linkedin: '#', github: '#' },
  },
];

const defaultServices = [
  {
    id: 1,
    iconKey: 'mobile',
    title: 'Mobile App Development',
    description: 'Crafting user-friendly, high-performance applications for iOS and Android platforms to engage users on the go.',
    colorKey: 'violet',
    features: [
      'iOS & Android Native Apps',
      'Cross-Platform (React Native/Flutter)',
      'UI/UX Design for Mobile',
      'App Store Optimization & Deployment',
      'Maintenance & Support',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    details: 'We build robust mobile applications that provide seamless user experiences across all devices. Whether you need a consumer-facing app or an enterprise solution, our team delivers high-quality, scalable mobile products.',
  },
  {
    id: 2,
    iconKey: 'web',
    title: 'Website Development',
    description: 'Building responsive, secure, and scalable websites that enhance online presence and drive business growth.',
    colorKey: 'amber',
    features: [
      'Responsive Web Design',
      'E-commerce Solutions',
      'CMS Integration (WordPress, Strapi)',
      'SEO & Performance Optimization',
      'Progressive Web Apps (PWA)',
    ],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    details: 'Our websites are designed to convert visitors into customers, with a focus on speed, security, and scalability. We use modern frameworks like Next.js and React to ensure your site is future-proof.',
  },
];

const serviceColorOptions = [
  { key: 'violet', label: 'Violet' },
  { key: 'amber', label: 'Amber' },
  { key: 'purple', label: 'Purple' },
  { key: 'fuchsia', label: 'Fuchsia' },
  { key: 'cyan', label: 'Cyan' },
  { key: 'emerald', label: 'Emerald' },
  { key: 'orange', label: 'Orange' },
];

const serviceIconOptions = [
  { key: 'mobile', label: 'Mobile' },
  { key: 'web', label: 'Web' },
  { key: 'software', label: 'Software' },
  { key: 'design', label: 'Design' },
  { key: 'ai', label: 'AI' },
  { key: 'qa', label: 'QA' },
  { key: 'seo', label: 'SEO' },
];

export default function AdminPage() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('projects');

  const [projects, setProjects] = useState(defaultProjects);
  const [jobs, setJobs] = useState(defaultJobs);
  const [teamMembers, setTeamMembers] = useState(defaultTeamMembers);
  const [services, setServices] = useState(defaultServices);

  const [jobsLoaded, setJobsLoaded] = useState(false);
  const [teamLoaded, setTeamLoaded] = useState(false);
  const [servicesLoaded, setServicesLoaded] = useState(false);

  const [editingProjectId, setEditingProjectId] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: '',
    caption: '',
    description: '',
    image: '',
    tags: '',
    link: '',
  });

  const [editingJobId, setEditingJobId] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    applyUrl: '',
  });

  const [editingTeamId, setEditingTeamId] = useState(null);
  const [teamForm, setTeamForm] = useState({
    name: '',
    role: '',
    image: '',
    bio: '',
    linkedin: '',
    twitter: '',
    github: '',
    dribbble: '',
    website: '',
  });

  const [editingServiceId, setEditingServiceId] = useState(null);
  const [serviceForm, setServiceForm] = useState({
    title: '',
    description: '',
    image: '',
    features: '',
    details: '',
    iconKey: 'mobile',
    colorKey: 'violet',
  });

  useEffect(() => {
    const auth = localStorage.getItem('qd_admin_auth');
    setIsAuthed(auth === 'true');
  }, []);

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

  useEffect(() => {
    const stored = localStorage.getItem('qd_admin_jobs');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setJobs(parsed);
        }
      } catch {}
    }
    setJobsLoaded(true);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('qd_admin_team');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTeamMembers(parsed);
        }
      } catch {}
    }
    setTeamLoaded(true);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('qd_admin_services');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setServices(parsed);
        }
      } catch {}
    }
    setServicesLoaded(true);
  }, []);

  useEffect(() => {
    if (!jobsLoaded) return;
    localStorage.setItem('qd_admin_jobs', JSON.stringify(jobs));
  }, [jobs, jobsLoaded]);

  useEffect(() => {
    if (!teamLoaded) return;
    localStorage.setItem('qd_admin_team', JSON.stringify(teamMembers));
  }, [teamMembers, teamLoaded]);

  useEffect(() => {
    if (!servicesLoaded) return;
    localStorage.setItem('qd_admin_services', JSON.stringify(services));
  }, [services, servicesLoaded]);

  const persistProjects = async (nextProjects) => {
    setProjects(nextProjects);
    try {
      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nextProjects),
      });
    } catch {}
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username === adminUser.username && loginForm.password === adminUser.password) {
      localStorage.setItem('qd_admin_auth', 'true');
      setIsAuthed(true);
      setLoginError('');
      return;
    }
    setLoginError('Invalid username or password.');
  };

  const handleLogout = () => {
    localStorage.removeItem('qd_admin_auth');
    setIsAuthed(false);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const tags = projectForm.tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
    if (editingProjectId) {
      const nextProjects = projects.map((project) =>
        project.id === editingProjectId
          ? { ...project, ...projectForm, tags }
          : project
      );
      persistProjects(nextProjects);
    } else {
      const nextProjects = [
        ...projects,
        { id: Date.now(), ...projectForm, tags },
      ];
      persistProjects(nextProjects);
    }
    setEditingProjectId(null);
    setProjectForm({
      title: '',
      category: '',
      caption: '',
      description: '',
      image: '',
      tags: '',
      link: '',
    });
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    if (editingJobId) {
      setJobs((prev) =>
        prev.map((job) =>
          job.id === editingJobId ? { ...job, ...jobForm } : job
        )
      );
    } else {
      setJobs((prev) => [
        ...prev,
        { id: Date.now(), ...jobForm },
      ]);
    }
    setEditingJobId(null);
    setJobForm({
      title: '',
      department: '',
      location: '',
      type: '',
      applyUrl: '',
    });
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    const social = {
      linkedin: teamForm.linkedin,
      twitter: teamForm.twitter,
      github: teamForm.github,
      dribbble: teamForm.dribbble,
      website: teamForm.website,
    };
    Object.keys(social).forEach((key) => {
      if (!social[key]) delete social[key];
    });
    const payload = {
      name: teamForm.name,
      role: teamForm.role,
      image: teamForm.image,
      bio: teamForm.bio,
      social,
    };
    if (editingTeamId) {
      setTeamMembers((prev) =>
        prev.map((member) =>
          member.id === editingTeamId ? { ...member, ...payload } : member
        )
      );
    } else {
      setTeamMembers((prev) => [
        ...prev,
        { id: Date.now(), ...payload },
      ]);
    }
    setEditingTeamId(null);
    setTeamForm({
      name: '',
      role: '',
      image: '',
      bio: '',
      linkedin: '',
      twitter: '',
      github: '',
      dribbble: '',
      website: '',
    });
  };

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const features = serviceForm.features
      .split(',')
      .map((feature) => feature.trim())
      .filter(Boolean);
    const payload = {
      title: serviceForm.title,
      description: serviceForm.description,
      image: serviceForm.image,
      details: serviceForm.details,
      iconKey: serviceForm.iconKey,
      colorKey: serviceForm.colorKey,
      features,
    };
    if (editingServiceId) {
      setServices((prev) =>
        prev.map((service) =>
          service.id === editingServiceId ? { ...service, ...payload } : service
        )
      );
    } else {
      setServices((prev) => [
        ...prev,
        { id: Date.now(), ...payload },
      ]);
    }
    setEditingServiceId(null);
    setServiceForm({
      title: '',
      description: '',
      image: '',
      features: '',
      details: '',
      iconKey: 'mobile',
      colorKey: 'violet',
    });
  };

  if (!isAuthed) {
    return (
      <>
        <Navbar />
        <main className="bg-[#0D0A1A] min-h-screen text-slate-50 pt-24 pb-24">
          <div className="max-w-lg mx-auto px-4">
            <div className="bg-[#131126] border border-violet-900/30 rounded-2xl p-8 shadow-xl">
              <h1 className="font-display text-3xl font-bold mb-2">Admin Login</h1>
              <p className="text-slate-400 mb-8">Use your admin credentials to access the dashboard.</p>
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Username</label>
                  <input
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, username: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white focus:outline-none focus:ring-2 focus:ring-violet-600/60"
                    placeholder="Admin username"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Password</label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white focus:outline-none focus:ring-2 focus:ring-violet-600/60"
                    placeholder="Admin password"
                  />
                </div>
                {loginError && <p className="text-red-400 text-sm">{loginError}</p>}
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:from-violet-500 hover:to-purple-600 transition-all"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#0D0A1A] min-h-screen text-slate-50 pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <h1 className="font-display text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-slate-400">Projects, jobs, services aur team ko manage karo.</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-5 py-2.5 rounded-lg border border-violet-500/30 text-violet-300 font-medium hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all"
            >
              Logout
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { key: 'projects', label: 'Projects' },
              { key: 'jobs', label: 'Jobs' },
              { key: 'services', label: 'Services' },
              { key: 'team', label: 'Team' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/30'
                    : 'bg-[#131126] text-slate-300 border border-violet-900/30 hover:border-violet-500/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'projects' && (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-[#131126] border border-violet-900/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-slate-400 text-sm">{project.category}</p>
                      <p className="text-slate-500 text-sm mt-2">{project.caption || project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(project.tags || []).map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-violet-500/5 text-violet-300 text-xs font-medium border border-violet-500/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setEditingProjectId(project.id);
                          setProjectForm({
                            title: project.title || '',
                            category: project.category || '',
                            caption: project.caption || '',
                            description: project.description || '',
                            image: project.image || '',
                            tags: (project.tags || []).join(', '),
                            link: project.link || '',
                          });
                        }}
                        className="px-4 py-2 rounded-lg border border-violet-500/30 text-violet-300 hover:bg-violet-600 hover:text-white transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          const nextProjects = projects.filter((item) => item.id !== project.id);
                          persistProjects(nextProjects);
                        }}
                        className="px-4 py-2 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-600 hover:text-white transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#131126] border border-violet-900/30 rounded-2xl p-6 h-fit">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {editingProjectId ? 'Update Project' : 'Add Project'}
                </h3>
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-300">Title</label>
                    <input
                      type="text"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm((prev) => ({ ...prev, title: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Project title"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Category</label>
                    <input
                      type="text"
                      value={projectForm.category}
                      onChange={(e) => setProjectForm((prev) => ({ ...prev, category: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Web App, Mobile App"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Caption</label>
                    <input
                      type="text"
                      value={projectForm.caption}
                      onChange={(e) => setProjectForm((prev) => ({ ...prev, caption: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Short one-line caption"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Description</label>
                    <textarea
                      value={projectForm.description}
                      onChange={(e) => setProjectForm((prev) => ({ ...prev, description: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white min-h-[120px]"
                      placeholder="Short project summary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Image URL</label>
                    <input
                      type="text"
                      value={projectForm.image}
                      onChange={(e) => setProjectForm((prev) => ({ ...prev, image: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Tags</label>
                    <input
                      type="text"
                      value={projectForm.tags}
                      onChange={(e) => setProjectForm((prev) => ({ ...prev, tags: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="React, Next.js, Tailwind"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Project Link</label>
                    <input
                      type="text"
                      value={projectForm.link}
                      onChange={(e) => setProjectForm((prev) => ({ ...prev, link: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="https://"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:from-violet-500 hover:to-purple-600 transition-all"
                  >
                    {editingProjectId ? 'Save Changes' : 'Add Project'}
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="bg-[#131126] border border-violet-900/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-slate-400 text-sm">{job.department} · {job.location} · {job.type}</p>
                      {job.applyUrl && <p className="text-slate-500 text-sm mt-2">{job.applyUrl}</p>}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setEditingJobId(job.id);
                          setJobForm({
                            title: job.title || '',
                            department: job.department || '',
                            location: job.location || '',
                            type: job.type || '',
                            applyUrl: job.applyUrl || '',
                          });
                        }}
                        className="px-4 py-2 rounded-lg border border-violet-500/30 text-violet-300 hover:bg-violet-600 hover:text-white transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setJobs((prev) => prev.filter((item) => item.id !== job.id))}
                        className="px-4 py-2 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-600 hover:text-white transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#131126] border border-violet-900/30 rounded-2xl p-6 h-fit">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {editingJobId ? 'Update Job' : 'Add Job'}
                </h3>
                <form onSubmit={handleJobSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-300">Title</label>
                    <input
                      type="text"
                      value={jobForm.title}
                      onChange={(e) => setJobForm((prev) => ({ ...prev, title: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Job title"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Department</label>
                    <input
                      type="text"
                      value={jobForm.department}
                      onChange={(e) => setJobForm((prev) => ({ ...prev, department: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Engineering"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Location</label>
                    <input
                      type="text"
                      value={jobForm.location}
                      onChange={(e) => setJobForm((prev) => ({ ...prev, location: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Remote"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Type</label>
                    <input
                      type="text"
                      value={jobForm.type}
                      onChange={(e) => setJobForm((prev) => ({ ...prev, type: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Full-time"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Apply URL</label>
                    <input
                      type="text"
                      value={jobForm.applyUrl}
                      onChange={(e) => setJobForm((prev) => ({ ...prev, applyUrl: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="https://"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:from-violet-500 hover:to-purple-600 transition-all"
                  >
                    {editingJobId ? 'Save Changes' : 'Add Job'}
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="bg-[#131126] border border-violet-900/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-slate-400 text-sm">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(service.features || []).map((feature) => (
                          <span key={feature} className="px-2.5 py-1 rounded-md bg-violet-500/5 text-violet-300 text-xs font-medium border border-violet-500/10">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setEditingServiceId(service.id);
                          setServiceForm({
                            title: service.title || '',
                            description: service.description || '',
                            image: service.image || '',
                            features: (service.features || []).join(', '),
                            details: service.details || '',
                            iconKey: service.iconKey || 'mobile',
                            colorKey: service.colorKey || 'violet',
                          });
                        }}
                        className="px-4 py-2 rounded-lg border border-violet-500/30 text-violet-300 hover:bg-violet-600 hover:text-white transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setServices((prev) => prev.filter((item) => item.id !== service.id))}
                        className="px-4 py-2 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-600 hover:text-white transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#131126] border border-violet-900/30 rounded-2xl p-6 h-fit">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {editingServiceId ? 'Update Service' : 'Add Service'}
                </h3>
                <form onSubmit={handleServiceSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-300">Title</label>
                    <input
                      type="text"
                      value={serviceForm.title}
                      onChange={(e) => setServiceForm((prev) => ({ ...prev, title: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Service title"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Description</label>
                    <textarea
                      value={serviceForm.description}
                      onChange={(e) => setServiceForm((prev) => ({ ...prev, description: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white min-h-[120px]"
                      placeholder="Short service description"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Image URL</label>
                    <input
                      type="text"
                      value={serviceForm.image}
                      onChange={(e) => setServiceForm((prev) => ({ ...prev, image: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Features</label>
                    <input
                      type="text"
                      value={serviceForm.features}
                      onChange={(e) => setServiceForm((prev) => ({ ...prev, features: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Feature 1, Feature 2"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Details</label>
                    <textarea
                      value={serviceForm.details}
                      onChange={(e) => setServiceForm((prev) => ({ ...prev, details: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white min-h-[120px]"
                      placeholder="Detailed description for modal"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-300">Icon</label>
                      <select
                        value={serviceForm.iconKey}
                        onChange={(e) => setServiceForm((prev) => ({ ...prev, iconKey: e.target.value }))}
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      >
                        {serviceIconOptions.map((option) => (
                          <option key={option.key} value={option.key}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-slate-300">Color</label>
                      <select
                        value={serviceForm.colorKey}
                        onChange={(e) => setServiceForm((prev) => ({ ...prev, colorKey: e.target.value }))}
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      >
                        {serviceColorOptions.map((option) => (
                          <option key={option.key} value={option.key}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:from-violet-500 hover:to-purple-600 transition-all"
                  >
                    {editingServiceId ? 'Save Changes' : 'Add Service'}
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-[#131126] border border-violet-900/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-slate-400 text-sm">{member.role}</p>
                      <p className="text-slate-500 text-sm mt-2">{member.bio}</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setEditingTeamId(member.id);
                          setTeamForm({
                            name: member.name || '',
                            role: member.role || '',
                            image: member.image || '',
                            bio: member.bio || '',
                            linkedin: member.social?.linkedin || '',
                            twitter: member.social?.twitter || '',
                            github: member.social?.github || '',
                            dribbble: member.social?.dribbble || '',
                            website: member.social?.website || '',
                          });
                        }}
                        className="px-4 py-2 rounded-lg border border-violet-500/30 text-violet-300 hover:bg-violet-600 hover:text-white transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setTeamMembers((prev) => prev.filter((item) => item.id !== member.id))}
                        className="px-4 py-2 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-600 hover:text-white transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#131126] border border-violet-900/30 rounded-2xl p-6 h-fit">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {editingTeamId ? 'Update Team Member' : 'Add Team Member'}
                </h3>
                <form onSubmit={handleTeamSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-300">Name</label>
                    <input
                      type="text"
                      value={teamForm.name}
                      onChange={(e) => setTeamForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Role</label>
                    <input
                      type="text"
                      value={teamForm.role}
                      onChange={(e) => setTeamForm((prev) => ({ ...prev, role: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="Role"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Image URL</label>
                    <input
                      type="text"
                      value={teamForm.image}
                      onChange={(e) => setTeamForm((prev) => ({ ...prev, image: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Bio</label>
                    <textarea
                      value={teamForm.bio}
                      onChange={(e) => setTeamForm((prev) => ({ ...prev, bio: e.target.value }))}
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white min-h-[120px]"
                      placeholder="Short bio"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-300">LinkedIn</label>
                      <input
                        type="text"
                        value={teamForm.linkedin}
                        onChange={(e) => setTeamForm((prev) => ({ ...prev, linkedin: e.target.value }))}
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                        placeholder="https://"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300">Twitter</label>
                      <input
                        type="text"
                        value={teamForm.twitter}
                        onChange={(e) => setTeamForm((prev) => ({ ...prev, twitter: e.target.value }))}
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                        placeholder="https://"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300">GitHub</label>
                      <input
                        type="text"
                        value={teamForm.github}
                        onChange={(e) => setTeamForm((prev) => ({ ...prev, github: e.target.value }))}
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                        placeholder="https://"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300">Dribbble</label>
                      <input
                        type="text"
                        value={teamForm.dribbble}
                        onChange={(e) => setTeamForm((prev) => ({ ...prev, dribbble: e.target.value }))}
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                        placeholder="https://"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm text-slate-300">Website</label>
                      <input
                        type="text"
                        value={teamForm.website}
                        onChange={(e) => setTeamForm((prev) => ({ ...prev, website: e.target.value }))}
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-[#0D0A1A] border border-violet-900/30 text-white"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:from-violet-500 hover:to-purple-600 transition-all"
                  >
                    {editingTeamId ? 'Save Changes' : 'Add Team Member'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
