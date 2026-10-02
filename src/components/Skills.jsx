import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Server, 
  Terminal, 
  HeartHandshake, 
  Cpu, 
  Layers, 
  Binary, 
  Workflow, 
  Network, 
  GitBranch, 
  Send, 
  Lightbulb, 
  MessageSquare, 
  Users, 
  Zap, 
  Atom, 
  FileCode, 
  CodeXml, 
  Palette, 
  LayoutGrid
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconComponents = {
    Atom: Atom,
    FileCode: FileCode,
    CodeXml: CodeXml,
    Palette: Palette,
    Sparkles: Sparkles,
    LayoutGrid: LayoutGrid,
    Binary: Binary,
    Workflow: Workflow,
    Cpu: Cpu,
    Network: Network,
    GitBranch: GitBranch,
    Github: GithubIcon,
    Terminal: Terminal,
    Send: Send,
    Lightbulb: Lightbulb,
    MessageSquare: MessageSquare,
    Users: Users,
    Zap: Zap
  };

  const filteredSkills = activeCategory === 'all' 
    ? skillsData.items 
    : skillsData.items.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden border-t border-slate-800/80 bg-slate-950">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Specialized toolkit spanning robust Python backend APIs, modern React frontend interfaces, and industry-standard workflows.
          </p>
        </div>

        {/* Category Filters Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Categorized Visual Overview Cards (Summary) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-2">
              <Server className="w-4 h-4" />
              <span>Backend Mastery</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Python, Django, Django REST Framework, RESTful APIs, JWT Auth & Permissions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-2">
              <Code2 className="w-4 h-4" />
              <span>Frontend Engineering</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
              <Terminal className="w-4 h-4" />
              <span>Developer Tooling</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Git, GitHub, VS Code, Postman API Testing & debugging environments.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
              <HeartHandshake className="w-4 h-4" />
              <span>Soft Skills</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Problem Solving, Communication, Team Collaboration, Quick Learning.
            </p>
          </div>

        </div>

        {/* Animated Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = iconComponents[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="group relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 flex flex-col justify-between"
              >
                {/* Top Row: Icon + Badge */}
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {skill.badge}
                    </span>
                  </div>

                  {/* Title & Level */}
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-medium text-emerald-400">
                      {skill.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="capitalize">{skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 group-hover:bg-indigo-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
