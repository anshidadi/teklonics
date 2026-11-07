import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Code2, Cpu, Globe2, ShieldCheck, Terminal } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
      {/* Interactive canvas background */}
      <HeroCanvas />

      {/* Subtle background ambient glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[250px] bg-cyan-500/05 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-blue-500/20 backdrop-blur-md shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-mono font-medium tracking-wider text-slate-300">
              SOFTWARE ENGINEERING & DIGITAL ARCHITECTURE STUDIO
            </span>
          </motion.div>

          {/* Prominent Brand Title & Monogram Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-8 h-8 rounded-md bg-black border border-white/20 p-1 flex items-center justify-center shadow-blue-glow-sm">
              <img src="/assets/teklonics-logo.png" alt="TK" className="w-full h-full object-contain" />
            </div>
            <span className="font-mono text-sm tracking-[0.25em] text-blue-400 font-semibold uppercase">
              TEKLONICS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]"
          >
            We turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">ambitious ideas</span> into digital experiences.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Teklonics designs and develops modern websites, applications and software solutions for growing businesses. Engineered with clean architecture, enterprise reliability, and purposeful design.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-600/30 border border-blue-400/40 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              <span>Explore Our Work</span>
            </Link>
          </motion.div>

          {/* Interactive Technology Architecture Card / Studio Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-8"
          >
            <div className="max-w-3xl mx-auto glass-card rounded-xl p-4 sm:p-5 border border-white/[0.08] shadow-2xl relative overflow-hidden text-left">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
                  </div>
                  <span className="text-slate-500">teklonics-engine // v2.6-prod</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Architecture Matrix</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>Stack Focus</span>
                  </div>
                  <p className="text-xs font-semibold text-white">React • Python • TS</p>
                  <p className="text-[11px] text-slate-500 font-mono">Clean decoupling</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Core Team</span>
                  </div>
                  <p className="text-xs font-semibold text-white">5+ Specialists</p>
                  <p className="text-[11px] text-slate-500 font-mono">Collaborative pods</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Code Ownership</span>
                  </div>
                  <p className="text-xs font-semibold text-white">100% Client IP</p>
                  <p className="text-[11px] text-slate-500 font-mono">Zero vendor lock-in</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Founder-Led</span>
                  </div>
                  <p className="text-xs font-semibold text-white">M. Anshid KT</p>
                  <p className="text-[11px] text-slate-500 font-mono">Direct guidance</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Elegant Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-12 flex flex-col items-center justify-center text-slate-500 text-xs font-mono gap-1 cursor-pointer hover:text-blue-400 transition-colors"
          onClick={() => {
            const el = document.getElementById('selected-work');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>EXPLORE ECOSYSTEM</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-blue-400" />
        </motion.div>
      </div>
    </section>
  );
};
