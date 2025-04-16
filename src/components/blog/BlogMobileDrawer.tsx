
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useLanguageContext } from '@/context/LanguageContext';

interface BlogMobileDrawerProps {
  navigateToBlogSection: () => void;
}

const BlogMobileDrawer = ({ navigateToBlogSection }: BlogMobileDrawerProps) => {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/blog');
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const blogButtonText = language === 'no' ? 'Tilbake til blogg' : 'Back to blog';
  const homeButtonText = language === 'no' ? 'Til forsiden' : 'To homepage';

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Drawer>
        <DrawerTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg bg-white border-blue-100"
          >
            <ArrowLeft className="h-5 w-5 text-campher-blue" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-4">
          <div className="space-y-4">
            <h3 className="font-medium text-lg">{language === 'no' ? 'Navigasjon' : 'Navigation'}</h3>
            <Link 
              to="/blog" 
              onClick={handleClick}
              className="flex items-center gap-2 p-3 bg-blue-50 text-campher-blue rounded-md w-full"
            >
              <ArrowLeft size={18} />
              <span className="font-medium">{blogButtonText}</span>
            </Link>
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="flex items-center gap-2 p-3 bg-gray-50 text-gray-700 rounded-md w-full"
            >
              <span className="font-medium">{homeButtonText}</span>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BlogMobileDrawer;
