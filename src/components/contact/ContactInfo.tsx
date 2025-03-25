
import ContactItem from './ContactItem';
import TeamSection from './TeamSection';
import { getContactInfo } from './contactData';

/**
 * ContactInfo-komponent
 * 
 * Viser kontaktinformasjon og teammedlem i kontaktseksjonen.
 * Bruker ContactItem-komponenter for hver type kontaktinformasjon og
 * TeamSection for å vise teammedlemmer.
 */
const ContactInfo = () => {
  const contactInfo = getContactInfo();

  return (
    <div className="lg:col-span-2 space-y-6">
      {contactInfo.map((item, index) => (
        <ContactItem 
          key={index} 
          index={index}
          {...item}
        />
      ))}
      
      <TeamSection />
    </div>
  );
};

export default ContactInfo;
