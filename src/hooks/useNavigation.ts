
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguageContext } from '@/context/LanguageContext';
import { NavItem } from '@/components/nav/types';

export const useNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  const [forceUpdate, setForceUpdate] = useState(0);
  
  const isBlogRoute = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };
    
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const navLinks: NavItem[] = [
    { 
      name: language === 'no' ? 'Tjenester' : 'Services', 
      href: '#services' 
    },
    { 
      name: language === 'no' ? 'Prosjekter' : 'Projects', 
      href: '#portfolio' 
    },
    { 
      name: language === 'no' ? 'Blogg' : 'Blog', 
      href: '/blog',
      isPage: true,
      isActive: isBlogRoute
    },
    { 
      name: language === 'no' ? 'Om Oss' : 'About Us', 
      href: '#about' 
    },
    { 
      name: language === 'no' ? 'Kontakt' : 'Contact', 
      href: '#contact', 
      primary: true 
    }
  ];

  const handleSectionNavigation = (href: string, isPage?: boolean) => {
    setSheetOpen(false);
    
    // Handle navigation to sections on the homepage
    if (href.startsWith('#')) {
      const sectionId = href.substring(1); // Remove the # character
      
      // If we're not on the homepage, navigate to homepage first
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToSection: sectionId } });
      } else {
        // If already on homepage, just scroll to the section
        const sectionElement = document.querySelector(href);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }
    
    // For page navigation (like /blog)
    if (isPage) {
      navigate(href);
    }
  };

  return {
    isScrolled,
    sheetOpen,
    setSheetOpen,
    navLinks,
    handleSectionNavigation,
    language,
    forceUpdate
  };
};
