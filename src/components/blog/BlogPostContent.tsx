
import { Card } from '@/components/ui/card';

interface BlogPostContentProps {
  title: string;
  publishDate: string;
  readTime: string;
  content: string;
}

const BlogPostContent = ({ title, publishDate, readTime, content }: BlogPostContentProps) => {
  return (
    <Card className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h1>
      <div className="flex gap-3 md:gap-4 text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
        <span>{publishDate}</span>
        <span>{readTime}</span>
      </div>
      
      <div className="prose max-w-none mb-6 md:mb-8 text-sm md:text-base">
        {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-3 md:mb-4">{paragraph.trim()}</p>
        ))}
      </div>
    </Card>
  );
};

export default BlogPostContent;
