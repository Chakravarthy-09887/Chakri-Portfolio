import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Code, Flame, UserCheck } from 'lucide-react';

const statsCards = [
  {
    title: 'B.Tech AI & DS',
    subtitle: 'Degree Pursuit',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-400',
    borderColor: 'border-blue-500/30',
  },
  {
    title: 'CGPA: 8.6',
    subtitle: 'Academic Excellence',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
  },
  {
    title: 'Digital Marketing Internship Completed',
    subtitle: 'Industry Experience',
    icon: Briefcase,
    color: 'from-cyan-400 to-emerald-400',
    borderColor: 'border-cyan-400/30',
  },
  {
    title: 'Software Development Enthusiast',
    subtitle: 'Core Focus',
    icon: Code,
    color: 'from-indigo-500 to-blue-400',
    borderColor: 'border-indigo-500/30',
  },
  {
    title: 'Continuous Learner',
    subtitle: 'Growth Mindset',
    icon: Flame,
    color: 'from-amber-400 to-orange-500',
    borderColor: 'border-amber-400/30',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Box with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-16 relative overflow-hidden"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-poppins font-normal">
              I am currently pursuing my Bachelor of Technology in Artificial Intelligence and Data Science in Tamil Nadu, India. I am passionate about software engineering, artificial intelligence, data analysis, algorithms, and full-stack web development. I enjoy transforming innovative ideas into practical digital solutions while continuously improving my technical and problem-solving skills. I believe in lifelong learning, collaboration, and building impactful technology that creates real value.
            </p>
          </div>
        </motion.div>

        {/* 5 Animated Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {statsCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border ${card.borderColor} glass-card-hover group relative flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} p-[1px] mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-[#09090B] rounded-[11px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold font-space text-white leading-snug group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs font-mono text-slate-400 mt-4 tracking-wider uppercase">
                  {card.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
