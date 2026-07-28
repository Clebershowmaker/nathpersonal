/* =============================================================================
   MAIN.JS - NAVIGATION & INITIALIZATION
   ============================================================================= */

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  setActiveNavLink();
  setupSmoothScroll();
});

/* =============================================================================
   MOBILE HAMBURGER MENU
   ============================================================================= */

function initializeNavigation() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navbarMenu');

  if (!hamburgerBtn || !navMenu) {
    return; // Exit if elements don't exist
  }

  // Toggle menu on hamburger click
  hamburgerBtn.addEventListener('click', function() {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const navbar = document.querySelector('nav');
    if (!navbar.contains(event.target) && navMenu.classList.contains('active')) {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Close menu on window resize (if resizing to desktop)
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

/* =============================================================================
   SET ACTIVE NAV LINK
   ============================================================================= */

function setActiveNavLink() {
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to current page link
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* =============================================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
   ============================================================================= */

function setupSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        // Close mobile menu if open
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navbarMenu = document.getElementById('navbarMenu');
        if (hamburgerBtn && navbarMenu) {
          hamburgerBtn.setAttribute('aria-expanded', 'false');
          navbarMenu.classList.remove('active');
        }

        // Smooth scroll to target
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* =============================================================================
   NAVBAR STICKY BEHAVIOR ON SCROLL
   ============================================================================= */

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Add 'scrolled' class when page is scrolled
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
