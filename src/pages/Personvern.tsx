
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Personvern-komponent
 * 
 * Side for personvernerklæring med detaljert informasjon om hvordan 
 * vi behandler personopplysninger.
 */
const Personvern = () => {
  // Sett dokumentets tittel for SEO
  document.title = "Personvernerklæring | Campher Communications";
  document.documentElement.lang = "no";
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          {/* Breadcrumbs navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/"><Home size={16} /></Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight size={16} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Personvernerklæring</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-8 text-center">Personvernerklæring</h1>
          
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm">
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Introduksjon</h2>
              <p className="text-campher-gray mb-4">
                Campher Communications er opptatt av å beskytte dine personopplysninger. Denne personvernerklæringen beskriver hvordan vi samler inn, bruker og beskytter informasjonen du gir oss når du bruker vår nettside eller våre tjenester.
              </p>
              <p className="text-campher-gray">
                Ved å bruke vår nettside, samtykker du til innsamling og bruk av informasjon i samsvar med denne erklæringen.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Hvilke opplysninger vi samler inn</h2>
              <p className="text-campher-gray mb-4">
                Vi kan samle inn følgende typer informasjon:
              </p>
              <ul className="list-disc pl-6 text-campher-gray space-y-2">
                <li>Personlig identifiserbar informasjon (som navn, e-postadresse, telefonnummer) når du fyller ut kontaktskjemaet</li>
                <li>Ikke-personlig identifiserbar informasjon (som nettlesertype, IP-adresse, besøksdato og -tid)</li>
                <li>Informasjonskapsler for å forbedre brukererfaringen</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Hvordan vi bruker dine opplysninger</h2>
              <p className="text-campher-gray mb-4">
                Vi bruker dine personopplysninger for følgende formål:
              </p>
              <ul className="list-disc pl-6 text-campher-gray space-y-2">
                <li>For å forbedre vår nettside og tjenester</li>
                <li>For å kontakte deg angående forespørsler</li>
                <li>For å sende periodiske e-poster relatert til våre tjenester</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Oppbevaring og sikkerhet</h2>
              <p className="text-campher-gray mb-4">
                Vi tar sikring av dine personopplysninger på alvor. Vi bruker bransjestandardverktøy og -metoder for å beskytte dine data mot uautorisert tilgang eller avsløring.
              </p>
              <p className="text-campher-gray">
                Personopplysninger lagres ikke lenger enn det som er nødvendig for formålet det ble samlet inn for, eller så lenge det er påkrevd ved lov.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Dine rettigheter</h2>
              <p className="text-campher-gray mb-4">
                I henhold til GDPR (General Data Protection Regulation) har du rett til:
              </p>
              <ul className="list-disc pl-6 text-campher-gray space-y-2">
                <li>Innsyn i hvilke personopplysninger vi har om deg</li>
                <li>Å få opplysningene korrigert eller slettet</li>
                <li>Å trekke samtykke til behandling av dine personopplysninger</li>
                <li>Dataportabilitet (få utlevert dine data i et strukturert format)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-medium mb-4">Kontakt oss</h2>
              <p className="text-campher-gray mb-4">
                Hvis du har spørsmål om denne personvernerklæringen eller ønsker å utøve dine rettigheter, kan du kontakte oss på:
              </p>
              <p className="text-campher-gray">
                E-post: kontakt@camphercommunications.no<br />
                Telefon: +47 94053198<br />
                Adresse: Åsgårdstrandveien 384, 3179 Åsgårdstrand, Norge
              </p>
            </section>
            
            <div className="mt-8 flex justify-center">
              <Link 
                to="/" 
                className="bg-campher-blue hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Tilbake til forsiden
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Personvern;
