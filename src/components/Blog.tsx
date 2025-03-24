
import BlogHeader from './blog/BlogHeader';
import BlogCarousel from './blog/BlogCarousel';
import { blogPostPreviews } from '@/data/blogData';

/**
 * Blog-komponent
 * 
 * Denne komponenten inneholder bloggseksjonen med artikler om viktigheten av nettsider
 * og andre relevante temaer for bedrifter som ønsker å etablere digital tilstedeværelse.
 */
const Blog = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <BlogHeader 
          title="Nyttige artikler" 
          description="Les våre artikler om digitalisering, nettsider og markedsføring for å holde deg oppdatert på trender og beste praksiser."
        />

        <BlogCarousel posts={blogPostPreviews} scrollToTop={scrollToTop} />
      </div>
    </section>
  );
};

export default Blog;
