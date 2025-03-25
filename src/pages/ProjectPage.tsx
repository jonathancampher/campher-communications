
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
    image: '/lovable-uploads/8750f463-d4c9-4943-b5cf-10a8f335b9e6.png',
    description: 'Responsiv hjemmeside for Myhre Montasje med fokus på SEO-optimalisering og brukervennlighet.',
    challenge: 'Myhre Montasje hadde ingen nettside og trengte en profesjonell digital tilstedeværelse for å vise frem sine tjenester, bygge tillit hos potensielle kunder og generere nye henvendelser.',
    solution: 'Vi utviklet en komplett nettside fra bunnen av med fokus på SEO-optimalisering, rask lastetid og responsive design. Nettsiden presenterer bedriftens tjenester på en tydelig måte med profesjonelle bilder som viser kvaliteten i arbeidet deres. Vi implementerte også kontaktskjema og tydelige handlingsknapper for å gjøre det enkelt for besøkende å ta kontakt.',
    results: 'Siden lanseringen har Myhre Montasje fått en betydelig økning i antall henvendelser, og nettsiden rangerer nå høyt på relevante søkeord som "montasjetjenester Vestfold" og "håndverker Telemark". Google Page Speed Insights gir nettsiden en høy score på både mobil og desktop, noe som bidrar til både bedre brukeropplevelse og bedre rangering i søkemotorer.',
    technologies: ['Responsivt design', 'SEO-optimalisering', 'Rask lastetid', 'Kontaktskjema', 'Bildegalleri', 'Google My Business integrasjon']
  },
  {
    id: 2,
    title: 'Bedriftsside 2',
    image: 'https://placehold.co/1200x600/f5f7fa/0069e0?text=Bedrift2+Nettside',
    description: 'Profesjonell nettside for et tjenesteselskap med fokus på konvertering.',
    challenge: 'Tjenesteselskapet opplevde lav konverteringsrate på sin gamle nettside og trengte en redesign som kunne øke antall henvendelser.',
    solution: 'Vi redesignet nettsiden med fokus på brukeropplevelse og konverteringsoptimalisering. Vi implementerte tydelige handlingsknapper og forenklet navigasjonen for å lede besøkende til de viktigste sidene.',
    results: 'Den nye nettsiden resulterte i en økning på 60% i konverteringsrate og en reduksjon i avvisningsfrekvensen på 25%. Kunden rapporterer også om flere kvalifiserte leads.',
    technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'Google Analytics']
  },
  {
    id: 3,
    title: 'Bedriftsside 3',
    image: 'https://placehold.co/1200x600/f5f7fa/0069e0?text=Bedrift3+Nettside',
    description: 'Nettside for håndverksbedrift med kontaktskjema og prosjektgalleri.',
    challenge: 'Håndverksbedriften trengte en måte å vise frem tidligere prosjekter på, samtidig som de ville gjøre det enkelt for potensielle kunder å ta kontakt.',
    solution: 'Vi utviklet en nettside med et interaktivt prosjektgalleri som viser frem bedriftens tidligere arbeider. I tillegg implementerte vi et brukervennlig kontaktskjema som gjør det enkelt for besøkende å be om tilbud.',
    results: 'Siden lanseringen har bedriften mottatt 40% flere henvendelser via nettsiden, og de har kunnet redusere markedsføringsbudsjettet sitt siden nettsiden genererer nok henvendelser organisk.',
    technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'Bildegalleri']
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
          <Link to="/#portfolio" className="text-campher-blue hover:underline inline-flex items-center mt-4">
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
          <Link to="/#portfolio" className="text-campher-blue hover:underline inline-flex items-center mb-4 md:mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Tilbake til prosjekter
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">{project.title}</h1>
            
            <div className="rounded-xl overflow-hidden mb-6 md:mb-10">
              {project.id === 1 ? (
                // Special handling for Myhre Montasje project
                <div 
                  className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  aria-label={project.title}
                ></div>
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto"
                  loading="eager"
                />
              )}
            </div>
            
            <div className="bg-blue-50 p-4 md:p-6 rounded-xl mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Prosjektoversikt</h2>
              <p className="text-campher-gray text-sm md:text-base">{project.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-10">
              <div>
                <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Utfordringen</h2>
                <p className="text-campher-gray text-sm md:text-base">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Vår løsning</h2>
                <p className="text-campher-gray text-sm md:text-base">{project.solution}</p>
              </div>
            </div>
            
            <div className="mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Resultater</h2>
              <p className="text-campher-gray text-sm md:text-base">{project.results}</p>
            </div>
            
            <div className="mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Teknologier</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-campher-blue rounded-full text-xs md:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center bg-gray-50 p-4 md:p-8 rounded-xl">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">Vil du ha en lignende løsning?</h2>
              <p className="text-campher-gray mb-3 md:mb-4 text-sm md:text-base">Ta kontakt med oss for en uforpliktende prat om ditt prosjekt.</p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base"
              >
                Kontakt oss
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
