
import React from 'react';

interface BlogHeaderProps {
  title: string;
  description: string;
}

const BlogHeader = ({ title, description }: BlogHeaderProps) => {
  return (
    <div className="relative text-center mb-8 md:mb-16 pt-16">
      <img 
        src="/lovable-uploads/bannerblogg.webp" 
        alt="Blog Banner" 
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="relative z-10 max-w-xl mx-auto px-4 py-16 bg-white/80 backdrop-blur-sm rounded-lg">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-3 md:mb-4">
          Blogg
        </span>
        <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4">{title}</h2>
        <p className="text-campher-gray text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;

