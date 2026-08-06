import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-[#09090B] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <div className="w-full h-full bg-[#09090B] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="text-base font-bold font-space text-white">
              A CHAKRAVARTHY
            </span>
          </div>

          {/* Social Icons with Neon Glow */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card text-slate-300 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="magnetic-btn p-3 rounded-xl glass-card text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2 text-xs font-mono"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Credits Line */}
        <div className="pt-8 text-center">
          <p className="text-sm font-poppins text-slate-400">
            Designed and Developed by <span className="text-white font-bold font-space">A Chakravarthy</span>
          </p>
          <p className="text-[11px] font-mono text-slate-500 mt-1">
            © {new Date().getFullYear()} All Rights Reserved. Built with React & TailwindCSS.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
