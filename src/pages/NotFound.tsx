import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Layers } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-md w-full text-center space-y-6 relative z-10 glass-card p-8 sm:p-10 rounded-2xl border border-white/[0.08]">
        <div className="w-14 h-14 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto font-mono text-xl font-bold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-display font-bold text-white">
            Resource Not Located
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The endpoint or page you requested does not exist in the Teklonics application route tree.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <a
            href="/#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Explore Services</span>
          </a>
        </div>
      </div>
    </div>
  );
};
