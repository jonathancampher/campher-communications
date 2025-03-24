
import { ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    publishDate: string;
    readTime: string;
  };
  isFeatured?: boolean;
  scrollToTop: () => void;
}

const BlogPostCard = ({ post, isFeatured = false, scrollToTop }: BlogPostCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Link 
      to={`/blog/${post.id}`} 
      className="block transition-transform hover:-translate-y-1"
      onClick={scrollToTop}
    >
      <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {isFeatured && !isMobile && (
          <div className="relative h-64 overflow-hidden bg-blue-50 flex items-center justify-center">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-medium text-campher-blue">{post.title}</h3>
            </div>
          </div>
        )}
        {isFeatured && isMobile && (
          <div className="relative h-32 overflow-hidden bg-blue-50 flex items-center justify-center">
            <div className="p-4 text-center">
              <h3 className="text-xl font-medium text-campher-blue">{post.title}</h3>
            </div>
          </div>
        )}
        <CardHeader className={isMobile ? "p-3" : "p-6"}>
          <CardTitle className={isMobile ? "text-lg" : "text-2xl"}>{post.title}</CardTitle>
          <CardDescription className="text-xs md:text-sm">Publisert {post.publishDate} | {post.readTime} lesetid</CardDescription>
        </CardHeader>
        <CardContent className={isMobile ? "p-3 pt-0" : "p-6 pt-0"}>
          <p className="text-gray-600 text-sm md:text-base line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className={`flex justify-between items-center ${isMobile ? "p-3 pt-0" : "p-6 pt-0"}`}>
          <div className="flex gap-2 md:gap-4 text-gray-500 text-xs md:text-sm">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 md:w-4 md:h-4" />
              0
            </span>
          </div>
          <span className="text-campher-blue hover:underline inline-flex items-center text-xs md:text-sm">
            Les mer
            <ArrowUpRight size={isMobile ? 14 : 16} className="ml-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
