
/**
 * Utility for preloading critical resources
 */

// Apply preload to critical resources
export const preloadCriticalAssets = (): void => {
  // Preload critical fonts
  const fontPreloads = [
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap', as: 'style' },
  ];
  
  // Preload critical images
  const imagePreloads = document.querySelectorAll('img[fetchpriority="high"]');
  
  // Create and append preload links
  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font.href;
    link.as = font.as;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
  
  // Preload critical images (first 1-2 images)
  imagePreloads.forEach((img, index) => {
    if (index < 2) {
      const imgElement = img as HTMLImageElement;
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = imgElement.src;
      link.as = 'image';
      document.head.appendChild(link);
    }
  });
};
