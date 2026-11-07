import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Terminal, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070a] text-slate-400 relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Column 1: Brand & Identity (2 cols on large) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-black border border-white/10 flex items-center justify-center p-1 group-hover:border-blue-500/50 transition-colors">
                <img 
                  src="/assets/teklonics-logo.png" 
                  alt="Teklonics Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-wider text-white">
                  TEKLONICS
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  Digital Solutions & Architecture
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              We turn ambitious ideas into digital experiences. Modern web applications, scalable platforms, and bespoke software systems designed for growing businesses.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Directed by Founder <strong className="text-white">{siteConfig.founder.name}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Collaborative Pod of <strong className="text-white">{siteConfig.team.size}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Studio
            </p>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Disciplines */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Capabilities
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">E-Commerce Platforms</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Web Applications & SaaS</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Frontend Architecture</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Backend APIs & Python</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">UI/UX Design Systems</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Direct Contact
            </p>
            <div className="space-y-2.5 text-xs">
              <a 
                href={`mailto:${siteConfig.contact.officialEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{siteConfig.contact.officialEmail}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{siteConfig.contact.officeLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>{siteConfig.contact.operatingTimezone}</span>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-block px-3 py-1.5 text-xs font-medium rounded border border-white/10 hover:border-blue-500/50 bg-white/[0.02] text-white hover:bg-white/[0.05] transition-all"
                >
                  Send Project Brief →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} TEKLONICS. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Studio Engineering
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px]">
              Clean Code • Scalable Architecture • Zero Shortcuts
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-white/[0.05] hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 transition-colors text-slate-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
