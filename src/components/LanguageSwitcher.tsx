
import { Button } from "@/components/ui/button";
import { useLanguageContext } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext();
  
  const toggleLanguage = () => {
    setLanguage(language === 'no' ? 'en' : 'no');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage}
      className="text-white hover:bg-white/20 hover:text-white border border-white/10 rounded-md" 
      aria-label={language === 'no' ? 'Bytt til engelsk' : 'Switch to Norwegian'}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">
        {language === 'no' ? 'Bytt til engelsk' : 'Switch to Norwegian'}
      </span>
      <span className="ml-2 hidden md:inline">
        {language === 'no' ? 'EN' : 'NO'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
