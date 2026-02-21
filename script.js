document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll shadow ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // --- Scroll fade-in animations ---
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach(el => observer.observe(el));

  // --- Contact form: Web3Forms handler ---
  // Set your access key in config.js (excluded from git via .gitignore)

  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  document.getElementById('accessKey').value = CONFIG.WEB3FORMS_ACCESS_KEY;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.classList.add('form-success');
        form.reset();
      } else {
        formStatus.textContent = 'Something went wrong. Please try again.';
        formStatus.classList.add('form-error');
      }
    } catch {
      formStatus.textContent = 'Network error. Please try again later.';
      formStatus.classList.add('form-error');
    }

    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  });

});
