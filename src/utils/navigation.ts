
export const navigateToBlogSection = () => {
  setTimeout(() => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};
