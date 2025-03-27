
import { Code, PaintBucket, ShoppingCart, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Services-komponent
 * 
 * Denne komponenten viser tjenestene og produktpakkene som tilbys.
 * Inkluderer hovedtjenester og detaljerte produktpakker for ulike behov.
 */
const Services = () => {
  // Hovedtjenester med ikoner og beskrivelser
  const mainServices = [
    {
      icon: <Code size={24} />,
      title: 'Webutvikling',
      description: 'Jeg bygger moderne, responsive nettsider med den nyeste teknologien for optimal ytelse.',
    },
    {
      icon: <PaintBucket size={24} />,
      title: 'UI/UX Design',
      description: 'Skaper intuitive brukergrensesnitt og sømløse brukeropplevelser som begeistrer kunder.',
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'E-handelsløsninger',
      description: 'Skreddersydde nettbutikker som øker salg og gir eksepsjonelle handleopplevelser.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobiloptimalisert utvikling',
      description: 'Nettsteder optimalisert for mobile enheter for å nå kunder uansett hvor de er.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Ytelsesoptimalisering',
      description: 'Få din nettside raskere for bedre brukeropplevelse og forbedret søkemotorrangering.',
    },
  ];

  // Detaljerte produktpakker
  const productPackages = [
    {
      title: "Digital Startpakke",
      description: "En komplett løsning for å få bedriften din på nett",
      features: [
        "Moderne, responsiv nettside med kontaktskjema og brukervennlig design",
        "Eget domene (f.eks. deresnavn.no) som styrker merkevaren din",
        "Profesjonell e-postadresse (f.eks. kontakt@deresnavn.no)",
        "Google My Business-oppsett for lokal synlighet og kundeanmeldelser",
        "Grunnleggende SEO for å bli funnet i søkemotorer",
        "3 måneders support for å sikre at alt fungerer som det skal"
      ]
    },
    {
      title: "Vedlikehold og support",
      description: "Løpende hjelp for å holde nettsiden din oppdatert og effektiv",
      features: [
        "Oppdateringer av innhold, bilder og design etter behov",
        "Teknisk support for å løse problemer raskt",
        "Overvåking av nettsidens ytelse og sikkerhet",
        "Tilpasninger for å møte nye mål eller markedsendringer"
      ]
    },
    {
      title: "Ekstra tjenester",
      description: "Tilpassede løsninger for å ta din digitale tilstedeværelse videre",
      features: [
        "Avansert SEO for høyere rangering i Google",
        "Integrasjoner som booking-systemer eller nettbutikk",
        "Opplæring i hvordan du selv kan oppdatere nettsiden",
        "Rådgivning om digital markedsføring og AI-verktøy"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            Hva vi tilbyr
          </span>
          <h2 className="heading-lg mb-4">Våre tjenester</h2>
          <p className="text-campher-gray">
            Jeg leverer omfattende webutviklingstjenester skreddersydd for dine forretningsbehov. 
            Fra konsept til lansering håndterer vi alle aspekter av den digitale opplevelsen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-blue-100 text-campher-blue rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-campher-gray">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="heading-md text-center mb-12">Våre produktpakker</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productPackages.map((pkg, index) => (
              <Card key={index} className="shadow-sm opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-campher-gray mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-campher-blue font-medium">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Ta kontakt
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Diskuter ditt prosjekt
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
