
/**
 * Utility for optimizing image loading and performance
 */

// Check if an element is in the viewport with a margin
export const isInViewport = (element: Element, margin: number = 200): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) + margin &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) + margin &&
    rect.bottom >= -margin &&
    rect.right >= -margin
  );
};

// Create image observer with higher priority for LCP images
const createPriorityImageObserver = (
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
            // Add fetchpriority for important images
            if (img.dataset.priority === 'high') {
              img.setAttribute('fetchpriority', 'high');
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

// Standard IntersectionObserver for lazy loading
const createImageObserver = (
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

// Setup lazy loading for images
export const setupLazyLoading = (): void => {
  if ('IntersectionObserver' in window) {
    const priorityImageObserver = createPriorityImageObserver('400px 0px', 0.01);
    const imageObserver = createImageObserver();
    
    // Process priority images first
    document.querySelectorAll('img[data-src][data-priority="high"]').forEach(img => {
      // Set lightweight placeholder and add to priority observer
      const imgElement = img as HTMLImageElement;
      if (!imgElement.classList.contains('loaded') && !imgElement.src) {
        imgElement.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"%3E%3C/svg%3E';
      }
      priorityImageObserver.observe(img);
    });
    
    // Process regular images
    document.querySelectorAll('img[data-src]:not([data-priority="high"])').forEach(img => {
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

// Ensure images have width and height to prevent layout shifts
export const ensureImageDimensions = (): void => {
  document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
    // Default dimensions as fallback
    img.setAttribute('width', '100');
    img.setAttribute('height', '100');
    
    // Update dimensions once loaded based on natural size
    img.addEventListener('load', () => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.naturalWidth && imgElement.naturalHeight) {
        imgElement.setAttribute('width', String(imgElement.naturalWidth));
        imgElement.setAttribute('height', String(imgElement.naturalHeight));
      }
    });
  });
};

// Generate responsive srcset for images
export const generateSrcSet = (src: string, sizes: number[] = [640, 768, 1024, 1280, 1536]): string => {
  if (!src) return '';
  
  // Skip srcset for SVGs and GIFs
  const extension = src.split('.').pop()?.toLowerCase();
  if (extension === 'svg' || extension === 'gif') return '';
  
  // Generate srcset string for responsive images
  const basePath = src.substring(0, src.lastIndexOf('.'));
  const extension2 = src.substring(src.lastIndexOf('.'));
  
  return sizes
    .map(size => `${basePath}-${size}${extension2} ${size}w`)
    .join(', ');
};

// Apply modern image format detection
export const detectImageFormats = (): void => {
  // Feature detection for WebP support
  const hasWebP = () => {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    return webP.onload === null;
  };

  // Feature detection for AVIF support (more modern format)
  const hasAVIF = () => {
    const avif = new Image();
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    return avif.onload === null;
  };

  // Add CSS class to body based on supported formats
  document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    if (hasWebP()) {
      body.classList.add('webp');
    }
    
    if (hasAVIF()) {
      body.classList.add('avif');
    }
  });
};

// Optimize image loading on page
export const optimizeImages = (): void => {
  setupLazyLoading();
  ensureImageDimensions();
  detectImageFormats();
  
  // Add loading="lazy" to images below the fold
  document.querySelectorAll('img').forEach((img, index) => {
    // First few images should load eagerly (above the fold)
    if (index >= 3 && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding attribute for better performance
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
    
    // Add fetchpriority for important images
    if (index < 3 && !img.hasAttribute('fetchpriority')) {
      img.setAttribute('fetchpriority', 'high');
    }
    
    // Add srcset attribute for responsive images if not present
    if (!img.hasAttribute('srcset') && img.src && !img.src.includes('data:')) {
      const srcset = generateSrcSet(img.src);
      if (srcset) {
        img.setAttribute('srcset', srcset);
        img.setAttribute('sizes', '(max-width: 768px) 100vw, 50vw');
      }
    }
  });
};
