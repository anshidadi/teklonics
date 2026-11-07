import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { ProjectPreviewMockup } from '../common/ProjectPreviewMockup';

export const SelectedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Websites', 'Web Applications', 'Digital Solutions'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 relative border-t border-white/[0.08] bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <span>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Carefully designed concept projects showcasing our approach to responsive websites, interactive web applications and practical digital solutions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Cards: Large, Impressive, Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            const isWide = idx === 0 && selectedCategory === 'All';
            return (
              <article
                key={project.id}
                className={`group rounded-2xl overflow-hidden border border-white/[0.08] hover:border-blue-500/40 bg-[#0a0d16] transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Visual Interface Preview */}
                <div className={`relative overflow-hidden bg-slate-950 border-b border-white/[0.08] ${
                  isWide ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[16/10]'
                }`}>
                  {/* Dedicated vector interface mockup */}
                  <ProjectPreviewMockup 
                    type={project.previewType} 
                    title={project.title} 
                    className="group-hover:scale-[1.01] transition-transform duration-500"
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/80 backdrop-blur-md text-white border border-white/15">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-950/80 text-blue-300 border border-blue-500/30">
                      Concept Work
                    </span>
                  </div>
                </div>

                {/* Project Information */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech stack & action */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span 
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Studio Disclaimer Footer */}
        <div className="mt-12 text-center text-xs font-mono text-slate-500">
          Showing clearly labelled concept projects demonstrating verified Teklonics technical capabilities.
        </div>

      </div>
    </section>
  );
};
