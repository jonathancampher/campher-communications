
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '#about' },
        { name: 'Services', url: '#services' },
        { name: 'Projects', url: '#portfolio' },
        { name: 'Contact', url: '#contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', url: '#services' },
        { name: 'UI/UX Design', url: '#services' },
        { name: 'E-Commerce', url: '#services' },
        { name: 'Performance Optimization', url: '#services' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '#' },
        { name: 'Terms of Service', url: '#' },
        { name: 'Cookie Policy', url: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-campher-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-display font-semibold tracking-tight">
                <span className="text-campher-blue">Campher</span> Communications
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We build digital experiences that help businesses connect with their customers and achieve their goals.
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
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-white hover:underline transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Campher Communications. All rights reserved.
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
