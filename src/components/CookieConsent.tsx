
import { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '@/context/LanguageContext';

/**
 * CookieConsent komponent
 * 
 * Viser en popup for samtykke til informasjonskapsler (cookies) i henhold til norsk lov.
 * Lagrer brukernes valg i localStorage for å unngå å vise popupen ved hvert besøk.
 */
const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const { language } = useLanguageContext();
  
  useEffect(() => {
    // Sjekk om brukeren allerede har gitt samtykke
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Vis popup etter en kort forsinkelse for bedre brukeropplevelse
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Håndter aksept av alle cookies
  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setOpen(false);
  };
  
  // Håndter aksept av bare nødvendige cookies
  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setOpen(false);
  };
  
  // Håndter avvisning av alle cookies (bortsett fra nødvendige)
  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setOpen(false);
  };
  
  const texts = {
    no: {
      title: 'Informasjonskapsler (cookies)',
      description1: 'Vi bruker informasjonskapsler for å forbedre din brukeropplevelse, tilby tilpasset innhold og analysere trafikk på nettstedet vårt.',
      description2: 'I henhold til norsk lov og personvernforordningen (GDPR) trenger vi ditt samtykke før vi lagrer cookies på enheten din.',
      readMore: 'Du kan lese mer om hvordan vi bruker informasjonskapsler i vår',
      cookiePolicy: 'cookie-policy',
      necessary: 'Bare nødvendige',
      reject: 'Avvis alle',
      accept: 'Godta alle',
      close: 'Lukk'
    },
    en: {
      title: 'Cookies',
      description1: 'We use cookies to improve your user experience, offer personalized content and analyze traffic on our website.',
      description2: 'In accordance with Norwegian law and the General Data Protection Regulation (GDPR), we need your consent before storing cookies on your device.',
      readMore: 'You can read more about how we use cookies in our',
      cookiePolicy: 'cookie policy',
      necessary: 'Only necessary',
      reject: 'Reject all',
      accept: 'Accept all',
      close: 'Close'
    }
  };

  const t = texts[language === 'no' ? 'no' : 'en'];
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogTitle className="mb-2">
          {t.title}
        </DialogTitle>
        <DialogDescription className="text-base text-gray-700">
          <p className="mb-4">
            {t.description1}
          </p>
          <p className="mb-4">
            {t.description2}
          </p>
          <p>
            {t.readMore}{' '}
            <Link to="/cookies" className="text-campher-blue hover:underline" onClick={() => setOpen(false)}>
              {t.cookiePolicy}
            </Link>.
          </p>
        </DialogDescription>
        <DialogFooter className="sm:justify-between flex-col sm:flex-row gap-2 mt-6">
          <Button 
            variant="outline" 
            onClick={handleAcceptNecessary}
          >
            {t.necessary}
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleReject}
            >
              {t.reject}
            </Button>
            <Button 
              onClick={handleAcceptAll}
              className="bg-campher-blue hover:bg-blue-700"
            >
              {t.accept}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
