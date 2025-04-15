
import { useState } from 'react';
import { ArrowUpRight, Heart, Share2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    publishDate: string;
    readTime: string;
  };
  layout?: 'grid' | 'list';
  scrollToTop: () => void;
}

const BlogPostCard = ({ post, layout = 'grid', scrollToTop }: BlogPostCardProps) => {
  const { toast } = useToast();
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const navigate = useNavigate();
  
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent navigation when clicking like button
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      toast({
        title: "Takk for likes!",
        description: "Du likte dette innlegget",
      });
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent navigation when clicking share button
    try {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.origin + '/blog/' + post.id
      });
    } catch (err) {
      toast({
        title: "Del innlegget",
        description: "Kopier linken: " + window.location.origin + '/blog/' + post.id,
      });
    }
  };
  
  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTop();
    navigate(`/blog/${post.id}`);
  };

  return (
    <Link 
      to={`/blog/${post.id}`} 
      className="block transition-transform hover:-translate-y-1"
      onClick={handleCardClick}
    >
      <Card className={`h-full overflow-hidden hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-200 ${
        layout === 'list' ? 'flex md:flex-row' : ''
      }`}>
        <div className={layout === 'list' ? 'w-full md:w-1/3' : ''}>
          <div className="relative overflow-hidden bg-blue-50">
            <AspectRatio ratio={16/9}>
              <div className="p-6 text-center flex items-center justify-center h-full">
                <h3 className="text-xl font-medium text-blue-800">{post.title}</h3>
              </div>
            </AspectRatio>
          </div>
        </div>

        <div className={layout === 'list' ? 'w-full md:w-2/3' : ''}>
          <CardHeader>
            <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
            <CardDescription>{post.publishDate} | {post.readTime} lesetid</CardDescription>
          </CardHeader>
          
          <CardContent>
            <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
          </CardContent>

          <CardFooter className="flex justify-between items-center">
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`gap-2 ${hasLiked ? 'text-red-500' : ''}`}
                onClick={handleLike}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                {likes}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4" />
                Del
              </Button>
            </div>

            <span className="text-blue-800 font-medium hover:text-blue-900 inline-flex items-center">
              Les mer
              <ArrowUpRight size={16} className="ml-1" />
            </span>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
