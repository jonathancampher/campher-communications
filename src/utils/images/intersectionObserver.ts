
/**
 * Utility for intersection observation
 */

// IntersectionObserver factory with configuration options
export const createImageObserver = (
  rootMargin = '200px 0px',
  threshold = 0.01
): IntersectionObserver => {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          // Handle both data-src and srcset attributes
          if (img.dataset.src) {
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            // Remove data attributes to prevent re-processing
            img.removeAttribute('data-src');
            img.removeAttribute('data-srcset');
            img.classList.add('loaded');
          }
          observer.unobserve(img);
        }
      });
    },
    { rootMargin, threshold }
  );
};
