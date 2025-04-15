
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface BlogBackNavigationProps {
  navigateToBlogSection: () => void;
}

const BlogBackNavigation = ({ navigateToBlogSection }: BlogBackNavigationProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/blog');
  };

  return (
    <Link 
      to="/blog" 
      onClick={handleClick}
      className="text-campher-blue hover:underline mb-4 md:mb-6 inline-flex items-center gap-2 bg-blue-50 px-3 py-2 md:px-4 md:py-2 rounded-md transition-colors hover:bg-blue-100 w-full md:w-auto justify-center md:justify-start"
    >
      <ArrowLeft size={20} />
      <span className="font-medium">Tilbake til blogg</span>
    </Link>
  );
};

export default BlogBackNavigation;
