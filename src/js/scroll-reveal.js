/* Scroll Reveal Animations, Scroll Progress & Nav Highlighting */

export function initScrollEffects() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  const nav = document.querySelector('.glass-nav');
  const backToTop = document.querySelector('.back-to-top');

  // Scroll Event Listener
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    
    // Progress Bar
    if (progressBar && totalHeight > 0) {
      const progress = (scrollPosition / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }

    // Sticky Navbar Glass Effect
    if (nav) {
      if (scrollPosition > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    // Back to Top Button Visibility
    if (backToTop) {
      if (scrollPosition > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Active Nav Link Highlight
    highlightActiveNav();
  });

  // IntersectionObserver for Reveal Animations
  const revealElements = document.querySelectorAll('.reveal-fade, .reveal-slide-left, .reveal-slide-right, .reveal-zoom');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Active Link Highlight Helper
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightActiveNav() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}
