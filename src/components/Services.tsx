
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
      price: "Fra kr 15.000,-",
      features: [
        "Moderne, responsiv nettside med kontaktskjema og brukervennlig design",
        "Eget domene (f.eks. deresnavn.no) som styrker merkevaren din",
        "Profesjonell e-postadresse (f.eks. kontakt@deresnavn.no)",
        "Google My Business-oppsett for lokal synlighet og kundeanmeldelser",
        "Grunnleggende SEO for å bli funnet i søkemotorer",
        "3 måneders support for å sikre at alt fungerer som det skal",
        "Inkludert hosting på sikker og rask server"
      ]
    },
    {
      title: "12 måneders komplett pakke",
      description: "Optimal løsning for bedrifter som vil vokse på nett",
      price: "Fra kr 36.000,- (eller kr 3.000,-/mnd)",
      features: [
        "Alt i Digital Startpakke +",
        "Mer omfattende nettside med flere undersider",
        "Premium design med tilpasset grafisk profil",
        "Ubegrenset antall innholdsoppdateringer i perioden",
        "Avansert SEO-optimalisering for bedre rangering",
        "Google Analytics-oppsett med månedlige rapporter",
        "12 måneders prioritert teknisk support",
        "Optimalisering av ytelse og hastighet",
        "Sikkerhetskopier og vedlikehold inkludert"
      ]
    },
    {
      title: "Vedlikehold og support",
      description: "Løpende hjelp for å holde nettsiden din oppdatert og effektiv",
      price: "Fra kr 1.500,-/mnd",
      features: [
        "Oppdateringer av innhold, bilder og design etter behov",
        "Teknisk support med garantert responstid",
        "Overvåking av nettsidens ytelse og sikkerhet",
        "Tilpasninger for å møte nye mål eller markedsendringer",
        "Sikkerhetskopier og oppdateringer av programvare",
        "Månedlig gjennomgang av statistikk og besøkstall"
      ]
    },
    {
      title: "Ekstra tjenester",
      description: "Tilpassede løsninger for å ta din digitale tilstedeværelse videre",
      price: "Tilpasset pris",
      features: [
        "Avansert SEO for høyere rangering i Google",
        "Integrasjoner som booking-systemer eller nettbutikk",
        "Opplæring i hvordan du selv kan oppdatere nettsiden",
        "Rådgivning om digital markedsføring og AI-verktøy",
        "Innholdsproduksjon (tekst, bilder og video)",
        "Sosiale medier-strategi og implementering"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16">
          {/* Improved contrast by changing bg-blue-100 to bg-blue-200 and changing text color */}
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded-full mb-4" aria-label="Seksjonsetikett">
            Hva jeg tilbyr
          </span>
          <h2 className="heading-lg mb-4">Mine tjenester</h2>
          <p className="text-gray-700">
            Jeg leverer omfattende webutviklingstjenester skreddersydd for dine forretningsbehov. 
            Fra konsept til lansering håndterer jeg alle aspekter av den digitale opplevelsen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Improved contrast by using bg-blue-200 instead of bg-blue-100 */}
              <div className="w-12 h-12 bg-blue-200 text-blue-800 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="heading-md text-center mb-12">Mine produktpakker</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productPackages.map((pkg, index) => (
              <Card key={index} className="shadow-sm opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                  <p className="text-blue-800 font-semibold mt-2">{pkg.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        {/* Improved contrast by using text-blue-800 instead of text-campher-blue */}
                        <span className="text-blue-800 font-medium">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    aria-label="Ta kontakt om denne pakken"
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
            className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            aria-label="Diskuter ditt prosjekt med oss"
          >
            Diskuter ditt prosjekt
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
