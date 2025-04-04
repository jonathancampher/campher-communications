
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';

// TypeScript declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Cookie preference interface
interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

// Cookie consent storage key
const COOKIE_CONSENT_KEY = 'campher-cookie-consent';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    preferences: false,
    statistics: false,
    marketing: false,
  });

  // Check for existing consent on mount
  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        setPreferences({
          necessary: true, // Always true
          preferences: Boolean(parsedConsent.preferences),
          statistics: Boolean(parsedConsent.statistics),
          marketing: Boolean(parsedConsent.marketing)
        });
        setIsVisible(false);
      } catch (error) {
        console.error("Error parsing stored consent:", error);
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  // Save consent to localStorage
  const saveConsent = (newPreferences: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newPreferences));
    
    // Apply cookie preferences
    if (newPreferences.statistics) {
      enableStatisticsCookies();
    } else {
      disableStatisticsCookies();
    }
    
    if (newPreferences.marketing) {
      enableMarketingCookies();
    } else {
      disableMarketingCookies();
    }
    
    if (newPreferences.preferences) {
      enablePreferenceCookies();
    } else {
      disablePreferenceCookies();
    }
  };

  // Cookie type management functions
  const enableStatisticsCookies = () => {
    // Enable Google Analytics
    if (window.dataLayer) {
      window.dataLayer.push({ 'gtag_consent': 'granted' });
    }
  };

  const disableStatisticsCookies = () => {
    // Disable Google Analytics
    if (window.dataLayer) {
      window.dataLayer.push({ 'gtag_consent': 'denied' });
    }
    
    // Remove Google Analytics cookies
    document.cookie = '_ga=; Max-Age=0; path=/; domain=' + window.location.hostname;
    document.cookie = '_gid=; Max-Age=0; path=/; domain=' + window.location.hostname;
    document.cookie = '_gat=; Max-Age=0; path=/; domain=' + window.location.hostname;
  };

  const enableMarketingCookies = () => {
    // Marketing cookies logic would go here
    // This is where you'd initialize marketing tools
  };

  const disableMarketingCookies = () => {
    // Marketing cookies removal logic would go here
    // This is where you'd remove marketing cookies
  };

  const enablePreferenceCookies = () => {
    // Preference cookies logic would go here
    // This is where you'd enable preference cookies
  };

  const disablePreferenceCookies = () => {
    // Preference cookies removal logic would go here
    // This is where you'd remove preference cookies
  };

  // Handle opening settings panel
  const handleOpenSettings = () => {
    try {
      setIsSettingsOpen(true);
    } catch (error) {
      console.error("Error opening cookie settings:", error);
      toast({
        variant: "destructive",
        title: "Feil",
        description: "En feil oppstod. Vennligst oppdater siden og prøv igjen.",
      });
    }
  };

  // Handle accepting all cookies
  const handleAcceptAll = () => {
    try {
      const allConsentPreferences = {
        necessary: true,
        preferences: true,
        statistics: true,
        marketing: true
      };
      
      setPreferences(allConsentPreferences);
      saveConsent(allConsentPreferences);
      setIsVisible(false);
      
      toast({
        title: "Cookies akseptert",
        description: "Du har godtatt alle cookies",
      });
    } catch (error) {
      console.error("Error accepting cookies:", error);
      toast({
        variant: "destructive",
        title: "Feil",
        description: "En feil oppstod. Vennligst oppdater siden og prøv igjen.",
      });
    }
  };

  // Handle saving custom preferences
  const handleSavePreferences = () => {
    try {
      saveConsent(preferences);
      setIsSettingsOpen(false);
      setIsVisible(false);
      
      toast({
        title: "Innstillinger lagret",
        description: "Dine cookie-preferanser er oppdatert",
      });
    } catch (error) {
      console.error("Error saving cookie preferences:", error);
      toast({
        variant: "destructive",
        title: "Feil",
        description: "En feil oppstod. Vennligst oppdater siden og prøv igjen.",
      });
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (cookieType: keyof CookiePreferences) => {
    if (cookieType === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  if (!isVisible && !isSettingsOpen) return null;

  return (
    <>
      {isVisible && (
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
                  className="text-gray-700 border-gray-300 hover:bg-gray-100 active:bg-gray-200 active:scale-[0.98] transition-transform"
                >
                  Tilpass innstillinger
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={handleAcceptAll}
                  className="bg-campher-blue hover:bg-blue-700 active:bg-blue-800 active:scale-[0.98] transition-transform shadow-sm"
                >
                  Godta alle
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      )}
      
      <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <SheetContent className="overflow-y-auto w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Cookie innstillinger</SheetTitle>
            <SheetDescription>
              Velg hvilke informasjonskapsler du vil akseptere. Nødvendige cookies kan ikke deaktiveres.
            </SheetDescription>
          </SheetHeader>
          <div className="py-6 space-y-6">
            <div className="flex items-start space-x-3 p-3 border rounded-md bg-gray-50">
              <Checkbox id="necessary" checked={true} disabled />
              <div className="space-y-1">
                <label 
                  htmlFor="necessary"
                  className="font-medium text-sm cursor-not-allowed"
                >
                  Nødvendige cookies
                </label>
                <p className="text-sm text-gray-600">
                  Disse cookiesene er nødvendige for at nettsiden skal fungere og kan ikke deaktiveres.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 border rounded-md hover:bg-gray-50">
              <Checkbox 
                id="preferences" 
                checked={preferences.preferences} 
                onCheckedChange={() => handleCheckboxChange('preferences')}
              />
              <div className="space-y-1">
                <label 
                  htmlFor="preferences"
                  className="font-medium text-sm cursor-pointer"
                >
                  Preferanse cookies
                </label>
                <p className="text-sm text-gray-600">
                  Disse cookiesene gjør det mulig å huske dine preferanser for en bedre brukeropplevelse.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 border rounded-md hover:bg-gray-50">
              <Checkbox 
                id="statistics" 
                checked={preferences.statistics} 
                onCheckedChange={() => handleCheckboxChange('statistics')}
              />
              <div className="space-y-1">
                <label 
                  htmlFor="statistics"
                  className="font-medium text-sm cursor-pointer"
                >
                  Statistikk cookies
                </label>
                <p className="text-sm text-gray-600">
                  Disse cookiesene hjelper oss å forstå hvordan besøkende bruker nettsiden, og forbedre den.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 border rounded-md hover:bg-gray-50">
              <Checkbox 
                id="marketing" 
                checked={preferences.marketing} 
                onCheckedChange={() => handleCheckboxChange('marketing')}
              />
              <div className="space-y-1">
                <label 
                  htmlFor="marketing"
                  className="font-medium text-sm cursor-pointer"
                >
                  Markedsføring cookies
                </label>
                <p className="text-sm text-gray-600">
                  Disse cookiesene brukes for å tilby deg relevante annonser og markedsføring.
                </p>
              </div>
            </div>
          </div>
          
          <SheetFooter className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => setIsSettingsOpen(false)}
              className="w-full sm:w-auto"
            >
              Avbryt
            </Button>
            <Button 
              onClick={handleSavePreferences}
              className="w-full sm:w-auto bg-campher-blue hover:bg-blue-700 active:bg-blue-800 active:scale-[0.98] transition-transform"
            >
              Lagre innstillinger
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CookieConsent;
