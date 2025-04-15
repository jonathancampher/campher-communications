
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguageContext } from '@/context/LanguageContext';
import { NavItem } from '@/components/nav/types';

export const useNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();
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
    
    if (isPage) {
      // For page navigation, use regular navigation
      if (location.pathname !== href) {
        window.location.href = href;
      }
      return;
    }
    
    // If trying to navigate to a homepage section from another page
    if (location.pathname !== '/') {
      // Navigate to homepage with the section anchor
      window.location.href = `/${href}`;
      return;
    }
    
    // If already on homepage, use smooth scroll
    const sectionElement = document.querySelector(href);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
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
