// Import GSAP (if using GSAP for animations)
import gsap from 'gsap';

// Smooth Scrolling with GSAP (optional)
if (gsap) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: targetElement.offsetTop,
          ease: