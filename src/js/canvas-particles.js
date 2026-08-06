/* Canvas Space Particles & Dynamic Ambient Node Network */

export function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.color = Math.random() > 0.5 ? '#3b82f6' : (Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4');
      this.alpha = Math.random() * 0.6 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse Proximity Interaction
      if (mouse.x != null && mouse.y != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = dx / distance;
          let directionY = dy / distance;
          this.x -= directionX * force * 2;
          this.y -= directionY * force * 2;
        }
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.restore();
    }
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 12000), 100);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  createParticles();

  function connect() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          let alpha = (1 - dist / 120) * 0.25;
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connect();
    requestAnimationFrame(animate);
  }

  animate();
}
