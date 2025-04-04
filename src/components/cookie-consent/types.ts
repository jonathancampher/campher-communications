
// Cookie preference interface
export interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

// Cookie consent storage key
export const COOKIE_CONSENT_KEY = 'campher-cookie-consent';
