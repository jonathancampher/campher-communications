
import { ArrowRight } from 'lucide-react';

/**
 * Hero-komponent
 * 
 * Denne komponenten viser hovedbanneret på forsiden av nettsiden.
 * Inkluderer hovedtittel, kort beskrivelse, CTA-knapp og en forbedret visuell fremstilling
 * av "Bygg din fremtid på nett" seksjonen med bedre layout.
 */
const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="w-full space-y-6 text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full">
              Webutviklingseksperter
            </span>
            <h1 className="heading-xl">
              Vi bygger <span className="text-gradient">digitale opplevelser</span> som transformerer bedrifter
            </h1>
            <p className="text-lg text-campher-gray max-w-2xl mx-auto">
              Campher Communications spesialiserer seg på å skape innovative webløsninger som hjelper bedrifter å skille seg ut og lykkes i det digitale landskapet.
            </p>
            <div className="flex justify-center pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg"
              >
                Få din nettside
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* Forbedret "Bygg din fremtid" seksjon med bedre mobil-layout */}
          <div className="w-full">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
              
              <div className="relative bg-white shadow-2xl rounded-xl p-6 md:p-8 border border-gray-100 overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-campher-dark mb-6 md:mb-8">Bygg din fremtid på nett</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl text-center">
                    <h3 className="text-lg md:text-xl font-medium text-campher-blue mb-2 md:mb-3">Nettsider</h3>
                    <p className="text-sm md:text-base text-campher-gray">Responsive og brukervennlige nettsider som konverterer besøkende til kunder</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl text-center">
                    <h3 className="text-lg md:text-xl font-medium text-campher-blue mb-2 md:mb-3">Google-synlighet</h3>
                    <p className="text-sm md:text-base text-campher-gray">SEO-optimalisering for å sikre at kundene dine finner deg på nett</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl text-center">
                    <h3 className="text-lg md:text-xl font-medium text-campher-blue mb-2 md:mb-3">Support</h3>
                    <p className="text-sm md:text-base text-campher-gray">Kontinuerlig teknisk støtte og vedlikehold av din nettside</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-medium transition-colors text-sm md:text-base"
                  >
                    Start i dag
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
            <p className="text-base md:text-lg font-medium text-campher-gray text-center">Stolte av å jobbe med:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
              {['Bedriftsnavn AS', 'Norsk Industri AS', 'Digital Vekst AS'].map((company, index) => (
                <div key={index} className="text-lg md:text-xl font-display font-medium text-gray-700 text-center">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
