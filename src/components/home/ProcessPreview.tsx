import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';
import { processStages } from '../../data/processData';

export const ProcessPreview: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE TEKLONICS METHOD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              A Refined Development Journey
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              We eliminate ambiguity through a phased 7-stage engineering lifecycle. Every milestone produces tangible deliverables and transparent client demos.
            </p>
          </div>

          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>Explore Full 7-Stage Process</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Horizontal Visual Timeline for Desktop & Grid for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processStages.slice(0, 4).map((stage) => (
            <div
              key={stage.step}
              className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between space-y-5 relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-blue-500/60">
                    {stage.code}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                    {stage.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white">
                  {stage.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {stage.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-slate-500 block">Key Output:</span>
                <p className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span className="line-clamp-1">{stage.deliverables[0]}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining 3 Stages Strip Preview */}
        <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Followed by: <strong>05. QA & Verification</strong> → <strong>06. Launch & Cloud Release</strong> → <strong>07. Ongoing Evolution</strong></span>
          </div>

          <Link
            to="/process"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Review all phases in detail →
          </Link>
        </div>

      </div>
    </section>
  );
};
