
import { Mail, MapPin, Phone } from 'lucide-react';
import { ReactNode } from 'react';

export interface ContactItemData {
  icon: ReactNode;
  title: string;
  info: string;
  link: string;
}

/**
 * Contact data for the website
 */
export const getContactInfo = () => [
  {
    icon: <Mail size={20} />,
    title: 'Send e-post',
    info: 'kontakt@camphercommunications.no',
    link: 'mailto:kontakt@camphercommunications.no',
  },
  {
    icon: <Phone size={20} />,
    title: 'Ring oss',
    info: '+47 94053198',
    link: 'tel:+4794053198',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Besøk oss',
    info: 'Åsgårdstrandveien 384, 3179 Åsgårdstrand',
    link: '#map',
  },
];
