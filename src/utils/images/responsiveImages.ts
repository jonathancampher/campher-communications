
/**
 * Utility for creating responsive images
 */

// Create dynamically sized responsive images based on viewport
export const createResponsiveImageSrcSet = (imagePath: string, formats: string[] = ['webp', 'jpg']): string => {
  const widths = [320, 640, 960, 1280, 1920];
  const baseUrl = imagePath.split('.').slice(0, -1).join('.');
  const srcSetEntries: string[] = [];

  formats.forEach(format => {
    widths.forEach(width => {
      srcSetEntries.push(`${baseUrl}-${width}.${format} ${width}w`);
    });
  });

  return srcSetEntries.join(', ');
};

// Add loading="lazy" and other attributes to optimize image loading
export const optimizeImageAttributes = (): void => {
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
    
    // Add fetchpriority for key images
    if (index < 3 && !img.hasAttribute('fetchpriority')) {
      img.setAttribute('fetchpriority', 'high');
    }
  });
};
