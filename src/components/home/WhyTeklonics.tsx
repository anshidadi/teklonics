import React from 'react';
import { whyUsData } from '../../data/whyUsData';
import { Users, Target, Layout, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

const icons = [
  <Users className="w-5 h-5 text-blue-400" />,
  <Target className="w-5 h-5 text-cyan-400" />,
  <Layout className="w-5 h-5 text-emerald-400" />,
  <MessageSquare className="w-5 h-5 text-sky-400" />,
  <ShieldCheck className="w-5 h-5 text-blue-400" />,
  <CheckCircle2 className="w-5 h-5 text-indigo-400" />,
];

export const WhyTeklonics: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-white/[0.08] bg-[#05070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Why Work With Teklonics
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We focus on practical, reliable web development built around your business goals and real requirements.
          </p>
        </div>

        {/* 6 Genuine Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-blue-500/30 transition-all space-y-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                {icons[idx] || <CheckCircle2 className="w-5 h-5 text-blue-400" />}
              </div>

              <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
