
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import NavLinks from './nav/NavLinks';
import MobileNav from './nav/MobileNav';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavigation } from '@/hooks/useNavigation';

const Navbar = () => {
  const {
    isScrolled,
    sheetOpen,
    setSheetOpen,
    navLinks,
    handleSectionNavigation,
    language
  } = useNavigation();
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? 'py-1 shadow-md bg-campher-dark/95 backdrop-blur-md' 
        : 'py-2 bg-campher-dark'
    )}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center py-2">
          <Logo />
        </Link>

        <NavLinks 
          links={navLinks}
          handleSectionNavigation={handleSectionNavigation}
        />

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        <MobileNav 
          links={navLinks}
          sheetOpen={sheetOpen}
          setSheetOpen={setSheetOpen}
          handleSectionNavigation={handleSectionNavigation}
          language={language}
        />
      </div>
    </nav>
  );
};

export default Navbar;

