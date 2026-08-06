import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, X, CheckCircle, Sparkles } from 'lucide-react';

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Resume Card Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative glass-card rounded-3xl p-8 sm:p-12 overflow-hidden border border-cyan-500/20 max-w-4xl mx-auto shadow-2xl"
        >
          {/* Background glowing gradient accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-4 h-4" /> Curriculum Vitae
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Interested in my <span className="text-gradient">Complete Resume</span>?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed">
                Download a clean copy of my resume detailing my technical skill matrix, educational achievements, project deliverables, and contact information.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-cyan-500" /> B.Tech AI & DS Specialist
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-purple-500" /> Web & Data Analytics
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href="/Chakravarthy_A_Resume.txt"
                download="Chakravarthy_A_Resume.txt"
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold shadow-xl shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Download className="w-5 h-5 group-hover:bounce" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => setIsPreviewOpen(true)}
                className="px-6 py-3.5 rounded-xl glass-card text-slate-800 dark:text-white hover:text-cyan-500 font-semibold border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-purple-500" />
                <span>Quick Preview</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Resume Preview Modal */}
        <AnimatePresence>
          {isPreviewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-2xl max-h-[85vh] glass-card rounded-2xl p-6 overflow-y-auto border border-slate-700 text-slate-200"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Chakravarthy A - Resume Overview</h3>
                  </div>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-sm font-sans leading-relaxed text-slate-300">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <p className="font-bold text-white">Chakravarthy A</p>
                    <p className="text-cyan-400 text-xs font-mono">B.Tech AI/DS | Aspiring Data Analyst | AI Enthusiast | Web Developer</p>
                    <p className="text-xs text-slate-400 mt-1">Location: Tamil Nadu, India</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-cyan-400 uppercase text-xs tracking-wider mb-1">Career Objective</h4>
                    <p>Passionate software developer and AI/DS student seeking opportunities to apply data analysis, machine learning algorithms, and modern web application development skills in impactful projects.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-cyan-400 uppercase text-xs tracking-wider mb-1">Technical Skills Summary</h4>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li><strong>Languages:</strong> HTML, CSS, JavaScript, Python, Java</li>
                      <li><strong>Frameworks & Libraries:</strong> React, Node.js, Express, Tailwind CSS</li>
                      <li><strong>Databases:</strong> MySQL</li>
                      <li><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Figma</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-cyan-400 uppercase text-xs tracking-wider mb-1">Highlighted Projects</h4>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Modern Responsive Portfolio Website</li>
                      <li>Student Management System (React, Node, MySQL)</li>
                      <li>AI Conversational Chatbot (Python, NLP, React)</li>
                      <li>Dynamic Weather Forecast App & To-Do Application</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
                  >
                    Close Preview
                  </button>
                  <a
                    href="/Chakravarthy_A_Resume.txt"
                    download="Chakravarthy_A_Resume.txt"
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Full Document
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Resume;
