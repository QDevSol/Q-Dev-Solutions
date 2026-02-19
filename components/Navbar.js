'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '#' },
  {
    label: 'About',
    href: '#',
    children: [
      { label: 'Company', href: '/about' },
      // { label: 'Team', href: '/team' },
    ],
  },
  { label: 'Services', href: '#services' },
  { label: 'Key Benefits', href: '#key-benefits' },
  {
    label: 'Career',
    href: '#',
    children: [
      { label: 'Life at Q-Dev', href: '/career' },
      { label: 'Open Positions', href: '/jobs' },
    ],
  },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState({});
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSubmenu = (label) => {
    setMobileSubmenuOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const { href, children, label } = link;

    if (children) {
      toggleMobileSubmenu(label);
      return;
    }

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
          <a href="#" onClick={(e) => handleNavClick(e, { href: '#' })} className="flex items-center gap-2 group">
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
              <li key={link.label} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-4 py-2 text-sm text-slate-300 rounded-lg font-medium transition-all duration-300 hover:text-white hover:bg-white/5 flex items-center gap-1 ${
                    link.children ? 'cursor-pointer' : ''
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#0D0A1A] border border-[#2D2050] rounded-xl shadow-xl overflow-hidden min-w-[200px] p-2">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child)}
                          className="block px-4 py-2 text-sm text-slate-300 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: '#contact' })}
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
            menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 border-t border-[#2D2050] mt-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="relative flex items-center justify-between px-4 py-3 text-slate-300 rounded-lg transition-all duration-300 font-medium hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileSubmenuOpen[link.label] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  
                  {/* Mobile Submenu */}
                  {link.children && (
                    <div
                      className={`overflow-hidden transition-all duration-300 bg-white/5 rounded-lg mx-2 ${
                        mobileSubmenuOpen[link.label] ? 'max-h-40 py-2' : 'max-h-0'
                      }`}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child)}
                          className="block px-4 py-2 text-sm text-slate-400 hover:text-white pl-8"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={pathname === '/' ? '#contact' : '/#contact'}
                  onClick={(e) => handleNavClick(e, { href: '#contact' })}
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
