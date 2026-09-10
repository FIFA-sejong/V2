// Shared navigation; works on local files and GitHub Pages subdirectories.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const setOpen = (open) => {
    if (!toggle || !links) return;
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  };
  if (toggle && links) {
    toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && links.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.nav')) setOpen(false);
    });
    window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
      if (event.matches) setOpen(false);
    });
  }
  const updateActive = () => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const current = path + (path === 'index.html' && location.hash === '#research' ? '#research' : '');
    document.querySelectorAll('.nav-links a').forEach(a => {
      const active = a.getAttribute('href') === current;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', current.includes('#') ? 'location' : 'page');
      else a.removeAttribute('aria-current');
    });
  };
  updateActive();
  window.addEventListener('hashchange', updateActive);
});
