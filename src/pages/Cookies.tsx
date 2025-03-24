
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
 * Cookies-komponent
 * 
 * Side med informasjon om informasjonskapsler (cookies) som 
 * brukes på nettsiden.
 */
const Cookies = () => {
  // Sett dokumentets tittel for SEO
  document.title = "Informasjonskapsler | Campher Communications";
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
                <BreadcrumbPage>Informasjonskapsler</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-8 text-center">Informasjonskapsler (Cookies)</h1>
          
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm">
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Hva er informasjonskapsler?</h2>
              <p className="text-campher-gray">
                Informasjonskapsler (cookies) er små tekstfiler som lagres på din enhet når du besøker vår nettside. De brukes for å huske dine preferanser, forbedre brukeropplevelsen og forstå hvordan besøkende bruker nettsiden.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Hvilke typer informasjonskapsler vi bruker</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Nødvendige informasjonskapsler</h3>
                  <p className="text-campher-gray">
                    Disse er essensielle for at nettsiden skal fungere korrekt. De aktiveres som svar på dine handlinger som å sette personvernpreferanser eller fylle ut skjemaer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Analytiske informasjonskapsler</h3>
                  <p className="text-campher-gray">
                    Vi bruker verktøy som Google Analytics for å samle inn anonym informasjon om hvordan besøkende bruker nettsiden vår. Dette hjelper oss å forbedre nettsidens funksjonalitet.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Funksjonelle informasjonskapsler</h3>
                  <p className="text-campher-gray">
                    Disse gjør det mulig for nettsiden å huske valg du har gjort tidligere for å gi forbedret funksjonalitet og personlige funksjoner.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Slik administrerer du informasjonskapsler</h2>
              <p className="text-campher-gray mb-4">
                De fleste nettlesere gir deg muligheten til å administrere informasjonskapsler gjennom innstillingene. Du kan:
              </p>
              <ul className="list-disc pl-6 text-campher-gray space-y-2">
                <li>Slette informasjonskapsler fra din enhet</li>
                <li>Blokkere informasjonskapsler som standard</li>
                <li>Velge å blokkere informasjonskapsler fra bestemte nettsider</li>
                <li>Blokkere tredjeparters informasjonskapsler</li>
              </ul>
              <p className="text-campher-gray mt-4">
                Vær oppmerksom på at å blokkere eller slette informasjonskapsler kan påvirke brukeropplevelsen på vår nettside.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">Endringer i vår informasjonskapselspolicy</h2>
              <p className="text-campher-gray">
                Vi kan oppdatere vår informasjonskapselspolicy fra tid til annen. Eventuelle endringer vil bli publisert på denne siden, og hvis endringene er vesentlige, vil vi gi en mer fremtredende melding.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-medium mb-4">Kontakt oss</h2>
              <p className="text-campher-gray">
                Hvis du har spørsmål om vår bruk av informasjonskapsler, vennligst kontakt oss på:<br /><br />
                
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

export default Cookies;
