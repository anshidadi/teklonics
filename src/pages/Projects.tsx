import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectPreviewMockup } from '../components/common/ProjectPreviewMockup';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Websites', 'Web Applications', 'Digital Solutions'];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>OUR WORK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Selected Projects & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Concept Architectures
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Explore our curated showcase of websites, web applications and digital solutions. Each project represents our commitment to fast load times, clear UX, and modern engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <span>Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Mockup Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-white/[0.08] hover:border-blue-500/40 bg-[#090d16] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Interface Mockup */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-white/[0.08]">
                  <ProjectPreviewMockup type={project.previewType} title={project.title} />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-black/80 backdrop-blur-md text-white border border-white/10">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950 text-blue-300 border border-blue-500/30">
                      Concept
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h2 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    <Link to={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Teklonics Studio
                </span>

                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600/30 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 px-3.5 py-1.5 rounded-lg transition-all"
                >
                  <span>View Project</span>
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
