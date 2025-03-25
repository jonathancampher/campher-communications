
import React from 'react';

/**
 * Logo-komponent
 * 
 * Viser firmaets logo med riktig størrelse og alt-tekst.
 * Brukes i navigasjonsmenyen og footer.
 */
const Logo = () => {
  return (
    <img 
      src="/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png" 
      alt="Campher Communications Logo" 
      className="h-16 w-auto" 
      width="64"
      height="64"
      loading="eager"
    />
  );
};

export default Logo;
