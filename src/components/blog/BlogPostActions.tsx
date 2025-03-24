
import { useState } from 'react';
import { Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface BlogPostActionsProps {
  initialLikes?: number;
}

const BlogPostActions = ({ initialLikes = 0 }: BlogPostActionsProps) => {
  const { toast } = useToast();
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const isMobile = window.innerWidth < 768;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      toast({
        title: "Takk for likes!",
        description: "Du likte dette innlegget",
      });
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        text: "Sjekk ut dette innlegget!",
        url: window.location.href
      });
    } catch (err) {
      toast({
        title: "Del innlegget",
        description: "Kopier linken: " + window.location.href,
      });
    }
  };

  return (
    <div className="flex gap-3 md:gap-4 items-center border-t pt-4 md:pt-6">
      <Button 
        variant="outline" 
        size={isMobile ? "sm" : "default"}
        onClick={handleLike}
        className={`gap-2 ${hasLiked ? 'text-red-500' : ''}`}
      >
        <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
        {likes} likes
      </Button>
      
      <Button 
        variant="outline" 
        size={isMobile ? "sm" : "default"}
        onClick={handleShare}
        className="gap-2"
      >
        <Share className="w-4 h-4" />
        Del
      </Button>
    </div>
  );
};

export default BlogPostActions;
