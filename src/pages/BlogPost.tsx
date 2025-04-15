
import { useEffect, useState } from 'react';
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
import { useLanguageContext } from '@/context/LanguageContext';
import { applySelectorSafety } from '@/utils/selectorSafety';

const BlogPost = () => {
  const { id } = useParams();
  const isMobile = useIsMobile();
  const { language } = useLanguageContext();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const post = blogPosts.find(post => post.id === Number(id));
  
  useEffect(() => {
    // Apply selector safety to prevent third-party script errors
    applySelectorSafety();
    
    window.scrollTo(0, 0);
    
    if (post) {
      document.title = `${post.title[language]} | Campher Communications`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      const description = post.excerpt ? post.excerpt[language] : post.content[language].slice(0, 160) + '...';
      metaDescription.setAttribute('content', description);
      
      // Signal that content is loaded
      setIsLoaded(true);
    }
  }, [post, language]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom pt-24 pb-6 md:pt-28 md:pb-20">
          <h1 className="text-2xl">{language === 'no' ? 'Innlegget ble ikke funnet' : 'Post not found'}</h1>
          <BlogBackNavigation navigateToBlogSection={navigateToBlogSection} />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-custom pt-24 pb-6 md:pt-28 md:pb-20">
        <BlogBackNavigation navigateToBlogSection={navigateToBlogSection} />
        
        {isMobile && <BlogMobileDrawer navigateToBlogSection={navigateToBlogSection} />}
        
        <div className="space-y-4">
          {/* Add key with isLoaded to force re-render when content is ready */}
          <BlogPostContent 
            key={`${post.id}-${language}-${isLoaded}`}
            title={post.title[language]}
            publishDate={post.publishDate[language]}
            readTime={post.readTime[language]}
            content={post.content[language]}
            image={post.image}
          />
          <BlogPostActions 
            initialLikes={0} 
            title={post.title[language]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
