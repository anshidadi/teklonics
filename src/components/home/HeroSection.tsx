import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';

export const HeroSection: React.FC = () => {
  const [activePreview, setActivePreview] = useState<'web' | 'app' | 'solutions'>('web');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background restrained canvas */}
      <HeroCanvas />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-600/[0.08] blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, copy, and CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small status eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span>Modern Web Development Company</span>
            </motion.div>

            {/* Exact Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]"
            >
              We Build Digital Experiences That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">Move Businesses Forward.</span>
            </motion.h1>

            {/* Exact Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              We design and develop modern websites, applications and digital solutions that help businesses grow.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-600/30 border border-blue-400/30 group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-all duration-200"
              >
                <span>Explore Our Work</span>
              </a>
            </motion.div>

            {/* Concise Reassurance Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-white/[0.06]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Responsive & Fast</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Modern Clean Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>100% Code Ownership</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Distinctive Interface Composition (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#090d16] border border-white/[0.1] shadow-2xl overflow-hidden">
              
              {/* Tab Header */}
              <div className="bg-[#070a12] border-b border-white/[0.08] p-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
                </div>

                {/* Interactive Mode Pills */}
                <div className="flex items-center gap-1 bg-white/[0.03] p-0.5 rounded-lg border border-white/[0.06] text-[11px] font-mono">
                  <button
                    onClick={() => setActivePreview('web')}
                    className={`px-2.5 py-1 rounded transition-colors ${activePreview === 'web' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Web
                  </button>
                  <button
                    onClick={() => setActivePreview('app')}
                    className={`px-2.5 py-1 rounded transition-colors ${activePreview === 'app' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    App
                  </button>
                  <button
                    onClick={() => setActivePreview('solutions')}
                    className={`px-2.5 py-1 rounded transition-colors ${activePreview === 'solutions' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Solutions
                  </button>
                </div>
              </div>

              {/* Dynamic Interface Screen */}
              <div className="p-5 space-y-4">
                {activePreview === 'web' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-white font-semibold">Website Development</span>
                      <span className="text-emerald-400">98/100 Lighthouse</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <div className="h-4 w-3/4 bg-blue-500/20 rounded"></div>
                      <div className="h-2.5 w-full bg-white/[0.04] rounded"></div>
                      <div className="h-2.5 w-5/6 bg-white/[0.04] rounded"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-white block font-sans font-medium">Responsive Layouts</span>
                        <span>Desktop • Tablet • Mobile</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-white block font-sans font-medium">Fast Load Times</span>
                        <span>Core Web Vitals Optimized</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePreview === 'app' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-white font-semibold">Application Development</span>
                      <span className="text-blue-400">Interactive Dashboards</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300">Live Active Sessions</span>
                        <span className="font-mono text-emerald-400 font-bold">1,840</span>
                      </div>
                      <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-4/5 rounded-full"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-white block font-sans font-medium">Custom Portals</span>
                        <span>Role-Based Permissions</span>
                      </div>
                      <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-white block font-sans font-medium">Database APIs</span>
                        <span>Secure REST / GraphQL</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePreview === 'solutions' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-white font-semibold">Digital Solutions</span>
                      <span className="text-indigo-400">APIs & Integrations</span>
                    </div>

                    <div className="p-3 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="text-slate-500">// Connected Ecosystem</div>
                      <div className="text-blue-400">✔ Payment Gateway: Connected</div>
                      <div className="text-emerald-400">✔ UI/UX System: Synchronized</div>
                      <div className="text-slate-400">✔ Platform Maintenance: Active</div>
                    </div>

                    <div className="p-2 rounded bg-blue-600/10 border border-blue-500/20 text-[11px] text-blue-300 text-center font-mono">
                      End-to-end technical partnership
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom status bar */}
              <div className="px-4 py-2.5 bg-[#060910] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Ready to deploy
                </span>
                <span className="text-slate-500">React • TypeScript • Tailwind</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
