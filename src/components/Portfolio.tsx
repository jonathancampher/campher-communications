
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Portfolio-komponent
 * 
 * Viser fram firmaets prosjekter med fokus på gjennomførte nettsideprosjekter.
 * Inneholder prosjektdetaljer og lenker til prosjektsider for mer informasjon.
 * Optimalisert for søkemotorer med semantisk korrekte elementer og god ytelse.
 */
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Myhre Montasje',
      category: ['web', 'responsive'],
      image: '/lovable-uploads/8750f463-d4c9-4943-b5cf-10a8f335b9e6.png',
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
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            Våre prosjekter
          </span>
          <h2 className="heading-lg mb-4">Utvalgte prosjekter</h2>
          <p className="text-campher-gray">
            Ta en titt på noen av våre siste prosjekter. Hver nettside representerer vårt engasjement for kvalitet og oppmerksomhet på detaljer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.link}
              className="group bg-white rounded-xl overflow-hidden shadow-sm opacity-0 animate-fade-in-up hover-scale"
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
                <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-campher-blue/10 group-hover:text-campher-blue transition-colors">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
