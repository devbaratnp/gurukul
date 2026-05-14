(function () {
  const mount = document.getElementById('site-header');
  if (!mount) return;

  fetch('header.html', { cache: 'no-cache' })
    .then((r) => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then((html) => {
      mount.innerHTML = html;
      initNav();
    })
    .catch((err) => {
      console.error(
        '[site-header] Could not load header.html. ' +
        'If you opened this file directly (file://), browsers block fetch — ' +
        'serve the folder via a local server (e.g. `npx serve`).',
        err
      );
    });

  function initNav() {
    const toggle = document.getElementById('navToggle');
    const mobile = document.getElementById('mobileNav');
    const icon   = mount.querySelector('[data-nav-icon]');

    function setOpen(open) {
      if (!toggle || !mobile) return;
      mobile.classList.toggle('hidden', !open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      if (icon) icon.textContent = open ? 'close' : 'menu';
    }

    if (toggle && mobile) {
      toggle.addEventListener('click', () => {
        setOpen(mobile.classList.contains('hidden'));
      });

      mobile.querySelectorAll('[data-nav-link]').forEach((a) => {
        a.addEventListener('click', () => setOpen(false));
      });

      const mq = window.matchMedia('(min-width: 768px)');
      const onChange = (e) => { if (e.matches) setOpen(false); };
      mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    }

    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    mount.querySelectorAll('[data-nav-link]').forEach((a) => {
      const target = (a.getAttribute('href') || '').toLowerCase();
      if (target === here) {
        a.classList.remove('text-on-surface-variant', 'dark:text-surface-variant', 'text-on-surface');
        a.classList.add('text-primary', 'dark:text-primary-fixed-dim', 'font-semibold');
        if (!a.closest('#mobileNav')) {
          a.classList.add('border-b-2', 'border-primary', 'dark:border-primary-fixed-dim', 'pb-1');
        }
        a.setAttribute('aria-current', 'page');
      }
    });
  }
})();
