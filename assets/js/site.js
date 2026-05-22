// Shared nav behaviour — runs on every page.
// Fetches partials/nav.html + partials/footer.html, injects them into
// #site-nav / #site-footer placeholders, then wires up interactions.

(function () {
  function initNav() {
    const nav            = document.querySelector('nav');
    if (!nav) return;
    const burger         = nav.querySelector('.nav-toggle');
    const dropdownToggle = nav.querySelector('.nav-dropdown-toggle');
    const dropdownMenu   = nav.querySelector('.nav-dropdown-menu');

    // Active link based on current path
    const path = window.location.pathname;
    if (path.startsWith('/research/')) {
      dropdownToggle?.classList.add('active');
    } else if (path === '/about.html') {
      nav.querySelector('a[href="/about.html"]')?.classList.add('active');
    }

    // Mobile hamburger
    if (burger) {
      burger.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const open = nav.classList.toggle('nav-open');
        burger.setAttribute('aria-expanded', open);
      });
    }

    // Research dropdown — desktop popup and mobile inline expand
    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const open = dropdownMenu.classList.toggle('open');
        dropdownToggle.setAttribute('aria-expanded', open);
      });
    }

    // Close menus on outside click
    document.addEventListener('click', e => {
      if (dropdownMenu && !e.target.closest('.nav-dropdown')) {
        dropdownMenu.classList.remove('open');
        dropdownToggle?.setAttribute('aria-expanded', 'false');
      }
      if (nav.classList.contains('nav-open')) {
        const inNav  = e.target.closest('nav');
        const isLeaf = e.target.matches('.nav-links a:not(.nav-dropdown-toggle), .nav-dropdown-item');
        if (!inNav || isLeaf) {
          nav.classList.remove('nav-open');
          burger?.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Close on Esc
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        nav.classList.remove('nav-open');
        dropdownMenu?.classList.remove('open');
        burger?.setAttribute('aria-expanded', 'false');
        dropdownToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  async function loadPartials() {
    const navSlot    = document.getElementById('site-nav');
    const footerSlot = document.getElementById('site-footer');

    try {
      const [navHtml, footerHtml] = await Promise.all([
        navSlot    ? fetch('/partials/nav.html').then(r => r.text())    : Promise.resolve(''),
        footerSlot ? fetch('/partials/footer.html').then(r => r.text()) : Promise.resolve(''),
      ]);
      if (navSlot    && navHtml)    navSlot.outerHTML    = navHtml;
      if (footerSlot && footerHtml) footerSlot.outerHTML = footerHtml;
    } catch (_) {
      // Partials unavailable (e.g. file:// protocol) — skip injection
    }

    initNav();
  }

  loadPartials();
})();
