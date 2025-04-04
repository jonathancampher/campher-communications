
/**
 * Utility for lazy loading images
 */

import { isInViewport } from './viewportDetection';
import { createImageObserver } from './intersectionObserver';
import { applyImagePlaceholders } from './imagePlaceholders';

// Setup lazy loading for images
export const setupLazyLoading = (): void => {
  if ('IntersectionObserver' in window) {
    const imageObserver = createImageObserver();
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyImages.forEach(img => {
      // Apply placeholder
      applyImagePlaceholders(img as HTMLImageElement);
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyLoad = () => {
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => {
        if (isInViewport(img)) {
          const imgElement = img as HTMLImageElement;
          if (imgElement.dataset.src) {
            imgElement.src = imgElement.dataset.src;
            if (imgElement.dataset.srcset) {
              imgElement.srcset = imgElement.dataset.srcset;
            }
            imgElement.removeAttribute('data-src');
            imgElement.removeAttribute('data-srcset');
            imgElement.classList.add('loaded');
          }
        }
      });
    };

    // Initial load
    lazyLoad();
    
    // Add event listeners for scroll and resize events
    // Use passive listeners for better performance
    let lazyLoadThrottleTimeout: ReturnType<typeof setTimeout> | null = null;
    const throttledLazyLoad = () => {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }
      lazyLoadThrottleTimeout = setTimeout(lazyLoad, 200);
    };

    // Explicitly type window as Window to fix the TypeScript errors
    const win = window as Window;
    win.addEventListener('scroll', throttledLazyLoad, { passive: true });
    win.addEventListener('resize', throttledLazyLoad, { passive: true });
    win.addEventListener('orientationchange', throttledLazyLoad, { passive: true });
  }
};
