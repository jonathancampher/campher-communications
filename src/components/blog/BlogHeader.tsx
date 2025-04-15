
import React from 'react';

interface BlogHeaderProps {
  title: string;
  description: string;
}

const BlogHeader = ({ title, description }: BlogHeaderProps) => {
  return (
    <div className="text-center max-w-xl mx-auto mb-8 md:mb-16 pt-16">
      <div className="mb-8 md:mb-12">
        <img 
          src="/lovable-uploads/bannerblogg.webp" 
          alt="Blog Banner" 
          className="w-full h-auto object-cover rounded-lg mx-auto max-w-4xl"
          loading="lazy"
        />
      </div>
      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-3 md:mb-4">
        Blogg
      </span>
      <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4">{title}</h2>
      <p className="text-campher-gray text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

export default BlogHeader;
