
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

interface BlogMobileDrawerProps {
  navigateToBlogSection: () => void;
}

const BlogMobileDrawer = ({ navigateToBlogSection }: BlogMobileDrawerProps) => {
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
            <h3 className="font-medium text-lg">Navigasjon</h3>
            <Link 
              to="/#blog" 
              className="flex items-center gap-2 p-3 bg-blue-50 text-campher-blue rounded-md w-full"
              onClick={navigateToBlogSection}
            >
              <ArrowLeft size={18} />
              <span className="font-medium">Tilbake til blogg</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 p-3 bg-gray-50 text-gray-700 rounded-md w-full"
            >
              <span className="font-medium">Til forsiden</span>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BlogMobileDrawer;
