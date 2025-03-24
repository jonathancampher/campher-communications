
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
 * Setter også dokumentets tittel og språk til norsk.
 */
const Index = () => {
  // Sett dokumentets tittel og språk
  document.title = "Campher Communications | Webutvikling og digitale løsninger";
  document.documentElement.lang = "no";
  
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
