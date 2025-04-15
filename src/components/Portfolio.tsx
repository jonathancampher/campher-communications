
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useLanguageContext } from '@/context/LanguageContext';
import { navigateToSection } from '@/utils/navigation';
import { useNavigate } from 'react-router-dom';

/**
 * Portfolio-komponent
 * 
 * Viser fram firmaets prosjekter med fokus på gjennomførte nettsideprosjekter.
 * Inneholder prosjektdetaljer og lenker til prosjektsider for mer informasjon.
 * Optimalisert for søkemotorer med semantisk korrekte elementer og god ytelse.
 */
const Portfolio = () => {
  const isMobile = useIsMobile();
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  
  const texts = {
    no: {
      badge: "Våre prosjekter",
      title: "Utvalgte prosjekter",
      description: "Ta en titt på noen av mine siste prosjekter. Hver nettside representerer mitt engasjement for kvalitet og oppmerksomhet på detaljer.",
      projectsData: [
        {
          id: 1,
          title: 'Global Transportservice AS',
          category: ['web', 'responsive'],
          image: '/lovable-uploads/globaltransport.webp',
          description: 'Responsiv hjemmeside med fokus på SEO-optimalisering og brukervennlighet for varetransport.',
          link: '/project/1'
        },
        {
          id: 2,
          title: 'Våtromstjeneste AS',
          category: ['web', 'responsive'],
          image: '/lovable-uploads/vatromtjeneste.webp',
          description: 'Moderne nettside for håndverksbedrift med fokus på våtromstjenester og renovering.',
          link: '/project/2'
        },
        {
          id: 3,
          title: 'Magnus Henriksen AS',
          category: ['web', 'responsive'],
          image: '/lovable-uploads/prosjektmagnus.webp',
          description: 'Profesjonell nettside for maskinentreprenør med fokus på tjenester og prosjekter.',
          link: '/project/3'
        },
        {
          id: 4,
          title: 'Myhre Montasje',
          category: ['web', 'responsive'],
          image: '/lovable-uploads/prosjektmyhre.webp',
          description: 'Responsiv hjemmeside for håndverksbedrift med fokus på deres tjenester og tidligere prosjekter.',
          link: '/project/4'
        },
      ]
    },
    en: {
      badge: "Our projects",
      title: "Featured projects",
      description: "Take a look at some of my latest projects. Each website represents my commitment to quality and attention to detail.",
      projectsData: [
        {
          id: 1,
          title: 'Global Transportservice AS',
          category: ['web', 'responsive'],
          image: '/lovable-uploads/globaltransport.webp',
          description: 'Responsive homepage focusing on SEO optimization and user-friendliness for transport services.',
          link: '/project/1'
        },
        {
          id: 2,
          title: 'Våtromstjeneste AS',
          category: ['web', 'responsive'],
          image: '/lovable-uploads/vatromtjeneste.webp',
          description: 'Modern website for a craft business focusing on bathroom services and renovation.',
          link: '/project/2'
        },
        {
          id: 3,
          title: 'Magnus Henriksen AS',
          category: ['web', 'responsive'],
          image: '/lovable-uploads/prosjektmagnus.webp',
          description: 'Professional website for a machine contractor company showcasing services and projects.',
          link: '/project/3'
        },
        {
          id: 4,
          title: 'Myhre Montasje',
          category: ['web', 'responsive'],
          image: '/lovable-uploads/prosjektmyhre.webp',
          description: 'Responsive homepage for a craft business focusing on their services and previous projects.',
          link: '/project/4'
        },
      ]
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];
  const projects = t.projectsData;
  const projectLabel = language === 'no' ? 'Se prosjekt: ' : 'View project: ';

  // Handle project link click to avoid full page reload
  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, projectLink: string) => {
    e.preventDefault();
    navigate(projectLink);
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded-full mb-4" aria-label={t.badge}>
            {t.badge}
          </span>
          <h2 className="heading-lg mb-4">{t.title}</h2>
          <p className="text-gray-700">
            {t.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.link}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover-scale min-h-[300px] min-w-[280px]"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              aria-label={`${projectLabel}${project.title}`}
              onClick={(e) => handleProjectClick(e, project.link)}
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-gray-100">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchPriority={index < 2 ? "high" : "auto"}
                    width="600"
                    height="400"
                    decoding="async"
                  />
                </AspectRatio>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-medium group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
