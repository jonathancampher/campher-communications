
/**
 * Utility for optimizing image loading
 */

// Check if an element is in the viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Lazy load images when they come into view
export const setupLazyLoading = (): void => {
  // Only run if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    // Target all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      if (isInViewport(img)) {
        const imgElement = img as HTMLImageElement;
        if (imgElement.dataset.src) {
          imgElement.src = imgElement.dataset.src;
          imgElement.removeAttribute('data-src');
        }
      }
    });
  }
};

// Add dimensions to images that are missing them
export const ensureImageDimensions = (): void => {
  document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
    // We'll set default dimensions as a fallback
    img.setAttribute('width', '100');
    img.setAttribute('height', '100');
    
    // Then try to get actual dimensions once loaded
    img.addEventListener('load', () => {
      const imgElement = img as HTMLImageElement;
      imgElement.setAttribute('width', String(imgElement.naturalWidth));
      imgElement.setAttribute('height', String(imgElement.naturalHeight));
    });
  });
};
