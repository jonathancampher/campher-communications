

import { NavigateOptions } from "react-router-dom";

export const navigateToSection = (navigate: any, pathname: string, sectionId: string) => {
  // If we're already on the homepage, just scroll to the section
  if (pathname === '/') {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  } else {
    // If we're on another page, navigate to homepage with section hash
    navigate('/', { state: { scrollToSection: sectionId } });
  }
};

export const navigateToBlogSection = () => {
  setTimeout(() => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

export const handleScrollToSection = (sectionId: string) => {
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

// Preload project images to improve loading performance
export const preloadProjectImages = (projectIds: number[]) => {
  const imageUrls = [
    '/lovable-uploads/globaltransport.png',
    '/lovable-uploads/vatromtjeneste.webp',
    '/lovable-uploads/prosjektmagnus.webp',
    '/lovable-uploads/prosjektmyhre.webp'
  ];
  
  // Create image objects to preload
  projectIds.forEach(id => {
    if (id > 0 && id <= imageUrls.length) {
      const img = new Image();
      img.src = imageUrls[id - 1];
    }
  });
};
