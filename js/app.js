// Nithya's java script
/* script.js - small interactions:
   - counter animation
   - reveal on scroll (fade in)
   - simple accessible focus handling
*/
document.addEventListener('DOMContentLoaded', () => {
  // COUNTERS
  const counters = document.querySelectorAll('.stat-number');
  const speed = 1800; // ms for animation

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 80;
  };

  const runCounters = () => {
    counters.forEach(counter => {
      if (counter.dataset.animated) return;
      if (isElementInViewport(counter)) {
        const target = +counter.getAttribute('data-target');
        const start = +counter.textContent || 0;
        const increment = Math.max(1, Math.floor(target / (speed / 50)));
        let current = start;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
            counter.dataset.animated = 'true';
          } else {
            counter.textContent = current;
          }
        }, 50);
      }
    });
  };

  // REVEAL ON SCROLL
  const revealables = document.querySelectorAll('.about-section, .why, .video-gallery, .hero-text, .image-stack, .why-item, .video-card, .stat');
  const revealOnScroll = () => {
    revealables.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('reveal');
    });
  };

  // initial run
  runCounters();
  revealOnScroll();

  // listeners
  window.addEventListener('scroll', () => {
    runCounters();
    revealOnScroll();
  }, { passive: true });
});