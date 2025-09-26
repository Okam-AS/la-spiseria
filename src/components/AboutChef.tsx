
import { Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const AboutChef = () => {
  const { t } = useLanguage();

  return (
    <section id="om-oss" className="section-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="max-w-lg">
              <div className="flex items-center mb-6">
                <Building2 className="h-6 w-6 text-pinseria-red mr-2" />
                <a 
                  href="https://italianfoodmarket.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium font-playfair hover:opacity-80 transition-opacity"
                  aria-label="Besøk Italian Food Market - vår leverandør av autentiske italienske ingredienser"
                >
                  <span className="text-pinseria-red">I</span>
                  <span className="text-white">t</span>
                  <span className="text-pinseria-brightgreen">a</span>
                  <span className="text-pinseria-red">l</span>
                  <span className="text-white">i</span>
                  <span className="text-pinseria-brightgreen">a</span>
                  <span className="text-pinseria-red">n</span>
                  <span className="text-white"> </span>
                  <span className="text-pinseria-brightgreen">F</span>
                  <span className="text-pinseria-red">o</span>
                  <span className="text-white">o</span>
                  <span className="text-pinseria-brightgreen">d</span>
                  <span className="text-pinseria-red"> </span>
                  <span className="text-white">M</span>
                  <span className="text-pinseria-brightgreen">a</span>
                  <span className="text-pinseria-red">r</span>
                  <span className="text-white">k</span>
                  <span className="text-pinseria-brightgreen">e</span>
                  <span className="text-pinseria-red">t</span>
                </a>
              </div>
              <h2 className="text-subtitle font-playfair mb-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Om La Spiseria - Tønsbergs Italienske Hjerte
              </h2>
              
              {/* Vision Section with local SEO */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair mb-4 text-pinseria-red">
                  Vår Visjon for Tønsberg
                </h3>
                <p className="text-body mb-4 font-myriad">
                  La Spiseria ble etablert for å bringe autentisk italiensk kulinarisk tradisjon til Tønsberg. Vi ønsker å være Vestfolds fremste destinasjon for ekte Pinsa Romana og italienske smaker.
                </p>
              </div>

              {/* Mission Section with local keywords */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair mb-4 text-pinseria-brightgreen">
                  Vårt Oppdrag i Lokalmiljøet
                </h3>
                <p className="text-body mb-4 font-myriad">
                  Vi forplikter oss til å servere Tønsberg og Vestfold-regionen med høykvalitets italiensk mat. Vår 72-timers hevedeig og importerte ingredienser fra Italia sikrer en autentisk smaksopplevelse midt på Øvre Langgate.
                </p>
              </div>

              <p className="text-lg font-medium font-playfair">
                <span className="text-pinseria-red">Benvenuti</span> 
                <span className="text-white"> alla Spiseria, Tønsbergs ekte </span>
                <span className="text-pinseria-brightgreen">Pinseria italiana!</span>
              </p>
              
              {/* Additional local SEO content */}
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-white/90 font-myriad">
                  <strong>La Spiseria</strong> - din nærmeste italienske restaurant på Øvre Langgate 42. 
                  Vi serverer autentisk Pinsa Romana med ferske ingredienser til Tønsberg og hele Vestfold-regionen.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[4/5] bg-white rounded-lg overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow">
                {/* Pinsa image with better alt text for SEO */}
                <img 
                  src="/la-spiseria/lovable-uploads/c842be55-0d1d-4988-a0de-9e274c785841.png" 
                  alt="Autentisk italiensk Pinsa Romana fra La Spiseria Tønsberg - ferske ingredienser og tradisjonell 72-timers hevedeig"
                  className="object-cover w-full h-full"
                />
                {/* Italian flag-inspired overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-3 flex">
                  <div className="w-1/3 bg-pinseria-brightgreen"></div>
                  <div className="w-1/3 bg-white"></div>
                  <div className="w-1/3 bg-pinseria-red"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pinseria-red/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-pinseria-brightgreen/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChef;
