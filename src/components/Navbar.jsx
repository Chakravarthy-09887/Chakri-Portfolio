import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section calculation
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#09090B]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo with animated AI Icon */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#09090B] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold font-space tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              A CHAKRAVARTHY
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
              AI & DEV PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 glass-card px-4 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden xl:flex items-center gap-3">
          <a
            href="#contact"
            className="magnetic-btn px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-space text-xs font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-spin-slow" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl glass-card text-slate-300 hover:text-white border border-white/10"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#09090B]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-blue-600/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
