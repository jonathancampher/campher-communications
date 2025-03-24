
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * ContactForm-komponent
 * 
 * Håndterer kontaktskjemaet i kontaktseksjonen.
 * Inkluderer validering og innsending av skjemadata.
 */
const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler innsending av skjema
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Melding sendt",
        description: "Takk for din henvendelse. Vi vil ta kontakt med deg snart!",
      });
      
      // Tilbakestill skjema
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <h3 className="text-xl font-medium mb-6">Send oss en melding</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-campher-gray mb-1">
              Ditt navn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
              placeholder="Ole Nordmann"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-campher-gray mb-1">
              Din e-post
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
              placeholder="ole@eksempel.no"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-campher-gray mb-1">
            Emne
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition"
            placeholder="Prosjektforespørsel"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-campher-gray mb-1">
            Melding
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-campher-blue focus:border-transparent transition resize-none"
            placeholder="Fortell oss om ditt prosjekt..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors w-full"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sender...
            </span>
          ) : (
            <span className="flex items-center">
              Send melding
              <Send size={16} className="ml-2" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
