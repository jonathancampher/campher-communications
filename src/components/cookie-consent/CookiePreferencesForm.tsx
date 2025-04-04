
import { useState } from 'react';
import { CookiePreferences } from './types';
import { Checkbox } from '@/components/ui/checkbox';

interface CookiePreferencesFormProps {
  preferences: CookiePreferences;
  onChange: (preferences: CookiePreferences) => void;
}

export const CookiePreferencesForm = ({ preferences, onChange }: CookiePreferencesFormProps) => {
  const handleCheckboxChange = (cookieType: keyof CookiePreferences) => {
    if (cookieType === 'necessary') return; // Necessary cookies cannot be disabled
    onChange({
      ...preferences,
      [cookieType]: !preferences[cookieType]
    });
  };
  
  return (
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
  );
};
