
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
      src="/lovable-uploads/58221f53-7fd5-4a4f-b3b4-b55ae6169f64.png" 
      alt="Campher Communications Logo" 
      className="h-10 w-auto" 
    />
  );
};

export default Logo;
