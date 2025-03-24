
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Index-komponent
 * 
 * Hovedside som samler alle komponentene i riktig rekkefølge.
 * Setter dokumentets tittel, språk og meta-beskrivelse for SEO-optimalisering.
 * Inkluderer strukturerte data for bedre søkemotorvisning.
 */
const Index = () => {
  useEffect(() => {
    // Sett dokumentets tittel, språk og meta-beskrivelse
    document.title = "Campher Communications | Webutvikling og digitale løsninger";
    document.documentElement.lang = "no";
    
    // Oppdater meta-beskrivelse for SEO
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Campher Communications leverer skreddersydde nettsider, SEO-optimalisering og digital markedsføring for bedrifter som vil lykkes på nett. Org. nr. 932498413.');
    
    // Legg til strukturerte data for bedre SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Campher Communications',
      'url': 'https://camphercommunications.no',
      'logo': 'https://camphercommunications.no/logo.png',
      'description': 'Webutvikling og digitale løsninger for bedrifter.',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'NO'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+47-00-00-00-00',
        'contactType': 'customer service'
      },
      'sameAs': [
        'https://www.facebook.com/camphercommunications',
        'https://www.linkedin.com/company/camphercommunications'
      ],
      'vatID': '932498413'
    });
    
    // Fjern eventuell tidligere versjon av strukturerte data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
