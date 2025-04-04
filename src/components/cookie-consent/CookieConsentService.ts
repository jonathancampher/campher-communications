
import { CookiePreferences, COOKIE_CONSENT_KEY } from './types';
import { applyCookiePreferences } from './CookieManager';
import { toast } from '@/hooks/use-toast';

export const saveConsentToStorage = (preferences: CookiePreferences): void => {
  try {
    // Store in both localStorage and set actual cookies with expiration
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    
    // Set a long-lived cookie as backup (1 year)
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    
    // Fix: Ensure cookie is properly formatted and encoded
    const encodedValue = encodeURIComponent(JSON.stringify(preferences));
    document.cookie = `${COOKIE_CONSENT_KEY}=${encodedValue}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    
    // Apply the preferences immediately
    applyCookiePreferences(preferences);
    
    console.log('Cookie preferences saved successfully:', preferences);
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
    // Try localStorage first
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (storedConsent) {
      try {
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
      } catch (parseError) {
        console.error("Error parsing localStorage consent:", parseError);
      }
    }
    
    // Fallback to cookies if localStorage failed
    const cookieMatch = document.cookie.match(new RegExp(`(^| )${COOKIE_CONSENT_KEY}=([^;]+)`));
    if (cookieMatch) {
      try {
        const parsedCookie = JSON.parse(decodeURIComponent(cookieMatch[2]));
        const preferences = {
          necessary: true,
          preferences: Boolean(parsedCookie.preferences),
          statistics: Boolean(parsedCookie.statistics),
          marketing: Boolean(parsedCookie.marketing)
        };
        
        // Sync back to localStorage
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
        
        // Apply preferences
        applyCookiePreferences(preferences);
        
        return preferences;
      } catch (e) {
        console.error("Error parsing cookie consent:", e);
      }
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
