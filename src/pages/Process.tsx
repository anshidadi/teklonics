import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { processStages } from '../data/processData';

export const Process: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How long does a typical digital project take from kickoff to launch?',
      a: 'A bespoke modern corporate website or marketing platform typically takes 3 to 6 weeks. More complex web applications, SaaS dashboards, or custom e-commerce engines generally take 6 to 12 weeks depending on scope, integrations, and feature complexity.'
    },
    {
      q: 'How do you keep clients updated during agile sprints?',
      a: 'We operate in 2-week agile sprints. You receive weekly written updates, direct Slack or email access to Muhammed Anshid KT and lead engineers, and a private staging URL where you can test live progress as features are completed.'
    },
    {
      q: 'Do I own the source code and designs after launch?',
      a: 'Yes, 100%. Upon final project completion, all intellectual property, Figma design files, Git repositories, domain assets, and cloud deployment credentials are fully transferred to your company.'
    },
    {
      q: 'What happens if we need new features after launch?',
      a: 'We provide ongoing maintenance, feature expansion sprints, and security update agreements. You can retain Teklonics on a monthly sprint allocation or engage us for specific milestones as your needs expand.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 relative">
      {/* Background illumination */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Page Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE TEKLONICS LIFECYCLE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Our Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Process & Methodology
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Great software is not built by chance; it is the result of disciplined planning, tight feedback loops, and relentless testing. Here is how our team of 5+ developers brings your vision to fruition.
          </p>
        </div>

        {/* 7-Stage Refined Visual Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-16">
          {processStages.map((stage) => (
            <div key={stage.step} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#07090e] border-2 border-blue-500 flex items-center justify-center text-blue-400 font-mono text-xs font-bold shadow-blue-glow-sm group-hover:scale-110 transition-transform">
                {stage.step}
              </div>

              {/* Stage Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-6">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block">
                      STAGE {stage.code}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-0.5">
                      {stage.name}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06] self-start sm:self-auto">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Est. Duration: {stage.duration}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {stage.summary}
                </p>

                {/* Activities and Deliverables Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Activities */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2.5">
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                      Core Sprint Activities:
                    </span>
                    <ul className="space-y-2">
                      {stage.activities.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contracted Deliverables */}
                  <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 space-y-2.5">
                    <span className="text-xs font-mono uppercase text-blue-300 font-semibold block">
                      Tangible Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {stage.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stage Tools Footer */}
                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
                  <span>Stack & Tooling:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.tools.map((tool) => (
                      <span key={tool} className="px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Process FAQs */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/[0.08] space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Working With Teklonics
            </h3>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left py-2 font-display font-semibold text-base sm:text-lg text-white hover:text-blue-400 transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                {openFaq === idx && (
                  <p className="pt-2 pb-3 text-sm text-slate-300 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Have a project with unique constraints?
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            We adapt our sprint schedule around your launch windows, investor demos, or internal deadlines.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
          >
            <span>Schedule a Scope Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
