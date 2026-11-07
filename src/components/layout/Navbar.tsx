import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#05070c]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-xl shadow-black/50' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-9 h-9 rounded-lg bg-black border border-white/10 group-hover:border-blue-500/50 transition-colors flex items-center justify-center p-1">
              <img 
                src="/assets/teklonics-logo.png" 
                alt="Teklonics Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]"
              />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-blue-400 transition-colors">
              TEKLONICS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
            {siteConfig.navLinks.map((link) => (
              <Link
                  key={link.label}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 shadow-md shadow-blue-600/30 border border-blue-400/30 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-500"
            >
              Start
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#070a12]/98 backdrop-blur-xl px-4 py-5 space-y-3">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
