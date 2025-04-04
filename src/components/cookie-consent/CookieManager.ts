
import { CookiePreferences } from './types';

// Cookie type management functions

export const enableStatisticsCookies = (): void => {
  // Enable Google Analytics
  if (window.dataLayer) {
    window.dataLayer.push({ 'gtag_consent': 'granted' });
  }
};

export const disableStatisticsCookies = (): void => {
  // Disable Google Analytics
  if (window.dataLayer) {
    window.dataLayer.push({ 'gtag_consent': 'denied' });
  }
  
  // Remove Google Analytics cookies
  document.cookie = '_ga=; Max-Age=0; path=/; domain=' + window.location.hostname;
  document.cookie = '_gid=; Max-Age=0; path=/; domain=' + window.location.hostname;
  document.cookie = '_gat=; Max-Age=0; path=/; domain=' + window.location.hostname;
};

export const enableMarketingCookies = (): void => {
  // Marketing cookies logic
  if (window.dataLayer) {
    window.dataLayer.push({ 'marketing_consent': 'granted' });
  }
};

export const disableMarketingCookies = (): void => {
  // Marketing cookies removal logic
  if (window.dataLayer) {
    window.dataLayer.push({ 'marketing_consent': 'denied' });
  }
  
  // Remove marketing cookies
  const marketingCookies = ['_fbp', '_gcl_au', '_uetsid', '_uetvid'];
  marketingCookies.forEach(cookieName => {
    document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=${window.location.hostname}`;
  });
};

export const enablePreferenceCookies = (): void => {
  // Preference cookies logic
  if (window.dataLayer) {
    window.dataLayer.push({ 'preference_consent': 'granted' });
  }
};

export const disablePreferenceCookies = (): void => {
  // Preference cookies removal logic
  if (window.dataLayer) {
    window.dataLayer.push({ 'preference_consent': 'denied' });
  }
  
  // Remove preference cookies
  const preferenceCookies = ['theme', 'language', 'view_mode'];
  preferenceCookies.forEach(cookieName => {
    document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=${window.location.hostname}`;
  });
};

// Apply cookie preferences function
export const applyCookiePreferences = (preferences: CookiePreferences): void => {
  if (preferences.statistics) {
    enableStatisticsCookies();
  } else {
    disableStatisticsCookies();
  }
  
  if (preferences.marketing) {
    enableMarketingCookies();
  } else {
    disableMarketingCookies();
  }
  
  if (preferences.preferences) {
    enablePreferenceCookies();
  } else {
    disablePreferenceCookies();
  }
};
