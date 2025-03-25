
/**
 * MapEmbed-komponent
 * 
 * Rendrer Google Maps iframe med bedriftens lokasjon.
 * Optimalisert for ytelse med riktige attributter og tilgjengelighet.
 */
const MapEmbed = () => {
  return (
    <div className="aspect-video">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.2077150140435!2d10.489216877112375!3d59.329485874614384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b34cb9ebf1e1%3A0xd7baba40d83270f8!2sCampher%20Communications!5e0!3m2!1sno!2sza!4v1742820270559!5m2!1sno!2sza" 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Campher Communications lokasjon"
        className="rounded-xl"
        aria-label="Kart som viser Campher Communications sin beliggenhet"
      />
    </div>
  );
};

export default MapEmbed;
