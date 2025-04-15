
import { Mail, MapPin, Phone } from 'lucide-react';
import { ReactNode } from 'react';

export interface ContactItemData {
  icon: ReactNode;
  title: {
    no: string;
    en: string;
  };
  info: string;
  link: string;
}

const createMailIcon = () => ({ type: Mail, props: { size: 20 } });
const createPhoneIcon = () => ({ type: Phone, props: { size: 20 } });
const createMapPinIcon = () => ({ type: MapPin, props: { size: 20 } });

export const getContactInfo = () => [
  {
    icon: createMailIcon(),
    title: {
      no: 'Send e-post',
      en: 'Send email'
    },
    info: 'kontakt@camphercommunications.no',
    link: 'mailto:kontakt@camphercommunications.no',
  },
  {
    icon: createPhoneIcon(),
    title: {
      no: 'Ring oss',
      en: 'Call us'
    },
    info: '+47 94053198',
    link: 'tel:+4794053198',
  },
  {
    icon: createMapPinIcon(),
    title: {
      no: 'Besøk oss',
      en: 'Visit us'
    },
    info: 'Åsgårdstrandveien 384, 3179 Åsgårdstrand',
    link: '#map',
  },
];
