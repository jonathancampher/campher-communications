
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Blog-komponent
 * 
 * Denne komponenten inneholder bloggseksjonen med artikler om viktigheten av nettsider
 * og andre relevante temaer for bedrifter som ønsker å etablere digital tilstedeværelse.
 */
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Hvorfor en nettside er avgjørende for bedriften din i 2025",
      excerpt: "I 2025 er en profesjonell nettside selve hjertet i din digitale tilstedeværelse. Med økende konkurranse på nett og forbrukere som søker informasjon raskt, er en nettside ikke lenger valgfritt – det er en nødvendighet.",
      publishDate: "5. januar 2025",
      readTime: "4 minutter",
      keywords: "nettside 2025, digital tilstedeværelse, profesjonell nettside",
      featured: true
    },
    {
      id: 2,
      title: "Hvordan en nettside booster synligheten din i søkemotorer i 2025",
      excerpt: "Å ha en nettside i 2025 er nøkkelen til å bli funnet på Google og andre søkemotorer. Med SEO-optimalisering kan du rangere høyere på søkeord som er relevante for din bransje.",
      publishDate: "12. januar 2025",
      readTime: "3 minutter",
      keywords: "SEO 2025, søkemotoroptimalisering, Google rangering",
      featured: false
    },
    {
      id: 3,
      title: "Nettsider som konverterer: Hvorfor det lønner seg i 2025",
      excerpt: "En nettside er ikke bare et digitalt visittkort – det er et kraftig verktøy for å konvertere besøkende til kunder. I 2025 forventer forbrukere en sømløs brukeropplevelse.",
      publishDate: "18. januar 2025",
      readTime: "5 minutter",
      keywords: "nettside konvertering, brukeropplevelse 2025, øke salg online, digitalt verktøy",
      featured: false
    },
    {
      id: 4,
      title: "Bygg tillit med en profesjonell nettside i 2025",
      excerpt: "I en verden full av svindel og usikkerhet på nett, er tillit gull verdt. En profesjonell nettside i 2025 signaliserer at bedriften din er seriøs og pålitelig.",
      publishDate: "25. januar 2025",
      readTime: "4 minutter",
      keywords: "nettside tillit, profesjonell nettutvikling, digital troverdighet",
      featured: false
    },
    {
      id: 5,
      title: "Fremtidsrettet suksess: Nettsidens rolle i 2025 og fremover",
      excerpt: "Å ha en nettside i 2025 handler om å være klar for fremtiden. Med teknologi som AI, mobiltilpasning og integrasjoner i rask utvikling, er en nettside plattformen som holder deg relevant.",
      publishDate: "2. februar 2025",
      readTime: "6 minutter",
      keywords: "nettside fremtid, digital strategi, teknologitrender 2025",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
          {featuredPost && (
            <div className="lg:col-span-8">
              <Card className="overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden bg-blue-50 flex items-center justify-center">
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-medium text-campher-blue">{featuredPost.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{featuredPost.title}</CardTitle>
                  <CardDescription>Publisert {featuredPost.publishDate} | {featuredPost.readTime} lesetid</CardDescription>
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
          )}
          
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
              <h3 className="text-lg font-medium mb-3">Siste innlegg</h3>
              <div className="space-y-4">
                {regularPosts.slice(0, 3).map((post) => (
                  <div key={post.id}>
                    <h4 className="font-medium">{post.title}</h4>
                    <p className="text-sm text-campher-gray">{post.excerpt.substring(0, 80)}...</p>
                    <p className="text-xs text-gray-500 mt-1">{post.publishDate} | {post.readTime} lesetid</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
