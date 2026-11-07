import React from 'react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.08] bg-[#05070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Description (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <span>ABOUT TEKLONICS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
              Technology, Design and Ideas — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                Working Together.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Teklonics is a web development company focused on building modern websites, applications and practical digital solutions. We combine thoughtful design with development to turn business ideas into meaningful digital experiences.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <span className="font-semibold text-white block">Purposeful Design</span>
                <p className="text-slate-400">Clear navigation and clean aesthetics tailored to human users, not empty decoration.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <span className="font-semibold text-white block">Robust Engineering</span>
                <p className="text-slate-400">Typed code, responsive layouts, and modern architecture that stays maintainable as you scale.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Read more about our approach & team →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Refined Visual Studio Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#090d16] border border-white/[0.08] shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 blur-[80px] pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono text-slate-400">Teklonics Studio Summary</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">Core Focus</span>
                  <p className="text-sm font-semibold text-white">Web Development • Apps • Digital Solutions</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">Team Structure</span>
                  <p className="text-sm font-semibold text-white">A team of 5+ members</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">Leadership</span>
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Muhammed Anshid KT</strong> (Founder) & <strong className="text-white">Rinshad P</strong> (Co-Founder)
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">Code Standard</span>
                  <p className="text-sm font-semibold text-white">100% Client IP & Zero Vendor Lock-in</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Direct collaboration</span>
                <span className="text-blue-400">Kerala, India</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
