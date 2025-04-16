
import { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { navigateToSection } from '@/utils/navigation';
import { useLanguageContext } from '@/context/LanguageContext';

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

interface LocalizedProject {
  id: number;
  title: {
    no: string;
    en: string;
  };
  image: string;
  description: {
    no: string;
    en: string;
  };
  challenge: {
    no: string;
    en: string;
  };
  solution: {
    no: string;
    en: string;
  };
  results: {
    no: string;
    en: string;
  };
  technologies: string[];
}

const projectData: LocalizedProject[] = [
  {
    id: 1,
    title: {
      no: 'Global Transportservice AS',
      en: 'Global Transportservice AS'
    },
    image: '/lovable-uploads/globaltransport.webp',
    description: {
      no: 'Responsiv hjemmeside for Global Transportservice AS med fokus på SEO-optimalisering og brukervennlighet.',
      en: 'Responsive homepage for Global Transportservice AS focusing on SEO optimization and user-friendliness.'
    },
    challenge: {
      no: 'Global Transportservice AS hadde ingen nettside og trengte en profesjonell digital tilstedeværelse for å vise frem sine tjenester, bygge tillit hos potensielle kunder og generere nye henvendelser.',
      en: 'Global Transportservice AS had no website and needed a professional digital presence to showcase their services, build trust with potential customers, and generate new inquiries.'
    },
    solution: {
      no: 'Jeg utviklet en komplett nettside fra bunnen av med fokus på SEO-optimalisering, rask lastetid og responsive design. Nettsiden presenterer bedriftens tjenester på en tydelig måte med profesjonelle bilder som viser kvaliteten i arbeidet deres. Jeg implementerte også kontaktskjema og tydelige handlingsknapper for å gjøre det enkelt for besøkende å ta kontakt.',
      en: 'I developed a complete website from scratch with a focus on SEO optimization, fast loading time, and responsive design. The website clearly presents the company\'s services with professional images showing the quality of their work. I also implemented contact forms and clear call-to-action buttons to make it easy for visitors to get in touch.'
    },
    results: {
      no: 'Siden lanseringen har Global Transportservice AS fått en betydelig økning i antall henvendelser, og nettsiden rangerer nå høyt på relevante søkeord som "Transport Østfold" og "Varelevering Norge". Google Page Speed Insights gir nettsiden en høy score på både mobil og desktop, noe som bidrar til både bedre brukeropplevelse og bedre rangering i søkemotorer.',
      en: 'Since launch, Global Transportservice AS has seen a significant increase in inquiries, and the website now ranks highly for relevant keywords such as "Transport Østfold" and "Delivery Norway". Google Page Speed Insights gives the website a high score on both mobile and desktop, contributing to both better user experience and better search engine rankings.'
    },
    technologies: ['Responsivt design', 'SEO-optimalisering', 'Rask lastetid', 'Kontaktskjema', 'Bildegalleri', 'Google My Business integrasjon']
  },
  {
    id: 2,
    title: {
      no: 'Våtromstjeneste AS',
      en: 'Våtromstjeneste AS'
    },
    image: '/lovable-uploads/vatromtjeneste.webp',
    description: {
      no: 'Moderne nettside for håndverksbedrift med fokus på våtromstjenester og renovering.',
      en: 'Modern website for a craft business focusing on bathroom services and renovation.'
    },
    challenge: {
      no: 'Våtromstjeneste AS trengte en profesjonell nettside som tydelig presenterte deres spesialkompetanse innen våtromsarbeid og som kunne generere seriøse henvendelser fra potensielle kunder.',
      en: 'Våtromstjeneste AS needed a professional website that clearly presented their specialized expertise in bathroom work and could generate serious inquiries from potential customers.'
    },
    solution: {
      no: 'Vi designet en bruker- og søkevennlig nettside med fokus på deres tjenester, tidligere prosjekter og sertifiseringer. Nettsiden inkluderer en portefølje av tidligere arbeid med før- og etterbilder, samt kundevurderinger for å bygge tillit.',
      en: 'We designed a user and search-friendly website focusing on their services, previous projects, and certifications. The website includes a portfolio of previous work with before and after pictures, as well as customer reviews to build trust.'
    },
    results: {
      no: 'Nettsiden har resultert i en jevn strøm av kvalifiserte leads, og bedriften rapporterer om høyere konverteringsrate fra nettsidebesøk til faktiske oppdrag. Våtromstjeneste AS fremstår nå som en mer profesjonell aktør i markedet.',
      en: 'The website has resulted in a steady stream of qualified leads, and the company reports a higher conversion rate from website visits to actual assignments. Våtromstjeneste AS now appears as a more professional player in the market.'
    },
    technologies: ['Responsivt design', 'Bildegalleri', 'SEO-optimalisering', 'Kontaktskjema', 'Testimonials']
  },
  {
    id: 3,
    title: {
      no: 'Magnus Henriksen AS',
      en: 'Magnus Henriksen AS'
    },
    image: '/lovable-uploads/prosjektmagnus.webp',
    description: {
      no: 'Profesjonell nettside for maskinentreprenør med fokus på tjenester og prosjekter.',
      en: 'Professional website for a machine contractor focusing on services and projects.'
    },
    challenge: {
      no: 'Magnus Henriksen AS trengte en moderne nettside som kunne presentere deres maskinentreprenørtjenester og tidligere prosjekter på en oversiktlig og profesjonell måte.',
      en: 'Magnus Henriksen AS needed a modern website that could present their machine contracting services and previous projects in a clear and professional manner.'
    },
    solution: {
      no: 'Jeg utviklet en nettside med tydelig struktur som fremhever deres kompetanse innen maskinentreprenørarbeid. Nettsiden inkluderer en oversikt over maskinparken, prosjektreferanser og kontaktinformasjon for enkel tilgjengelighet.',
      en: 'I developed a website with a clear structure that highlights their expertise in machine contracting work. The website includes an overview of their machinery, project references, and contact information for easy accessibility.'
    },
    results: {
      no: 'Nettsiden har hjulpet Magnus Henriksen AS med å etablere sterkere digital tilstedeværelse og tiltrekke seg større prosjekter. Besøkende får raskt oversikt over firmaets kapasitet og spesialkompetanse, noe som har resultert i flere relevante henvendelser.',
      en: 'The website has helped Magnus Henriksen AS establish a stronger digital presence and attract larger projects. Visitors quickly get an overview of the company\'s capacity and specialized expertise, which has resulted in more relevant inquiries.'
    },
    technologies: ['Responsivt design', 'Prosjektgalleri', 'Maskinoversikt', 'SEO-optimalisering', 'Kontaktskjema']
  },
  {
    id: 4,
    title: {
      no: 'Myhre Montasje',
      en: 'Myhre Montasje'
    },
    image: '/lovable-uploads/prosjektmyhre.webp',
    description: {
      no: 'Responsiv hjemmeside for håndverksbedrift med fokus på deres tjenester og tidligere prosjekter.',
      en: 'Responsive homepage for a craft business focusing on their services and previous projects.'
    },
    challenge: {
      no: 'Myhre Montasje hadde behov for en profesjonell nettside som kunne vise frem deres kompetanse innen montasjetjenester, og som kunne hjelpe dem med å nå ut til både privatpersoner og bedrifter.',
      en: 'Myhre Montasje needed a professional website that could showcase their expertise in assembly services, and help them reach both individuals and businesses.'
    },
    solution: {
      no: 'Vi utviklet en informativ og brukervennlig nettside med tydelig presentasjon av alle tjenestene de tilbyr. Nettsiden inkluderer referanseprosjekter med bilder og beskrivelser, samt kundevurderinger for å bygge troverdighet.',
      en: 'We developed an informative and user-friendly website with a clear presentation of all the services they offer. The website includes reference projects with images and descriptions, as well as customer reviews to build credibility.'
    },
    results: {
      no: 'Etter lanseringen av den nye nettsiden har Myhre Montasje opplevd en betydelig økning i antall henvendelser, særlig fra bedriftskunder. De rapporterer også om at potensielle kunder er bedre informert om tjenestene deres når de tar kontakt.',
      en: 'After the launch of the new website, Myhre Montasje has experienced a significant increase in inquiries, especially from business customers. They also report that potential customers are better informed about their services when they make contact.'
    },
    technologies: ['Responsivt design', 'Prosjektgalleri', 'Kontaktskjema', 'SEO-optimalisering', 'Google Maps integrasjon']
  }
];

const ProjectPage = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguageContext();
  
  const projectData2 = projectData.find(p => p.id === projectId);
  
  // If project is found, create a language-specific version
  const project = projectData2 ? {
    id: projectData2.id,
    title: projectData2.title[language],
    image: projectData2.image,
    description: projectData2.description[language],
    challenge: projectData2.challenge[language],
    solution: projectData2.solution[language],
    results: projectData2.results[language],
    technologies: projectData2.technologies
  } : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title based on selected language
    if (project) {
      document.title = `${project.title} | ${language === 'no' ? 'Prosjekter' : 'Projects'} | Campher Communications`;
    }
  }, [project, language]);

  // Text translations
  const texts = {
    no: {
      notFound: "Prosjektet ble ikke funnet",
      backToProjects: "Tilbake til prosjekter",
      projectOverview: "Prosjektoversikt",
      challenge: "Utfordringen",
      solution: "Vår løsning",
      results: "Resultater",
      technologies: "Teknologier",
      similarSolution: "Vil du ha en lignende løsning?",
      contactText: "Ta kontakt med meg for en uforpliktende prat om ditt prosjekt.",
      contactButton: "Kontakt meg"
    },
    en: {
      notFound: "Project not found",
      backToProjects: "Back to projects",
      projectOverview: "Project Overview",
      challenge: "The Challenge",
      solution: "Our Solution",
      results: "Results",
      technologies: "Technologies",
      similarSolution: "Would you like a similar solution?",
      contactText: "Contact me for a non-binding conversation about your project.",
      contactButton: "Contact me"
    }
  };
  
  const t = texts[language];

  // Function to handle clicking on "Contact me" button
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToSection(navigate, location.pathname, 'contact');
  };
  
  // Function to handle clicking on "Back to projects" button
  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToSection(navigate, location.pathname, 'portfolio');
  };
  
  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-20">
          <h1 className="text-2xl">{t.notFound}</h1>
          <Link 
            to="/#portfolio" 
            className="text-blue-700 hover:underline inline-flex items-center mt-4 text-lg py-2 px-4 min-h-12 min-w-40" 
            aria-label={t.backToProjects}
            onClick={handleBackToProjects}
          >
            <ArrowLeft size={16} className="mr-2" />
            {t.backToProjects}
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
          <Link 
            to="/#portfolio" 
            className="text-blue-700 hover:underline inline-flex items-center mb-4 md:mb-6 text-lg py-2 px-4 min-h-12 min-w-40" 
            aria-label={t.backToProjects}
            onClick={handleBackToProjects}
          >
            <ArrowLeft size={16} className="mr-2" />
            {t.backToProjects}
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
                  fetchPriority="high"
                  width="1200"
                  height="600"
                  decoding="async"
                />
              </AspectRatio>
            </div>
            
            <div className="bg-blue-50 p-4 md:p-6 rounded-xl mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{t.projectOverview}</h2>
              <p className="text-gray-700 text-sm md:text-base">{project.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-10">
              <div>
                <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{t.challenge}</h2>
                <p className="text-gray-700 text-sm md:text-base">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{t.solution}</h2>
                <p className="text-gray-700 text-sm md:text-base">{project.solution}</p>
              </div>
            </div>
            
            <div className="mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{t.results}</h2>
              <p className="text-gray-700 text-sm md:text-base">{project.results}</p>
            </div>
            
            <div className="mb-6 md:mb-10">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{t.technologies}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs md:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center bg-gray-50 p-4 md:p-8 rounded-xl">
              <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{t.similarSolution}</h2>
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">{t.contactText}</p>
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition-colors text-sm md:text-base min-h-10 min-w-32"
                aria-label={t.contactButton}
              >
                {t.contactButton}
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
