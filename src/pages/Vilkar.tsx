
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Vilkar-komponent
 * 
 * Side for vilkår for bruk som detaljerer regler og betingelser 
 * for bruk av tjenestene.
 */
const Vilkar = () => {
  // Sett dokumentets tittel for SEO
  document.title = "Vilkår for bruk | Campher Communications";
  document.documentElement.lang = "no";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          <h1 className="heading-lg mb-8 text-center">Vilkår for bruk</h1>
          
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm">
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">1. Aksept av vilkår</h2>
              <p className="text-campher-gray">
                Ved å bruke Campher Communications sin nettside og tjenester, aksepterer du disse vilkårene for bruk i sin helhet. Hvis du ikke godtar disse vilkårene, vennligst ikke bruk nettsiden eller tjenestene.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">2. Tjenestebeskrivelse</h2>
              <p className="text-campher-gray">
                Campher Communications tilbyr webutviklingstjenester, inkludert nettside-design, utvikling og vedlikehold. Vi forbeholder oss retten til å endre eller avslutte våre tjenester uten forvarsel.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">3. Priser og betaling</h2>
              <p className="text-campher-gray mb-4">
                Alle priser er oppgitt i norske kroner (NOK) og er eksklusive merverdiavgift (MVA). Betaling skal skje innen 14 dager fra fakturadato, med mindre annet er avtalt skriftlig.
              </p>
              <p className="text-campher-gray">
                Ved forsinket betaling påløper forsinkelsesrenter i henhold til gjeldende satser.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">4. Immaterielle rettigheter</h2>
              <p className="text-campher-gray">
                Etter fullstendig betaling overføres eierskapet til designelementer og kode spesielt utviklet for kunden. Campher Communications beholder retten til å bruke generiske elementer i fremtidige prosjekter. Vi forbeholder oss også retten til å vise prosjektet i vår portefølje, med mindre annet er avtalt.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">5. Ansvarsbegrensning</h2>
              <p className="text-campher-gray">
                Campher Communications er ikke ansvarlig for indirekte tap, følgeskader eller tap av data. Vårt totale ansvar er begrenset til beløpet betalt for tjenesten. Vi garanterer ikke at tjenestene vil være feilfrie eller uavbrutte.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">6. Endringer av vilkår</h2>
              <p className="text-campher-gray">
                Vi forbeholder oss retten til å endre disse vilkårene når som helst. Endringer vil tre i kraft umiddelbart etter publisering på vår nettside. Fortsatt bruk av tjenestene etter endringer anses som aksept av de nye vilkårene.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-medium mb-4">7. Kontakt</h2>
              <p className="text-campher-gray">
                Hvis du har spørsmål om disse vilkårene, vennligst kontakt oss på:<br /><br />
                
                E-post: kontakt@camphercommunications.no<br />
                Telefon: +47 94053198<br />
                Adresse: Åsgårdstrandveien 384, 3179 Åsgårdstrand, Norge
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Vilkar;
