import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Workflow,
  Server,
  UserCheck,
  Code2,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const hasDemo = Boolean(project.demo && project.demo !== '#' && project.demo.trim() !== '');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          
          {/* Role & Overview Banner */}
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <UserCheck className="w-5 h-5 text-indigo-400" />
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">My Role</span>
                <span className="text-sm font-bold text-white">{project.role}</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
              Verified Project
            </span>
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Project Overview</span>
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-xs font-mono font-medium hover:border-indigo-500/40 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 p-2 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Development Highlights</span>
              </h4>
              <ul className="space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Layer Breakdown (if available) */}
          {project.architecture && (
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3 flex items-center gap-1.5">
                <Workflow className="w-4 h-4 text-indigo-400" />
                System Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(project.architecture).map(([key, value]) => (
                  <div key={key} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="font-mono text-slate-400 capitalize block text-[11px] mb-0.5">{key} Layer</span>
                    <span className="text-slate-200 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Endpoints Table (if available) */}
          {project.endpoints && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
                <Server className="w-4 h-4 text-cyan-400" />
                Verified REST Endpoints
              </h4>
              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-slate-900 text-slate-400">
                    <tr>
                      <th className="py-2.5 px-3">Method</th>
                      <th className="py-2.5 px-3">Endpoint</th>
                      <th className="py-2.5 px-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
                    {project.endpoints.map((ep, i) => (
                      <tr key={i} className="hover:bg-slate-900/40">
                        <td className="py-2 px-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            ep.method === 'GET' ? 'bg-emerald-500/20 text-emerald-400' :
                            ep.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            ep.method === 'PUT' ? 'bg-amber-500/20 text-amber-400' :
                            ep.method === 'PATCH' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-rose-500/20 text-rose-400'
                          }`}>
                            {ep.method}
                          </span>
                        </td>
                        <td className="py-2 px-3 text-slate-200">{ep.path}</td>
                        <td className="py-2 px-3 text-slate-400 font-sans">{ep.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Live Demo Button */}
            {hasDemo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span 
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-500 bg-slate-900 border border-slate-800 cursor-not-allowed"
                title="Live demo deployment link will be attached once cloud hosting goes live"
              >
                <span>Demo (API Backend)</span>
              </span>
            )}

            {/* GitHub Source Code Button */}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-500 bg-slate-800/40 border border-slate-800 cursor-not-allowed"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Code</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
