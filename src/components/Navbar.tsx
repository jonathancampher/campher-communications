
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hjem', href: '#home' },
    { name: 'Tjenester', href: '#services' },
    { name: 'Prosjekter', href: '#portfolio' },
    { name: 'Om oss', href: '#about' },
    { name: 'Kontakt', href: '#contact' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 shadow-md bg-white/90 backdrop-blur-md' : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-campher-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-campher-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Ta kontakt
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-campher-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-campher-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium transition-colors inline-block w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Ta kontakt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
