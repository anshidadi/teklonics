import React from 'react';
import { 
  Cpu, 
  MessageSquareCode, 
  Layers, 
  ShieldCheck, 
  GitFork, 
  LifeBuoy, 
  Sparkles,
  Check
} from 'lucide-react';

export const WhyTeklonics: React.FC = () => {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      title: 'Quality Software Engineering',
      desc: 'We write strict, typed, and well-structured codebases. Every component is built for performance, maintainability, and clean separation of concerns.'
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: 'Thoughtful, Purposeful Design',
      desc: 'Design isn’t just aesthetic decoration at Teklonics. We design for clarity, conversion, and effortless user flow without unnecessary visual noise.'
    },
    {
      icon: <MessageSquareCode className="w-5 h-5 text-emerald-400" />,
      title: 'Direct, Responsive Communication',
      desc: 'No account managers or bureaucratic middlemen. You collaborate directly with Muhammed Anshid KT and the engineering team executing your work.'
    },
    {
      icon: <GitFork className="w-5 h-5 text-indigo-400" />,
      title: 'Transparent Sprint Planning',
      desc: 'Clear scopes, documented milestones, and bi-weekly staging releases. You always know exactly what is built, what is next, and when it ships.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
      title: 'Scalable Architecture & Zero Lock-in',
      desc: 'You receive 100% code ownership, documented repositories, and standard cloud setups. You are never trapped in a closed, proprietary vendor ecosystem.'
    },
    {
      icon: <LifeBuoy className="w-5 h-5 text-violet-400" />,
      title: 'Responsible Ongoing Support',
      desc: 'We provide structured post-launch monitoring, security dependency patches, and ongoing evolutionary iterations as your traffic increases.'
    }
  ];

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDIO STANDARDS & VALUES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Why Partner With Teklonics
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We are not a bloated agency with sales layers, nor a loose collection of unpredictable freelancers. Teklonics is a dedicated digital engineering partner built on rigor and accountability.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-blue-500/30 transition-all space-y-4 relative group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>

              <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>Teklonics Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Engineering Manifesto Pill */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900/40 to-blue-950/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-white text-base sm:text-lg">
              Our Commitment: Software Designed to Last
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              We decline work that compromises engineering ethics or requires cutting unmaintainable corners. We build digital products you can proudly scale for years.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-400 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/30 whitespace-nowrap">
              No Technical Debt Shortcuts
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
