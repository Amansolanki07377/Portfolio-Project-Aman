import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07131d] text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Fixed Sticky Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={handleOpenResume} />
        <About onOpenResume={handleOpenResume} />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ResumeCTA onOpenResume={handleOpenResume} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* ATS Resume Modal Viewer & Downloader */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={handleCloseResume} 
      />
    </div>
  );
}
