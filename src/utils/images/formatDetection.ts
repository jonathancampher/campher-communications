
/**
 * Utility for detecting modern image formats
 */

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

// Convert images to WebP/AVIF when supported
export const applyModernFormats = (): void => {
  if (document.body.classList.contains('webp') || document.body.classList.contains('avif')) {
    document.querySelectorAll('img[src$=".jpg"], img[src$=".png"], img[src$=".jpeg"]').forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (document.body.classList.contains('avif')) {
        // Try AVIF first if supported (better compression)
        const avifSrc = imgElement.src.replace(/\.(jpg|png|jpeg)$/i, '.avif');
        // Only set if not already using optimized format
        if (!imgElement.src.endsWith('.avif') && !imgElement.src.endsWith('.webp')) {
          imgElement.dataset.originalSrc = imgElement.src; // Store original for fallback
          imgElement.src = avifSrc;
        }
      } else if (document.body.classList.contains('webp')) {
        // Fallback to WebP
        const webpSrc = imgElement.src.replace(/\.(jpg|png|jpeg)$/i, '.webp');
        // Only set if not already using WebP
        if (!imgElement.src.endsWith('.webp')) {
          imgElement.dataset.originalSrc = imgElement.src; // Store original for fallback
          imgElement.src = webpSrc;
        }
      }
    });
  }
};
