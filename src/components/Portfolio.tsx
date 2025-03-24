
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'branding', name: 'Branding' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: ['web', 'ecommerce'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=E-Commerce+Project',
      description: 'A modern e-commerce solution with advanced product filtering and secure checkout.',
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: ['web', 'branding'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=Corporate+Website',
      description: 'A professional website for a financial services company with interactive elements.',
    },
    {
      id: 3,
      title: 'Mobile App Interface',
      category: ['web'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=Mobile+App+UI',
      description: 'User interface design for a fitness tracking mobile application.',
    },
    {
      id: 4,
      title: 'Brand Identity',
      category: ['branding'],
      image: 'https://placehold.co/600x400/f5f7fa/0069e0?text=Brand+Identity',
      description: 'Complete brand identity design including logo, colors, and marketing materials.',
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
            Our Work
          </span>
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-campher-gray">
            Take a look at some of our recent work. Each project represents our commitment to quality and attention to detail.
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
            View All Projects
            <ArrowUpRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
