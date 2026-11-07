import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#07090e] to-[#040608] border-t border-white/[0.08]">
      {/* Background radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>READY TO ENGINEER YOUR DIGITAL EXPERIENCE?</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.12]">
          Let’s build something <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
            exceptional together.
          </span>
        </h2>

        {/* Copy */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a bespoke corporate website, an enterprise web application, or a scalable e-commerce platform, our team of 5+ developers is ready to execute.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all shadow-xl shadow-blue-600/30 border border-blue-400/40 group"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href={`mailto:${siteConfig.contact.officialEmail}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-all"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Email Founder Directly</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No Obligation Proposal</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct Technical Review</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Transparent Timeline & Scope</span>
          </div>
        </div>

      </div>
    </section>
  );
};
