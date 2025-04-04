
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useMemo, useEffect, useState } from 'react';

/**
 * Portfolio-komponent
 * 
 * Viser fram firmaets prosjekter med fokus på gjennomførte nettsideprosjekter.
 * Inneholder prosjektdetaljer og lenker til prosjektsider for mer informasjon.
 * Optimalisert for søkemotorer med semantisk korrekte elementer og god ytelse.
 */
const Portfolio = () => {
  const isMobile = useIsMobile();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Myhre Montasje',
      category: ['web', 'responsive'],
      image: '/lovable-uploads/prosjekt1.webp',
      description: 'Responsiv hjemmeside med fokus på SEO-optimalisering og brukervennlighet for håndverksbedrift.',
      link: '/project/1'
    },
    {
      id: 2,
      title: 'Bedriftsside 2',
      category: ['web'],
      image: '/placeholder.svg',
      description: 'Prosjekt på vei – jeg jobber med en spennende ny nettside for en kunde innen coaching.',
      link: '/project/2'
    },
    {
      id: 3,
      title: 'Bedriftsside 3',
      category: ['web', 'responsive'],
      image: '/placeholder.svg',
      description: 'Prosjekt på vei – en ny moderne nettside for en håndverksbedrift er under utvikling.',
      link: '/project/3'
    },
  ], []);

  // Implement a better prefetching strategy
  useEffect(() => {
    // Create an array of image promises
    const imagePromises = projects.map(project => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = project.image;
      });
    });
    
    // Wait for first image to load before showing content
    imagePromises[0].then(() => {
      setImagesLoaded(true);
    });
    
    // Prefetch remaining images in the background
    Promise.all(imagePromises).then(() => {
      console.log('All project images prefetched');
    });
  }, [projects]);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded-full mb-4" aria-label="Prosjektseksjon">
            Våre prosjekter
          </span>
          <h2 className="heading-lg mb-4">Utvalgte prosjekter</h2>
          <p className="text-gray-700">
            Ta en titt på noen av mine siste prosjekter. Hver nettside representerer mitt engasjement for kvalitet og oppmerksomhet på detaljer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.link}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm hover-scale min-h-[300px] min-w-[280px] ${
                imagesLoaded ? 'animate-in fade-in-50' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              aria-label={`Se prosjekt: ${project.title}`}
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <AspectRatio ratio={4/3} className="bg-gray-100">
                  {/* Add a low-resolution placeholder while loading */}
                  {index === 0 && !imagesLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding={index === 0 ? "sync" : "async"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    width="600"
                    height="400"
                    onLoad={() => {
                      if (index === 0) {
                        performance.mark(`first-project-loaded`);
                      }
                    }}
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
