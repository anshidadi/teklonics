import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export const SelectedWork: React.FC = () => {
  // Show featured projects
  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="selected-work" className="py-24 relative border-t border-white/[0.06] bg-[#07090e]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore production architectures and reference implementations engineered by Teklonics. Built with strict performance benchmarks, responsive interactions, and clean codebases.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <article 
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col"
            >
              {/* Visual preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img 
                  src={project.previewImage} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1018] via-black/20 to-transparent"></div>
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/80 backdrop-blur-md text-white border border-white/15">
                    {project.category}
                  </span>
                </div>

                {/* Concept badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-900/80 text-blue-200 border border-blue-500/30">
                    Studio Concept
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-slate-500">
                    {project.clientType}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    <Link to={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Badges & Action */}
                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
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

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="text-left">
                          <span className="block text-xs font-bold text-slate-200 font-mono">{m.value}</span>
                          <span className="block text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600/30 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 px-3.5 py-2 rounded-lg transition-all"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
