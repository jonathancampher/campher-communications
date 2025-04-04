
/**
 * Utility for handling image dimensions
 */

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
