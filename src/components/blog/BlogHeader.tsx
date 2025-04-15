
import React from 'react';

interface BlogHeaderProps {
  title: string;
  description: string;
}

const BlogHeader = ({ title, description }: BlogHeaderProps) => {
  return (
    <div className="relative h-[60vh] mb-8 md:mb-16">
      <img 
        src="/lovable-uploads/bannerblogg.webp" 
        alt="Blog Banner" 
        className="absolute inset-0 w-full h-full object-cover brightness-95"
        loading="lazy"
        decoding="async"
        fetchPriority="high"
        width="1920"
        height="1080"
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
