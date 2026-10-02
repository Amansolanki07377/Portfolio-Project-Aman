import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-20 relative overflow-hidden border-t border-slate-800/80 bg-slate-950/60">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Formal undergraduate education in Computer Science providing the theoretical backbone for software engineering.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-2xl p-6 sm:p-10 backdrop-blur-md">
            
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
                      DEGREE PROGRAM
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-medium">
                      B.Tech Graduate
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {edu.degree}
                  </h3>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-base font-semibold text-indigo-300">
                  {edu.institution}
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-xs text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed my-6">
              {edu.description}
            </p>

            {/* Core Coursework Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Foundational Computer Science Coursework:</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {edu.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>{course}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Key Academic Takeaways */}
            <div className="pt-4 border-t border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {edu.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
