import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, CheckCircle2, TrendingUp } from 'lucide-react';

const responsibilities = [
  'SEO Optimization & Search Rankings',
  'Social Media Campaigns & Engagement',
  'Content Strategy & Copywriting',
  'Marketing Analytics & Data Insights',
  'Digital Branding & Positioning',
  'Marketing Research & Competitor Analysis',
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-purple-500/30 glass-card-hover relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Row */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30 mb-3 inline-block">
                  Completed Internship
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-space text-white">
                  Digital Marketing Intern
                </h3>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold font-space mt-1 text-lg">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span>A&D Waves Technologies</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-slate-300">Industry Exposure</span>
              </div>
            </div>

            {/* Responsibilities List Grid */}
            <div className="pt-8 space-y-4">
              <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest font-semibold mb-4">
                KEY RESPONSIBILITIES & CONTRIBUTIONS:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {responsibilities.map((resp) => (
                  <div
                    key={resp}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="text-sm font-medium font-poppins text-slate-200 group-hover:text-white">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
