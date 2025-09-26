
import { MapPin, Utensils, Home, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

// Define the container style for the map
const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem'
};

// Restaurant coordinates for Øvre Langgate 42, 3110 Tønsberg
const center = {
  lat: 59.2675,
  lng: 10.4078
};

const Contact = () => {
  const { t, language } = useLanguage();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapLoadError, setMapLoadError] = useState(false);
  
  // Function to handle map load error
  const handleLoadError = () => {
    console.error("Google Maps failed to load");
    setMapLoadError(true);
    setMapLoaded(false);
  };
  
  // Corporate customer translations
  const corporateTranslations = {
    title: {
      no: "Bedrift Kunder",
      en: "Corporate Customers",
      it: "Clienti Aziendali"
    },
    description: {
      no: "Vi tilbyr spesielle arrangementer, firmafest, julebord og catering. Vi kan også levere vår Pinsa til kontorer.",
      en: "We offer special arrangements, company parties, Christmas dinners and catering. We can also deliver our Pinsa to offices.",
      it: "Offriamo eventi speciali, feste aziendali, cene di Natale e catering. Possiamo anche consegnare la nostra Pinsa agli uffici."
    }
  };
  
  return (
    <section id="kontakt" className="section-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-headline font-playfair mb-6">
            <span className="text-pinseria-red">{t('contact.title').substring(0, Math.floor(t('contact.title').length/3))}</span>
            <span className="text-white">{t('contact.title').substring(Math.floor(t('contact.title').length/3), Math.floor(2*t('contact.title').length/3))}</span>
            <span className="text-pinseria-brightgreen">{t('contact.title').substring(Math.floor(2*t('contact.title').length/3))}</span>
          </h2>
          <p className="text-body font-inter">
            Besøk La Spiseria på Øvre Langgate 42 i Tønsberg for autentisk italiensk Pinsa Romana. Vi gleder oss til å ønske deg velkommen til vår italienske oase i Vestfold.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg relative">
              {/* Static Map Fallback - Always shown when error or while loading */}
              {(!mapLoaded || mapLoadError) && (
                <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
                  <MapPin className="h-10 w-10 text-pinseria-red mb-4" />
                  <span className="font-playfair text-lg text-white">Øvre Langgate 42, Tønsberg</span>
                  <p className="mt-2 text-sm text-white max-w-xs text-center font-inter">
                    {mapLoadError ? t('contact.mapError') : t('contact.mapLoading')}
                  </p>
                </div>
              )}
              
              {/* Google Map - Only attempt to load if no previous error */}
              {!mapLoadError && (
                <LoadScript 
                  googleMapsApiKey=""
                  onLoad={() => setMapLoaded(true)}
                  onError={handleLoadError}
                  onUnmount={() => setMapLoaded(false)}
                  loadingElement={<div style={{ height: '100%' }} />}
                >
                  {mapLoaded && (
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={16}
                      options={{
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false
                      }}
                    >
                      <Marker 
                        position={center} 
                        title="La Spiseria - Autentisk Italiensk Pinsa i Tønsberg"
                      />
                    </GoogleMap>
                  )}
                </LoadScript>
              )}
              
              {/* Italian flag-inspired overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-3 flex">
                <div className="w-1/3 bg-pinseria-brightgreen"></div>
                <div className="w-1/3 bg-white"></div>
                <div className="w-1/3 bg-pinseria-red"></div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-black p-8 rounded-lg h-full shadow-md hover:shadow-lg transition-shadow border border-gray-800">
              <h3 className="text-subtitle font-playfair mb-6">
                <span className="text-pinseria-brightgreen">Kontakt La Spiseria Tønsberg</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="h-5 w-5 text-pinseria-red mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-playfair mb-1 text-white">Adresse</h4>
                    <p className="text-white font-inter">
                      <span itemProp="streetAddress">Øvre Langgate 42</span>, 
                      <span itemProp="postalCode"> 3110</span> 
                      <span itemProp="addressLocality"> Tønsberg</span>
                    </p>
                    <p className="text-sm text-white/80 mt-1 font-inter">Vestfold, Norge</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Utensils className="h-5 w-5 text-white mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-playfair mb-1 text-pinseria-brightgreen">Åpningstider</h4>
                    <div itemScope itemType="https://schema.org/OpeningHoursSpecification" className="space-y-1">
                      <p className="text-white font-inter">
                        <span className="text-red-400">Mandag:</span> Stengt
                      </p>
                      <p className="text-white font-inter">
                        <span>Tirsdag-Fredag:</span> 15:00-20:00
                      </p>
                      <p className="text-white font-inter">
                        <span>Lørdag:</span> 14:00-20:00
                      </p>
                      <p className="text-white font-inter">
                        <span>Søndag:</span> 15:00-20:00
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Home className="h-5 w-5 text-pinseria-red mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-playfair mb-1 text-white">Reservasjon & Bestilling</h4>
                    <p className="text-white font-inter">post@laspiseria.no</p>
                    <p className="text-sm text-white/80 mt-1 font-inter">Bestill online eller ring for bordreservasjon</p>
                  </div>
                </div>

                {/* Corporate customers section with local SEO keywords */}
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-pinseria-brightgreen mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-playfair mb-1 text-pinseria-red">Bedriftskunder i Tønsberg</h4>
                    <p className="text-white font-inter">
                      Catering til Tønsberg og Vestfold. Firmaarrangementer, julebord og levering til kontorer i Tønsberg-området.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-lg font-playfair mb-3 text-white">Følg La Spiseria</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-pinseria-brightgreen hover:text-pinseria-brightgreen/80 transition-colors font-inter" aria-label="La Spiseria på Facebook">Facebook</a>
                  <a href="#" className="text-white hover:text-white/80 transition-colors font-inter" aria-label="La Spiseria på Instagram">Instagram</a>
                  <a href="#" className="text-pinseria-red hover:text-pinseria-red/80 transition-colors font-inter" aria-label="La Spiseria på TripAdvisor">TripAdvisor</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Google Maps link with local SEO */}
        <div className="mt-8 text-center">
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Øvre+Langgate+42+3110+Tønsberg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-pinseria-red hover:text-pinseria-red/80 font-playfair"
            aria-label="Få veibeskrivelse til La Spiseria på Øvre Langgate 42 i Tønsberg"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Få veibeskrivelse til La Spiseria
          </a>
          
          {/* Italian flag-inspired decoration */}
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-pinseria-brightgreen mx-1"></div>
            <div className="w-16 h-1 bg-white mx-1"></div>
            <div className="w-16 h-1 bg-pinseria-red mx-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
