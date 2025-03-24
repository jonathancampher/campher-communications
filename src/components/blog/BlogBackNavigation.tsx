
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface BlogBackNavigationProps {
  navigateToBlogSection: () => void;
}

const BlogBackNavigation = ({ navigateToBlogSection }: BlogBackNavigationProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Link 
      to="/#blog" 
      className="text-campher-blue hover:underline mb-4 md:mb-6 inline-flex items-center gap-2 bg-blue-50 px-3 py-2 md:px-4 md:py-2 rounded-md transition-colors hover:bg-blue-100 w-full md:w-auto justify-center md:justify-start"
      onClick={navigateToBlogSection}
    >
      <ArrowLeft size={isMobile ? 20 : 16} />
      <span className="font-medium">Tilbake til blogg</span>
    </Link>
  );
};

export default BlogBackNavigation;
