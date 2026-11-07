import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectPreviewMockup } from '../components/common/ProjectPreviewMockup';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
        <h1 className="text-3xl font-display font-bold text-white">Project Not Found</h1>
        <p className="text-slate-400 max-w-md">
          The requested project does not exist in our directory.
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

  const otherProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link & Category */}
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
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed font-normal">
            {project.tagline}
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

        {/* Realistic Project Preview Interface Frame */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#090d16] aspect-[16/9] max-h-[580px] w-full">
          <ProjectPreviewMockup type={project.previewType} title={project.title} />
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Overview */}
          <div className="p-8 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullDesc}
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono text-slate-500 block">
                Concept Reference Implementation by Teklonics
              </span>
            </div>
          </div>

          {/* Key Features */}
          <div className="p-8 rounded-2xl bg-blue-950/20 border border-blue-500/30 space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Key Features
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Shipped Deliverables */}
        <div className="p-8 rounded-2xl bg-[#090d16] border border-white/[0.08] space-y-4">
          <h3 className="text-xl font-display font-bold text-white">
            Shipped Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.deliverables.map((del, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300">
                {del}
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Action Bar */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-display font-bold text-white">
              Interested in building a similar project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Let's discuss how we can tailor this solution to your business requirements.
            </p>
          </div>

          <Link
            to={`/contact?service=${encodeURIComponent(project.category)}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 flex-shrink-0"
          >
            <span>Discuss This Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Other Projects */}
        <div className="pt-8 border-t border-white/[0.08] space-y-6">
          <h3 className="text-xl font-display font-bold text-white">
            Explore More Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherProjects.map((other) => (
              <Link
                key={other.id}
                to={`/work/${other.slug}`}
                className="group p-5 rounded-xl bg-[#090d16] border border-white/[0.08] hover:border-blue-500/30 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-blue-400">{other.category}</span>
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{other.title}</h4>
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
