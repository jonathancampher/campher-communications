
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler innsending av skjema
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Melding sendt",
        description: "Takk for din henvendelse. Vi vil ta kontakt med deg snart!",
      });
      
      // Tilbakestill skjema
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

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
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            Ta kontakt
          </span>
          <h2 className="heading-lg mb-4">Kontakt oss</h2>
          <p className="text-campher-gray">
            Har du et prosjekt i tankene eller ønsker du å vite mer om våre tjenester? Vi vil gjerne høre fra deg. 
            Ta kontakt med oss og la oss starte en samtale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
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
          
          <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-medium mb-6">Send oss en melding</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-campher-gray mb-1">
                    Ditt navn
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                    placeholder="Ole Nordmann"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-campher-gray mb-1">
                    Din e-post
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                    placeholder="ole@eksempel.no"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-campher-gray mb-1">
                  Emne
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
                  placeholder="Prosjektforespørsel"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-campher-gray mb-1">
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition resize-none"
                  placeholder="Fortell oss om ditt prosjekt..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sender...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send melding
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        <div id="map" className="w-full rounded-xl overflow-hidden shadow-lg animate-fade-in">
          <h3 className="text-xl font-medium mb-4">Finn oss her</h3>
          <div className="aspect-video">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.2077150140435!2d10.489216877112375!3d59.329485874614384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b34cb9ebf1e1%3A0xd7baba40d83270f8!2sCampher%20Communications!5e0!3m2!1sno!2sza!4v1742820270559!5m2!1sno!2sza" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Campher Communications location"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
