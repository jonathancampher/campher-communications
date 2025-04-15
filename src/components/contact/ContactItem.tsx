
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { useLanguageContext } from '@/context/LanguageContext';

interface IconData {
  type: LucideIcon;
  props: {
    size: number;
    [key: string]: any;
  };
}

interface ContactItemProps {
  icon: IconData;
  title: {
    no: string;
    en: string;
  };
  info: string;
  link: string;
  index: number;
}

/**
 * ContactItem-komponent
 * 
 * Viser et enkelt kontaktpunkt med ikon, tittel og informasjon.
 */
const ContactItem = ({ icon, title, info, link, index }: ContactItemProps) => {
  const IconComponent = icon.type;
  const { language } = useLanguageContext();
  
  // Display title according to selected language
  const displayTitle = title[language === 'no' ? 'no' : 'en'];
  
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4 opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="w-10 h-10 bg-blue-100 text-campher-blue rounded-lg flex items-center justify-center flex-shrink-0">
        <IconComponent {...icon.props} />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{displayTitle}</h3>
        <a href={link} className="text-campher-gray hover:text-campher-blue transition-colors">
          {info}
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
