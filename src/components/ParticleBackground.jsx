import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles setup
    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 65);
    const particles = [];

    const colors = ['rgba(59, 130, 246, 0.4)', 'rgba(139, 92, 246, 0.4)', 'rgba(6, 182, 212, 0.4)'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.8 ? 'square' : 'circle',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw individual particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        if (p.shape === 'square') {
          ctx.rect(p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
        } else {
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        }
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#09090B]">
      {/* Dynamic Animated Ambient Color Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[40%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-600/15 blur-[160px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-cyan-600/15 blur-[150px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-[15%] w-16 h-16 border border-cyan-500/20 rounded-2xl rotate-45 animate-float opacity-30" />
      <div className="absolute top-[60%] left-[8%] w-24 h-24 border border-purple-500/20 rounded-full animate-float-slow opacity-25" />
      <div className="absolute top-[30%] right-[12%] w-20 h-20 border border-blue-500/20 rotate-12 animate-float opacity-30" style={{ animationDelay: '1.5s' }} />

      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default ParticleBackground;
