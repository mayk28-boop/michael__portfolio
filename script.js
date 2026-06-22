const revealElements = document.querySelectorAll('.section-title, .panel, .skill-card, .service-list, .contact-box');

revealElements.forEach((element) => element.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.16 });

revealElements.forEach((element) => observer.observe(element));
