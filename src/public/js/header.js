const menuToggle = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('#mobile-navigation');

if (menuToggle && mobileNavigation) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNavigation.hidden = true;
  };

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    mobileNavigation.hidden = isExpanded;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileNavigation.hidden) {
      closeMenu();
      menuToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !mobileNavigation.contains(event.target)) {
      closeMenu();
    }
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);
}
