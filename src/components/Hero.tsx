
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full opacity-0 animate-fade-in stagger-1">
              Webutviklingseksperter
            </span>
            <h1 className="heading-xl opacity-0 animate-fade-in stagger-2">
              Vi bygger <span className="text-gradient">digitale opplevelser</span> som transformerer bedrifter
            </h1>
            <p className="text-lg text-campher-gray max-w-xl opacity-0 animate-fade-in stagger-3">
              Campher Communications spesialiserer seg på å skape innovative webløsninger som hjelper bedrifter å skille seg ut og lykkes i det digitale landskapet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in stagger-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Våre tjenester
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-campher-dark border border-gray-200 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Se våre arbeider
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in stagger-5">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
              <div className="relative bg-white shadow-xl rounded-xl p-4 border border-gray-100 overflow-hidden">
                <div className="h-64 md:h-80 relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-campher-blue/10 to-blue-500/10 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-medium text-campher-dark mb-2">Bygg din fremtid på nett</h3>
                    <p className="text-campher-gray text-sm md:text-base max-w-md">Skreddersydde løsninger for små bedrifter som vil vokse i 2025</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 p-2">
                  <div className="flex -space-x-2">
                    {['Nettsider', 'Google-synlighet', 'Support'].map((item, index) => (
                      <div key={index} className="px-3 py-1 rounded-full bg-blue-50 text-campher-blue text-xs border border-blue-100 ml-2 first:ml-0">
                        {item}
                      </div>
                    ))}
                  </div>
                  <a 
                    href="#contact" 
                    className="bg-campher-blue text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    Start i dag
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 md:mt-32 opacity-0 animate-fade-in stagger-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12">
            <p className="text-sm font-medium text-campher-gray w-full md:w-auto text-center md:text-left">Stolte av å jobbe med:</p>
            {['Bedrift 1', 'Bedrift 2', 'Bedrift 3', 'Bedrift 4'].map((company, index) => (
              <div key={index} className="text-lg font-display font-medium text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
