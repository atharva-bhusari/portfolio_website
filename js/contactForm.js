// Web3Forms handler. Access key comes from config.js (gitignored;
// Vercel regenerates it at build time from an environment variable).
export function initContactForm() {
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
}
