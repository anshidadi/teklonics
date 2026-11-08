import { Users, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.08] bg-[#05070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>ABOUT TEKLONICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Who We Are
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Statement (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#090d16] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                Our Purpose & Focus
              </span>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
                Teklonics is a web development company focused on building modern websites, applications and digital solutions for businesses. Our team combines development skills, creative thinking and practical problem-solving to turn ideas into useful digital experiences.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Responsive Web Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Custom Web Applications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Practical Digital Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Modern Clean Codebases</span>
              </div>
            </div>
          </div>

          {/* Company & Team Structure (5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-[#090d16] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="text-xs font-mono text-slate-400">Company Overview</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">Company Name</span>
                  <span className="text-base font-bold text-white tracking-wide">TEKLONICS</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">Leadership</span>
                  <p className="text-slate-300 font-medium">
                    <span className="text-white">{siteConfig.leadership.founder.name}</span> (Founder) <br />
                    <span className="text-white">{siteConfig.leadership.coFounder.name}</span> (Co-Founder)
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 block">Development Team</span>
                  <span className="text-slate-300 font-medium flex items-center gap-1.5 pt-0.5">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>{siteConfig.leadership.teamSummary}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Discuss a project with our team →</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
