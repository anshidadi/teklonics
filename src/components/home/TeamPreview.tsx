import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Code2, Terminal } from 'lucide-react';
import { founderProfile, teamPods } from '../../data/teamData';

export const TeamPreview: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>THE ENGINEERING TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Direct Technical Leadership
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Teklonics operates with a dedicated team of 5+ developers and specialists led by founder Muhammed Anshid KT. We work collaboratively without account executives or outsourced handoffs.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>Learn More About Us</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Founder Spotlight Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[100px] pointer-events-none rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founder Avatar & Title (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 border-2 border-blue-500/40 flex items-center justify-center text-white font-display font-bold text-3xl shadow-blue-glow-sm">
                  {founderProfile.avatarPlaceholder}
                </div>
                <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-black shadow">
                  Director
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {founderProfile.name}
                </h3>
                <p className="text-sm font-mono text-blue-400">
                  {founderProfile.role}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Lead Technical Architect • Teklonics
                </p>
              </div>
            </div>

            {/* Founder Vision & Statement (8 Cols) */}
            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>LEADERSHIP PERSPECTIVE</span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                "{founderProfile.overview}"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {founderProfile.coreTenets.map((tenet, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1">
                    <span className="block text-xs font-semibold text-white font-mono">{tenet.title}</span>
                    <span className="block text-[11px] text-slate-400 line-clamp-2">{tenet.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 5+ Real Development Team Pods Showcase with Authentic Structure */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span>Core Development Pods (5+ Engineering Specialists)</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">
              Verified Technical Structure
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {teamPods.map((pod) => (
              <div
                key={pod.id}
                className="glass-card rounded-xl p-4 border border-white/[0.06] hover:border-blue-500/30 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center font-mono text-xs font-bold text-blue-300">
                      {pod.memberInitials}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 rounded bg-white/[0.03]">
                      Pod Active
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-sm text-white leading-tight">
                      {pod.roleTitle}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {pod.discipline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-normal line-clamp-2">
                    {pod.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.04]">
                  <span className="text-[10px] font-mono text-slate-500 block truncate">
                    Stack: {pod.technologies.slice(0, 3).join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-slate-500 text-center pt-2">
            Profile placeholders: Profile photography and individual bio dossiers are updated upon verified client onboarding.
          </p>
        </div>

      </div>
    </section>
  );
};
