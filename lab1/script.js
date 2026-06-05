// ===== ЗОВНІШНІЙ JS ДЛЯ ЗБІРНА УКРАЇНИ =====

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('fan-name');
      const email = document.getElementById('fan-email');
      let valid = true;
      let msg = '';

      if (!name || name.value.trim().length < 2) {
        valid = false;
        msg += 'Введіть ваше ім\'я (мінімум 2 символи).\n';
      }
      if (!email || !email.value.includes('@')) {
        valid = false;
        msg += 'Введіть дійсну email адресу.\n';
      }

      if (valid) {
        alert('✅ Дякуємо! Ваше повідомлення надіслано. Слава Україні!');
        form.reset();
      } else {
        alert('⚠️ Будь ласка, виправте помилки:\n' + msg);
      }
    });
  }

  // Підсвітка активної сторінки в меню
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav > ul > li > a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) {
      link.style.color = 'var(--yellow)';
    }
  });
});
