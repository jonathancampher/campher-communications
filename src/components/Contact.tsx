
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import ContactMap from './contact/ContactMap';
import { NetlifyFormDetection } from './contact/NetlifyFormDetection';

/**
 * Contact-komponent
 * 
 * Hovedkomponent for kontaktseksjonen som sammenstiller alle kontaktrelaterte underkomponenter.
 * Organiserer layout og struktur for kontaktinformasjon, skjema og kart.
 */
const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      {/* Add NetlifyFormDetection at the top level for better detection */}
      <NetlifyFormDetection />
      
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            Ta kontakt
          </span>
          <h2 className="heading-lg mb-4">Kontakt oss</h2>
          <p className="text-campher-gray">
            Har du et prosjekt i tankene eller ønsker du å vite mer om mine tjenester? Jeg vil gjerne høre fra deg. 
            Ta kontakt med meg og la oss starte en samtale.
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
