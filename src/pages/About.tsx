import React from 'react';
import { Link } from 'react-router-dom';
import { leadershipData, teamData } from '../data/teamData';
import { ArrowRight, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>ABOUT TEKLONICS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Technology, Design and Ideas — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Working Together.
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Teklonics is a web development company focused on building modern websites, applications and practical digital solutions. We combine thoughtful design with development to turn business ideas into meaningful digital experiences.
          </p>
        </div>

        {/* 3 Core Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-3">
            <span className="text-xs font-mono text-blue-400 font-semibold block">01 / CLARITY</span>
            <h3 className="text-xl font-display font-bold text-white">Thoughtful Design</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We design interfaces that prioritize human usability, logical layout flow, and brand authority.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-3">
            <span className="text-xs font-mono text-blue-400 font-semibold block">02 / RIGOR</span>
            <h3 className="text-xl font-display font-bold text-white">Clean Engineering</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We write typed, modular, and maintainable code that scales without creating technical debt.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-3">
            <span className="text-xs font-mono text-blue-400 font-semibold block">03 / TRUST</span>
            <h3 className="text-xl font-display font-bold text-white">Direct Collaboration</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Transparent sprint updates, direct communication with builders, and 100% intellectual property ownership.
            </p>
          </div>
        </div>

        {/* Leadership & Team Section */}
        <div className="space-y-6 pt-6 border-t border-white/[0.08]">
          <div className="space-y-1">
            <h2 className="text-2xl font-display font-bold text-white">
              Leadership & Team
            </h2>
            <p className="text-sm text-slate-400">
              Teklonics is founded and directed by technical builders, supported by {teamData.summary.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Founder Card */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-slate-900 border border-blue-500/30 flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0">
                {leadershipData[0].initials}
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  {leadershipData[0].name}
                </h3>
                <p className="text-xs font-mono text-blue-400 mt-0.5">
                  {leadershipData[0].role}
                </p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                  Teklonics
                </p>
              </div>
            </div>

            {/* Co-Founder Card */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 border border-white/10 flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0">
                {leadershipData[1].initials}
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  {leadershipData[1].name}
                </h3>
                <p className="text-xs font-mono text-blue-400 mt-0.5">
                  {leadershipData[1].role}
                </p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                  Teklonics
                </p>
              </div>
            </div>

            {/* Team summary card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm text-white">
                  {teamData.summary}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Collaborative developers and team members building digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            <span>Start a Project With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
