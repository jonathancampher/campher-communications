
import React from 'react';

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
        if (e.currentTarget && 'PerformanceObserver' in window) {
          performance.mark('logo-loaded');
        }
      }}
    />
  );
};

export default Logo;
