
import BlogHeader from './blog/BlogHeader';
import BlogCarousel from './blog/BlogCarousel';
import { blogPostPreviews } from '@/data/blogData';
import { useLanguageContext } from '@/context/LanguageContext';

/**
 * Blog-komponent
 * 
 * Denne komponenten inneholder bloggseksjonen med artikler om viktigheten av nettsider
 * og andre relevante temaer for bedrifter som ønsker å etablere digital tilstedeværelse.
 */
const Blog = () => {
  const { language } = useLanguageContext();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const texts = {
    no: {
      title: "Nyttige artikler",
      description: "Les våre artikler om digitalisering, nettsider og markedsføring for å holde deg oppdatert på trender og beste praksiser."
    },
    en: {
      title: "Useful Articles",
      description: "Read our articles about digitalization, websites, and marketing to stay updated on trends and best practices."
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];
  
  // Format blog posts with the correct language
  const localizedPosts = blogPostPreviews.map(post => ({
    ...post,
    title: post.title[language === 'no' ? 'no' : 'en'],
    excerpt: post.excerpt[language === 'no' ? 'no' : 'en'],
    publishDate: post.publishDate[language === 'no' ? 'no' : 'en'],
    readTime: post.readTime[language === 'no' ? 'no' : 'en']
  }));

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <BlogHeader 
          title={t.title} 
          description={t.description}
        />

        <BlogCarousel posts={localizedPosts} scrollToTop={scrollToTop} />
      </div>
    </section>
  );
};

export default Blog;
