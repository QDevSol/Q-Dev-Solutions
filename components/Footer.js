const footerLinks = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Life at Q-Dev', href: '/career' },
    { label: 'Open Positions', href: '/jobs' },
    // { label: 'Meet the Team', href: '/team' },
  ],
  Services: [
    { label: 'Mobile App Development', href: '/#services' },
    { label: 'Website Development', href: '/#services' },
    { label: 'Software Development', href: '/#services' },
    { label: 'AI Integrations', href: '/#services' },
  ],
  Explore: [
    { label: 'Projects', href: '/projects' },
    { label: 'Key Benefits', href: '/#key-benefits' },
    { label: 'Our Clients', href: '/#clients' },
    { label: 'Contact Us', href: '/#contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080614] border-t border-[#2D2050] relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-700/40">
                <span className="text-white font-bold text-sm font-display">Q</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base tracking-tight">Q-Dev</span>
                <span className="font-display font-semibold text-amber-400 text-xs tracking-widest uppercase">Solutions</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Empowering your digital presence through innovative web development, mobile apps, and AI integrations.
            </p>
            <a
              href="mailto:support@qdevsol.site"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@qdevsol.site
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-violet-400 text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2D2050] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            Â© {currentYear} Q-Dev Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
