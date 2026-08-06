import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400 -translate-x-1/2 shadow-[0_0_12px_#3B82F6]" />

          {/* Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col sm:flex-row items-center justify-between gap-8 mb-12"
          >
            {/* Timeline Animated Graduation Icon Marker */}
            <div className="absolute left-6 sm:left-1/2 top-0 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] shadow-[0_0_25px_rgba(59,130,246,0.6)] z-20">
              <div className="w-full h-full bg-[#09090B] rounded-[14px] flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <GraduationCap className="w-7 h-7 text-cyan-400" />
                </motion.div>
              </div>
            </div>

            {/* Timeline Content Card */}
            <div className="w-full sm:w-[calc(100%-4rem)] ml-14 sm:ml-0 pl-4 sm:pl-0">
              <div className="glass-card p-8 rounded-3xl border border-blue-500/30 glass-card-hover relative shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                
                {/* Top Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                    Pursuing B.Tech Degree
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>Present</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-space text-white mb-1">
                  Bachelor of Technology
                </h3>
                <h4 className="text-lg font-semibold text-gradient-purple mb-4">
                  Artificial Intelligence and Data Science
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <Award className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-slate-400 font-mono">ACADEMIC SCORE</p>
                      <p className="text-base font-bold text-purple-300 font-space">CGPA: 8.6</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-xs text-slate-400 font-mono">LOCATION</p>
                      <p className="text-base font-bold text-cyan-300 font-space">Tamil Nadu, India</p>
                    </div>
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

export default Education;
