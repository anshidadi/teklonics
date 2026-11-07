import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Terminal, 
  Target, 
  Compass, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  GitPullRequest,
  Check
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { founderProfile, teamPods } from '../data/teamData';

export const About: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 relative">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Page Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT TEKLONICS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Engineering digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">rigor and purpose.</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Teklonics is an independent digital solutions and software engineering studio. We partner with ambitious business owners and founders to transform complex technical concepts into intuitive, high-performance web products.
          </p>
        </div>

        {/* Vision, Mission & Philosophy Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 border border-white/[0.08] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be the premier technical partner for companies that prioritize engineering resilience, modern design standards, and long-term maintainability over superficial shortcuts.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/[0.08] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To bridge the gap between creative visual excellence and rock-solid software architecture. We deliver digital solutions that perform reliably under real-world pressure.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/[0.08] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Working Philosophy</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Complete transparency, direct technical communication, typed and testable codebases, and zero proprietary lock-in. 100% intellectual property transfer on delivery.
            </p>
          </div>
        </div>

        {/* Founder Spotlight: Muhammed Anshid KT */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.08] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-900 via-slate-900 to-black border-2 border-blue-500/40 flex items-center justify-center text-white font-display font-bold text-4xl shadow-blue-glow">
                  {founderProfile.avatarPlaceholder}
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-mono font-bold tracking-wider uppercase border border-black shadow">
                  Founder
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {founderProfile.name}
                </h2>
                <p className="text-sm font-mono text-blue-400 mt-0.5">
                  {founderProfile.role}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Location: {siteConfig.contact.officeLocation}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.contact.officialEmail}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-blue-500/40 transition-all"
                >
                  <span>Connect with Founder</span>
                  <ArrowRight className="w-3 h-3 text-blue-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0 lg:pl-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
                <ShieldCheck className="w-4 h-4" />
                <span>FOUNDER'S ARCHITECTURAL PERSPECTIVE</span>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                "{siteConfig.founder.vision}"
              </p>

              <div className="text-sm text-slate-400 leading-relaxed space-y-3">
                <p>
                  As the founder and lead technical architect of Teklonics, Muhammed Anshid KT brings hands-on direction to every project the studio accepts. Rather than passing clients to junior contractors or account managers, Muhammed establishes the core architecture, conducts code audits, and directly steers the studio's pod of 5+ developers.
                </p>
                <p>
                  Our studio operates under the belief that software development is an exact craft. When you hire Teklonics, you are partnering with dedicated craftspeople who respect your budget, communicate transparently, and take pride in delivering maintainable code.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-xs font-mono text-blue-400 font-semibold block">Hands-on Direction</span>
                  <span className="text-xs text-slate-400">Direct founder technical oversight across all deliverables</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-xs font-mono text-cyan-400 font-semibold block">Modern Paradigms</span>
                  <span className="text-xs text-slate-400">React, TypeScript, Python, and scalable cloud architectures</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-xs font-mono text-emerald-400 font-semibold block">Zero Red Tape</span>
                  <span className="text-xs text-slate-400">Rapid sprint feedback loops without agency bureaucracy</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5+ Real Development Team Structure */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>COLLECTIVE CAPABILITY</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              The Teklonics Development Team
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Teklonics works as a coordinated team of <strong>5+ developers and team members</strong>. In accordance with our studio transparency standard, we do not fabricate employee portraits or fictional personas. Below is our verified structural breakdown:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamPods.map((pod) => (
              <div 
                key={pod.id}
                className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Photo / Avatar Placeholder Slot */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-white/10 flex flex-col items-center justify-center text-blue-400 font-mono font-bold text-base shadow-inner">
                      <span>{pod.memberInitials}</span>
                      <span className="text-[9px] text-slate-500 -mt-0.5">SLOT</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        {pod.roleTitle}
                      </h3>
                      <p className="text-xs font-mono text-blue-400">
                        {pod.discipline}
                      </p>
                      <span className="text-[10px] font-mono text-slate-500 block">
                        {pod.placeholderLabel}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pod.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase text-slate-500 block">Responsibilities:</span>
                    <ul className="space-y-1.5">
                      {pod.keyResponsibilities.slice(0, 3).map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5">Primary Tooling:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {pod.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Cross-Functional Operations Card */}
            <div className="glass-card rounded-2xl p-6 border border-blue-500/20 bg-blue-950/10 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-white">
                  Collaborative Delivery Cadence
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our pod architecture ensures cross-discipline peer review on every pull request. No code enters production without dual review and lint verification.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] text-xs font-mono text-slate-400 space-y-1">
                <div>• Bi-weekly live staging previews</div>
                <div>• Async Slack & GitHub updates</div>
                <div>• Automated CI regression checks</div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Studio Manifesto */}
        <div className="border border-white/[0.08] rounded-2xl p-8 sm:p-10 bg-white/[0.01] space-y-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Our Studio Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">1. Complete Intellectual Property Transfer</h4>
              <p className="text-slate-400">
                You retain 100% ownership of all source code, assets, and documentation. No licensing traps, no proprietary CMS lock-in, and full administrative freedom.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">2. Realistic Scoping & Transparent Timelines</h4>
              <p className="text-slate-400">
                We provide honest feasibility evaluations. If an approach is technically fragile or overpriced for your stage, we advise against it immediately.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">3. Security & Clean Code Hygiene</h4>
              <p className="text-slate-400">
                Environment secrets isolation, input sanitization, CSRF/XSS safeguards, and typed APIs are not optional add-ons; they are built in from day zero.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">4. Enduring Post-Launch Stewardship</h4>
              <p className="text-slate-400">
                We stay in your corner after go-live with structured maintenance agreements, dependency updates, and feature iteration capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
          >
            <span>Start a Project with Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
