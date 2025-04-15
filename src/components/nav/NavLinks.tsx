
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavItem } from './types';

interface NavLinksProps {
  links: NavItem[];
  handleSectionNavigation: (href: string, isPage?: boolean) => void;
}

const NavLinks = ({ links, handleSectionNavigation }: NavLinksProps) => {
  return (
    <div className="hidden md:flex items-center gap-4">
      {links.map((link, index) => (
        link.isPage ? (
          <Link
            key={`${index}-${link.name}`}
            to={link.href}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              link.primary
                ? "bg-campher-blue hover:bg-blue-600 text-white"
                : link.isActive
                  ? "bg-white/10 text-white"
                  : "text-white hover:bg-white/10"
            )}
          >
            {link.name}
          </Link>
        ) : (
          <a
            key={`${index}-${link.name}`}
            href={link.href}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              link.primary
                ? "bg-campher-blue hover:bg-blue-600 text-white"
                : "text-white hover:bg-white/10"
            )}
            onClick={(e) => {
              e.preventDefault();
              handleSectionNavigation(link.href);
            }}
          >
            {link.name}
          </a>
        )
      ))}
    </div>
  );
};

export default NavLinks;

