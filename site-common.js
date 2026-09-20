(() => {
  const isItalian = document.documentElement.lang.toLowerCase().startsWith('it');
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('year');

  if (year) year.textContent = String(new Date().getFullYear());

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 32);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  menuToggle?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open
      ? (isItalian ? 'Chiudi menu' : 'Close menu')
      : (isItalian ? 'Apri menu' : 'Open menu'));

    const icon = menuToggle.querySelector('i');
    icon?.classList.toggle('fa-bars', !open);
    icon?.classList.toggle('fa-xmark', open);
  });

  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.setAttribute('aria-label', isItalian ? 'Apri menu' : 'Open menu');
      const icon = menuToggle?.querySelector('i');
      icon?.classList.add('fa-bars');
      icon?.classList.remove('fa-xmark');
    });
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -36px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }
})();