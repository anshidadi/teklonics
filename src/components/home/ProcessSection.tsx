import React from 'react';
import { processSteps } from '../../data/processData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-white/[0.08] bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Our Process
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A clear four-step methodology designed to keep communication simple and delivery predictable.
          </p>
        </div>

        {/* 4-Step Connected Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-blue-500/80 group-hover:text-blue-400 transition-colors">
                    0{step.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-400 group-hover:border-blue-500/30">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-display font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-300">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500 flex items-center gap-1">
                <span>Phase 0{step.step} of 04</span>
                {idx < 3 && <ArrowRight className="w-3 h-3 text-slate-600 hidden lg:inline ml-auto" />}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
