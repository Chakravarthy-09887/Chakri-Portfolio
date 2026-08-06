/* Custom Animated Neon Glowing Cursor, Magnetic Hover & Particle Trails */

export function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  const trailCanvas = document.getElementById('cursor-canvas');

  if (!dot || !ring || !trailCanvas) return;
  const ctx = trailCanvas.getContext('2d');

  let width = trailCanvas.width = window.innerWidth;
  let height = trailCanvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = trailCanvas.width = window.innerWidth;
    height = trailCanvas.height = window.innerHeight;
  });

  let mouse = { x: -100, y: -100 };
  let ringPos = { x: -100, y: -100 };
  let particles = [];

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    // Add particle trail on move
    if (Math.random() > 0.4) {
      particles.push(new TrailParticle(mouse.x, mouse.y));
    }
  });

  class TrailParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 4 + 2;
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = (Math.random() - 0.5) * 1.5;
      this.life = 1;
      this.decay = Math.random() * 0.04 + 0.02;
      this.color = Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= this.decay;
      this.size *= 0.95;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.life);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0, this.size), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Smooth Cursor Lerp Animation
  function renderCursor() {
    dot.style.left = `${mouse.x}px`;
    dot.style.top = `${mouse.y}px`;

    // Easing factor
    ringPos.x += (mouse.x - ringPos.x) * 0.18;
    ringPos.y += (mouse.y - ringPos.y) * 0.18;

    ring.style.left = `${ringPos.x}px`;
    ring.style.top = `${ringPos.y}px`;

    // Draw particle trails
    ctx.clearRect(0, 0, width, height);
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].life <= 0 || particles[i].size <= 0.1) {
        particles.splice(i, 1);
      }
    }

    requestAnimationFrame(renderCursor);
  }

  renderCursor();

  // Hover & Magnetic Effects for Buttons, Cards & Links
  const interactiveElems = document.querySelectorAll('a, button, .glass-card, .interactive-hover');

  interactiveElems.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      ring.classList.add('hovered');
      dot.classList.add('hovered');
    });

    elem.addEventListener('mouseleave', () => {
      ring.classList.remove('hovered');
      dot.classList.remove('hovered');
      elem.style.transform = '';
    });

    // Magnetic pull effect on buttons
    if (elem.classList.contains('btn-glow') || elem.classList.contains('btn-glass') || elem.classList.contains('magnetic')) {
      elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        elem.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });
    }
  });
}
