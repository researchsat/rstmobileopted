// Smooth scrolling functionality
export default function initSmoothScroll() {
  // Smooth scrolling for page links
  document.querySelectorAll('a.page-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      } else {
        window.location.href = targetId;
      }
    });
  });
}

// Initialize smooth scroll
initSmoothScroll();
