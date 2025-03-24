
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            Blogg
          </span>
          <h2 className="heading-lg mb-4">Nyttige artikler</h2>
          <p className="text-campher-gray">
            Les våre artikler om digitalisering, nettsider og markedsføring for å holde deg oppdatert på trender og beste praksiser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-64 overflow-hidden bg-blue-50 flex items-center justify-center">
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-medium text-campher-blue">Hvorfor en nettside er viktig i 2025</h3>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Hvorfor en nettside er viktig i 2025</CardTitle>
                <CardDescription>Publisert 1. mai 2025 | 5 minutter lesetid</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">I 2025 er en nettside hjertet i din digitale tilstedeværelse. Her er hvorfor:</p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-campher-blue font-medium">•</span>
                    <p>98 % av nordmenn søker på nett før de velger en tjeneste (SSB, 2023).</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-campher-blue font-medium">•</span>
                    <p>Uten nettside mister du kunder til konkurrenter som er synlige.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-campher-blue font-medium">•</span>
                    <p>En nettside bygger troverdighet og gir deg kontroll over merkevaren din.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-campher-blue font-medium">•</span>
                    <p>Google og lokal SEO krever en plattform for å rangere høyt.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-campher-blue font-medium">•</span>
                    <p>Små bedrifter med nettside kan se en kundeøkning på 20–50 %.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-campher-blue font-medium">•</span>
                    <p>En nettside kan gi en inntektsvekst på 10–30 % årlig, avhengig av bransje.</p>
                  </li>
                </ul>
                
                <p>For eksempel kan en håndverker øke fra 500 000 NOK til 550 000–650 000 NOK i året med bare 5–10 ekstra kunder fra nettet.</p>
                <p className="mt-4 font-medium">Ikke vent – kom på nett i dag og utnytt potensialet for vekst!</p>
              </CardContent>
              <CardFooter>
                <a 
                  href="#services" 
                  className="inline-flex items-center text-campher-blue hover:underline font-medium"
                >
                  Se våre tjenester
                  <ArrowUpRight size={16} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Bygg din fremtid på nett</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-campher-gray mb-4">
                  Skreddersydde løsninger for små bedrifter som vil vokse i 2025.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-campher-blue"></span>
                    <span>Nettsider</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-campher-blue"></span>
                    <span>Google-synlighet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-campher-blue"></span>
                    <span>Support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Start i dag
                </a>
              </CardFooter>
            </Card>
            
            <div className="bg-blue-50 p-5 rounded-xl">
              <h3 className="text-lg font-medium mb-3">Hvordan jeg hjelper deg</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Nettsidedesign</h4>
                  <p className="text-sm text-campher-gray">Moderne, responsive nettsider som tiltrekker kunder.</p>
                  <a href="#services" className="text-xs text-campher-blue hover:underline">Se mine tjenester</a>
                </div>
                <div>
                  <h4 className="font-medium">Digital synlighet</h4>
                  <p className="text-sm text-campher-gray">SEO og Google-oppsett for å nå flere lokalt.</p>
                  <a href="#blog" className="text-xs text-campher-blue hover:underline">Lær hvorfor det er viktig</a>
                </div>
                <div>
                  <h4 className="font-medium">Support og drift</h4>
                  <p className="text-sm text-campher-gray">Vedlikehold og domene for en sømløs opplevelse.</p>
                  <a href="#contact" className="text-xs text-campher-blue hover:underline">Kontakt meg for hjelp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
