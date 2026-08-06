import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Download, Linkedin, Github, User, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Confetti effect celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3B82F6', '#8B5CF6', '#06B6D4'],
        });
      } catch (err) {
        // fallback
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
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
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-space text-white tracking-tight">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Glassmorphism Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold font-space text-white mb-2">
                  Get in Touch
                </h3>
                <p className="text-sm font-poppins text-slate-300 leading-relaxed">
                  Whether you have an opportunity, a project query, or just want to connect, feel free to drop me a message!
                </p>
              </div>

              {/* Contact Info List */}
              <div className="space-y-5">
                
                {/* Name */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">FULL NAME</p>
                    <p className="text-base font-bold font-space text-white">A Chakravarthy</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">LOCATION</p>
                    <p className="text-base font-bold font-space text-white">Tamil Nadu, India</p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:ambatichakri@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">EMAIL ADDRESS</p>
                    <p className="text-base font-bold font-space text-cyan-300 group-hover:underline">
                      ambatichakri@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918122585863"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">PHONE NUMBER</p>
                    <p className="text-base font-bold font-space text-white group-hover:text-cyan-300">
                      +91 8122585863
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 space-y-3 relative z-10">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">CONNECT WITH ME:</p>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn py-3 px-3 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-blue-500 flex flex-col items-center justify-center gap-1 transition-all text-xs font-mono"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn py-3 px-3 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-purple-500 flex flex-col items-center justify-center gap-1 transition-all text-xs font-mono"
                >
                  <Github className="w-5 h-5 text-purple-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href="/Chakravarthy_A_Resume.txt"
                  download="A_Chakravarthy_Resume.txt"
                  className="magnetic-btn py-3 px-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 flex flex-col items-center justify-center gap-1 transition-all text-xs font-mono"
                >
                  <Download className="w-5 h-5 text-cyan-400" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative flex flex-col justify-center"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-space text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-300 font-poppins max-w-md mx-auto text-sm">
                  Thank you for reaching out to A Chakravarthy. I will review your message and reply back shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-cyan-400 font-mono text-xs hover:bg-slate-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold font-space text-white mb-2">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-poppins text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-poppins text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Collaboration"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-poppins text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Chakravarthy, I would like to discuss..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-poppins text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="magnetic-btn w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-space font-bold shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-300 flex items-center justify-center gap-2 group text-base"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-cyan-200 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
