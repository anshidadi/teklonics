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
  CheckCircle2, 
  ArrowUpRight, 
  Search,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import type { ServiceItem } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
};

export const Services: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Core Web', 'Commerce', 'Software Engineering', 'Engineering', 'Product Design', 'Mobile', 'Consulting & Ops'];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = filterCategory === 'All' || service.category === filterCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 relative">
      {/* Background illumination */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-blue-600/5 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SERVICE ARCHITECTURE & DELIVERABLES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Technical Capabilities
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Teklonics offers end-to-end software engineering and digital solutions. We only advertise services we can genuinely deliver through our 5+ core engineering team.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0d14] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Services Catalogue Grid */}
        <div className="space-y-10">
          {filteredServices.map((service: ServiceItem) => (
            <article 
              key={service.id}
              id={service.id}
              className="glass-card rounded-2xl p-6 sm:p-10 border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden space-y-8"
            >
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {iconMap[service.iconName] || <Code className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30">
                        SERVICE {service.code}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {service.category}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-slate-400 mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/25 self-start"
                >
                  <span>Request Proposal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                {service.description}
              </p>

              {/* Capabilities & Deliverables Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {/* Specific capabilities */}
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    What We Build:
                  </h3>
                  <ul className="space-y-2">
                    {service.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Measurable Deliverables */}
                <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Contracted Deliverables:
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Ideal For Footer */}
              <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/[0.06] text-xs font-mono">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-slate-500 uppercase">Core Stack:</span>
                  {service.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="text-slate-400 italic font-sans text-xs">
                  <strong className="text-slate-300 font-mono not-italic uppercase text-[11px]">Best Fit: </strong>
                  {service.suitableFor}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-slate-400 space-y-3">
            <p>No services matched your filter criteria.</p>
            <button 
              onClick={() => { setFilterCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 text-xs font-mono text-blue-400 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
