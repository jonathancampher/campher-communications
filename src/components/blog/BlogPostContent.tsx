
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BlogPostContentProps {
  title: string;
  publishDate: string;
  readTime: string;
  content: string;
  image?: string;
}

const BlogPostContent = ({ title, publishDate, readTime, content, image }: BlogPostContentProps) => {
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
            />
          </AspectRatio>
        </div>
      )}
      <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h1>
      <div className="flex gap-3 md:gap-4 text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
        <span>{publishDate}</span>
        <span>{readTime}</span>
      </div>
      
      <div className="prose max-w-none mb-6 md:mb-8 text-sm md:text-base">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-3 md:mb-4">{paragraph.trim()}</p>
        ))}
      </div>
    </Card>
  );
};

export default BlogPostContent;
