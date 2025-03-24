import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageSquare, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Hvorfor en nettside er avgjørende for bedriften din i 2025",
      content: `I 2025 er en profesjonell nettside selve hjertet i din digitale tilstedeværelse. 
      Med økende konkurranse på nett og forbrukere som søker informasjon raskt, er en nettside 
      ikke lenger valgfritt – det er en nødvendighet. En godt designet nettside øker troverdigheten 
      din, gir kundene enkel tilgang til dine tjenester og produkter, og hjelper deg å skille deg ut 
      fra konkurrentene. I tillegg er det en plattform du eier, i motsetning til sosiale medier, som 
      kan endre algoritmer når som helst. Invester i en nettside i dag for å sikre fremtiden til bedriften din.`,
      publishDate: "5. januar 2025",
      readTime: "4 minutter",
      keywords: "nettside 2025, digital tilstedeværelse, profesjonell nettside"
    },
    {
      id: 2,
      title: "Hvordan en nettside booster synligheten din i søkemotorer i 2025",
      content: `Å ha en nettside i 2025 er nøkkelen til å bli funnet på Google og andre søkemotorer. 
              Med SEO-optimalisering kan du rangere høyere på søkeord som er relevante for din bransje. 
              Dette betyr mer organisk trafikk til din nettside, noe som igjen kan føre til flere kunder og økt salg. 
              En nettside gir deg også muligheten til å målrette spesifikke målgrupper gjennom innhold og annonsering. 
              Sørg for at din nettside er optimalisert for søkemotorer for å maksimere din digitale synlighet.`,
      publishDate: "12. januar 2025",
      readTime: "3 minutter",
      keywords: "SEO 2025, søkemotoroptimalisering, Google rangering"
    },
    {
      id: 3,
      title: "Nettsider som konverterer: Hvorfor det lønner seg i 2025",
      content: `En nettside er ikke bare et digitalt visittkort – det er et kraftig verktøy for å konvertere 
              besøkende til kunder. I 2025 forventer forbrukere en sømløs brukeropplevelse, rask lasting og 
              intuitiv navigasjon. En nettside som er optimalisert for konvertering, kan øke salget og 
              generere leads. Dette inkluderer tydelige call-to-actions, engasjerende innhold og en responsiv design 
              som fungerer på alle enheter. Invester i en nettside som er designet for å konvertere besøkende til lojale kunder.`,
      publishDate: "18. januar 2025",
      readTime: "5 minutter",
      keywords: "nettside konvertering, brukeropplevelse 2025, øke salg online, digitalt verktøy"
    },
    {
      id: 4,
      title: "Bygg tillit med en profesjonell nettside i 2025",
      content: `I en verden full av svindel og usikkerhet på nett, er tillit gull verdt. En profesjonell 
              nettside i 2025 signaliserer at bedriften din er seriøs og pålitelig. Dette inkluderer en 
              sikker tilkobling (HTTPS), tydelig kontaktinformasjon og referanser fra fornøyde kunder. 
              En nettside gir deg også muligheten til å vise frem din ekspertise og erfaring gjennom blogginnlegg 
              og case-studier. Bygg tillit med en nettside som viser at du er en pålitelig aktør i din bransje.`,
      publishDate: "25. januar 2025",
      readTime: "4 minutter",
      keywords: "nettside tillit, profesjonell nettutvikling, digital troverdighet"
    },
    {
      id: 5,
      title: "Fremtidsrettet suksess: Nettsidens rolle i 2025 og fremover",
      content: `Å ha en nettside i 2025 handler om å være klar for fremtiden. Med teknologi som AI, 
              mobiltilpasning og integrasjoner i rask utvikling, er en nettside plattformen som holder deg relevant. 
              Dette inkluderer å tilpasse seg nye trender som stemmesøk, personalisering og automatisering. 
              En nettside gir deg også muligheten til å samle inn data og analysere brukeratferd for å kontinuerlig 
              forbedre din digitale strategi. Vær fremtidsrettet med en nettside som er klar for morgendagens utfordringer.`,
      publishDate: "2. februar 2025",
      readTime: "6 minutter",
      keywords: "nettside fremtid, digital strategi, teknologitrender 2025"
    }
  ];

  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-20">
          <h1 className="text-2xl">Innlegget ble ikke funnet</h1>
          <Link to="/#blog" className="text-campher-blue hover:underline">
            Tilbake til blogg
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      toast({
        title: "Takk for likes!",
        description: "Du likte dette innlegget",
      });
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post.title,
        text: post.content.substring(0, 100) + "...",
        url: window.location.href
      });
    } catch (err) {
      toast({
        title: "Del innlegget",
        description: "Kopier linken: " + window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-custom py-20">
        <Link to="/#blog" className="text-campher-blue hover:underline mb-6 inline-block">
          ← Tilbake til blogg
        </Link>
        
        <Card className="p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-sm text-gray-600 mb-6">
            <span>{post.publishDate}</span>
            <span>{post.readTime}</span>
          </div>
          
          <div className="prose max-w-none mb-8">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph.trim()}</p>
            ))}
          </div>

          <div className="flex gap-4 items-center border-t pt-6">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLike}
              className={`gap-2 ${hasLiked ? 'text-red-500' : ''}`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
              {likes} likes
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleShare}
              className="gap-2"
            >
              <Share className="w-4 h-4" />
              Del
            </Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
