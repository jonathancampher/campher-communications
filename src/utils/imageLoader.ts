
/**
 * Main image optimization module
 * This file re-exports all image optimization utilities from their respective modules
 */

// Re-export all functions from the new modular structure
export { isInViewport, createImageObserver } from './images/viewport';
export { setupLazyLoading } from './images/lazyLoading';
export { ensureImageDimensions } from './images/dimensions';
export { detectImageFormats, applyModernFormats } from './images/formatDetection';
export { createResponsiveImageSrcSet, optimizeImageAttributes } from './images/responsiveImages';
export { preloadCriticalAssets } from './images/preloading';
export { optimizeImages, initImageOptimizations } from './images/imageOptimizations';

// Note: This file maintains backward compatibility with the original imageLoader.ts
// Any code that imports from this file will continue to work without changes
