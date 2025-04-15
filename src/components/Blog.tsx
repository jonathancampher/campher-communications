
import BlogHeader from './blog/BlogHeader';
import BlogList from './blog/BlogList';
import { blogPostPreviews } from '@/data/blogData';
import { useLanguageContext } from '@/context/LanguageContext';

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
  
  const localizedPosts = blogPostPreviews.map(post => ({
    ...post,
    title: post.title[language === 'no' ? 'no' : 'en'],
    excerpt: post.excerpt[language === 'no' ? 'no' : 'en'],
    publishDate: post.publishDate[language === 'no' ? 'no' : 'en'],
    readTime: post.readTime[language === 'no' ? 'no' : 'en']
  }));

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <BlogHeader 
          title={t.title} 
          description={t.description}
        />
        <BlogList posts={localizedPosts} scrollToTop={scrollToTop} />
      </div>
    </section>
  );
};

export default Blog;
