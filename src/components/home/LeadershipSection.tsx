import React from 'react';
import { leadershipData, teamData } from '../../data/teamData';
import { Users } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 relative border-t border-white/[0.08] bg-[#05070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>LEADERSHIP & TEAM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Company Leadership
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Founded and directed by technical builders, supported by {teamData.summary.toLowerCase()}.
          </p>
        </div>

        {/* Small & Elegant Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          
          {/* Card 1: Founder */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] flex items-center gap-4">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-900 to-slate-900 border border-blue-500/30 flex items-center justify-center text-white font-display font-bold text-base flex-shrink-0">
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

          {/* Card 2: Co-Founder */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] flex items-center gap-4">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 border border-white/10 flex items-center justify-center text-white font-display font-bold text-base flex-shrink-0">
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

          {/* Card 3: Team Summary */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm text-white">
                {teamData.summary}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Dedicated developers collaborating on every client project.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
