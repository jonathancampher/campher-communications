
import { Send } from 'lucide-react';
import { useLanguageContext } from '@/context/LanguageContext';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  const { language } = useLanguageContext();
  
  const texts = {
    no: {
      sending: "Sender...",
      send: "Send melding"
    },
    en: {
      sending: "Sending...",
      send: "Send message"
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];
  
  return (
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
          {t.sending}
        </span>
      ) : (
        <span className="flex items-center">
          {t.send}
          <Send size={16} className="ml-2" />
        </span>
      )}
    </button>
  );
};
