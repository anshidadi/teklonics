import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Layers, Cpu, ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Services: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>OUR CORE SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Website Development, Applications & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Digital Solutions
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            We focus on three primary service disciplines to help your business turn ideas into useful digital products.
          </p>
        </div>

        {/* 3 Main Services Detail Sections */}
        <div className="space-y-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-blue-500/30 transition-all space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {service.id === 'website-development' && <Globe className="w-6 h-6" />}
                    {service.id === 'application-development' && <Layers className="w-6 h-6" />}
                    {service.id === 'digital-solutions' && <Cpu className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 block font-semibold">
                      SERVICE {service.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors self-start sm:self-auto"
                >
                  <span>Inquire About This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
                {service.shortDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Specific Solutions:
                  </h3>
                  <ul className="space-y-2">
                    {service.subServices.map((sub, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Advantages:
                  </h3>
                  <ul className="space-y-2">
                    {service.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-white/[0.04]">
                    <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                      Tooling:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center pt-8 space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Have a project in mind?
          </h3>
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
