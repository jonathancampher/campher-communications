
/**
 * Main image optimization module that coordinates all optimizations
 */

import { setupLazyLoading } from './lazyLoading';
import { ensureImageDimensions } from './dimensions';
import { detectImageFormats, applyModernFormats } from './formatDetection';
import { optimizeImageAttributes } from './responsiveImages';
import { preloadCriticalAssets } from './preloading';

// Bundle all image optimization features
export const optimizeImages = (): void => {
  setupLazyLoading();
  ensureImageDimensions();
  detectImageFormats();
  optimizeImageAttributes();
  
  // Convert images to WebP/AVIF when supported
  applyModernFormats();
};

// Bundle all image optimization features
export const initImageOptimizations = (): void => {
  // Execute immediately
  detectImageFormats();
  preloadCriticalAssets();
  
  // Execute when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeImages();
    });
  } else {
    optimizeImages();
  }
  
  // Execute when window has loaded (after images)
  window.addEventListener('load', () => {
    ensureImageDimensions();
  }, { once: true });
};
