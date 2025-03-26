
import { useState, useEffect } from 'react';

/**
 * MapEmbed-komponent
 * 
 * Rendrer Google Maps iframe med bedriftens lokasjon.
 * Optimalisert for ytelse med lazy-loading, riktige attributter og tilgjengelighet.
 * Inkluderer fallback for bedre ytelse og brukere uten JavaScript.
 */
const MapEmbed = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  // Map URL, address and location information
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.2077150140435!2d10.489216877112375!3d59.329457874614384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b34cb9ebf1e1%3A0xd7baba40d83270f8!2sCampher%20Communications!5e0!3m2!1sno!2sza!4v1742820270559!5m2!1sno!2sza";
  const address = "Campher Communications, Moss, Norge";
  
  // Static map fallback image URL for better performance and as a placeholder
  const staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Campher+Communications,Moss,Norge&zoom=15&size=600x400&markers=color:red%7CCampher+Communications,Moss,Norge&key=";
  
  useEffect(() => {
    // Only load map when component is visible in viewport for better performance
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without IntersectionObserver
      setIsIntersecting(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px 0px' }
    );
    
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
      observer.observe(mapContainer);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Handle iframe load event
  const handleMapLoad = () => {
    setMapLoaded(true);
  };
  
  return (
    <div 
      id="map-container" 
      className="aspect-video relative rounded-xl overflow-hidden bg-gray-100"
      aria-label="Kart som viser Campher Communications sin beliggenhet"
    >
      {/* Map placeholder for better loading experience */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <div className="w-8 h-8 border-4 border-campher-blue border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Laster kart...</p>
          </div>
        </div>
      )}
      
      {/* Only load iframe when near viewport */}
      {isIntersecting && (
        <iframe 
          src={mapSrc}
          width="100%" 
          height="100%" 
          style={{ border: 0, opacity: mapLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Campher Communications lokasjon"
          className="absolute inset-0 w-full h-full rounded-xl"
          onLoad={handleMapLoad}
          aria-hidden={!mapLoaded}
        />
      )}
      
      {/* Fallback for users with iframe or JavaScript disabled */}
      <noscript>
        <div className="p-4 text-center">
          <p className="mb-2">Se vår lokasjon på Google Maps:</p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {address}
          </a>
        </div>
      </noscript>
    </div>
  );
};

export default MapEmbed;
