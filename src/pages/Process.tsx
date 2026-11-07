import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ChevronDown, HelpCircle } from 'lucide-react';
import { processSteps } from '../data/processData';

export const Process: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How long does a typical project take from start to finish?',
      a: 'A bespoke modern website typically takes 2 to 4 weeks. More complex web applications or custom digital platforms generally take 4 to 8 weeks depending on scope and feature requirements.'
    },
    {
      q: 'How do you keep clients updated during development?',
      a: 'We share regular progress updates, direct communication with Muhammed Anshid KT and the builders, and a private staging URL where you can view live progress as features are completed.'
    },
    {
      q: 'Do I own the source code after launch?',
      a: 'Yes, 100%. Upon final project completion, all intellectual property, design files, code repositories, and credentials belong entirely to your company.'
    },
    {
      q: 'What happens if we need updates after launch?',
      a: 'We provide ongoing maintenance, feature updates, and technical support agreements so your digital products stay secure and up to date.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>HOW WE WORK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Our Simple <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Four-Step Process
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            We keep our process straightforward, transparent and focused on delivering a high-quality product without unnecessary delays.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-7 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-blue-500/70">
                    0{step.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-300">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-500">
                Step 0{step.step} of 04
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Working With Teklonics
            </h2>
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

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
