
/**
 * Utility for viewport detection
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
