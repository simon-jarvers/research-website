// Shared nav behavior — runs on every page.
// Handles (a) the desktop "Research ▾" dropdown, (b) the mobile hamburger.

(function () {
  const nav             = document.querySelector('nav');
  if (!nav) return;
  const burger          = nav.querySelector('.nav-toggle');
  const dropdownToggle  = nav.querySelector('.nav-dropdown-toggle');
  const dropdownMenu    = nav.querySelector('.nav-dropdown-menu');

  // Mobile hamburger
  if (burger) {
    burger.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const open = nav.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open);
    });
  }

  // Research dropdown — desktop popup AND mobile inline expand
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
    // Close the Research dropdown if click is outside it
    if (dropdownMenu && !e.target.closest('.nav-dropdown')) {
      dropdownMenu.classList.remove('open');
      dropdownToggle?.setAttribute('aria-expanded', 'false');
    }
    // Close the mobile panel if click is outside nav, or on a leaf link
    if (nav.classList.contains('nav-open')) {
      const inNav     = e.target.closest('nav');
      const isLeaf    = e.target.matches('.nav-links a:not(.nav-dropdown-toggle), .nav-dropdown-item');
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
})();
