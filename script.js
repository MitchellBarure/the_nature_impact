// About section slanted reveal with typing effect
const slantedRect = document.querySelector('.slanted-rectangle');
const rectangleText = document.querySelector('.rectangle-text'); // Span for typing text
const aboutContent = document.querySelector('.about-content');

// Typing effect function
function typeText(element, text, speed = 100, callback) {
  let i = 0;
  element.textContent = '';
  const typingInterval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typingInterval);
      if (callback) callback();
    }
  }, speed);
}

// Handle reveal on scroll
function handleAboutReveal() {
  const rectTop = slantedRect.getBoundingClientRect().top;

  if (rectTop < window.innerHeight - 100) {
    // Step 1: Typing effect inside rectangle
    typeText(rectangleText, 'About Us', 100, () => {
      // Step 2: Expand rectangle and reveal paragraph
      slantedRect.classList.add('in');
      aboutContent.classList.add('visible');
    });

    window.removeEventListener('scroll', handleAboutReveal); // only trigger once
  }
}

window.addEventListener('scroll', handleAboutReveal);
handleAboutReveal(); // check on load

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const fadeIns = document.querySelectorAll(".reveal-on-scroll");

  function handleScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("in");
    });

    fadeIns.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("visible");
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once at start
});

