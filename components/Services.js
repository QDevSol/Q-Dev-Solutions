'use client';

import { useState } from 'react';
import Image from 'next/image';
import ServiceModal from './ServiceModal';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Development',
    description:
      'Crafting user-friendly, high-performance applications for iOS and Android platforms to engage users on the go.',
    color: 'from-violet-600 to-purple-700',
    glow: 'group-hover:shadow-violet-500/30',
    features: [
      'iOS & Android Native Apps',
      'Cross-Platform (React Native/Flutter)',
      'UI/UX Design for Mobile',
      'App Store Optimization & Deployment',
      'Maintenance & Support'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    details: 'We build robust mobile applications that provide seamless user experiences across all devices. Whether you need a consumer-facing app or an enterprise solution, our team delivers high-quality, scalable mobile products.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Website Development',
    description:
      'Building responsive, secure, and scalable websites that enhance online presence and drive business growth.',
    color: 'from-amber-500 to-orange-600',
    glow: 'group-hover:shadow-amber-500/30',
    features: [
      'Responsive Web Design',
      'E-commerce Solutions',
      'CMS Integration (WordPress, Strapi)',
      'SEO & Performance Optimization',
      'Progressive Web Apps (PWA)'
    ],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    details: 'Our websites are designed to convert visitors into customers, with a focus on speed, security, and scalability. We use modern frameworks like Next.js and React to ensure your site is future-proof.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Software Development',
    description:
      'Designing and implementing custom software solutions to meet specific business needs and improve operational efficiency.',
    color: 'from-purple-600 to-violet-800',
    glow: 'group-hover:shadow-purple-500/30',
    features: [
      'Custom Enterprise Software',
      'API Development & Integration',
      'Cloud Solutions (AWS, Azure)',
      'Legacy System Modernization',
      'Database Design & Management'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    details: 'We develop tailored software solutions that streamline your business operations and drive efficiency. From internal tools to complex SaaS platforms, we have the expertise to bring your vision to life.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UX/UI Design',
    description:
      'Creating intuitive and aesthetically pleasing user interfaces that enhance user experience and satisfaction.',
    color: 'from-fuchsia-600 to-pink-700',
    glow: 'group-hover:shadow-fuchsia-500/30',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Usability Testing',
      'Interaction Design'
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    details: 'We create intuitive and engaging designs that put the user first. Our design process ensures high user satisfaction and retention by balancing aesthetics with functionality.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Integrations',
    description:
      'Integrating cutting-edge artificial intelligence technologies to automate processes, provide insights, and enhance decision-making.',
    color: 'from-cyan-600 to-blue-700',
    glow: 'group-hover:shadow-cyan-500/30',
    features: [
      'Chatbots & Virtual Assistants',
      'Predictive Analytics',
      'Process Automation (RPA)',
      'Machine Learning Models',
      'Natural Language Processing'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    details: 'Leverage the power of AI to gain insights, automate repetitive tasks, and stay ahead of the competition. We help you identify high-impact AI use cases for your business.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'QA and Testing',
    description:
      'Ensuring the reliability and quality of software through rigorous testing and quality assurance practices.',
    color: 'from-emerald-600 to-teal-700',
    glow: 'group-hover:shadow-emerald-500/30',
    features: [
      'Automated Testing Suites',
      'Manual Functional Testing',
      'Performance & Load Testing',
      'Security Vulnerability Assessment',
      'API Testing'
    ],
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=800',
    details: 'We ensure your software is bug-free, secure, and performs optimally under all conditions. Our QA process is integrated throughout the development lifecycle to catch issues early.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO Optimization',
    description:
      'Boosting your online visibility and ranking higher on search engines to drive organic traffic and growth.',
    color: 'from-orange-500 to-red-600',
    glow: 'group-hover:shadow-orange-500/30',
    features: [
      'Keyword Research & Strategy',
      'On-Page & Off-Page SEO',
      'Technical SEO Audits',
      'Content Optimization',
      'Local SEO'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    details: 'We implement data-driven SEO strategies to improve your search engine rankings and attract qualified leads. Our holistic approach ensures long-term visibility and sustainable growth.'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section-padding bg-[#0F0C1F] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A1A] via-[#0F0C1F] to-[#0D0A1A] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">What We Offer</span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our range of services will keep your business visible and running smoothly online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`group relative rounded-2xl bg-[#1A1330] border border-[#2D2050] card-hover cursor-pointer overflow-hidden transition-all duration-300 hover:border-violet-500/30`}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1330] via-[#1A1330]/60 to-transparent" />
              </div>

              <div className="p-6 relative">
                {/* Hover glow bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-5 shadow-lg ${service.glow} transition-shadow duration-300 relative z-10`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{service.description}</p>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1 text-violet-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </section>
  );
}
