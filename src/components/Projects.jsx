import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Code2, 
  Cpu, 
  KeyRound, 
  Search, 
  Database, 
  UserCheck,
  ChevronRight,
  BarChart3,
  TestTube2,
  Workflow
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const featuredProject = projectsData.find(p => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter(p => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-20 relative overflow-hidden border-t border-slate-800/80 bg-slate-950/70">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Practical full-stack, backend API, and frontend applications demonstrating core competence in Python, Django REST Framework, and React.js.
          </p>
        </div>

        {/* 1. MAIN FEATURED PROJECT CARD (Full Width & Larger) */}
        {featuredProject && (
          <div className="mb-12">
            <div className="group relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-950/30 border-2 border-indigo-500/40 hover:border-indigo-400/70 transition-all duration-300 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12 backdrop-blur-md">
              
              {/* Top Banner Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full bg-indigo-600 text-white text-xs font-mono font-bold tracking-wide shadow-md shadow-indigo-600/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FEATURED PROJECT</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-mono">
                    {featuredProject.category}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Role: {featuredProject.role}</span>
                </div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Information (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-indigo-300/90 font-medium mt-1.5">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tech stack badges */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                      Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tech.map((t, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 rounded-xl bg-slate-800/90 border border-indigo-500/30 text-indigo-200 text-xs font-mono font-medium shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4 Important Features */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Core Architecture & Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                      {featuredProject.features.slice(0, 4).map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-950/40 border border-slate-800/60">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-3">
                    <button
                      onClick={() => handleOpenDetails(featuredProject)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>View Project Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {featuredProject.demo && (
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/80 border border-slate-700/80 transition-all duration-200 cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Right: Interactive Full-Stack Workstation Visual (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-slate-950 p-5 font-mono text-xs border border-slate-800/90 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-slate-400 text-[11px] ml-1">portfolio_api/views.py</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">200 OK</span>
                    </div>

                    <div className="py-4 space-y-2 text-slate-300">
                      <div className="text-slate-500">// React.js SPA &lt;--&gt; Django REST Framework</div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <div className="text-cyan-400 font-semibold">GET /api/v1/projects/</div>
                        <div className="text-slate-400 text-[11px] font-sans">
                          Returned 3 featured projects with tags, JSON serializers & CORS validation.
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <div className="text-indigo-400 font-semibold">POST /api/v1/auth/jwt/create/</div>
                        <div className="text-slate-400 text-[11px] font-sans">
                          Role: Admin • Permissions: IsAuthenticated • MySQL DB
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-indigo-400">
                        <Workflow className="w-3.5 h-3.5" />
                        <span>Decoupled Full Stack</span>
                      </span>
                      <span>MySQL Relational ORM</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2. SECONDARY PROJECTS GRID (Projects 2 & 3 in 2-Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md hover:-translate-y-1"
            >
              {/* Card Top: Badges & Title */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium">
                    {project.category}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
                    <UserCheck className="w-3 h-3 text-indigo-400" />
                    <span>Role: {project.role}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3-4 Key Features */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Features:
                  </span>
                  <div className="space-y-1.5">
                    {project.features.slice(0, 4).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Context Box */}
                {project.id === 'student-record-academic-api' ? (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] mb-6 space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <TestTube2 className="w-3.5 h-3.5" />
                        <span>python -m unittest tests/</span>
                      </span>
                      <span className="text-emerald-400">PASSED</span>
                    </div>
                    <div className="text-slate-400 text-[10px]">
                      Ran 8 test cases in 0.042s (test_crud, test_validation, test_exceptions)
                    </div>
                    <div className="text-indigo-300 text-[10px]">
                      HTTP Status: 200 OK | 201 Created | 400 Bad Request
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] mb-6 space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>fetch('/api/v1/teams')</span>
                      </span>
                      <span className="text-blue-400">REST API</span>
                    </div>
                    <div className="text-slate-300 text-[10px] flex justify-between">
                      <span>Live Search & Filtering</span>
                      <span className="text-emerald-400 font-semibold">Active UI</span>
                    </div>
                    <div className="text-slate-400 text-[10px]">
                      Responsive Grid • Player Profiles • Match Statistics
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => handleOpenDetails(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm cursor-pointer"
                >
                  <span>View Project</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-500 bg-slate-800/50 border border-slate-800 cursor-not-allowed"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </button>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                      title="Live Demo"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3 text-indigo-400" />
                    </a>
                  ) : (
                    <span 
                      className="px-2.5 py-1.5 rounded-lg text-[10px] font-mono text-slate-500 bg-slate-900 border border-slate-800"
                      title="Backend API application"
                    >
                      API Service
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />
    </section>
  );
}
