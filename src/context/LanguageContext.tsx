
import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'no' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get stored language preference, default to Norwegian
  const [language, setLanguageState] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage === 'en' ? 'en' : 'no') as Language;
  });

  // Store language preference when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    
    // Dispatch an event so other components can react to language changes
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: newLanguage } }));
    
    // Force a re-render of the entire application 
    // This ensures all components update their text based on the new language
    console.log(`Language changed to: ${newLanguage}`);
  };

  // Set HTML lang attribute on initial load and listen for language changes
  useEffect(() => {
    document.documentElement.lang = language;
    
    // Force initial language application
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language } }));
  }, []);

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
