
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useLanguageContext } from '@/context/LanguageContext';

/**
 * Index-komponent
 * 
 * Hovedside som samler alle komponentene i riktig rekkefølge.
 * Setter dokumentets tittel, språk og meta-beskrivelse for SEO-optimalisering.
 * Inkluderer strukturerte data for bedre søkemotorvisning.
 */
const Index = () => {
  const { language } = useLanguageContext();
  
  useEffect(() => {
    // Set document title, language, and meta description based on selected language
    if (language === 'no') {
      document.title = "Campher Communications | Webutvikling og digitale løsninger";
      
      // Update meta description for SEO
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 
        'Campher Communications leverer skreddersydde nettsider, SEO-optimalisering og digital markedsføring for bedrifter som vil lykkes på nett. Org. nr. 932498413.');
    } else {
      document.title = "Campher Communications | Web Development and Digital Solutions";
      
      // Update meta description for SEO
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 
        'Campher Communications delivers tailored websites, SEO optimization, and digital marketing for businesses that want to succeed online. Org. no. 932498413.');
    }
  }, [language]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
