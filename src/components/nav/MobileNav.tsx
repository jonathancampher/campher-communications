
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavItem } from './types';
import LanguageSwitcher from '../LanguageSwitcher';

interface MobileNavProps {
  links: NavItem[];
  sheetOpen: boolean;
  setSheetOpen: (open: boolean) => void;
  handleSectionNavigation: (href: string, isPage?: boolean) => void;
  language: string;
}

const MobileNav = ({ 
  links, 
  sheetOpen, 
  setSheetOpen, 
  handleSectionNavigation,
  language 
}: MobileNavProps) => {
  return (
    <div className="flex items-center md:hidden space-x-3">
      <LanguageSwitcher />
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className="p-2 text-white hover:bg-white/20 hover:text-white border border-white/10 rounded-md"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">
              {language === 'no' ? 'Åpne meny' : 'Open menu'}
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-campher-dark border-campher-dark w-[250px] p-0">
          <div className="flex flex-col space-y-3 p-6 h-full">
            <div className="flex justify-end mb-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/20 hover:text-white p-1 rounded-md"
                onClick={() => setSheetOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            {links.map((link, index) => (
              <Button
                key={`${index}-${link.name}-mobile`}
                className={cn(
                  "px-4 py-4 rounded-md text-center text-base font-medium transition-colors",
                  link.primary
                    ? "bg-campher-blue hover:bg-blue-600 text-white shadow-md"
                    : link.isActive
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-white hover:bg-white/20 border border-white/10"
                )}
                onClick={() => handleSectionNavigation(link.href, link.isPage)}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

