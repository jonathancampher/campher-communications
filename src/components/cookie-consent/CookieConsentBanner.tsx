
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

interface CookieConsentBannerProps {
  onAcceptAll: () => void;
  onOpenSettings: () => void;
}

export const CookieConsentBanner = ({ onAcceptAll, onOpenSettings }: CookieConsentBannerProps) => {
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
              onClick={onOpenSettings}
              className="text-gray-700 border-gray-300 hover:bg-gray-100 active:bg-gray-200 active:scale-[0.98] transition-transform"
            >
              Tilpass innstillinger
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={onAcceptAll}
              className="bg-campher-blue hover:bg-blue-700 active:bg-blue-800 active:scale-[0.98] transition-transform shadow-sm"
            >
              Godta alle
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
};
