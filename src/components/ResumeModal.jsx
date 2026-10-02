import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { personalInfo, skillsData, projectsData, experienceData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Open resume in clean print view
    window.open('/Aman_Solanki_Resume.html', '_blank');
  };

  const handleCopyPlainText = () => {
    const plainResume = `AMAN SOLANKI
Python Full Stack Developer
Ahmedabad, Gujarat, India (Open to Relocation) | Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
Motivated and detail-oriented Computer Science graduate with hands-on experience in Python, Django REST Framework, React.js and REST API development. Currently strengthening Full Stack Development skills through practical web applications and building scalable, maintainable software.

TECHNICAL SKILLS
- Backend: Python, Django, Django REST Framework (DRF), REST APIs, SQLite, Object-Oriented Programming (OOP)
- Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap
- Tools: Git, GitHub, VS Code, Postman, Command Line, npm
- Soft Skills: Problem Solving, Clear Communication, Team Collaboration, Quick Learner

FEATURED PROJECTS
1. Student Support Ticket System (Python, Django REST Framework, JWT Authentication, REST API)
- Engineered a REST API based student support system for creating, managing and tracking academic support tickets.
- Implemented secure JWT authentication with token refresh mechanisms and role-based permissions.
- Developed complete CRUD operations with ticket status and priority workflows.
- Tested and verified API endpoints using Postman collections.

2. Product Management System (React.js, JavaScript, REST API, Tailwind CSS)
- Developed a dynamic frontend application for inventory and product management with real-time CRUD operations.
- Built responsive search and multi-parameter filtering across category, pricing, and availability.
- Integrated asynchronous REST APIs with error boundaries and responsive UI layouts.

3. Full Stack AI / Capstone Project (React.js, Python, REST APIs, JavaScript)
- Developed an end-to-end full-stack web application with decoupled React frontend and Python backend API.
- Implemented RESTful JSON communication, request validation, and dynamic client response rendering.

TRAINING & EXPERIENCE
Full Stack Development Training | Tops Technologies, Ahmedabad
- Completed intensive, project-driven training in Python, Django, DRF, and React.js.
- Mastered RESTful API design, serialization, authentication, and database modeling.
- Built practical CRUD web applications and practiced Git/GitHub collaboration hygiene.

EDUCATION
Bachelor of Technology (B.Tech) – Computer Science and Engineering
Chartered Institute of Technology (CIT)
Coursework: Data Structures & Algorithms, DBMS, OOP, Operating Systems, Computer Networks.`;

    navigator.clipboard.writeText(plainResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                ATS-Optimized Resume
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Aman Solanki — Python Full Stack Developer
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/Aman_Solanki_Resume.pdf"
              download="Aman_Solanki_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm cursor-pointer"
              title="Download Original PDF Resume"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shadow-sm cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Web View</span>
            </button>

            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
              title="Copy plain text for job applications"
            >
              {copiedText ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm bg-white text-slate-900 rounded-b-2xl m-3 sm:m-4 font-sans leading-normal select-text shadow-inner">
          
          {/* Resume Header */}
          <div className="text-center border-b-2 border-indigo-600 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              Aman Solanki
            </h1>
            <p className="text-base font-semibold text-indigo-700 mt-0.5">
              Python Full Stack Developer
            </p>
            <div className="text-xs text-slate-600 mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-indigo-600 hover:underline">{personalInfo.email}</a>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">GitHub</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Section: Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Motivated and detail-oriented Computer Science graduate with hands-on experience in Python, Django REST Framework, React.js and REST API development. Currently strengthening Full Stack Development skills through practical web applications and building scalable, maintainable software.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-[13px] text-slate-700">
              <div>
                <strong className="text-slate-900">Backend:</strong> Python, Django, Django REST Framework (DRF), REST APIs, SQLite / PostgreSQL, Object-Oriented Programming (OOP)
              </div>
              <div>
                <strong className="text-slate-900">Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap
              </div>
              <div>
                <strong className="text-slate-900">Developer Tools:</strong> Git, GitHub, VS Code, Postman, Terminal, npm
              </div>
              <div>
                <strong className="text-slate-900">Soft Skills:</strong> Problem Solving, Clear Communication, Teamwork, Quick Learning
              </div>
            </div>
          </div>

          {/* Section: Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Featured Projects
            </h2>

            {/* Project 1 */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                <strong className="text-slate-900">Student Support Ticket System</strong>
                <span className="text-slate-500 font-mono text-[11px]">Python, Django REST Framework, JWT, REST API</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                <li>Engineered a REST API-based student support system for creating, managing, and tracking academic support tickets.</li>
                <li>Implemented secure JWT authentication with token refresh mechanisms and role-based permissions.</li>
                <li>Developed complete CRUD operations with ticket status and priority workflows.</li>
                <li>Tested and validated all API endpoints using Postman collections.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-3">
              <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                <strong className="text-slate-900">Product Management System</strong>
                <span className="text-slate-500 font-mono text-[11px]">React.js, JavaScript, REST API, Tailwind CSS</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                <li>Developed a responsive frontend application for inventory and product management with real-time CRUD operations.</li>
                <li>Built real-time search and multi-parameter filtering across category, pricing, and availability.</li>
                <li>Integrated asynchronous REST APIs with error boundaries and responsive UI layouts.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
                <strong className="text-slate-900">Full Stack AI / Capstone Project</strong>
                <span className="text-slate-500 font-mono text-[11px]">React.js, Python, REST APIs, JavaScript</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
                <li>Developed an end-to-end full-stack web application with decoupled React frontend and Python backend API.</li>
                <li>Architected REST API communication with structured JSON payload serialization and client/server validation.</li>
              </ul>
            </div>

          </div>

          {/* Section: Training & Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Training & Practical Experience
            </h2>
            <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
              <div>
                <strong className="text-slate-900">Full Stack Development Training</strong>
                <span className="text-slate-600"> — Tops Technologies</span>
              </div>
              <span className="text-slate-500 text-[11px]">Ahmedabad, Gujarat</span>
            </div>
            <ul className="list-disc list-inside text-xs text-slate-700 mt-1 space-y-0.5">
              <li>Completed intensive, project-driven training in Python, Django, Django REST Framework, and React.js.</li>
              <li>Mastered RESTful API design, serialization, authentication, and database modeling.</li>
              <li>Built multiple practical CRUD web applications connecting Python backends to interactive frontend UIs.</li>
              <li>Applied Git and GitHub version control workflows, branching, and collaborative development standards.</li>
            </ul>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs sm:text-[13px]">
              <div>
                <strong className="text-slate-900">B.Tech in Computer Science and Engineering</strong>
                <span className="text-slate-600"> — Chartered Institute of Technology (CIT)</span>
              </div>
              <span className="text-slate-500 text-[11px]">Graduated Engineer</span>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP), Operating Systems, Computer Networks.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Ready for ATS systems and technical recruiters.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
