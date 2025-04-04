
/**
 * Utility for lazy loading images
 */

import { isInViewport, createImageObserver } from './viewport';

// Setup lazy loading for images
export const setupLazyLoading = (): void => {
  if ('IntersectionObserver' in window) {
    const imageObserver = createImageObserver();
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyImages.forEach(img => {
      // Add a low quality placeholder or blur-up effect
      const imgElement = img as HTMLImageElement;
      if (!imgElement.classList.contains('loaded') && !imgElement.src) {
        // Set a lightweight placeholder or a tiny version of the actual image
        imgElement.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"%3E%3C/svg%3E';
      }
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
