import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'no' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get stored language preference or determine from location
  const [language, setLanguageState] = useState<Language>(() => {
    // First check if user has a stored preference
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'en' || storedLanguage === 'no') {
      return storedLanguage as Language;
    }
    
    // Default to Norwegian until we can determine location
    return 'no' as Language;
  });
  
  const [isLocationChecked, setIsLocationChecked] = useState(false);

  // Detect user's country on initial load (if no preference is stored)
  useEffect(() => {
    const detectUserLocation = async () => {
      // Skip if user has already set a language preference
      if (localStorage.getItem('language')) {
        setIsLocationChecked(true);
        return;
      }
      
      try {
        // Use ipinfo.io to get user's country (works well with Netlify)
        const response = await fetch('https://ipinfo.io/json?token=6433e7fc9b2925');
        const data = await response.json();
        
        // Set language based on country
        if (data && data.country) {
          console.log('Detected country:', data.country);
          
          // English for countries where English is commonly used
          const englishCountries = ['US', 'GB', 'CA', 'AU', 'NZ'];
          // Norwegian for Norway and nearby Nordic countries
          const norwegianCountries = ['NO', 'SE', 'DK'];
          
          if (englishCountries.includes(data.country)) {
            setLanguageState('en');
            localStorage.setItem('language', 'en');
          } else if (norwegianCountries.includes(data.country)) {
            setLanguageState('no');
            localStorage.setItem('language', 'no');
          }
          // For all other countries, keep the default (Norwegian)
        }
      } catch (error) {
        console.error('Error detecting user location:', error);
      } finally {
        setIsLocationChecked(true);
      }
    };
    
    detectUserLocation();
  }, []);

  // Store language preference when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    
    // Dispatch an event so other components can react to language changes
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: newLanguage } }));
    
    // Force a re-render of the entire application
    console.log(`Language changed to: ${newLanguage}`);
  };

  // Set HTML lang attribute on initial load and listen for language changes
  useEffect(() => {
    document.documentElement.lang = language;
    
    // Force initial language application
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language } }));
  }, [language]); // Added language dependency to ensure updates

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
