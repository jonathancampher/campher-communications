
import Blog from '@/components/Blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const BlogPage = () => {
  useEffect(() => {
    // Ensure we scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Set page title for SEO
    document.title = "Blog | Campher Communications";
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28">
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
