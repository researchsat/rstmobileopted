// Import styles
import './styles/styles.css';
import './styles/theme.css';
import './styles/app.css';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import jQuery
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// Import Swiper
import Swiper from 'swiper';
import 'swiper/css';

// Import Magnific Popup
import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup';

// Preloader is now handled inline in index.html

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  // Import other scripts after DOM is loaded
  import('./scripts/navbar').then(module => {
    const initNavbar = module.default;
    if (typeof initNavbar === 'function') initNavbar();
  });

  import('./scripts/sliders').then(module => {
    const initSliders = module.default;
    if (typeof initSliders === 'function') initSliders();
  });

  import('./scripts/lightbox').then(module => {
    const initLightbox = module.default;
    if (typeof initLightbox === 'function') initLightbox();
  });

  import('./scripts/scroll').then(module => {
    const initSmoothScroll = module.default;
    if (typeof initSmoothScroll === 'function') initSmoothScroll();
  });

  // Import Cal.com integration
  import('./scripts/cal-integration').then(module => {
    const initCalendar = module.default;
    if (typeof initCalendar === 'function') {
      // Initialize immediately
      initCalendar();

      // Also initialize on page navigation/changes
      window.addEventListener('load', initCalendar);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          initCalendar();
        }
      });
    }
  });
});
