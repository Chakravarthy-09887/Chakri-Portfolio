import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);
  const requestRef = useRef(null);

  // Position tracking and particle trail
  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      // Add trail particle
      if (Math.random() < 0.35) {
        setParticles((prev) => [
          ...prev.slice(-15),
          {
            id: particleId++,
            x: x + (Math.random() * 8 - 4),
            y: y + (Math.random() * 8 - 4),
            size: Math.random() * 4 + 2,
            opacity: 0.8,
            color: Math.random() > 0.5 ? '#3B82F6' : '#8B5CF6',
          },
        ]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smooth lerp for outer glowing circle
  useEffect(() => {
    let currentX = trailingPos.x;
    let currentY = trailingPos.y;

    const animate = () => {
      currentX += (position.x - currentX) * 0.18;
      currentY += (position.y - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  // Hover detection for interactive elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.glass-card') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Fade out particle trail over time
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.05, size: p.size * 0.95 }))
          .filter((p) => p.opacity > 0.05)
      );
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Magnetic Button Effect Handler
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.magnetic-btn');

    magneticElements.forEach((el) => {
      const handleMagneticMove = (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        el.style.transform = `translate3d(${distanceX * 0.25}px, ${distanceY * 0.25}px, 0)`;
      };

      const handleMagneticLeave = () => {
        el.style.transform = 'translate3d(0, 0, 0)';
      };

      el.addEventListener('mousemove', handleMagneticMove);
      el.addEventListener('mouseleave', handleMagneticLeave);
    });
  }, []);

  // Render cursor only on lg screens (mouse devices)
  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Particle Trail Render */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none transition-all duration-75"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Outer Neon Ring Cursor */}
      <motion.div
        className={`absolute rounded-full pointer-events-none transition-all duration-200 border-2 ${
          isHovered
            ? 'w-14 h-14 bg-blue-500/15 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.6)]'
            : isClicking
            ? 'w-6 h-6 border-purple-500 bg-purple-500/20'
            : 'w-10 h-10 border-blue-500/70 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Inner Precision Neon Pointer Dot */}
      <div
        className={`absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_12px_#3B82F6] transition-transform duration-100 ${
          isHovered ? 'scale-150' : ''
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
