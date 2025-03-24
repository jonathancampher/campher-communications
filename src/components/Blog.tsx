
import { ArrowUpRight, Heart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Blog-komponent
 * 
 * Denne komponenten inneholder bloggseksjonen med artikler om viktigheten av nettsider
 * og andre relevante temaer for bedrifter som ønsker å etablere digital tilstedeværelse.
 */
const Blog = () => {
  const isMobile = useIsMobile();
  
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const BlogPostCard = ({ post, isFeatured = false }) => (
    <Link 
      to={`/blog/${post.id}`} 
      className="block transition-transform hover:-translate-y-1"
      onClick={scrollToTop}
    >
      <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {isFeatured && !isMobile && (
          <div className="relative h-64 overflow-hidden bg-blue-50 flex items-center justify-center">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-medium text-campher-blue">{post.title}</h3>
            </div>
          </div>
        )}
        {isFeatured && isMobile && (
          <div className="relative h-32 overflow-hidden bg-blue-50 flex items-center justify-center">
            <div className="p-4 text-center">
              <h3 className="text-xl font-medium text-campher-blue">{post.title}</h3>
            </div>
          </div>
        )}
        <CardHeader className={isMobile ? "p-3" : "p-6"}>
          <CardTitle className={isMobile ? "text-lg" : "text-2xl"}>{post.title}</CardTitle>
          <CardDescription className="text-xs md:text-sm">Publisert {post.publishDate} | {post.readTime} lesetid</CardDescription>
        </CardHeader>
        <CardContent className={isMobile ? "p-3 pt-0" : "p-6 pt-0"}>
          <p className="text-gray-600 text-sm md:text-base line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className={`flex justify-between items-center ${isMobile ? "p-3 pt-0" : "p-6 pt-0"}`}>
          <div className="flex gap-2 md:gap-4 text-gray-500 text-xs md:text-sm">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 md:w-4 md:h-4" />
              0
            </span>
          </div>
          <span className="text-campher-blue hover:underline inline-flex items-center text-xs md:text-sm">
            Les mer
            <ArrowUpRight size={isMobile ? 14 : 16} className="ml-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-3 md:mb-4">
            Blogg
          </span>
          <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4">Nyttige artikler</h2>
          <p className="text-campher-gray text-sm md:text-base">
            Les våre artikler om digitalisering, nettsider og markedsføring for å holde deg oppdatert på trender og beste praksiser.
          </p>
        </div>

        {isMobile ? (
          <div className="space-y-4">
            {/* Mobile Blog Layout */}
            {featuredPost && (
              <BlogPostCard post={featuredPost} isFeatured={true} />
            )}
            
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="text-lg font-medium mb-3">Siste innlegg</h3>
              <div className="space-y-3">
                {regularPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} onClick={scrollToTop} className="block group">
                    <div>
                      <h4 className="font-medium text-sm group-hover:text-campher-blue transition-colors">{post.title}</h4>
                      <p className="text-xs text-campher-gray line-clamp-2">{post.excerpt}</p>
                      <p className="text-xs text-gray-500 mt-1">{post.publishDate} | {post.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {regularPosts.slice(0, 4).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Desktop Blog Layout */}
            {featuredPost && (
              <div className="lg:col-span-8">
                <BlogPostCard post={featuredPost} isFeatured={true} />
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
                    <Link key={post.id} to={`/blog/${post.id}`} onClick={scrollToTop} className="block group">
                      <div>
                        <h4 className="font-medium group-hover:text-campher-blue transition-colors">{post.title}</h4>
                        <p className="text-sm text-campher-gray">{post.excerpt.substring(0, 80)}...</p>
                        <p className="text-xs text-gray-500 mt-1">{post.publishDate} | {post.readTime} lesetid</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
