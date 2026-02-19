'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Key Benefits', href: '#key-benefits' },
  { label: 'Career', href: '/career' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (href.startsWith('/')) {
      router.push(href);
      return;
    }

    if (pathname === '/') {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Optional: Update URL hash
        window.history.pushState(null, '', href);
      }
    } else {
      router.push(href === '#' ? '/' : '/' + href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#0D0A1A]/95 backdrop-blur-md border-b border-[#2D2050] shadow-lg shadow-purple-900/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-700/40 group-hover:shadow-purple-500/60 transition-all duration-300">
              <span className="text-white font-bold text-sm font-display">Q</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-base tracking-tight">Q-Dev</span>
              <span className="font-display font-semibold text-amber-400 text-xs tracking-widest uppercase">Solutions</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={
                    link.href.startsWith('/')
                      ? link.href
                      : pathname === '/'
                      ? link.href
                      : '/' + link.href
                  }
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 text-sm text-slate-300 rounded-lg font-medium transition-all duration-300 hover:text-white hover:bg-white/5 hover:-translate-y-0.5 after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-gradient-to-r after:from-violet-500 after:to-amber-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white text-sm font-semibold hover:from-violet-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-700/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 border-t border-[#2D2050] mt-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={
                      link.href.startsWith('/')
                        ? link.href
                        : pathname === '/'
                        ? link.href
                        : '/' + link.href
                    }
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative block px-4 py-3 text-slate-300 rounded-lg transition-all duration-300 font-medium hover:text-white hover:bg-white/5 after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-2 after:h-px after:bg-gradient-to-r after:from-violet-500 after:to-amber-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={pathname === '/' ? '#contact' : '/#contact'}
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold text-center"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
