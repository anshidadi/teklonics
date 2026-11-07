import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  ShoppingBag, 
  Layers, 
  Code, 
  Server, 
  Palette, 
  Smartphone, 
  Cpu, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
};

export const ServicesOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#05070a]">
      {/* Background subtle light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-LIFECYCLE ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Comprehensive Digital Capabilities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From modern responsive websites to enterprise dashboards and custom backends, Teklonics provides the technical horsepower to bring complex ideas to market.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-2">
            {servicesData.map((service) => {
              const isSelected = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-blue-950/40 border-blue-500/50 shadow-blue-glow-sm text-white'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isSelected 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white/[0.05] text-slate-400 group-hover:text-blue-400'
                    }`}>
                      {iconMap[service.iconName] || <Code className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-blue-400 font-semibold">{service.code}.</span>
                        <h4 className="font-display font-semibold text-sm sm:text-base">{service.title}</h4>
                      </div>
                      <p className="text-xs text-slate-500 font-mono line-clamp-1">{service.category}</p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'translate-x-1 text-blue-400' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 p-2 transition-colors"
              >
                <span>View Full 8-Category Service Specification →</span>
              </Link>
            </div>
          </div>

          {/* Active Detail Showcase Panel (7 Cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30">
                  Category {activeService.code} • {activeService.category}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Teklonics Engineering
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {activeService.title}
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {activeService.description}
              </p>
            </div>

            {/* Core Deliverables / Capabilities */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                What We Build Under This Discipline:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Production Stacks & Tooling:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeService.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400 font-mono">
                Direct collaborative development • 5+ engineers
              </p>
              
              <Link
                to={`/contact?service=${encodeURIComponent(activeService.title)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/30"
              >
                <span>Request {activeService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
