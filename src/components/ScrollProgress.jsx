import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-900 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_#3B82F6] transition-all duration-150 ease-out"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
