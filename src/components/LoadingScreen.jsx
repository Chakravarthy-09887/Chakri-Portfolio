import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090B] text-white"
    >
      <div className="relative flex items-center justify-center mb-8">
        {/* Glowing aura */}
        <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 opacity-60 blur-xl animate-pulse" />
        
        {/* Floating AI Core Icon */}
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [0.95, 1.1, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-20 h-20 rounded-2xl glass-card border border-cyan-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          <Cpu className="w-10 h-10 text-cyan-400 animate-pulse" />
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold font-space tracking-wider text-gradient mb-2"
      >
        A CHAKRAVARTHY
      </motion.h2>

      <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mb-6">
        INITIALIZING AI PORTFOLIO...
      </p>

      {/* Progress Bar */}
      <div className="w-48 h-1.5 rounded-full bg-slate-800 overflow-hidden relative border border-slate-700">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 shadow-[0_0_10px_#3B82F6]"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
