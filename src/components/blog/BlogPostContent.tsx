
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useEffect, useRef, useState } from 'react';

interface BlogPostContentProps {
  title: string;
  publishDate: string;
  readTime: string;
  content: string;
  image?: string;
}

const BlogPostContent = ({ title, publishDate, readTime, content, image }: BlogPostContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Ensure content is properly rendered across browsers
  useEffect(() => {
    if (contentRef.current) {
      // Force layout recalculation to ensure content is visible
      contentRef.current.style.opacity = '0';
      
      // Using setTimeout to ensure browser has time to process
      const timer = setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.display = 'block';
          contentRef.current.style.opacity = '1';
          setIsVisible(true);
        }
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [content]);
  
  // Split paragraphs correctly and remove empty ones
  const paragraphs = content
    .split(/\n\n+/) // Split on multiple line breaks
    .filter(p => p.trim().length > 0) // Remove empty paragraphs
    .map(p => p.trim());
  
  return (
    <Card className="p-4 md:p-8">
      {image && (
        <div className="mb-6 -mx-4 md:-mx-8 overflow-hidden">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="1200"
              height="675"
            />
          </AspectRatio>
        </div>
      )}
      <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h1>
      <div className="flex gap-3 md:gap-4 text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
        <span>{publishDate}</span>
        <span>{readTime}</span>
      </div>
      
      <div 
        ref={contentRef} 
        className={`prose max-w-none mb-6 md:mb-8 text-sm md:text-base transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-3 md:mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </Card>
  );
};

export default BlogPostContent;
