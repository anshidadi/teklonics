import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Monogram */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-black border border-white/10 group-hover:border-blue-500/50 transition-colors flex items-center justify-center p-1">
              <img 
                src="/assets/teklonics-logo.png" 
                alt="Teklonics Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-blue-400 transition-colors">
                TEKLONICS
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 -mt-1 hidden sm:block">
                Digital Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 relative ${
                    isActive 
                      ? 'text-white bg-blue-600/20 text-blue-300 border border-blue-500/30' 
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-blue-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action & Availability Status */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] text-emerald-300">Accepting Q2/Q3</span>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 shadow-md shadow-blue-600/25 border border-blue-400/30 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/30"
            >
              Start
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#07090e]/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-lg mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for new projects</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 font-semibold' 
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white border border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Discuss Your Project</span>
            </Link>
            <div className="text-center text-[11px] text-slate-500 font-mono pt-1">
              Led by Muhammed Anshid KT • 5+ Specialists
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
