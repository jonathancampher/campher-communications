
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

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
    title: 'Bedriftsside 1',
    image: 'https://placehold.co/1200x600/f5f7fa/0069e0?text=Bedrift1+Nettside',
    description: 'Responsiv bedriftshjemmeside med moderne design og brukervennlighet.',
    challenge: 'Bedriften trengte en moderne nettside som kunne vise fram deres tjenester på en profesjonell måte, samtidig som den skulle være lett å navigere for potensielle kunder.',
    solution: 'Vi utviklet en responsiv nettside med fokus på brukervennlighet og konvertering. Siden er optimalisert for alle enheter og har et klart og tydelig hierarki som leder besøkende til kontaktskjemaet.',
    results: 'Etter lanseringen av den nye nettsiden, har bedriften sett en økning på 45% i antall henvendelser via nettsiden, og gjennomsnittlig tid på siden har økt med 30%.',
    technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'SEO']
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
      <main className="pt-24">
        <div className="container-custom py-10">
          <Link to="/#portfolio" className="text-campher-blue hover:underline inline-flex items-center mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Tilbake til prosjekter
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-6">{project.title}</h1>
            
            <div className="rounded-xl overflow-hidden mb-10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-10">
              <h2 className="text-xl font-medium mb-3">Prosjektoversikt</h2>
              <p className="text-campher-gray">{project.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-xl font-medium mb-3">Utfordringen</h2>
                <p className="text-campher-gray">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-3">Vår løsning</h2>
                <p className="text-campher-gray">{project.solution}</p>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-medium mb-3">Resultater</h2>
              <p className="text-campher-gray">{project.results}</p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-medium mb-3">Teknologier</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-campher-blue rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <h2 className="text-xl font-medium mb-3">Vil du ha en lignende løsning?</h2>
              <p className="text-campher-gray mb-4">Ta kontakt med oss for en uforpliktende prat om ditt prosjekt.</p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
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
