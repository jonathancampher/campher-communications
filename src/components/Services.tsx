
import { Code, PaintBucket, ShoppingCart, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'We build modern, responsive websites using the latest technologies for optimal performance.',
    },
    {
      icon: <PaintBucket size={24} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and seamless user experiences that delight customers.',
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'E-Commerce Solutions',
      description: 'Custom online stores that drive sales and provide exceptional shopping experiences.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile-First Development',
      description: 'Websites optimized for mobile devices to reach customers wherever they are.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Speed up your website for better user experience and improved search rankings.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-campher-gray">
            We deliver comprehensive web development services tailored to your business needs. 
            From concept to launch, we handle every aspect of the digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-blue-100 text-campher-blue rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-campher-gray">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
