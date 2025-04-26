
import React, { useState, useEffect } from 'react';

const Logo = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Use effect to preload the image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="relative">
      {/* Show placeholder until image loads */}
      {!imageLoaded && (
        <div 
          className="h-16 w-16 bg-gray-200 animate-pulse rounded" 
          aria-hidden="true"
          style={{ aspectRatio: '1/1' }}
        ></div>
      )}
      <img 
        src="/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png" 
        alt="Campher Communications Logo" 
        className={`h-16 w-auto ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        width="64"
        height="64"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onLoad={(e) => {
          // Mark as contentful paint candidate for LCP optimization
          if (e.currentTarget && 'PerformanceObserver' in window) {
            setImageLoaded(true);
            performance.mark('logo-loaded');
          }
        }}
      />
    </div>
  );
};

export default Logo;
