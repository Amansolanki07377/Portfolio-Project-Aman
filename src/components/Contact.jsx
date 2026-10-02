import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden border-t border-slate-800/80 bg-slate-950">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            I am actively interviewing and open to full-time roles, engineering discussions, and recruiter inquiries.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Phone Number</span>
                    <a 
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} 
                      className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Current Location</span>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {personalInfo.relocation}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Professional Profiles</span>
                <span className="text-xs text-slate-400">GitHub & LinkedIn</span>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-indigo-400 hover:bg-slate-700 transition-colors"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Recruiter Quick Status note */}
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Typical response time: Within 24 hours for recruiter inquiries.</span>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/90 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have a job opening or want to discuss a software project? Fill in your details below.
              </p>

              {/* Success Alert */}
              {submitted && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-start gap-3 text-emerald-200 text-xs sm:text-sm animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Message Sent Successfully!</span>
                    <span>Thank you for reaching out. I will get back to you promptly.</span>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {errorMsg && (
                <div className="p-4 mb-6 rounded-xl bg-rose-950/60 border border-rose-500/40 flex items-start gap-3 text-rose-200 text-xs sm:text-sm animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins (Recruiter)"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Python Full Stack Developer Opening"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the opportunity, interview invitation, or project query..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
