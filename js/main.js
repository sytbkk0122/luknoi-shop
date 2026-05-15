// Mobile menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const mobileMenu   = document.getElementById('mobileMenu');

if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
if (menuCloseBtn) menuCloseBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (mobileMenu && mobileMenu.classList.contains('open')) {
    if (!mobileMenu.contains(e.target) && e.target !== hamburgerBtn) {
      mobileMenu.classList.remove('open');
    }
  }
});

// Newsletter form
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type=email]');
  const btn   = e.target.querySelector('button');
  btn.textContent = '✅ สมัครแล้ว!';
  btn.style.background = '#6EE7B7';
  input.value = '';
  input.disabled = true;
  btn.disabled = true;
}

// Scroll reveal (lightweight)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .trust-item, .review-card, .value-card, .category-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Sticky navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.08)' : '';
});
