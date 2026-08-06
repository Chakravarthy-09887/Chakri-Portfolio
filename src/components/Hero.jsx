import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FolderGit2, Sparkles, ArrowRight, Code2, Cpu, Brain, Rocket, Terminal } from 'lucide-react';

const typingRoles = [
  "Aspiring Software Developer",
  "AI & Data Science Student",
  "Enthusiastic AI Engineer",
  "Continuous Learner",
  "Digital Marketing Enthusiast"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    let timer;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 70);
    } else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % typingRoles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Glow Orbs in Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Typewriter, Role Statement, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>AI Developer & Data Science Specialist</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-space tracking-tight text-white">
                Hi, I'm <br />
                <span className="text-gradient font-black">A Chakravarthy</span>
              </h1>
              
              {/* Animated Typewriter */}
              <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
                  <span className="text-cyan-400 font-mono font-bold border-b-2 border-purple-500 pb-0.5">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-purple-400 font-extrabold ml-1">|</span>
                </span>
              </div>
            </div>

            {/* Exact Role Statement */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm sm:text-base font-semibold text-purple-300/90 font-space tracking-wide">
                Aspiring Software Developer | AI & Data Science Student | Digital Marketing Enthusiast
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-poppins font-normal">
                Build intelligent software, solve real-world problems, and continuously learn emerging technologies.
              </p>
            </div>

            {/* Glowing CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="magnetic-btn px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-space font-bold shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                <FolderGit2 className="w-5 h-5 text-cyan-200" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Chakravarthy_A_Resume.txt"
                download="A_Chakravarthy_Resume.txt"
                className="magnetic-btn px-7 py-4 rounded-xl glass-card text-white hover:text-cyan-400 font-space font-bold border border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-5 h-5 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Tech Highlights Badge Row */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">Tech Stack:</span>
              {['Python', 'Machine Learning', 'Data Analysis', 'Full-Stack', 'SEO'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md glass-card text-[11px] font-mono text-slate-300 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>

          {/* Right Column: 3D Style Interactive AI Developer Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]">
              
              {/* Outer Glowing Radial Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 blur-2xl opacity-40 animate-pulse-glow" />

              {/* Main Holographic Glass Card Container */}
              <div className="relative w-full h-full rounded-3xl glass-card border border-white/15 p-6 flex flex-col items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden group">
                
                {/* Background Code Stream effect */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Top Terminal Header */}
                <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/90 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    ai_engine.py
                  </span>
                </div>

                {/* Center Animated Hologram Avatar */}
                <div className="relative my-4 flex items-center justify-center">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-pulse-slow">
                    <div className="w-full h-full rounded-full bg-[#09090B] flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/20" />
                      <Cpu className="w-14 h-14 text-cyan-400 mb-1 animate-bounce-slow" />
                      <span className="text-xl font-bold font-space text-white tracking-wider">A.C</span>
                      <span className="text-[9px] font-mono text-purple-300">CGPA: 8.6</span>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Coding Badges */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-16 -left-2 sm:-left-4 glass-card px-3 py-2 rounded-xl border border-blue-500/40 shadow-lg flex items-center gap-2 text-xs font-mono text-blue-300"
                >
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>Python & Java</span>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-28 -right-2 sm:-right-4 glass-card px-3 py-2 rounded-xl border border-purple-500/40 shadow-lg flex items-center gap-2 text-xs font-mono text-purple-300"
                >
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span>AI & ML Neural Nets</span>
                </motion.div>

                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-16 -left-2 sm:-left-4 glass-card px-3 py-2 rounded-xl border border-cyan-500/40 shadow-lg flex items-center gap-2 text-xs font-mono text-cyan-300"
                >
                  <Rocket className="w-4 h-4 text-cyan-400" />
                  <span>Digital Marketing</span>
                </motion.div>

                {/* Bottom Stats Footer inside Card */}
                <div className="w-full grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center relative z-10">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-bold text-blue-400 font-space">8.6</p>
                    <p className="text-[9px] text-slate-400 uppercase font-mono">CGPA</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <p className="text-sm font-bold text-purple-400 font-space">6+</p>
                    <p className="text-[9px] text-slate-400 uppercase font-mono">Projects</p>
                  </div>
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <p className="text-sm font-bold text-cyan-400 font-space">1</p>
                    <p className="text-[9px] text-slate-400 uppercase font-mono">Internship</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
