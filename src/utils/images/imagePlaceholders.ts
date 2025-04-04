
/**
 * Utility for image placeholders
 */

// Apply low quality image placeholders for better user experience
export const applyImagePlaceholders = (imgElement: HTMLImageElement): void => {
  if (!imgElement.classList.contains('loaded') && !imgElement.src) {
    // Set a lightweight placeholder or a tiny version of the actual image
    imgElement.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"%3E%3C/svg%3E';
  }
};
