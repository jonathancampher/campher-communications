
import MapEmbed from './MapEmbed';

/**
 * ContactMap-komponent
 * 
 * Viser et Google Maps-kart med bedriftens lokasjon.
 * Bruker MapEmbed-komponenten for å vise selve kartet.
 * 
 * @returns {JSX.Element} - Rendrer map section med Google Maps
 */
const ContactMap = () => {
  return (
    <div id="map" className="w-full rounded-xl overflow-hidden shadow-lg animate-fade-in">
      <h3 className="text-xl font-medium mb-4">Finn oss her</h3>
      <MapEmbed />
    </div>
  );
};

export default ContactMap;
