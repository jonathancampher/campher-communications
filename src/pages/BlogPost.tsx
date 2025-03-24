
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostActions from '@/components/blog/BlogPostActions';
import BlogBackNavigation from '@/components/blog/BlogBackNavigation';
import BlogMobileDrawer from '@/components/blog/BlogMobileDrawer';
import { blogPosts } from '@/data/blogPosts';
import { navigateToBlogSection } from '@/utils/navigation';

const BlogPost = () => {
  const { id } = useParams();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-10 md:py-20">
          <h1 className="text-2xl">Innlegget ble ikke funnet</h1>
          <BlogBackNavigation navigateToBlogSection={navigateToBlogSection} />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-custom py-6 md:py-20">
        <BlogBackNavigation navigateToBlogSection={navigateToBlogSection} />
        
        {isMobile && <BlogMobileDrawer navigateToBlogSection={navigateToBlogSection} />}
        
        <div className="space-y-4">
          <BlogPostContent 
            title={post.title}
            publishDate={post.publishDate}
            readTime={post.readTime}
            content={post.content}
          />
          <BlogPostActions initialLikes={0} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
