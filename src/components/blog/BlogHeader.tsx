
import React, { useState, useEffect } from 'react';

interface BlogHeaderProps {
  title: string;
  description: string;
}

const BlogHeader = ({ title, description }: BlogHeaderProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload the banner image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/bannerblogg.webp";
    img.onload = () => setImageLoaded(true);
  }, []);
  
  return (
    <div className="relative h-[60vh] mb-8 md:mb-16">
      {/* Placeholder while image loads */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      
      <img 
        src="/lovable-uploads/bannerblogg.webp" 
        alt="Blog Banner" 
        className={`absolute inset-0 w-full h-full object-cover brightness-95 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="eager"
        decoding="async"
        fetchpriority="high"
        width="1920"
        height="1080"
        onLoad={() => setImageLoaded(true)}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-xl mx-auto px-4 py-8 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-campher-blue rounded-full mb-3 md:mb-4">
            Blogg
          </span>
          <h2 className="text-3xl md:text-5xl font-medium mb-3 md:mb-4 text-white">{title}</h2>
          <p className="text-white/90 text-sm md:text-base max-w-lg mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
