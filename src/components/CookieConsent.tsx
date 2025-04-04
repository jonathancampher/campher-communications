
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { X } from 'lucide-react';

declare global {
  interface Window {
    Cookiebot: any;
  }
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sjekk om Cookiebot er lastet og om samtykke ikke er gitt
    const checkCookieConsent = () => {
      if (window.Cookiebot && !window.Cookiebot.consent.marketing) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Første sjekk
    if (document.readyState === "complete") {
      checkCookieConsent();
    } else {
      window.addEventListener('load', checkCookieConsent);
    }

    // Lytt til Cookiebot hendelser
    document.addEventListener('CookiebotOnAccept', () => setIsVisible(false));
    document.addEventListener('CookiebotOnDecline', () => setIsVisible(true));

    return () => {
      window.removeEventListener('load', checkCookieConsent);
      document.removeEventListener('CookiebotOnAccept', () => setIsVisible(false));
      document.removeEventListener('CookiebotOnDecline', () => setIsVisible(true));
    };
  }, []);

  if (!isVisible) return null;

  const handleOpenSettings = () => {
    if (window.Cookiebot) {
      window.Cookiebot.show();
    }
  };

  const handleAcceptAll = () => {
    if (window.Cookiebot) {
      window.Cookiebot.submitCustomConsent(true, true, true);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <Alert className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white shadow-none border-none p-0">
          <AlertDescription className="text-sm text-gray-700 flex-1">
            <p className="mb-2 text-base font-medium">Vi respekterer ditt personvern</p>
            <p>
              Vi bruker informasjonskapsler (cookies) for å gi deg en bedre brukeropplevelse, 
              analysere nettstedstrafikk og tilpasse markedsføring. 
              Du kan lese mer om bruken av informasjonskapsler i vår{' '}
              <a href="/cookies" className="text-campher-blue underline underline-offset-2">
                cookie-policy
              </a>{' '}
              og{' '}
              <a href="/personvern" className="text-campher-blue underline underline-offset-2">
                personvernerklæring
              </a>.
            </p>
          </AlertDescription>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleOpenSettings}
              className="text-gray-700 border-gray-300"
            >
              Tilpass innstillinger
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleAcceptAll}
              className="bg-campher-blue hover:bg-blue-700"
            >
              Godta alle
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default CookieConsent;
