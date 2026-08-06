import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

const certsList = [
  {
    title: 'Python Programming Certification',
    issuer: 'Authorized Tech Academy',
    category: 'Programming & Logic',
    date: 'Verified Certificate',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'AI Global Institute',
    category: 'Artificial Intelligence',
    date: 'Verified Certificate',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Machine Learning Basics',
    issuer: 'Data Science Learning Hub',
    category: 'Machine Learning',
    date: 'Verified Certificate',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Web Development Certification',
    issuer: 'Full Stack Academy',
    category: 'Frontend & Web',
    date: 'Verified Certificate',
    color: 'from-cyan-400 to-teal-400',
  },
  {
    title: 'Digital Marketing Certification',
    issuer: 'Digital Marketing Alliance',
    category: 'Marketing & SEO',
    date: 'Verified Certificate',
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Data Analytics Certification',
    issuer: 'Analytics Association',
    category: 'Data Science & Metrics',
    date: 'Verified Certificate',
    color: 'from-emerald-400 to-teal-500',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
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
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Badges</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certsList.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-7 rounded-3xl border border-white/10 glass-card-hover relative group flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Decorative Top Accent Glow */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color} rounded-full mb-6`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-space text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-poppins text-slate-400">
                  Issued by: <span className="text-slate-200 font-semibold">{cert.issuer}</span>
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Credential Verified</span>
                </div>
                <Sparkles className="w-4 h-4 text-purple-400 animate-spin-slow opacity-60" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
