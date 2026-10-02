import React from 'react';
import { 
  GraduationCap, 
  Server, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const iconMap = {
    GraduationCap: GraduationCap,
    Layers: Layers,
    Server: Server,
    Code2: Code2
  };

  const keyStrengths = [
    "Clean REST API design using Django REST Framework & ModelViewSets",
    "Secure JWT Token-based user authentication and role permissions",
    "Dynamic, responsive Single Page Applications (SPA) with React.js",
    "Complete CRUD application architectures with database modeling",
    "Clean version control hygiene with Git & GitHub pull requests",
    "Eager learner with strong computer science & analytical problem-solving foundation"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden border-t border-slate-800/80 bg-slate-950/50">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & OBJECTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            A focused Computer Science graduate combining academic fundamentals with practical, modern Full Stack web engineering.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span>Professional Profile</span>
              </h3>

              <p className="text-slate-300 leading-relaxed mb-4">
                I hold a <strong className="text-white font-semibold">B.Tech in Computer Science</strong> from Chartered Institute of Technology. Through rigorous academic coursework, I built solid theoretical foundations in data structures, algorithms, database management systems, and object-oriented software engineering.
              </p>

              <p className="text-slate-300 leading-relaxed mb-4">
                To bridge academic fundamentals with current industry engineering standards, I completed an intensive <strong className="text-white font-semibold">Full Stack Development Training at Tops Technologies, Ahmedabad</strong>. Here, I immersed myself in real-world application architectures, mastering Python backend development, Django REST Framework, and React.js frontend development.
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                I possess hands-on experience building <strong className="text-indigo-300 font-semibold">REST APIs and end-to-end CRUD applications</strong>—such as a student support ticket system with JWT authentication and a responsive product management system. Driven by a deep passion for continuous learning, I am eager to apply my problem-solving skills to real-world engineering teams.
              </p>

              {/* Key Competencies Checklist */}
              <div className="pt-5 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                  What I Bring to Your Team:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {keyStrengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {aboutData.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center hover:border-slate-700 transition-colors"
                >
                  <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Highlights Cards Column (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            {/* Developer Identity Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/70 to-indigo-950/40 border border-slate-800 flex items-center gap-4 shadow-xl">
              <div className="relative shrink-0">
                <img 
                  src="/profile.jpg" 
                  alt="Aman Solanki" 
                  className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-indigo-500/40 shadow-lg"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900" title="Immediate Joiner"></span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                  Full Stack Developer
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  Aman Solanki
                </h4>
                <p className="text-xs text-slate-400">
                  B.Tech CSE • Chartered Institute of Technology
                </p>
                <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5 pt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Available for immediate joining</span>
                </div>
              </div>
            </div>
            {aboutData.highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon] || Code2;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-1 shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-xs font-mono text-indigo-400 mt-0.5">
                        {highlight.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Recruiter Callout Mini Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-purple-950/40 border border-indigo-500/30 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Recruiter Transparency
                </span>
                <span className="text-[11px] text-slate-400">Entry-Level / Junior</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                No exaggerated claims or inflated years of experience. Just genuine computer science rigor, verified training, and real working code.
              </p>
              <button
                onClick={onOpenResume}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group cursor-pointer"
              >
                <span>View Full ATS Resume details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
