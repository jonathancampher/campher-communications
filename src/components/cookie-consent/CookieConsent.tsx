
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
    const storedPreferences = loadConsentFromStorage();
    
    if (storedPreferences) {
      setPreferences(storedPreferences);
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  // Handle opening settings panel
  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  // Handle accepting all cookies
  const handleAcceptAll = () => {
    const allPreferences = acceptAllCookies();
    setPreferences(allPreferences);
    setIsVisible(false);
  };

  // Handle saving custom preferences
  const handleSavePreferences = () => {
    saveCustomPreferences(preferences);
    setIsSettingsOpen(false);
    setIsVisible(false);
  };

  if (!isVisible && !isSettingsOpen) return null;

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
    </>
  );
};

export default CookieConsent;
