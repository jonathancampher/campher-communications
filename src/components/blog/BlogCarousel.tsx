
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import BlogPostCard from './BlogPostCard';

interface BlogCarouselProps {
  posts: Array<{
    id: number;
    title: string;
    excerpt: string;
    publishDate: string;
    readTime: string;
    featured?: boolean;
  }>;
  scrollToTop: () => void;
}

const BlogCarousel = ({ posts, scrollToTop }: BlogCarouselProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {posts.map((post) => (
            <CarouselItem key={post.id} className={isMobile ? "pl-2 basis-full" : "pl-4 md:basis-1/2 lg:basis-1/3"}>
              <BlogPostCard post={post} scrollToTop={scrollToTop} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 md:mt-8 gap-4">
          <CarouselPrevious className="static transform-none mx-2" />
          <CarouselNext className="static transform-none mx-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
