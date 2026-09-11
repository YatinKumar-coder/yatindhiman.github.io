document.documentElement.classList.add('js');

const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = '@media (max-width: 760px) { .desktop-nav.is-open { display:flex; position:absolute; inset:64px 0 auto 0; margin:0; padding:21px 6vw 24px; background:var(--paper); border-bottom:1px solid var(--line); flex-direction:column; gap:18px; } }';
document.head.appendChild(mobileMenuStyles);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
  menuButton.textContent = open ? '☰' : '×';
});
