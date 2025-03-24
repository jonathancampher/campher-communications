
import { CheckCircle } from 'lucide-react';

/**
 * About-komponent
 * 
 * Presenterer informasjon om selskapet, inkludert erfaringstall, verdier og personlig informasjon.
 * Inkluderer også kundeanmeldelser og kontaktknapp.
 */
const About = () => {
  const values = [
    'Kundefokusert tilnærming',
    'Teknisk dyktighet',
    'Innovative løsninger',
    'Transparent kommunikasjon',
    'Fokus på detaljer',
    'Overholdelse av tidsfrister'
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-1">
                  <div className="text-3xl font-semibold text-campher-blue">1+</div>
                  <div className="text-sm text-campher-gray">År med erfaring</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-2">
                  <div className="text-3xl font-semibold text-campher-blue">3+</div>
                  <div className="text-sm text-campher-gray">Fullførte prosjekter</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-3">
                  <div className="text-3xl font-semibold text-campher-blue">3+</div>
                  <div className="text-sm text-campher-gray">Fornøyde kunder</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-4">
                  <div className="text-3xl font-semibold text-campher-blue">100%</div>
                  <div className="text-sm text-campher-gray">Kundetilfredshet</div>
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
                        "Campher Communications transformerte vår nettilstedeværelse. Teamet deres leverte en nettside som overgikk våre forventninger og virkelig representerer vårt merke."
                      </p>
                      <p className="text-campher-dark font-medium text-sm mt-2">- Kundenavn, Bedrift</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4 opacity-0 animate-fade-in">
              Om meg
            </span>
            <h2 className="heading-lg mb-4 opacity-0 animate-fade-in stagger-1">
              Jeg hjelper bedrifter å vokse digitalt
            </h2>
            <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in stagger-2">
              <img 
                src="/lovable-uploads/b7bb1f5a-cbd7-4885-9a85-2750d69cc2e7.png" 
                alt="Jonathan Campher" 
                className="w-20 h-20 rounded-full border-2 border-campher-blue object-cover"
              />
              <div>
                <h3 className="text-xl font-medium">Jonathan Campher</h3>
                <p className="text-campher-gray text-sm">Grunnlegger og Webutvikler</p>
              </div>
            </div>
            <p className="text-campher-gray mb-6 opacity-0 animate-fade-in stagger-3">
              Jeg heter Jonathan Campher, er 27 år gammel og driver Campher Communications. Med en bakgrunn i anvendt datateknologi har jeg en solid forståelse av hvordan teknologi kan løse reelle problemer – spesielt for små bedrifter.
            </p>
            <p className="text-campher-gray mb-6 opacity-0 animate-fade-in stagger-4">
              Gjennom årene har jeg reist mye og sett hvor stort behovet for en digital tilstedeværelse er i dagens samfunn. Overalt møter jeg nyoppstartede bedrifter som sliter med å nå kundene sine. Derfor brenner jeg for å tilby moderne, økonomiske løsninger som hjelper dem å vokse.
            </p>
            <p className="text-campher-gray mb-6 opacity-0 animate-fade-in stagger-5">
              Jeg har en sterk interesse for teknologi og kunstig intelligens, og jeg holder meg oppdatert på det nyeste innen webdesign og digitale trender. Målet mitt er å gi deg en nettside som ikke bare ser bra ut, men som faktisk gir resultater – uten å tømme lommeboka di.
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
              La oss bygge noe bra sammen!
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors opacity-0 animate-fade-in stagger-8"
            >
              Jobb med meg
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
