import React from 'react';
import { 
  FileDown, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeCTA({ onOpenResume }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden border-t border-slate-800/80">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-slate-950/50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-900/30 via-slate-900/90 to-purple-900/30 border border-indigo-500/30 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HIRING & OPPORTUNITIES</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Looking for a Python / Full Stack Developer opportunity?
          </h2>

          {/* Body Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            I’m open to entry-level opportunities where I can contribute my development skills and continue growing as a software developer.
          </p>

          {/* Highlights Badges for Recruiters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Immediate Joiner</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open to Relocation & Remote</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full Stack Python + React Ready</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-white" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Contact Me</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
