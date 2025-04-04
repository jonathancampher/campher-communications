
import { CookiePreferences, COOKIE_CONSENT_KEY } from './types';
import { applyCookiePreferences } from './CookieManager';
import { toast } from '@/hooks/use-toast';

export const saveConsentToStorage = (preferences: CookiePreferences): void => {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    applyCookiePreferences(preferences);
  } catch (error) {
    console.error("Error saving cookie preferences:", error);
    toast({
      variant: "destructive",
      title: "Feil",
      description: "En feil oppstod. Vennligst oppdater siden og prøv igjen.",
    });
  }
};

export const loadConsentFromStorage = (): CookiePreferences | null => {
  try {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (storedConsent) {
      const parsedConsent = JSON.parse(storedConsent);
      const preferences = {
        necessary: true, // Always true
        preferences: Boolean(parsedConsent.preferences),
        statistics: Boolean(parsedConsent.statistics),
        marketing: Boolean(parsedConsent.marketing)
      };
      
      // Apply stored consent settings immediately
      applyCookiePreferences(preferences);
      
      return preferences;
    }
  } catch (error) {
    console.error("Error parsing stored consent:", error);
  }
  
  return null;
};

export const acceptAllCookies = (): CookiePreferences => {
  const allConsentPreferences = {
    necessary: true,
    preferences: true,
    statistics: true,
    marketing: true
  };
  
  saveConsentToStorage(allConsentPreferences);
  
  toast({
    title: "Cookies akseptert",
    description: "Du har godtatt alle cookies",
  });
  
  return allConsentPreferences;
};

export const saveCustomPreferences = (preferences: CookiePreferences): void => {
  saveConsentToStorage(preferences);
  
  toast({
    title: "Innstillinger lagret",
    description: "Dine cookie-preferanser er oppdatert",
  });
};
