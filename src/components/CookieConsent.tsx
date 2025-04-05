
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
import { X } from 'lucide-react';

/**
 * CookieConsent komponent
 * 
 * Viser en popup for samtykke til informasjonskapsler (cookies) i henhold til norsk lov.
 * Lagrer brukernes valg i localStorage for å unngå å vise popupen ved hvert besøk.
 */
const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  
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
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogTitle className="flex justify-between items-center">
          <span>Informasjonskapsler (cookies)</span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 rounded-full p-0" 
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Lukk</span>
          </Button>
        </DialogTitle>
        <DialogDescription className="text-base text-gray-700">
          <p className="mb-4">
            Vi bruker informasjonskapsler for å forbedre din brukeropplevelse, tilby tilpasset innhold og analysere trafikk på nettstedet vårt.
          </p>
          <p className="mb-4">
            I henhold til norsk lov og personvernforordningen (GDPR) trenger vi ditt samtykke før vi lagrer cookies på enheten din.
          </p>
          <p>
            Du kan lese mer om hvordan vi bruker informasjonskapsler i vår{' '}
            <Link to="/cookies" className="text-campher-blue hover:underline" onClick={() => setOpen(false)}>
              cookie-policy
            </Link>.
          </p>
        </DialogDescription>
        <DialogFooter className="sm:justify-between flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleAcceptNecessary}
          >
            Bare nødvendige
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleReject}
            >
              Avvis alle
            </Button>
            <Button 
              onClick={handleAcceptAll}
              className="bg-campher-blue hover:bg-blue-700"
            >
              Godta alle
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
