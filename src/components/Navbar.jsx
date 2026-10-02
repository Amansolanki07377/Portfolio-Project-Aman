import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileDown, 
  Code2, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/20 shadow-lg shadow-black/30 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-emerald-400/50 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              <img 
                src="/profile.jpg" 
                alt="Aman Solanki" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-emerald-300 font-medium tracking-wide">
                Python Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-emerald-500/20 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm shadow-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-emerald-100 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 text-xs font-medium flex items-center gap-1"
              title="Resume"
            >
              <FileDown className="w-4 h-4" />
              <span className="hidden xs:inline">Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}

            <div className="pt-3 border-t border-slate-800/80 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 shadow-md shadow-emerald-600/30"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (ATS Ready)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
