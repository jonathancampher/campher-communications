
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    title: 'Myhre Montasje',
    image: '/lovable-uploads/prosjekt1.webp',
    description: 'Responsiv hjemmeside for Myhre Montasje med fokus på SEO-optimalisering og brukervennlighet.',
    challenge: 'Myhre Montasje hadde ingen nettside og trengte en profesjonell digital tilstedeværelse for å vise frem sine tjenester, bygge tillit hos potensielle kunder og generere nye henvendelser.',
    solution: 'Jeg utviklet en komplett nettside fra bunnen av med fokus på SEO-optimalisering, rask lastetid og responsive design. Nettsiden presenterer bedriftens tjenester på en tydelig måte med profesjonelle bilder som viser kvaliteten i arbeidet deres. Jeg implementerte også kontaktskjema og tydelige handlingsknapper for å gjøre det enkelt for besøkende å ta kontakt.',
    results: 'Siden lanseringen har Myhre Montasje fått en betydelig økning i antall henvendelser, og nettsiden rangerer nå høyt på relevante søkeord som "montasjetjenester Vestfold" og "håndverker Telemark". Google Page Speed Insights gir nettsiden en høy score på både mobil og desktop, noe som bidrar til både bedre brukeropplevelse og bedre rangering i søkemotorer.',
    technologies: ['Responsivt design', 'SEO-optimalisering', 'Rask lastetid', 'Kontaktskjema', 'Bildegalleri', 'Google My Business integrasjon']
  },
  {
    id: 2,
    title: 'Bedriftsside 2',
    // Using local placeholder instead of placehold.co to avoid CSP issues
    image: '/placeholder.svg',
    description: 'Prosjekt på vei – Jeg jobber med en spennende ny nettside for en kunde innen tjenestesektoren.',
    challenge: 'Prosjektet er under utvikling. Jeg ser frem til å dele mer informasjon når prosjektet er ferdigstilt.',
    solution: 'Vårt team arbeider for tiden med å utvikle en skreddersydd løsning basert på kundens spesifikke behov og målsettinger.',
    results: 'Resultater vil bli delt når prosjektet er ferdigstilt og lansert.',
    technologies: ['Under utvikling']
  },
  {
    id: 3,
    title: 'Bedriftsside 3',
    // Using local placeholder instead of placehold.co to avoid CSP issues
    image: '/placeholder.svg',
    description: 'Prosjekt på vei – en ny moderne nettside for en håndverksbedrift er under utvikling.',
    challenge: 'Prosjektet er under utvikling. Jeg ser frem til å dele mer informasjon når prosjektet er ferdigstilt.',
    solution: 'Jeg arbeider for tiden med å utvikle en skreddersydd løsning basert på kundens spesifikke behov og målsettinger.',
    results: 'Resultater vil bli delt når prosjektet er ferdigstilt og lansert.',
    technologies: ['Under utvikling']
  }
];

const ProjectPage = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const isMobile = useIsMobile();
  
  const project = projectData.find(p => p.id === projectId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
                  className="w-full h-full object-cover object-top"
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
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base min-h-10 min-w-32"
                aria-label="Kontakt oss om ditt prosjekt"
              >
                Kontakt meg
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
