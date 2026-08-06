import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, FolderGit2, Cpu, Trophy } from 'lucide-react';

const achievementData = [
  {
    label: 'CGPA Score',
    value: '8.6',
    subtext: 'B.Tech AI & Data Science',
    icon: Award,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    label: 'Internship Completed',
    value: '1',
    subtext: 'Digital Marketing Intern',
    icon: Briefcase,
    color: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Projects Completed',
    value: '6+',
    subtext: 'AI, Web & ML Apps',
    icon: FolderGit2,
    color: 'from-cyan-400 to-emerald-400',
  },
  {
    label: 'Technical Skill Areas',
    value: '5+',
    subtext: 'Programming & Marketing',
    icon: Cpu,
    color: 'from-amber-400 to-orange-500',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10 glass-card-hover text-center relative group shadow-2xl overflow-hidden"
              >
                {/* Glowing Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${item.color} p-[1px] mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-[#09090B] rounded-[15px] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>

                {/* Animated Metric Number */}
                <h3 className="text-4xl sm:text-5xl font-black font-space text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {item.value}
                </h3>

                <h4 className="text-base font-bold font-space text-slate-200 mb-1">
                  {item.label}
                </h4>

                <p className="text-xs font-mono text-slate-400">
                  {item.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
