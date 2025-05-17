// Navbar functionality
export default function initNavbar() {
  // Collapse the navbar on scroll
  function collapseNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 60) {
        navbar.classList.add('top-nav-collapse');
      } else {
        navbar.classList.remove('top-nav-collapse');
      }
    }
  }

  // Add event listeners
  window.addEventListener('scroll', collapseNavbar);
  window.addEventListener('load', collapseNavbar);

  // Close responsive menu when a scroll trigger link is clicked
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('page-scroll')) {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  });

  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
      navbarToggler.classList.toggle('active');
    });
  }
}

// Initialize navbar
initNavbar();
