
import Blog from '@/components/Blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPage = () => {
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
