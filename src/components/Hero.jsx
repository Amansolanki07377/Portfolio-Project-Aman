import React, { useState } from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  Code2, 
  Terminal, 
  Check, 
  Copy, 
  Sparkles,
  Layers,
  Database,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, heroCodeSnippet } from '../data/portfolioData';

const reactCodeSnippet = `// Product Management System - ProductList.jsx
import React, { useState, useEffect } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from Python Django REST API
    fetch('/api/products/')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(item => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}`;

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('python');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const textToCopy = activeTab === 'python' ? heroCodeSnippet : reactCodeSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-amber-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Profile Avatar & Status Pill */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 rounded-2xl blur-sm opacity-80 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Aman Solanki" 
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-slate-900 shadow-xl"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950" title="Available for immediate hiring"></span>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/20 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for Full-Time Roles</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-300 font-mono">Immediate Joiner</span>
                </div>
                <span className="text-xs text-slate-400 font-mono pl-1">Ahmedabad, India • B.Tech CSE</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              <span className="block text-slate-200">Hi, I'm Aman Solanki</span>
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-300 bg-clip-text text-transparent mt-1">
                Python Full Stack Developer
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-semibold text-emerald-300/90 mb-4 tracking-wide flex flex-wrap items-center gap-2">
              <span>B.Tech Computer Science Graduate</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-300">Python</span>
              <span className="text-slate-600">|</span>
              <span className="text-teal-300">Django REST Framework</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-300">React.js</span>
            </p>

            {/* Short Introduction */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Motivated and detail-oriented Computer Science graduate with hands-on experience in Python, Django REST Framework, React.js and REST API development. Currently strengthening my Full Stack Development skills and building practical web applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-200 shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-emerald-300" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons & Highlights */}
            <div className="flex items-center gap-5 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-slate-800 transition-all duration-200"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-slate-800 transition-all duration-200"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-amber-300 hover:border-emerald-500/40 hover:bg-slate-800 transition-all duration-200"
                  title="Direct Email"
                  aria-label="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Ahmedabad, India • Relocation Open</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Developer Coding Visual / Live IDE Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Glow frame */}
            <div className="relative rounded-2xl bg-gradient-to-b from-emerald-500/20 via-cyan-500/10 to-transparent p-[1px] shadow-2xl shadow-emerald-950/40">
              
              <div className="bg-slate-950/90 rounded-2xl overflow-hidden border border-slate-800/90 backdrop-blur-xl">
                
                {/* IDE Window Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  {/* File Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('python')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                        activeTab === 'python'
                          ? 'bg-slate-800 text-indigo-400 border border-slate-700 font-medium'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      <span>portfolio_api/views.py</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('react')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                        activeTab === 'react'
                          ? 'bg-slate-800 text-cyan-400 border border-slate-700 font-medium'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>ProductList.jsx</span>
                    </button>
                  </div>

                  {/* Copy snippet button */}
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                    title="Copy snippet"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto max-h-[380px] bg-slate-950/70 select-text">
                  <pre className="whitespace-pre">
                    {activeTab === 'python' ? (
                      <code>
                        <span className="text-slate-500"># Aman Solanki - Backend Core</span>{'\n'}
                        <span className="text-purple-400">from</span> rest_framework <span className="text-purple-400">import</span> viewsets, permissions{'\n'}
                        <span className="text-purple-400">from</span> rest_framework.response <span className="text-purple-400">import</span> Response{'\n'}
                        <span className="text-purple-400">from</span> rest_framework_simplejwt.authentication <span className="text-purple-400">import</span> JWTAuthentication{'\n'}
                        <span className="text-purple-400">from</span> .models <span className="text-purple-400">import</span> SupportTicket{'\n'}
                        <span className="text-purple-400">from</span> .serializers <span className="text-purple-400">import</span> TicketSerializer{'\n\n'}
                        <span className="text-blue-400">class</span> <span className="text-yellow-300 font-semibold">SupportTicketViewSet</span>(viewsets.ModelViewSet):{'\n'}
                        {'    '}<span className="text-emerald-400">"""REST API: Manage Support Tickets"""</span>{'\n'}
                        {'    '}queryset = SupportTicket.objects.all(){'\n'}
                        {'    '}serializer_class = TicketSerializer{'\n'}
                        {'    '}authentication_classes = [JWTAuthentication]{'\n'}
                        {'    '}permission_classes = [permissions.IsAuthenticated]{'\n\n'}
                        {'    '}<span className="text-blue-400">def</span> <span className="text-amber-300">perform_create</span>(self, serializer):{'\n'}
                        {'        '}serializer.save(student=self.request.user){'\n'}
                        {'        '}<span className="text-slate-500"># Status 201 Created</span>
                      </code>
                    ) : (
                      <code>
                        <span className="text-slate-500">// Aman Solanki - Frontend Core</span>{'\n'}
                        <span className="text-purple-400">import</span> React, {'{'} useState, useEffect {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;{'\n\n'}
                        <span className="text-blue-400">export default function</span> <span className="text-yellow-300 font-semibold">ProductList</span>() {'{'}{'\n'}
                        {'  '}const [products, setProducts] = useState([]);{'\n'}
                        {'  '}const [loading, setLoading] = useState(true);{'\n\n'}
                        {'  '}useEffect(() =&gt; {'{'}{'\n'}
                        {'    '}<span className="text-slate-500">// Connecting React to Python REST API</span>{'\n'}
                        {'    '}fetch(<span className="text-emerald-300">'/api/products/'</span>){'\n'}
                        {'      '}.then(res =&gt; res.json()){'\n'}
                        {'      '}.then(data =&gt; {'{'}{'\n'}
                        {'        '}setProducts(data);{'\n'}
                        {'        '}setLoading(false);{'\n'}
                        {'      '}{'}'});{'\n'}
                        {'  '}{'}'}, []);{'\n\n'}
                        {'  '}return &lt;<span className="text-cyan-400">ProductGrid</span> items={'{'}products{'}'} /&gt;;{'\n'}
                        {'}'}
                      </code>
                    )}
                  </pre>
                </div>

                {/* IDE Status Bar */}
                <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-indigo-400">
                      <Terminal className="w-3 h-3" />
                      <span>git:(main)</span>
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>REST API: 200 OK</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <span>UTF-8</span>
                    <span>{activeTab === 'python' ? 'Python 3.11' : 'React 19'}</span>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: DRF REST API (Top right) */}
              <div className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-indigo-500/40 shadow-xl backdrop-blur-md text-xs font-medium text-white hover:scale-105 transition-transform duration-200">
                <div className="w-6 h-6 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 leading-tight">Backend Architecture</div>
                  <div className="font-semibold text-indigo-300">Django REST Framework</div>
                </div>
              </div>

              {/* Floating Badge 2: React UI (Bottom left) */}
              <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md text-xs font-medium text-white hover:scale-105 transition-transform duration-200">
                <div className="w-6 h-6 rounded-lg bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 leading-tight">Frontend Client</div>
                  <div className="font-semibold text-cyan-300">React.js & State Logic</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
