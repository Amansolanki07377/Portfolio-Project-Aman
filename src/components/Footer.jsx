import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Code2, 
  Heart, 
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/60">
          
          {/* Left Column: Brand & Role (6 cols) */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                AS
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Python Full Stack Developer • B.Tech Computer Science Graduate
            </p>
            <p className="text-xs text-slate-500 max-w-md">
              Specialized in Python backend APIs with Django REST Framework and responsive frontend applications with React.js.
            </p>
          </div>

          {/* Middle Column: Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-indigo-400 transition-colors py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-3">
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-slate-700 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="Email"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-2 cursor-pointer"
                title="Back to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onOpenResume}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4 cursor-pointer"
            >
              Download ATS Resume (PDF / Print)
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Aman Solanki. All rights reserved.
          </div>
          <div>
            Engineered with React.js & Tailwind CSS for technical recruiters & hiring managers.
          </div>
        </div>

      </div>
    </footer>
  );
}
