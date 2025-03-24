
import { Code, PaintBucket, ShoppingCart, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Webutvikling',
      description: 'Vi bygger moderne, responsive nettsider med den nyeste teknologien for optimal ytelse.',
    },
    {
      icon: <PaintBucket size={24} />,
      title: 'UI/UX Design',
      description: 'Skaper intuitive brukergrensesnitt og sømløse brukeropplevelser som begeistrer kunder.',
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'E-handelsløsninger',
      description: 'Skreddersydde nettbutikker som øker salg og gir eksepsjonelle handleopplevelser.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobiloptimalisert utvikling',
      description: 'Nettsteder optimalisert for mobile enheter for å nå kunder uansett hvor de er.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Ytelsesoptimalisering',
      description: 'Få din nettside raskere for bedre brukeropplevelse og forbedret søkemotorrangering.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4">
            Hva vi tilbyr
          </span>
          <h2 className="heading-lg mb-4">Våre tjenester</h2>
          <p className="text-campher-gray">
            Vi leverer omfattende webutviklingstjenester skreddersydd for dine forretningsbehov. 
            Fra konsept til lansering håndterer vi alle aspekter av den digitale opplevelsen.
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
            Diskuter ditt prosjekt
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
