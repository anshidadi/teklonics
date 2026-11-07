import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070c] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-flex">
              <div className="w-9 h-9 rounded-lg bg-black border border-white/10 flex items-center justify-center p-1">
                <img 
                  src="/assets/teklonics-logo.png" 
                  alt="Teklonics Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                TEKLONICS
              </span>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              We design and develop modern websites, applications and digital solutions that help businesses grow.
            </p>

            <div className="text-xs font-mono text-slate-400 space-y-1 pt-1">
              <div>Founder: <strong className="text-white">{siteConfig.leadership.founder.name}</strong></div>
              <div>Co-Founder: <strong className="text-white">{siteConfig.leadership.coFounder.name}</strong></div>
              <div>{siteConfig.leadership.teamSummary}</div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold block">
              Services
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Website Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Application Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Digital Solutions</Link>
              </li>
            </ul>

            <div className="pt-3 space-y-2 text-xs font-mono text-slate-400">
              <a 
                href={`mailto:${siteConfig.contact.officialEmail}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{siteConfig.contact.officialEmail}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{siteConfig.contact.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} TEKLONICS. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px]">
              Modern Web Development Company
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-white/[0.04] hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
