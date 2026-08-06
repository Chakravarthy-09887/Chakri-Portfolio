import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SectionDivider from './components/SectionDivider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#09090B] text-white selection:bg-blue-500 selection:text-white font-poppins overflow-x-hidden">
      
      {/* Custom Glowing Neon Cursor with Particle Trails */}
      <CustomCursor />

      {/* Glowing Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Initial Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Dynamic Ambient Particle Background */}
      <ParticleBackground />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Certifications />
          <SectionDivider />
          <Achievements />
          <SectionDivider />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
