
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { navigateToBlogSection } from '@/utils/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [sheetOpen, setSheetOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tjenester', href: '#services' },
    { name: 'Prosjekter', href: '#portfolio' },
    { name: 'Blogg', href: '#blog' },
    { name: 'Om Oss', href: '#about' },
    { name: 'Kontakt', href: '#contact', primary: true }
  ];

  // Function to handle section navigation
  const handleSectionNavigation = (href: string) => {
    // Close mobile menu
    setSheetOpen(false);
    
    if (location.pathname !== '/') {
      // Navigate to home page first, then to section
      window.location.href = `/${href}`;
    } else {
      // If already on home page, just scroll to section
      const sectionElement = document.querySelector(href);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#blog') {
        navigateToBlogSection();
      }
    }
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? 'py-1 shadow-md bg-campher-dark/95 backdrop-blur-md' 
          : 'py-2 bg-campher-dark'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo - links to home or root */}
        {location.pathname === '/' ? (
          <a href="#home" className="flex items-center py-2 bg-white rounded px-2">
            <Logo />
          </a>
        ) : (
          <Link to="/" className="flex items-center py-2 bg-white rounded px-2">
            <Logo />
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link, index) => (
            location.pathname === '/' ? (
              <a
                key={index}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  link.primary
                    ? "bg-campher-blue hover:bg-blue-600 text-white"
                    : "text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={index}
                to={`/${link.href}`}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  link.primary
                    ? "bg-campher-blue hover:bg-blue-600 text-white"
                    : "text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Navigation Sheet */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="p-2 text-white hover:bg-white/10 border border-white/10 rounded-md"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Åpne meny</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-campher-dark border-campher-dark w-[250px] p-0">
            <div className="flex flex-col space-y-3 p-6 h-full">
              <div className="flex justify-end mb-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/10 p-1 rounded-md"
                  onClick={() => setSheetOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              {navLinks.map((link, index) => (
                <Button
                  key={index}
                  className={cn(
                    "px-4 py-4 rounded-md text-center text-base font-medium transition-colors",
                    link.primary
                      ? "bg-campher-blue hover:bg-blue-600 text-white shadow-md"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  )}
                  onClick={() => handleSectionNavigation(link.href)}
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
