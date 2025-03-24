
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

/**
 * Footer-komponent
 * 
 * Bunntekst med firmalogo, navigasjonslenker og copyright-informasjon.
 * Inneholder også en scroll-to-top-knapp.
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    {
      title: 'Selskap',
      links: [
        { name: 'Om oss', url: '#about' },
        { name: 'Tjenester', url: '#services' },
        { name: 'Prosjekter', url: '#portfolio' },
        { name: 'Kontakt', url: '#contact' },
      ]
    },
    {
      title: 'Tjenester',
      links: [
        { name: 'Webutvikling', url: '#services' },
        { name: 'UI/UX Design', url: '#services' },
        { name: 'E-handel', url: '#services' },
        { name: 'Ytelsesoptimalisering', url: '#services' },
      ]
    },
    {
      title: 'Juridisk',
      links: [
        { name: 'Personvernerklæring', url: '/personvern' },
        { name: 'Vilkår for bruk', url: '/vilkar' },
        { name: 'Informasjonskapsler', url: '/cookies' },
      ]
    }
  ];

  return (
    <footer className="bg-campher-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="mb-6 inline-block">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Vi bygger digitale opplevelser som hjelper bedrifter med å koble seg til sine kunder og oppnå sine mål.
            </p>
            <p className="text-gray-400 mb-6">
              Org.nr: 932498413
            </p>
            <div className="flex gap-3">
              {['T', 'L', 'I', 'F'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-campher-blue flex items-center justify-center transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.url.startsWith('/') ? (
                      <Link 
                        to={link.url} 
                        className="text-gray-400 hover:text-white hover:underline transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.url} 
                        className="text-gray-400 hover:text-white hover:underline transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Campher Communications. Alle rettigheter reservert.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-campher-blue transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
