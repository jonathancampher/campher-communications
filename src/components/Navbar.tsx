
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Navbar-komponent
 * 
 * Hovednavigasjon for nettstedet med fokus på enkelhet.
 * Endrer utseende ved scrolling og inneholder navigasjonslenker til hovedseksjonene.
 * Responsiv design med optimalisert navigasjon for alle enheter.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger the scroll handler once on mount to set the initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when changing routes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: 'Tjenester', href: '#services' },
    { name: 'Prosjekter', href: '#portfolio' },
    { name: 'Blogg', href: '#blog' },
    { name: 'Om Oss', href: '#about' },
    { name: 'Kontakt', href: '#contact', primary: true }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-1 shadow-md bg-campher-dark/95 backdrop-blur-md' 
          : 'py-2 bg-campher-dark'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {location.pathname === '/' ? (
          <a href="#home" className="flex items-center py-2 z-10">
            <Logo />
          </a>
        ) : (
          <Link to="/" className="flex items-center py-2 z-10">
            <Logo />
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button 
            onClick={toggleMenu}
            className="p-2 text-white z-20 bg-campher-blue rounded-md shadow-md"
            aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-2">
            {navLinks.map((link, index) => (
              location.pathname === '/' ? (
                <a
                  key={index}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    link.primary
                      ? "bg-campher-blue hover:bg-blue-600 text-white"
                      : "text-white hover:text-campher-blue"
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
                      : "text-white hover:text-campher-blue"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        )}

        {/* Mobile Navigation Menu - Full screen overlay for better UX */}
        {isMobile && menuOpen && (
          <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-campher-dark/98 backdrop-blur-md z-10 pt-20 px-4 overflow-auto">
            <div className="flex flex-col space-y-3 max-w-sm mx-auto">
              {navLinks.map((link, index) => (
                location.pathname === '/' ? (
                  <a
                    key={index}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "px-4 py-4 rounded-md text-center text-base font-medium transition-colors",
                      link.primary
                        ? "bg-campher-blue hover:bg-blue-600 text-white shadow-md"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/5"
                    )}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={`/${link.href}`}
                    onClick={closeMenu}
                    className={cn(
                      "px-4 py-4 rounded-md text-center text-base font-medium transition-colors",
                      link.primary
                        ? "bg-campher-blue hover:bg-blue-600 text-white shadow-md"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
