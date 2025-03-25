
import { Mail, MapPin, Phone } from 'lucide-react';
import { ReactNode } from 'react';

export interface ContactItemData {
  icon: ReactNode;
  title: string;
  info: string;
  link: string;
}

// Create icon factories to avoid using JSX directly in a .ts file
const createMailIcon = () => ({ type: Mail, props: { size: 20 } });
const createPhoneIcon = () => ({ type: Phone, props: { size: 20 } });
const createMapPinIcon = () => ({ type: MapPin, props: { size: 20 } });

/**
 * Contact data for the website
 */
export const getContactInfo = () => [
  {
    icon: createMailIcon(),
    title: 'Send e-post',
    info: 'kontakt@camphercommunications.no',
    link: 'mailto:kontakt@camphercommunications.no',
  },
  {
    icon: createPhoneIcon(),
    title: 'Ring oss',
    info: '+47 94053198',
    link: 'tel:+4794053198',
  },
  {
    icon: createMapPinIcon(),
    title: 'Besøk oss',
    info: 'Åsgårdstrandveien 384, 3179 Åsgårdstrand',
    link: '#map',
  },
];
