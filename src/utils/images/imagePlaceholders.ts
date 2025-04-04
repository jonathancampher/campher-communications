
/**
 * Utility for image placeholders
 */

// LQIP (Low Quality Image Placeholder) data URLs for key images
const LQIP_MAP = {
  "/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAe1BMVEUAAAArM0ErM0EwN0cwN0cwOUkwOUksNEIsNEIuNkQuNkQuN0UvN0UvNkYvNkYuNUUuNUUvNkUvNkUtNEQtNEQtNEMtNEMuNUQuNUQxOEgxOEgvNkUvNkUuNUQuNUQuNUQuNUQuNUQuNUQuNUQuNUQuNUQuNUQuNUT///+39qZyAAAAJ3RSTlMABhowLB8HCiMzLiUOESc1MCgTFSs2MislEhQqNjIrJhMVKzYzLCWtVFd8AAAAAWJLR0QovbC1sgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+MDBQwTMIfr9CQAAABBSURBVAjXJYxJEoAgEAMHRVxQcUVxX/7/RIu+Q6eqA0jC8GKE+MRJoeRyhdTVTUE23VD3w4g5LWi2fUG87pfzA/2VA45YJZJ9AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTA1VDEyOjE5OjMyKzAwOjAwZI/oiQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0wNVQxMjoxOTozMiswMDowMBXSUDUAAAAASUVORK5CYII=",
  "/lovable-uploads/prosjekt1.webp": "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAgAAkA4JZQCdAEO1ihAAP78tfzJ8aMHqx+M/n18Lf6v9Sfxx/sv90AAAA=="
};

// Apply low quality image placeholders for better user experience
export const applyImagePlaceholders = (imgElement: HTMLImageElement): void => {
  // Apply placeholder immediately
  if (!imgElement.classList.contains('loaded')) {
    // Check for specific optimized placeholder
    const src = imgElement.getAttribute('src') || '';
    const dataSrc = imgElement.getAttribute('data-src') || '';
    const targetSrc = dataSrc || src;
    
    // Add a delay to avoid flickering
    if (LQIP_MAP[targetSrc]) {
      // Use specific LQIP if available
      const originalSrc = src;
      imgElement.src = LQIP_MAP[targetSrc];
      
      // Load the actual image in the background
      const actualImage = new Image();
      actualImage.onload = function() {
        // Only set the actual image if the src hasn't changed
        if (imgElement.src === LQIP_MAP[targetSrc]) {
          imgElement.src = originalSrc;
          imgElement.style.filter = 'blur(0)';
          imgElement.classList.add('loaded');
          
          // Mark as contentful paint candidate
          if ('PerformanceObserver' in window) {
            performance.mark(`img-loaded-${targetSrc.split('/').pop()}`);
          }
        }
      };
      actualImage.src = originalSrc;
      
      // Add blur-up effect
      imgElement.style.filter = 'blur(10px)';
      imgElement.style.transition = 'filter 0.3s ease-out';
    } else if (!src || src === '') {
      // Use generic placeholder as fallback
      imgElement.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"%3E%3C/svg%3E';
      
      // Add blur-up effect
      imgElement.style.filter = 'blur(10px)';
      imgElement.style.transition = 'filter 0.3s ease-out';
    }
    
    // Remove blur when actual image loads if not using LQIP
    if (!LQIP_MAP[targetSrc]) {
      imgElement.addEventListener('load', function() {
        if (this.src !== 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"%3E%3C/svg%3E') {
          this.style.filter = 'blur(0)';
          this.classList.add('loaded');
        }
      });
    }
  }
};
