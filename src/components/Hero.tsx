
import { ArrowRight } from 'lucide-react';
import { useLanguageContext } from '@/context/LanguageContext';

/**
 * Hero-komponent
 * 
 * Denne komponenten viser hovedbanneret på forsiden av nettsiden.
 * Inkluderer hovedtittel, kort beskrivelse, CTA-knapp og en forbedret visuell fremstilling
 * av "Bygg din fremtid på nett" seksjonen med bedre layout.
 */
const Hero = () => {
  const { language } = useLanguageContext();

  const texts = {
    no: {
      badge: "Webutviklingsekspert",
      title: "Jeg bygger",
      titleHighlight: "digitale opplevelser",
      titleEnd: "som transformerer bedrifter",
      description: "Campher Communications spesialiserer seg på å skape innovative webløsninger som hjelper bedrifter å skille seg ut og lykkes i det digitale landskapet.",
      cta: "Få din nettside",
      sectionTitle: "Bygg din fremtid på nett",
      service1Title: "Nettsider",
      service1Description: "Responsive og brukervennlige nettsider som konverterer besøkende til kunder",
      service2Title: "Google-synlighet",
      service2Description: "SEO-optimalisering for å sikre at kundene dine finner deg på nett",
      service3Title: "Support",
      service3Description: "Kontinuerlig teknisk støtte og vedlikehold av din nettside",
      startCta: "Start i dag",
      proudToWorkWith: "Stolte av å jobbe med:"
    },
    en: {
      badge: "Web Development Expert",
      title: "I build",
      titleHighlight: "digital experiences",
      titleEnd: "that transform businesses",
      description: "Campher Communications specializes in creating innovative web solutions that help businesses stand out and succeed in the digital landscape.",
      cta: "Get your website",
      sectionTitle: "Build your future online",
      service1Title: "Websites",
      service1Description: "Responsive and user-friendly websites that convert visitors into customers",
      service2Title: "Google visibility",
      service2Description: "SEO optimization to ensure your customers find you online",
      service3Title: "Support",
      service3Description: "Continuous technical support and maintenance of your website",
      startCta: "Start today",
      proudToWorkWith: "Proud to work with:"
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="w-full space-y-6 text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded-full" aria-label={t.badge}>
              {t.badge}
            </span>
            <h1 className="heading-xl" id="main-heading">
              {t.title} <span className="text-gradient">{t.titleHighlight}</span> {t.titleEnd}
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t.description}
            </p>
            <div className="flex justify-center pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg min-h-12 min-w-36"
                aria-label={t.cta}
              >
                {t.cta}
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="w-full">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
              
              <div className="relative bg-white shadow-2xl rounded-xl p-6 md:p-8 border border-gray-100 overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">{t.sectionTitle}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl text-center">
                    <h3 className="text-lg md:text-xl font-medium text-blue-800 mb-2 md:mb-3">{t.service1Title}</h3>
                    <p className="text-sm md:text-base text-gray-700">{t.service1Description}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl text-center">
                    <h3 className="text-lg md:text-xl font-medium text-blue-800 mb-2 md:mb-3">{t.service2Title}</h3>
                    <p className="text-sm md:text-base text-gray-700">{t.service2Description}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl text-center">
                    <h3 className="text-lg md:text-xl font-medium text-blue-800 mb-2 md:mb-3">{t.service3Title}</h3>
                    <p className="text-sm md:text-base text-gray-700">{t.service3Description}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-medium transition-colors text-sm md:text-base min-h-10 min-w-32"
                    aria-label={t.startCta}
                  >
                    {t.startCta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
            <p className="text-base md:text-lg font-medium text-gray-700 text-center">{t.proudToWorkWith}</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
              {[
                'Global Transportservice AS', 
                'Våtromstjeneste AS', 
                'Magnus Henriksen AS', 
                'Myhre Montasje', 
                'Prestige Coaching'
              ].map((company, index) => (
                <div key={index} className="text-lg md:text-base font-display font-medium text-gray-700 text-center">
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
