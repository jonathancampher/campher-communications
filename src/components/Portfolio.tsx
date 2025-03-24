
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Portfolio-komponent
 * 
 * Viser fram firmaets prosjekter med fokus på webutvikling.
 * Inkluderer filtreringsmuligheter og prosjektdetaljer.
 */
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Alle prosjekter' },
    { id: 'web', name: 'Webutvikling' },
    { id: 'responsive', name: 'Responsive design' },
    { id: 'seo', name: 'SEO-optimalisering' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Moderne Nettbutikk',
      category: ['web', 'responsive'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=Nettbutikk',
      description: 'Responsiv nettbutikkløsning med avansert produktfiltrering og sikker utsjekk.',
    },
    {
      id: 2,
      title: 'Bedriftshjemmeside',
      category: ['web', 'seo'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=Bedriftsside',
      description: 'Profesjonell nettside for et finansselskap med interaktive elementer og søkemotoroptimalisering.',
    },
    {
      id: 3,
      title: 'Personlig Portfolio',
      category: ['web', 'responsive'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=Portfolio',
      description: 'Portfolio-nettside med fokus på mobilvisning og brukervennlighet.',
    },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            Våre prosjekter
          </span>
          <h2 className="heading-lg mb-4">Utvalgte prosjekter</h2>
          <p className="text-campher-gray">
            Ta en titt på noen av våre siste prosjekter. Hver nettside representerer vårt engasjement for kvalitet og oppmerksomhet på detaljer.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-campher-blue text-white'
                  : 'bg-gray-100 text-campher-gray hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-lg font-medium group-hover:text-campher-blue transition-colors">
                  {project.title}
                </h3>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-campher-blue/10 group-hover:text-campher-blue transition-colors">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center border border-gray-200 hover:border-campher-blue text-campher-dark hover:text-campher-blue px-6 py-3 rounded-md font-medium transition-all"
          >
            Se alle prosjekter
            <ArrowUpRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
