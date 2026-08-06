/* Animated Number Counter for Achievements */

export function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  function runCounters() {
    counters.forEach(counter => {
      const targetStr = counter.getAttribute('data-target');
      const targetVal = parseFloat(targetStr);
      const isDecimal = targetStr.includes('.');
      const suffix = counter.getAttribute('data-suffix') || '';

      let count = 0;
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = targetVal / steps;

      const timer = setInterval(() => {
        count += increment;
        if (count >= targetVal) {
          counter.textContent = (isDecimal ? targetVal.toFixed(1) : Math.floor(targetVal)) + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = (isDecimal ? count.toFixed(1) : Math.floor(count)) + suffix;
        }
      }, stepTime);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        runCounters();
        animated = true;
      }
    });
  }, { threshold: 0.5 });

  const section = document.getElementById('achievements');
  if (section) observer.observe(section);
}
