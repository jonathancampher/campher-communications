
/**
 * Cookie Manager Utility
 * 
 * Håndterer alle operasjoner relatert til informasjonskapsler (cookies)
 * i henhold til norsk lovgivning og GDPR.
 */

// Hent cookie-samtykke fra localStorage
export const getCookieConsent = (): 'all' | 'necessary' | 'rejected' | null => {
  return localStorage.getItem('cookieConsent') as 'all' | 'necessary' | 'rejected' | null;
};

// Sjekk om en bestemt cookie-kategori er tillatt
export const isCookieCategoryAllowed = (category: 'necessary' | 'analytics' | 'marketing'): boolean => {
  const consent = getCookieConsent();
  
  if (!consent) return false;
  if (consent === 'all') return true;
  if (consent === 'necessary' && category === 'necessary') return true;
  
  return false;
};

// Sett en cookie basert på samtykke
export const setConsentBasedCookie = (
  name: string,
  value: string,
  category: 'necessary' | 'analytics' | 'marketing',
  daysToExpire: number = 30
): boolean => {
  if (!isCookieCategoryAllowed(category)) {
    return false;
  }
  
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + daysToExpire);
  
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expireDate.toUTCString()}; path=/; SameSite=Lax`;
  return true;
};

// Hent en cookie verdi
export const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return decodeURIComponent(match[2]);
  return null;
};

// Slett en cookie
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
};

// Vis cookie-samtykke dialog på nytt
export const resetCookieConsent = (): void => {
  localStorage.removeItem('cookieConsent');
  
  // Slett cookies som krever samtykke
  deleteCookie('_ga');
  deleteCookie('_gid');
  deleteCookie('_gat');
  
  // Reload siden for å aktivere endringene
  window.location.reload();
};
