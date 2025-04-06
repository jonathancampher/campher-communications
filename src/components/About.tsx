
import { CheckCircle } from 'lucide-react';
import { useLanguageContext } from '@/context/LanguageContext';

/**
 * About-komponent
 * 
 * Presenterer informasjon om selskapet, inkludert erfaringstall, verdier og personlig informasjon.
 * Inkluderer også kundeanmeldelser og kontaktknapp.
 */
const About = () => {
  const { language } = useLanguageContext();
  
  const texts = {
    no: {
      badge: "Om meg",
      title: "Jeg hjelper bedrifter å vokse digitalt",
      role: "Grunnlegger og Webutvikler",
      description1: "Jeg heter Jonathan Campher, er 27 år gammel og driver Campher Communications. Med en bakgrunn i anvendt datateknologi har jeg en solid forståelse av hvordan teknologi kan løse reelle problemer – spesielt for små bedrifter.",
      description2: "Gjennom årene har jeg reist mye og sett hvor stort behovet for en digital tilstedeværelse er i dagens samfunn. Overalt møter jeg nyoppstartede bedrifter som sliter med å nå kundene sine. Derfor brenner jeg for å tilby moderne, økonomiske løsninger som hjelper dem å vokse.",
      description3: "Jeg har en sterk interesse for teknologi og kunstig intelligens, og jeg holder meg oppdatert på det nyeste innen webdesign og digitale trender. Målet mitt er å gi deg en nettside som ikke bare ser bra ut, men som faktisk gir resultater – uten å tømme lommeboka di.",
      buildTogether: "La oss bygge noe bra sammen!",
      workWithMe: "Jobb med meg",
      experience: "År med erfaring",
      projects: "Fullførte prosjekter",
      clients: "Fornøyde kunder",
      satisfaction: "Kundetilfredshet",
      testimonial: "\"Campher Communications transformerte vår nettilstedeværelse. Jonathan leverte en nettside som overgikk våre forventninger og virkelig representerer vårt merke.\"",
      testimonialAuthor: "- Marcu, Prestige Coaching",
      values: [
        'Kundefokusert tilnærming',
        'Teknisk dyktighet',
        'Innovative løsninger',
        'Transparent kommunikasjon',
        'Fokus på detaljer',
        'Overholdelse av tidsfrister'
      ]
    },
    en: {
      badge: "About me",
      title: "I help businesses grow digitally",
      role: "Founder and Web Developer",
      description1: "My name is Jonathan Campher, I'm 27 years old and I run Campher Communications. With a background in applied computer technology, I have a solid understanding of how technology can solve real problems – especially for small businesses.",
      description2: "Over the years, I've traveled extensively and seen how great the need for digital presence is in today's society. Everywhere I meet startups struggling to reach their customers. That's why I'm passionate about offering modern, cost-effective solutions that help them grow.",
      description3: "I have a strong interest in technology and artificial intelligence, and I keep up-to-date with the latest in web design and digital trends. My goal is to give you a website that not only looks good but actually delivers results – without emptying your wallet.",
      buildTogether: "Let's build something great together!",
      workWithMe: "Work with me",
      experience: "Years of experience",
      projects: "Completed projects",
      clients: "Happy clients",
      satisfaction: "Client satisfaction",
      testimonial: "\"Campher Communications transformed our online presence. Jonathan delivered a website that exceeded our expectations and truly represents our brand.\"",
      testimonialAuthor: "- Marcu, Prestige Coaching",
      values: [
        'Customer-focused approach',
        'Technical proficiency',
        'Innovative solutions',
        'Transparent communication',
        'Attention to detail',
        'Adherence to deadlines'
      ]
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];
  const values = t.values;

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-1">
                  <div className="text-3xl font-semibold text-campher-blue">1+</div>
                  <div className="text-sm text-campher-gray">{t.experience}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-2">
                  <div className="text-3xl font-semibold text-campher-blue">3+</div>
                  <div className="text-sm text-campher-gray">{t.projects}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-3">
                  <div className="text-3xl font-semibold text-campher-blue">3+</div>
                  <div className="text-sm text-campher-gray">{t.clients}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-4">
                  <div className="text-3xl font-semibold text-campher-blue">100%</div>
                  <div className="text-sm text-campher-gray">{t.satisfaction}</div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-campher-blue/5 p-4 border border-campher-blue/10 opacity-0 animate-fade-in stagger-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-campher-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-campher-blue">"</span>
                    </div>
                    <div>
                      <p className="text-campher-gray italic text-sm">
                        {t.testimonial}
                      </p>
                      <p className="text-campher-dark font-medium text-sm mt-2">{t.testimonialAuthor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded-full mb-4 opacity-0 animate-fade-in">
              {t.badge}
            </span>
            <h2 className="heading-lg mb-4 opacity-0 animate-fade-in stagger-1">
              {t.title}
            </h2>
            <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in stagger-2">
              <div className="w-20 h-20 rounded-full border-2 border-campher-blue overflow-hidden">
                <img 
                  src="/lovable-uploads/b7bb1f5a-cbd7-4885-9a85-2750d69cc2e7.png" 
                  alt="Jonathan Campher" 
                  className="w-full h-full object-cover object-top"
                  width="645"
                  height="764"
                  loading="eager"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">Jonathan Campher</h3>
                <p className="text-campher-gray text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-campher-gray mb-6 opacity-0 animate-fade-in stagger-3">
              {t.description1}
            </p>
            <p className="text-campher-gray mb-6 opacity-0 animate-fade-in stagger-4">
              {t.description2}
            </p>
            <p className="text-campher-gray mb-6 opacity-0 animate-fade-in stagger-5">
              {t.description3}
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-8 opacity-0 animate-fade-in stagger-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-campher-blue" />
                  <span className="text-sm text-campher-dark">{value}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg font-medium mb-6 opacity-0 animate-fade-in stagger-7">
              {t.buildTogether}
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors opacity-0 animate-fade-in stagger-8"
            >
              {t.workWithMe}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
