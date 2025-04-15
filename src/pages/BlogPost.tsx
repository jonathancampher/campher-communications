
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

/**
 * BlogPost-komponent
 * 
 * Denne komponenten viser et enkelt blogginnlegg.
 * Setter sidetittel og meta-tagger for SEO-optimalisering.
 * Håndterer visning av innlegg, navigering tilbake til bloggdelen,
 * og inneholder funksjonalitet for å like innlegget.
 */
const BlogPost = () => {
  const { id } = useParams();
  const isMobile = useIsMobile();
  
  const post = blogPosts.find(post => post.id === Number(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO-optimalisering: Sett dokumenttittel og meta-beskrivelse
    if (post) {
      document.title = `${post.title} | Campher Communications`;
      
      // Oppdater meta-beskrivelse
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      // Use the first 160 characters of content if no excerpt is provided
      const description = post.excerpt || post.content.slice(0, 160) + '...';
      metaDescription.setAttribute('content', description);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom pt-24 pb-6 md:pt-28 md:pb-20">
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
      <div className="container-custom pt-24 pb-6 md:pt-28 md:pb-20">
        <BlogBackNavigation navigateToBlogSection={navigateToBlogSection} />
        
        {isMobile && <BlogMobileDrawer navigateToBlogSection={navigateToBlogSection} />}
        
        <div className="space-y-4">
          <BlogPostContent 
            title={post.title}
            publishDate={post.publishDate}
            readTime={post.readTime}
            content={post.content}
          />
          <BlogPostActions initialLikes={0} title={post.title} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
