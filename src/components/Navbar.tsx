
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { Book } from 'lucide-react';

/**
 * Navbar-komponent
 * 
 * Hovednavigasjon for nettstedet med fokus på enkelhet.
 * Endrer utseende ved scrolling og har knapper for nettside og blogg for enklere navigasjon.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
          <a href="#home" className="flex items-center py-2">
            <Logo />
          </a>
        ) : (
          <Link to="/" className="flex items-center py-2">
            <Logo />
          </Link>
        )}

        {/* Navigation med nettside-knapp og blogg-knapp */}
        <div className="flex items-center space-x-4">
          {/* Blogg-knapp */}
          {location.pathname === '/' ? (
            <a 
              href="#blog" 
              className="flex items-center text-white px-6 py-3 rounded-md text-sm font-medium transition-colors hover:text-campher-blue"
            >
              <Book className="mr-2 h-4 w-4" />
              Blogg
            </a>
          ) : (
            <Link 
              to="/#blog" 
              className="flex items-center text-white px-6 py-3 rounded-md text-sm font-medium transition-colors hover:text-campher-blue"
            >
              <Book className="mr-2 h-4 w-4" />
              Blogg
            </Link>
          )}

          {/* Nettside-knapp */}
          <a 
            href="#contact" 
            className="bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
          >
            Nettside
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
