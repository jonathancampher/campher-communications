
import React from 'react';

/**
 * Logo-komponent
 * 
 * Viser firmaets logo med riktig størrelse og alt-tekst.
 * Optimalisert for ytelse, tilgjengelighet og cross-browser støtte.
 */
const Logo = () => {
  return (
    <img 
      src="/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png" 
      alt="Campher Communications Logo" 
      className="h-16 w-auto" 
      width="64"
      height="64"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      onLoad={(e) => {
        // Mark as contentful paint candidate for LCP optimization
        if (e.currentTarget) {
          e.currentTarget.setAttribute('elementtiming', 'logo-image');
          e.currentTarget.style.visibility = 'visible';
        }
      }}
      style={{ visibility: 'hidden' }} // Hide until loaded to prevent layout shift
    />
  );
};

export default Logo;
