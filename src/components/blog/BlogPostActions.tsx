
import { useState } from 'react';
import { Heart, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface BlogPostActionsProps {
  initialLikes?: number;
  title: string;
}

const BlogPostActions = ({ initialLikes = 0, title }: BlogPostActionsProps) => {
  const { toast } = useToast();
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  const currentUrl = window.location.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

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
        title: title,
        text: "Sjekk ut dette innlegget!",
        url: currentUrl
      });
    } catch (err) {
      toast({
        title: "Del innlegget",
        description: "Kopier linken: " + currentUrl,
      });
    }
  };

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };

  return (
    <div className="border-t pt-6 space-y-4">
      <div className="flex gap-4 items-center">
        <Button 
          variant="outline" 
          onClick={handleLike}
          className={`gap-2 ${hasLiked ? 'text-red-500' : ''}`}
        >
          <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
          {likes} likes
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handleShare}
          className="gap-2"
        >
          <Share2 className="w-4 h-4" />
          Del
        </Button>
      </div>

      <div className="flex gap-4 items-center pt-2">
        <a 
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-400"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a 
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-700"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default BlogPostActions;
