
import { NavigateOptions } from "react-router-dom";

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
