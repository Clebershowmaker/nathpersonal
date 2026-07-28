/* =============================================================================
   ANIMATIONS.JS - INTERSECTION OBSERVER & SCROLL EFFECTS
   ============================================================================= */

document.addEventListener('DOMContentLoaded', function() {
  initializeIntersectionObserver();
  initializeParallaxEffect();
});

/* =============================================================================
   INTERSECTION OBSERVER - Trigger animations on scroll
   ============================================================================= */

function initializeIntersectionObserver() {
  // Create observer with options
  const observerOptions = {
    threshold: 0.1,        // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Start animation 50px before fully visible
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      // When element enters viewport
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add('visible');

        // Optional: unobserve after visible (performance optimization)
        // observer.unobserve(entry.target);
      }
      // Optionally remove visible class when leaving viewport (uncomment for re-trigger)
      // else {
      //   entry.target.classList.remove('visible');
      // }
    });
  }, observerOptions);

  // Observe all elements with observe-* classes
  const observableElements = document.querySelectorAll(
    '.observe-fade-in, .observe-fade-in-up, .observe-scale-in'
  );

  observableElements.forEach(element => {
    observer.observe(element);
  });
}

/* =============================================================================
   PARALLAX EFFECT - Subtle movement on scroll
   ============================================================================= */

function initializeParallaxEffect() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length === 0) {
    return; // Exit if no parallax elements
  }

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    parallaxElements.forEach(element => {
      const parallaxSpeed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
      const yOffset = (scrollY * parallaxSpeed) + 'px';

      element.style.transform = `translateY(${yOffset})`;
    });
  });
}

/* =============================================================================
   STAGGERED ANIMATION CONTROLLER (Optional)
   Automatically applies fade-in-up-stagger to service cards grid
   ============================================================================= */

function setupStaggeredAnimations() {
  // Target containers with multiple children for staggered effect
  const staggerContainers = document.querySelectorAll('[data-stagger]');

  if (staggerContainers.length === 0) {
    return;
  }

  const staggerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const staggerObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, staggerOptions);

  staggerContainers.forEach(container => {
    staggerObserver.observe(container);
  });
}

// Call staggered animations setup
setupStaggeredAnimations();

/* =============================================================================
   PERFORMANCE OPTIMIZATION - Throttle scroll events
   ============================================================================= */

function throttle(func, wait) {
  let timeout = null;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
  };
}

/* =============================================================================
   ANIMATION STATE TRACKING (Optional - for analytics or debugging)
   ============================================================================= */

function trackAnimationStates() {
  const observableElements = document.querySelectorAll(
    '.observe-fade-in, .observe-fade-in-up, .observe-scale-in'
  );

  observableElements.forEach(element => {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (element.classList.contains('visible')) {
            // Element animation triggered
            console.log('Animation triggered:', element.className);
          }
        }
      });
    });

    // Only observe if not in production (optional debugging)
    if (false) { // Set to true for debugging
      observer.observe(element, { attributes: true, attributeFilter: ['class'] });
    }
  });
}

// Uncomment for debugging:
// trackAnimationStates();
