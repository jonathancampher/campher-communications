
import { useIsMobile } from '@/hooks/use-mobile';
import BlogHeader from './blog/BlogHeader';
import BlogPostCard from './blog/BlogPostCard';
import BlogSidebar from './blog/BlogSidebar';
import BlogMobileRecent from './blog/BlogMobileRecent';
import { blogPostPreviews } from '@/data/blogData';

/**
 * Blog-komponent
 * 
 * Denne komponenten inneholder bloggseksjonen med artikler om viktigheten av nettsider
 * og andre relevante temaer for bedrifter som ønsker å etablere digital tilstedeværelse.
 */
const Blog = () => {
  const isMobile = useIsMobile();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const featuredPost = blogPostPreviews.find(post => post.featured);
  const regularPosts = blogPostPreviews.filter(post => !post.featured);

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <BlogHeader 
          title="Nyttige artikler" 
          description="Les våre artikler om digitalisering, nettsider og markedsføring for å holde deg oppdatert på trender og beste praksiser."
        />

        {isMobile ? (
          <div className="space-y-4">
            {/* Mobile Blog Layout */}
            {featuredPost && (
              <BlogPostCard post={featuredPost} isFeatured={true} scrollToTop={scrollToTop} />
            )}
            
            <BlogMobileRecent posts={regularPosts} scrollToTop={scrollToTop} />
            
            <div className="grid grid-cols-1 gap-4">
              {regularPosts.slice(0, 4).map((post) => (
                <BlogPostCard key={post.id} post={post} scrollToTop={scrollToTop} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Desktop Blog Layout */}
            {featuredPost && (
              <div className="lg:col-span-8">
                <BlogPostCard post={featuredPost} isFeatured={true} scrollToTop={scrollToTop} />
              </div>
            )}
            
            <div className="lg:col-span-4">
              <BlogSidebar recentPosts={regularPosts} scrollToTop={scrollToTop} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
