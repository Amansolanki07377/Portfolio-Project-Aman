import React from 'react';
import { 
  Sparkles, 
  Layers, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  GraduationCap, 
  Code2, 
  Server, 
  Cpu, 
  Database,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const training = experienceData[0];

  return (
    <section id="experience" className="py-20 relative overflow-hidden border-t border-slate-800/80 bg-slate-950">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRACTICAL FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Training & Practical Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Honest and focused technical preparation through rigorous, project-oriented full stack training.
          </p>
        </div>

        {/* Experience / Training Master Card */}
        <div className="max-w-4xl mx-auto">
          
          <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-2xl p-6 sm:p-10 backdrop-blur-md">
            
            {/* Top Bar: Badge & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                      VERIFIED TRAINING
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Industry Curriculum</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {training.role}
                  </h3>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-sm font-semibold text-indigo-300">
                  {training.organization}
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-xs text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{training.location}</span>
                </div>
              </div>

            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed my-6">
              {training.description}
            </p>

            {/* Key Curriculum Modules Covered */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Hands-on Modules & Core Concepts Mastered:</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {training.modules.map((mod, mIndex) => (
                  <div 
                    key={mIndex}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{mod.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Takeaway Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/60 border border-indigo-500/30 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold block mb-1">
                  Recruiter Transparency Note
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {training.keyTakeaway} Clearly cataloged as structured, project-intensive training so hiring teams can evaluate skills with full confidence and clarity.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
