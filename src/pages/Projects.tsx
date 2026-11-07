import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Applications', 'E-Commerce', 'Corporate & Business', 'Custom Software'];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 sm:py-20 relative">
      {/* Background glow */}
      <div className="absolute top-20 left-1/3 w-[550px] h-[300px] bg-blue-600/5 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Page Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Engineering Reference <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Implementations & Concepts
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Explore our architectural showcase of production-ready digital solutions. Each concept project illustrates how Teklonics approaches data architecture, user interface choreography, and backend security.
          </p>

          <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs font-mono text-slate-400 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
            <span>Studio Integrity Standard: All showcase projects are clearly labelled concept architectures demonstrating verified engineering capabilities.</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <span>Filter By:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img 
                    src={project.previewImage} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1018] via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/80 backdrop-blur-md text-white border border-white/15">
                      {project.category}
                    </span>
                  </div>

                  {/* Concept Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-900/80 text-blue-200 border border-blue-500/30">
                      Studio Concept
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="text-xs font-mono text-slate-500">
                    {project.clientType}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    <Link to={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.02] text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between">
                <div className="text-xs font-mono text-slate-400">
                  <span className="font-semibold text-white">{project.metrics[0].value}</span> {project.metrics[0].label}
                </div>

                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600/30 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 px-4 py-2 rounded-lg transition-all"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
