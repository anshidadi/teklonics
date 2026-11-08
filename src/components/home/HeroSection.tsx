import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Code2, Globe, Layers, CheckCircle2, Monitor, Smartphone, Terminal } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Restrained subtle canvas background */}
      <HeroCanvas />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-600/[0.08] blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, copy, and CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Minimal Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>Web Development • Applications • Digital Solutions</span>
            </motion.div>

            {/* Exact Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Building Digital Experiences for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">Modern Businesses.</span>
            </motion.h1>

            {/* Exact Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              Teklonics helps businesses establish and grow their digital presence through professional websites, applications and practical digital solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-600/30 border border-blue-400/30 group"
              >
                <span>Explore Our Services</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-all duration-200"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </motion.div>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-white/[0.06]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Responsive Across All Devices</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Modern Clean Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Direct Team Communication</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Custom Web & Application Development Interface Visual (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#090d16] border border-white/[0.1] shadow-2xl overflow-hidden select-none">
              
              {/* Window Chrome Header */}
              <div className="bg-[#070a12] border-b border-white/[0.08] p-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-3 py-0.5 rounded border border-white/[0.06] flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-blue-400" />
                  <span>teklonics.com</span>
                </div>

                <div className="flex items-center gap-2 text-slate-500">
                  <Monitor className="w-3.5 h-3.5 text-blue-400" />
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Development Composition Screen */}
              <div className="p-5 space-y-4">
                
                {/* Visual Section 1: Web Interface Preview */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-blue-400" />
                      Website Architecture
                    </span>
                    <span className="text-emerald-400 font-medium">Responsive & Fast</span>
                  </div>

                  <div className="h-3 w-4/5 bg-blue-500/20 rounded"></div>
                  <div className="h-2 w-full bg-white/[0.04] rounded"></div>
                  <div className="h-2 w-3/4 bg-white/[0.04] rounded"></div>
                </div>

                {/* Visual Section 2: Application Dashboard Snippet */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      Application Modules
                    </span>
                    <span className="text-blue-400 font-mono">Custom Admin / Portals</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-center">
                      <span className="text-[10px] font-mono text-slate-400 block">Performance</span>
                      <span className="text-xs font-bold text-white font-mono">Optimized</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-center">
                      <span className="text-[10px] font-mono text-slate-400 block">Layout</span>
                      <span className="text-xs font-bold text-blue-400 font-mono">Mobile-Ready</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-center">
                      <span className="text-[10px] font-mono text-slate-400 block">Integration</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">REST / APIs</span>
                    </div>
                  </div>
                </div>

                {/* Visual Section 3: Clean Terminal Status */}
                <div className="p-3 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Terminal className="w-3 h-3 text-blue-400" />
                      teklonics-dev-stack
                    </span>
                    <span className="text-emerald-400">Ready</span>
                  </div>
                  <div className="text-slate-400 text-[10px] pt-1">
                    React • Next.js • TypeScript • Tailwind CSS • Python
                  </div>
                </div>

              </div>

              {/* Status bar */}
              <div className="px-4 py-2.5 bg-[#060910] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Professional Web Solutions
                </span>
                <span className="text-slate-500">Direct Team Collaboration</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
