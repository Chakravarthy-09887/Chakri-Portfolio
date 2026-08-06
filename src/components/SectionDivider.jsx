import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="relative py-8 overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-center gap-4">
        {/* Left Fading Line */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-purple-500/50" />

        {/* Central Glowing Orb & Lines */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#06B6D4] animate-pulse" />
          <div className="absolute w-8 h-8 rounded-full border border-purple-500/40 animate-ping opacity-30 pointer-events-none" />
        </motion.div>

        {/* Right Fading Line */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/50 via-cyan-500/30 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
