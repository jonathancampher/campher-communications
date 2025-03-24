
import { Mail, MapPin, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/**
 * ContactInfo-komponent
 * 
 * Viser kontaktinformasjon og teammedlem i kontaktseksjonen.
 * Inkluderer e-post, telefon, adresse og profilbilde med informasjon.
 */
const ContactInfo = () => {
  const contactInfo = [
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

  return (
    <div className="lg:col-span-2 space-y-6">
      {contactInfo.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >
          <div className="w-10 h-10 bg-blue-100 text-campher-blue rounded-lg flex items-center justify-center flex-shrink-0">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">{item.title}</h3>
            <a href={item.link} className="text-campher-gray hover:text-campher-blue transition-colors">
              {item.info}
            </a>
          </div>
        </div>
      ))}
      
      <div className="bg-white p-6 rounded-xl shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-lg font-medium mb-4">Vårt team</h3>
        <div className="flex gap-4 items-center">
          <Avatar className="h-16 w-16 border-2 border-campher-blue">
            <AvatarImage src="/lovable-uploads/b7bb1f5a-cbd7-4885-9a85-2750d69cc2e7.png" alt="Jonathan Campher" />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">Jonathan Campher</h4>
            <p className="text-campher-gray text-sm">Grunnlegger & Webutvikler</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
