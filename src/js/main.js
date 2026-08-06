/* Main Portfolio Logic & Orchestration */

import { initParticleCanvas } from './canvas-particles.js';
import { initCustomCursor } from './cursor-trail.js';
import { initTypingEffect } from './typing-effect.js';
import { initCounters } from './counters.js';
import { initScrollEffects } from './scroll-reveal.js';

document.addEventListener('DOMContentLoaded', () => {
  // Preloader Handle
  const preloader = document.getElementById('preloader');
  const loaderBarFill = document.querySelector('.loader-bar-fill');

  if (loaderBarFill) {
    loaderBarFill.style.width = '100%';
  }

  setTimeout(() => {
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }
  }, 900);

  // Initialize Modules
  initParticleCanvas();
  initCustomCursor();
  initTypingEffect();
  initCounters();
  initScrollEffects();

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Project Modal Handling
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');

  const projectDetails = {
    'AI Chatbot': 'Intelligent natural language processing chatbot powered by advanced machine learning models. Built to understand query context, automate user interactions, and resolve queries seamlessly.',
    'Student Management System': 'Full-stack web application designed for educational institutions to securely manage student enrollments, academic performance tracking, grade calculation, and records administration.',
    'Portfolio Website': 'Modern futuristic personal website featuring dark mode, glassmorphism UI, interactive particle canvas, custom glowing neon cursor, smooth scrolling, and dynamic statistics showcase.',
    'AI Data Analysis Dashboard': 'Interactive analytics dashboard offering automated data cleaning, statistical modeling, chart visualizations, and real-time data insights using Python and AI frameworks.',
    'Machine Learning Prediction System': 'End-to-end predictive analysis platform built with algorithms like Regression and Classification to forecast data trends and provide actionable metrics.',
    'Digital Marketing Analytics Dashboard': 'Comprehensive marketing dashboard tracking SEO performance, social media campaign conversion rates, keyword rankings, and audience demographic engagement.'
  };

  document.querySelectorAll('.btn-project-demo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projName = btn.getAttribute('data-project');
      if (projName && projectDetails[projName]) {
        if (modalTitle) modalTitle.textContent = projName;
        if (modalDesc) modalDesc.textContent = projectDetails[projName];
        if (modalOverlay) modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // Contact Form Handling with FormSubmit API for direct email delivery to ambatichakri@gmail.com
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      fetch('https://formsubmit.co/ajax/ambatichakri@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: subject || 'New Portfolio Contact Message for A Chakravarthy!',
          message: message
        })
      })
      .then(response => response.json())
      .then(data => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        alert(`Thank you, ${name}! Your message has been sent directly to ambatichakri@gmail.com. I will get back to you shortly.`);
        contactForm.reset();
      })
      .catch(error => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        // Fallback to direct POST submission if fetch is intercepted
        contactForm.submit();
      });
    });
  }
});
