import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { navigateToSection } from '@/utils/navigation';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
}

const projectData: Project[] = [
  {
    id: 1,
    title: 'Global Transportservice AS',
    image: '/lovable-uploads/globaltransport.png',
    description: 'Responsiv hjemmeside for Global Transportservice AS med fokus på SEO-optimalisering og brukervennlighet.',
    challenge: 'Global Transportservice AS hadde ingen nettside og trengte en profesjonell digital tilstedeværelse for å vise frem sine tjenester, bygge tillit hos potensielle kunder og generere nye henvendelser.',
    solution: 'Jeg utviklet en komplett nettside fra bunnen av med fokus på SEO-optimalisering, rask lastetid og responsive design. Nettsiden presenterer bedriftens tjenester på en tydelig måte med profesjonelle bilder som viser kvaliteten i arbeidet deres. Jeg implementerte også kontaktskjema og tydelige handlingsknapper for å gjøre det enkelt for besøkende å ta kontakt.',
    results: 'Siden lanseringen har Global Transportservice AS fått en betydelig økning i antall henvendelser, og nettsiden rangerer nå høyt på relevante søkeord som "Transport Østfold" og "Varelevering Norge". Google Page Speed Insights gir nettsiden en høy score på både mobil og desktop, noe som bidrar til både bedre brukeropplevelse og bedre rangering i søkemotorer.',
    technologies: ['Responsivt design', 'SEO-optimalisering', 'Rask lastetid', 'Kontaktskjema', 'Bildegalleri', 'Google My Business integrasjon']
  },
  {
    id: 2,
    title: 'Våtromstjeneste AS',
    image: '/lovable-uploads/vatromtjeneste.webp',
    description: 'Moderne nettside for håndverksbedrift med fokus på våtromstjenester og renovering.',
    challenge: 'Våtromstjeneste AS trengte en profesjonell nettside som tydelig presenterte deres spesialkompetanse innen våtromsarbeid og som kunne generere seriøse henvendelser fra potensielle kunder.',
    solution: 'Vi designet en bruker- og søkevennlig nettside med fokus på deres tjenester, tidligere prosjekter og sertifiseringer. Nettsiden inkluderer en portefølje av tidligere arbeid med før- og etterbilder, samt kundevurderinger for å bygge tillit.',
    results: 'Nettsiden har resultert i en jevn strøm av kvalifiserte leads, og bedriften rapporterer om høyere konverteringsrate fra nettsidebesøk til faktiske oppdrag. Våtromstjeneste AS fremstår nå som en mer profesjonell aktør i markedet.',
    technologies: ['Responsivt design', 'Bildegalleri', 'SEO-optimalisering', 'Kontaktskjema', 'Testimonials']
  },
  {
    id: 3,
    title: 'Magnus Henriksen AS',
    image: '/lovable-uploads/prosjektmagnus.webp',
    description: 'Profesjonell nettside for maskinentreprenør med fokus på tjenester og prosjekter.',
    challenge: 'Magnus Henriksen AS trengte en moderne nettside som kunne presentere deres maskinentreprenørtjenester og tidligere prosjekter på en oversiktlig og profesjonell måte.',
    solution: 'Jeg utviklet en nettside med tydelig struktur som fremhever deres kompetanse innen maskinentreprenørarbeid. Nettsiden inkluderer en oversikt over maskinparken, prosjektreferanser og kontaktinformasjon for enkel tilgjengelighet.',
    results: 'Nettsiden har hjulpet Magnus Henriksen AS med å etablere sterkere digital tilstedeværelse og tiltrekke seg større prosjekter. Besøkende får raskt oversikt over firmaets kapasitet og spesialkompetanse, noe som har resultert i flere relevante henvendelser.',
    technologies: ['Responsivt design', 'Prosjektgalleri', 'Maskinoversikt', 'SEO-optimalisering', 'Kontaktskjema']
  },
  {
    id: 4,
    title: 'Myhre Montasje',
    image: '/lovable-uploads/prosjektmyhre.webp',
    description: 'Responsiv hjemmeside for håndverksbedrift med fokus på deres tjenester og tidligere prosjekter.',
    challenge: 'Myhre Montasje hadde behov for en profesjonell nettside som kunne vise frem deres kompetanse innen montasjetjenester, og som kunne hjelpe dem med å nå ut til både privatpersoner og bedrifter.',
    solution: 'Vi utviklet en informativ og brukervennlig nettside med tydelig presentasjon av alle tjenestene de tilbyr. Nettsiden inkluderer referanseprosjekter med bilder og beskrivelser, samt kundevurderinger for å bygge troverdighet.',
    results: 'Etter lanseringen av den nye nettsiden har Myhre Montasje opplevd en betydelig økning i antall henvendelser, særlig fra bedriftskunder. De rapporterer også om at potensielle kunder er bedre informert om tjenestene deres når de tar kontakt.',
    technologies: ['Responsivt design', 'Prosjektgalleri', 'Kontaktskjema', 'SEO-optimalisering', 'Google Maps integrasjon']
  }
];

const ProjectPage = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const project = projectData.find(p => p.id === projectId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToSection(navigate, location.pathname, 'contact');
  };
  
  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-20">
          <h1 className="text-2xl">Prosjektet ble ikke funnet</h1>
          <Link to="/#portfolio" className="text-blue-700 hover:underline inline-flex items-center mt-4 text-lg py-2 px-4 min-h-12 min-w-40" aria-label="Tilbake til prosjekter">
            <ArrowLeft size={16} className="mr-2" />
            Tilbake til prosjekter
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className={`pt-20 ${isMobile ? 'pb-8' : 'pt-24'}`}>
        <div className="container-custom py-5 md:py-10">
          <Link to="/#portfolio" className="text-blue-700 hover:underline inline-flex items-center mb-4 md:mb-6 text-lg py-2 px-4 min-h-12 min-w-40" aria-label="Tilbake til prosjekter">
            <ArrowLeft size={16} className="mr-2" />
            Tilbake til prosjekter
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">{project.title}</h1>
            
            <div className="rounded-xl overflow-hidden mb-6 md:mb-10">
              <AspectRatio ratio={16/9} className="bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="1200"
                  height="600"
                />
              </AspectRatio>
            </div>
            
            <div className="bg-blue-50 p-4 md:p-6 rounded-xl mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Prosjektoversikt</h2>
              <p className="text-gray-700 text-sm md:text-base">{project.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-10">
              <div>
                <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Utfordringen</h2>
                <p className="text-gray-700 text-sm md:text-base">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Vår løsning</h2>
                <p className="text-gray-700 text-sm md:text-base">{project.solution}</p>
              </div>
            </div>
            
            <div className="mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Resultater</h2>
              <p className="text-gray-700 text-sm md:text-base">{project.results}</p>
            </div>
            
            <div className="mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Teknologier</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs md:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center bg-gray-50 p-4 md:p-8 rounded-xl">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Vil du ha en lignende løsning?</h2>
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">Ta kontakt med meg for en uforpliktende prat om ditt prosjekt.</p>
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base min-h-10 min-w-32"
                aria-label="Kontakt oss om ditt prosjekt"
              >
                Kontakt meg
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
