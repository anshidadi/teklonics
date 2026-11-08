import React from 'react';
import { Globe, Layers, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="py-24 relative border-t border-white/[0.08] bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            What We Do
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We provide three primary web development and digital services designed to help businesses build and grow their online presence.
          </p>
        </div>

        {/* 3 Primary Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => {
            const isFeatured = service.id === 'website-development';
            return (
              <div
                key={service.id}
                className={`rounded-2xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between space-y-8 relative group ${
                  isFeatured 
                    ? 'border-blue-500/40 bg-gradient-to-b from-[#0a0f1d] to-[#070a12] shadow-lg shadow-blue-950/20' 
                    : 'border-white/[0.08] bg-[#090d16] hover:border-blue-500/30'
                }`}
              >
                <div className="space-y-6">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-400 px-2.5 py-1 rounded bg-blue-950/60 border border-blue-500/30">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      {service.id === 'website-development' && <Globe className="w-5 h-5" />}
                      {service.id === 'application-development' && <Layers className="w-5 h-5" />}
                      {service.id === 'digital-solutions' && <Cpu className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Examples List */}
                  <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                      Examples:
                    </span>
                    <ul className="space-y-2">
                      {service.examples.map((ex, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Contact Action */}
                <div className="pt-6 border-t border-white/[0.06]">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-white/[0.04] hover:bg-blue-600 hover:border-blue-500 border border-white/10 transition-all duration-200 group-hover:bg-blue-600/20 group-hover:border-blue-500/40"
                  >
                    <span>Discuss {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
