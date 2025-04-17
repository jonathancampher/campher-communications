
import { Button } from "@/components/ui/button";
import { useLanguageContext } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Wait a short time to check if language is determined
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const toggleLanguage = () => {
    setLanguage(language === 'no' ? 'en' : 'no');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage}
      className={`text-white hover:bg-white/20 hover:text-white border border-white/10 rounded-md ${isLoading ? 'opacity-70' : ''}`}
      aria-label={language === 'no' ? 'Switch to English' : 'Bytt til norsk'}
      disabled={isLoading}
    >
      <Globe className={`h-5 w-5 ${isLoading ? 'animate-pulse' : ''}`} />
      <span className="sr-only">
        {language === 'no' ? 'Switch to English' : 'Bytt til norsk'}
      </span>
      <span className="ml-2 hidden md:inline">
        {isLoading ? '...' : language === 'no' ? 'EN' : 'NO'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
