import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
        <h1 className="text-3xl font-display font-bold text-white">Project Case Study Not Found</h1>
        <p className="text-slate-400 max-w-md">
          The requested concept project does not exist or has been relocated within our studio directory.
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  // Find other projects for navigation
  const otherProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="py-12 sm:py-20 relative">
      {/* Background illumination */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[300px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO PROJECTS</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-950/60 text-blue-300 border border-blue-500/30">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded text-xs font-mono uppercase bg-white/[0.04] text-slate-400 border border-white/10">
              {project.year}
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl space-y-6">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            {project.clientType}
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed font-normal">
            {project.fullDesc}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Showcase Image */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-900 aspect-[16/9] max-h-[580px] w-full">
          <img 
            src={project.previewImage} 
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 inline-block">
              Teklonics High-Performance Production Blueprint
            </div>

            <Link
              to={`/contact?service=${encodeURIComponent(project.category)}&projectRef=${encodeURIComponent(project.title)}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all self-start sm:self-auto"
            >
              <span>Discuss Similar Implementation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-white/[0.08] text-center space-y-1">
              <span className="block text-2xl sm:text-3xl font-display font-bold text-white text-gradient-blue font-mono">
                {metric.value}
              </span>
              <span className="block text-xs font-mono uppercase text-slate-400 tracking-wider">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Deep Dive: The Challenge & The Architectural Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Challenge */}
          <div className="glass-card rounded-2xl p-8 border border-white/[0.08] space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span>THE ENGINEERING CHALLENGE</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white">
              The Problem We Solved
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.challenge}
            </p>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-400 font-mono space-y-1">
              <div>• Legacy monolithic bottlenecks</div>
              <div>• Poor mobile conversion thresholds</div>
              <div>• Complex state synchronization issues</div>
            </div>
          </div>

          {/* Solution */}
          <div className="glass-card rounded-2xl p-8 border border-blue-500/20 bg-blue-950/10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ARCHITECTURAL SOLUTION</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white">
              How Teklonics Engineered It
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.solution}
            </p>

            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-300 font-mono space-y-1">
              <div>✔ Decoupled modular micro-frontend components</div>
              <div>✔ Zero layout shift responsive optimization</div>
              <div>✔ Strict TypeScript typing & OpenAPI contracts</div>
            </div>
          </div>

        </div>

        {/* Key Deliverables Matrix */}
        <div className="glass-card rounded-2xl p-8 border border-white/[0.08] space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-display font-bold text-white">
              Shipped Deliverables & Technical Specs
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Artifacts and code modules built for this architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Projects Carousel / Links */}
        <div className="pt-12 border-t border-white/[0.08] space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-white">
              Explore More Case Studies
            </h3>
            <Link to="/work" className="text-xs font-mono text-blue-400 hover:underline">
              View All ({projectsData.length}) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((other) => (
              <Link 
                key={other.id} 
                to={`/work/${other.slug}`}
                className="group glass-card rounded-xl p-5 border border-white/[0.08] hover:border-blue-500/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 rounded-lg overflow-hidden bg-slate-900 flex-shrink-0">
                    <img src={other.previewImage} alt={other.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-blue-400">{other.category}</span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1">{other.title}</h4>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
