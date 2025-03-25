import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Portfolio-komponent
 * 
 * Viser fram firmaets prosjekter med fokus på gjennomførte nettsideprosjekter.
 * Inneholder prosjektdetaljer og lenker til prosjektsider for mer informasjon.
 * Optimalisert for søkemotorer med semantisk korrekte elementer og god ytelse.
 */
const Portfolio = () => {
  const isMobile = useIsMobile();
  const projects = [
    {
      id: 1,
      title: 'Myhre Montasje',
      category: ['web', 'responsive'],
      image: 'public/lovable-uploads/prosjekt1.webp',
      description: 'Responsiv hjemmeside med fokus på SEO-optimalisering og brukervennlighet for håndverksbedrift.',
      link: '/project/1'
    },
    {
      id: 2,
      title: 'Bedriftsside 2',
      category: ['web'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=Bedrift2',
      description: 'Profesjonell nettside for et tjenesteselskap med fokus på konvertering.',
      link: '/project/2'
    },
    {
      id: 3,
      title: 'Bedriftsside 3',
      category: ['web', 'responsive'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=Bedrift3',
      description: 'Nettside for håndverksbedrift med kontaktskjema og prosjektgalleri.',
      link: '/project/3'
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            Våre prosjekter
          </span>
          <h2 className="heading-lg mb-4">Utvalgte prosjekter</h2>
          <p className="text-campher-gray">
            Ta en titt på noen av våre siste prosjekter. Hver nettside representerer vårt engasjement for kvalitet og oppmerksomhet på detaljer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.link}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover-scale"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-medium group-hover:text-campher-blue transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-campher-gray line-clamp-2">
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
