
import { useEffect, useState } from 'react';
import { CookiePreferences } from './types';
import { CookieConsentBanner } from './CookieConsentBanner';
import { CookieSettingsDialog } from './CookieSettingsDialog';
import { 
  loadConsentFromStorage, 
  acceptAllCookies, 
  saveCustomPreferences 
} from './CookieConsentService';

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
    // Short timeout to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      const storedPreferences = loadConsentFromStorage();
      
      if (storedPreferences) {
        console.log('Found stored cookie preferences:', storedPreferences);
        setPreferences(storedPreferences);
        setIsVisible(false);
      } else {
        console.log('No stored cookie preferences found, showing banner');
        setIsVisible(true);
      }
    }, 1000); // Small delay to ensure everything is loaded
    
    return () => clearTimeout(timer);
  }, []);

  // Handle opening settings panel
  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
    setIsVisible(false); // Hide banner when settings open
  };

  // Handle accepting all cookies
  const handleAcceptAll = () => {
    console.log('Accepting all cookies');
    const allPreferences = acceptAllCookies();
    setPreferences(allPreferences);
    setIsVisible(false);
  };

  // Handle saving custom preferences
  const handleSavePreferences = () => {
    console.log('Saving custom cookie preferences:', preferences);
    saveCustomPreferences(preferences);
    setIsSettingsOpen(false);
    setIsVisible(false);
  };
  
  // Add a function to reset cookie consent (for testing)
  const resetConsent = () => {
    localStorage.removeItem('campher-cookie-consent');
    document.cookie = 'campher-cookie-consent=; Max-Age=0; path=/; domain=' + window.location.hostname;
    setIsVisible(true);
    console.log('Cookie consent reset');
  };

  return (
    <>
      {isVisible && (
        <CookieConsentBanner
          onAcceptAll={handleAcceptAll}
          onOpenSettings={handleOpenSettings}
        />
      )}
      
      <CookieSettingsDialog
        open={isSettingsOpen}
        preferences={preferences}
        onOpenChange={setIsSettingsOpen}
        onPreferencesChange={setPreferences}
        onSave={handleSavePreferences}
      />
      
      {/* Testing button - remove in production */}
      {import.meta.env.DEV && (
        <button 
          onClick={resetConsent}
          style={{ 
            position: 'fixed', 
            bottom: '10px', 
            right: '10px', 
            zIndex: 9999,
            padding: '5px',
            fontSize: '10px',
            background: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '3px',
            cursor: 'pointer',
            display: 'none' // Hidden by default, enable for testing
          }}
        >
          Reset Cookies (Dev Only)
        </button>
      )}
    </>
  );
};

export default CookieConsent;
