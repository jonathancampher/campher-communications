
import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    'Client-focused approach',
    'Technical excellence',
    'Innovative solutions',
    'Transparent communication',
    'Attention to detail',
    'Meeting deadlines'
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-1">
                  <div className="text-3xl font-semibold text-campher-blue">5+</div>
                  <div className="text-sm text-campher-gray">Years of Experience</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-2">
                  <div className="text-3xl font-semibold text-campher-blue">50+</div>
                  <div className="text-sm text-campher-gray">Completed Projects</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-3">
                  <div className="text-3xl font-semibold text-campher-blue">30+</div>
                  <div className="text-sm text-campher-gray">Happy Clients</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg opacity-0 animate-fade-in stagger-4">
                  <div className="text-3xl font-semibold text-campher-blue">100%</div>
                  <div className="text-sm text-campher-gray">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-campher-blue/5 p-4 border border-campher-blue/10 opacity-0 animate-fade-in stagger-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-campher-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-campher-blue">"</span>
                    </div>
                    <div>
                      <p className="text-campher-gray italic text-sm">
                        "Campher Communications transformed our online presence. Their team delivered a website that exceeded our expectations and truly represents our brand."
                      </p>
                      <p className="text-campher-dark font-medium text-sm mt-2">- Client Name, Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-4 opacity-0 animate-fade-in">
              About Us
            </span>
            <h2 className="heading-lg mb-4 opacity-0 animate-fade-in stagger-1">
              We create digital solutions that drive business growth
            </h2>
            <p className="text-campher-gray mb-6 opacity-0 animate-fade-in stagger-2">
              Founded with a vision to help businesses thrive in the digital world, Campher Communications is a team of passionate web developers, designers, and digital strategists dedicated to creating exceptional online experiences.
            </p>
            <p className="text-campher-gray mb-6 opacity-0 animate-fade-in stagger-3">
              We believe that a great website is more than just attractive design – it's a powerful business tool that should deliver tangible results. Our approach combines creative design with technical expertise to build solutions that look amazing and perform even better.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-8 opacity-0 animate-fade-in stagger-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-campher-blue" />
                  <span className="text-sm text-campher-dark">{value}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors opacity-0 animate-fade-in stagger-5"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
