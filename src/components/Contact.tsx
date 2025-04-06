
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import ContactMap from './contact/ContactMap';
import { NetlifyFormDetection } from './contact/NetlifyFormDetection';
import { useLanguageContext } from '@/context/LanguageContext';

/**
 * Contact-komponent
 * 
 * Hovedkomponent for kontaktseksjonen som sammenstiller alle kontaktrelaterte underkomponenter.
 * Organiserer layout og struktur for kontaktinformasjon, skjema og kart.
 */
const Contact = () => {
  const { language } = useLanguageContext();
  
  const texts = {
    no: {
      badge: "Ta kontakt",
      title: "Kontakt oss",
      description: "Har du et prosjekt i tankene eller ønsker du å vite mer om mine tjenester? Jeg vil gjerne høre fra deg. Ta kontakt med meg og la oss starte en samtale."
    },
    en: {
      badge: "Get in touch",
      title: "Contact us",
      description: "Do you have a project in mind or would you like to know more about my services? I would love to hear from you. Contact me and let's start a conversation."
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];

  return (
    <section id="contact" className="section-padding">
      {/* Add NetlifyFormDetection at the top level for better detection */}
      <NetlifyFormDetection />
      
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            {t.badge}
          </span>
          <h2 className="heading-lg mb-4">{t.title}</h2>
          <p className="text-campher-gray">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactMap />
      </div>
    </section>
  );
};

export default Contact;
