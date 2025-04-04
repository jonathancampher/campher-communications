
import React, { useEffect, useRef } from 'react';
import { applyImagePlaceholders } from '@/utils/imageLoader';

/**
 * Logo-komponent
 * 
 * Viser firmaets logo med riktig størrelse og alt-tekst.
 * Optimalisert for ytelse, tilgjengelighet og cross-browser støtte.
 * Bruker bildeoptimeringsverktøy for bedre ytelse.
 */
const Logo = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Apply optimizations when component mounts
    if (imgRef.current) {
      applyImagePlaceholders(imgRef.current);
    }
  }, []);

  return (
    <img 
      ref={imgRef}
      src="/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png" 
      alt="Campher Communications Logo" 
      className="h-16 w-auto filter invert" // Added invert filter since logo is dark and may not be visible on dark backgrounds
      width="64"
      height="64"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      onLoad={(e) => {
        // Mark as contentful paint candidate for LCP optimization
        if (e.currentTarget && 'PerformanceObserver' in window) {
          // Use standard performance marking instead of custom attribute
          performance.mark('logo-loaded');
        }
        
        // Add loaded class for CSS transitions
        e.currentTarget.classList.add('loaded');
      }}
    />
  );
};

export default Logo;
