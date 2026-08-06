import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, FolderGit2, X, Bot, GraduationCap, Globe, BarChart3, Brain, LineChart } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'AI Chatbot',
    category: 'Artificial Intelligence',
    icon: Bot,
    description:
      'Intelligent conversational AI assistant built with natural language processing algorithms and real-time response generation.',
    tags: ['Python', 'NLP', 'AI', 'Full Stack'],
    github: 'https://github.com',
    demo: 'https://demo-ai-chatbot.example.com',
    details: 'Leverages modern NLP models and vector embeddings for contextual question answering, sentiment analysis, and intelligent conversation flows.',
  },
  {
    id: 2,
    title: 'Student Management System',
    category: 'Software Engineering',
    icon: GraduationCap,
    description:
      'Comprehensive database-driven application for managing student academic records, grades, attendance, and administrative workflows.',
    tags: ['Java', 'SQL', 'Data Structures', 'UI/UX'],
    github: 'https://github.com',
    demo: 'https://demo-student-system.example.com',
    details: 'Implements CRUD database management, automated grade calculation, attendance reporting, and role-based student portal access.',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Web Development',
    icon: Globe,
    description:
      'Modern futuristic dark-themed personal portfolio website featuring glassmorphism design, neon cursor, smooth scrolling, and custom particle effects.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'JS'],
    github: 'https://github.com',
    demo: '#',
    details: 'Designed with ultra-smooth 60fps animations, glassmorphism cards, interactive particle canvas background, and full device responsiveness.',
  },
  {
    id: 4,
    title: 'AI Data Analysis Dashboard',
    category: 'Data Science',
    icon: BarChart3,
    description:
      'Interactive data visualization platform that processes complex datasets, generates visual insights, and performs automated exploratory data analysis.',
    tags: ['Python', 'Pandas', 'Plotly', 'Data Analysis'],
    github: 'https://github.com',
    demo: 'https://demo-data-dashboard.example.com',
    details: 'Features automatic statistical metrics, dynamic visual charts, anomaly detection, and exportable data insights reports.',
  },
  {
    id: 5,
    title: 'Machine Learning Prediction System',
    category: 'Machine Learning',
    icon: Brain,
    description:
      'Predictive analytics engine using supervised machine learning algorithms to forecast outcomes with high accuracy.',
    tags: ['Scikit-Learn', 'Python', 'ML Algorithms', 'Predictive Model'],
    github: 'https://github.com',
    demo: 'https://demo-ml-prediction.example.com',
    details: 'Trained on structured dataset arrays, featuring feature importance calculation, model performance evaluation metrics, and real-time inference API.',
  },
  {
    id: 6,
    title: 'Digital Marketing Analytics Dashboard',
    category: 'Marketing & Analytics',
    icon: LineChart,
    description:
      'Integrated marketing dashboard tracking SEO rankings, social media campaign metrics, traffic conversion rates, and ROI metrics.',
    tags: ['Analytics', 'SEO', 'Data Mining', 'Digital Marketing'],
    github: 'https://github.com',
    demo: 'https://demo-marketing-dashboard.example.com',
    details: 'Tracks key performance indicators (KPIs), keyword rank positions, user audience demographics, and social media engagement analytics.',
  },
];

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase & Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="animated-gradient-border group"
              >
                <div className="bg-[#09090B] h-full p-7 rounded-[15px] flex flex-col justify-between space-y-6 relative overflow-hidden">
                  
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 group-hover:rotate-12 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-space text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-poppins text-slate-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: GitHub & Live Demo */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-btn flex-1 py-2.5 px-4 rounded-xl glass-card text-xs font-mono font-semibold text-slate-300 hover:text-white hover:border-cyan-500/50 flex items-center justify-center gap-2 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => setActiveModal(project)}
                      className="magnetic-btn flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-space font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Demo Modal Preview */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card max-w-xl w-full p-8 rounded-3xl border border-cyan-500/40 relative shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {activeModal.category}
                  </span>
                  <h3 className="text-2xl font-bold font-space text-white">
                    {activeModal.title}
                  </h3>
                  <p className="text-sm font-poppins text-slate-300 leading-relaxed">
                    {activeModal.details}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                    <p className="text-xs font-mono text-purple-400 font-bold">Key Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {activeModal.tags.map((t) => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/20 text-purple-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={activeModal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl glass-card text-center text-sm font-space font-bold text-white border border-white/20 hover:border-cyan-400"
                    >
                      View Repository
                    </a>
                    <button
                      onClick={() => {
                        alert(`Opening live demonstration for ${activeModal.title}`);
                        setActiveModal(null);
                      }}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-center text-sm font-space font-bold text-white shadow-lg shadow-cyan-500/30"
                    >
                      Launch App Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
