import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Globe, TrendingUp, Users2, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    category: 'Programming',
    icon: Code2,
    color: 'from-blue-500 to-cyan-400',
    glowColor: 'shadow-blue-500/20',
    skills: ['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'AI & Data Science',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    glowColor: 'shadow-purple-500/20',
    skills: [
      'Machine Learning',
      'Artificial Intelligence',
      'Data Analysis',
      'Algorithms',
      'Software Development',
    ],
  },
  {
    category: 'Web Development',
    icon: Globe,
    color: 'from-cyan-400 to-teal-400',
    glowColor: 'shadow-cyan-400/20',
    skills: ['Responsive Design', 'Frontend Development', 'Backend Basics'],
  },
  {
    category: 'Digital Marketing',
    icon: TrendingUp,
    color: 'from-amber-400 to-orange-500',
    glowColor: 'shadow-amber-400/20',
    skills: [
      'SEO',
      'Social Media Marketing',
      'Content Marketing',
      'Analytics',
    ],
  },
  {
    category: 'Soft Skills',
    icon: Users2,
    color: 'from-indigo-500 to-purple-400',
    glowColor: 'shadow-indigo-500/20',
    skills: [
      'Communication',
      'Problem Solving',
      'Teamwork',
      'Leadership',
      'Quick Learning',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10 glass-card-hover relative group flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Header inside Card */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${cat.color} p-[1px] shadow-lg ${cat.glowColor}`}>
                      <div className="w-full h-full bg-[#09090B] rounded-[15px] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-space text-white group-hover:text-cyan-400 transition-colors">
                        {cat.category}
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        {cat.skills.length} Expertise Items
                      </p>
                    </div>
                  </div>

                  {/* Skills Pill Badges */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-medium font-poppins text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Glowing Bar */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">PROFFICIENCY HIGH</span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
