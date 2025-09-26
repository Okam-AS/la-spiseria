
import { Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const DiscoverPinsa = () => {
  const { language } = useLanguage();
  
  // Complex translations that change based on language
  const translations = {
    title: {
      no: "Oppdag Pinsa",
      en: "Discover Pinsa",
      it: "Scopri la Pinsa"
    },
    description: {
      no: "Lys. Sprø. Usammenlignelig. Original hjemmelaget Pinsa i Tønsberg. Pinsa er en moderne versjon av den tradisjonelle romerske pizzaen.",
      en: "Light. Crispy. Incomparable. Original homemade Pinsa in Tønsberg. Pinsa is a modern version of traditional Roman pizza.",
      it: "Leggera. Croccante. Incomparabile. Pinsa originale fatta in casa a Tønsberg. La Pinsa è una versione moderna della tradizionale pizza romana."
    },
    seeMenu: {
      no: "Se Vår Meny",
      en: "See Our Menu",
      it: "Vedi il Nostro Menu"
    },
    whatMakesSpecial: {
      no: "Hva gjør pinsa så spesielt?",
      en: "What makes pinsa so special?",
      it: "Cosa rende la pinsa così speciale?"
    },
    ingredients: {
      title: {
        no: "Våre Ingredienser",
        en: "Our Ingredients",
        it: "I Nostri Ingredienti"
      },
      description: {
        no: "Vi bruker kun de fineste italienske ingredienser og lokale norske råvarer av høyeste kvalitet.",
        en: "We use only the finest Italian ingredients and local Norwegian produce of the highest quality.",
        it: "Utilizziamo solo i migliori ingredienti italiani e prodotti locali norvegesi della più alta qualità."
      }
    },
    tradition: {
      title: {
        no: "Vår Tradisjon",
        en: "Our Tradition",
        it: "La Nostra Tradizione"
      },
      description: {
        no: "Vi har adoptert den tradisjonelle Pinsa-oppskriften med vår moderne vri.",
        en: "We adopted the Pinsa traditional recipe with our modern twist.",
        it: "Abbiamo adottato la ricetta tradizionale della Pinsa con il nostro tocco moderno."
      }
    },
    passion: {
      title: {
        no: "Vår Passion",
        en: "Our Passion",
        it: "La Nostra Passione"
      },
      description: {
        no: "Hver pinsa er laget med kjærlighet og lidenskap, noe du kan smake i hvert eneste bitt.",
        en: "Every pinsa is made with love and passion, which you can taste in every single bite.",
        it: "Ogni pinsa è fatta con amore e passione, che puoi assaporare in ogni singolo morso."
      }
    }
  };

  const pinsaFeatures = [
    { 
      title: {
        no: "Lys og Luftig",
        en: "Light and Airy",
        it: "Leggera e Ariosa"
      },
      description: {
        no: "Vår pinsa er lys med en høy hydratiseringsgrad som gir et luftig resultat.",
        en: "Our pinsa is light with a high hydration level that gives an airy result.",
        it: "La nostra pinsa è leggera con un alto livello di idratazione che dona un risultato arioso."
      }
    },
    { 
      title: {
        no: "Sprø Skorpe",
        en: "Crispy Crust",
        it: "Crosta Croccante"
      },
      description: {
        no: "Perfekt sprø på utsiden, men likevel myk og delikat på innsiden.",
        en: "Perfectly crispy on the outside, yet soft and delicate on the inside.",
        it: "Perfettamente croccante all'esterno, ma morbida e delicata all'interno."
      }
    },
    { 
      title: {
        no: "Lettfordøyelig",
        en: "Easy to Digest",
        it: "Facile da Digerire"
      },
      description: {
        no: "Takket være lang heving og spesiell melteknikk er pinsa lettere å fordøye enn vanlig pizza.",
        en: "Thanks to long rising and special flour technique, pinsa is easier to digest than regular pizza.",
        it: "Grazie alla lunga lievitazione e alla speciale tecnica di impasto, la pinsa è più facile da digerire rispetto alla pizza normale."
      }
    },
  ];

  return (
    <section 
      id="pinsa" 
      className="py-16 md:py-24 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-pinseria-red/10 rounded-full mb-4">
            <Pizza className="h-6 w-6 text-pinseria-red" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            <span className="text-pinseria-red">{translations.title[language][0]}</span>
            <span className="text-white">{translations.title[language].substring(1, Math.floor(translations.title[language].length/2))}</span>
            <span className="text-pinseria-brightgreen">{translations.title[language].substring(Math.floor(translations.title[language].length/2))}</span>
          </h2>
          <p className="text-lg text-white font-dancing-script">
            {translations.description[language]}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/2] rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/la-spiseria/lovable-uploads/9b20453b-3d00-4ec2-9e5a-98ca13a16f5f.png" 
                alt="Om Italian Food Market Pinsa"
                className="object-cover w-full h-full"
              />
              {/* Italian flag-inspired overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-3 flex">
                <div className="w-1/3 bg-pinseria-brightgreen"></div>
                <div className="w-1/3 bg-white"></div>
                <div className="w-1/3 bg-pinseria-red"></div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold font-dancing-script mb-6">
              <span className="text-pinseria-brightgreen">{translations.whatMakesSpecial[language].substring(0, Math.floor(translations.whatMakesSpecial[language].length/3))}</span>
              <span className="text-white">{translations.whatMakesSpecial[language].substring(Math.floor(translations.whatMakesSpecial[language].length/3), Math.floor(2*translations.whatMakesSpecial[language].length/3))}</span>
              <span className="text-pinseria-red">{translations.whatMakesSpecial[language].substring(Math.floor(2*translations.whatMakesSpecial[language].length/3))}</span>
            </h3>
            <div className="space-y-6">
              {pinsaFeatures.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-pinseria-red/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-pinseria-red"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-dancing-script mb-2">
                      {index % 3 === 0 && <span className="text-pinseria-red">{feature.title[language]}</span>}
                      {index % 3 === 1 && <span className="text-white">{feature.title[language]}</span>}
                      {index % 3 === 2 && <span className="text-pinseria-brightgreen">{feature.title[language]}</span>}
                    </h4>
                    <p className="text-white">{feature.description[language]}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-pinseria-red hover:bg-pinseria-red/90 text-white font-dancing-script text-lg"
                onClick={() => window.open('https://shop.okam.no/store/la-spiseria', '_blank')}
              >
                {translations.seeMenu[language]}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black border border-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-dancing-script mb-4 text-pinseria-red">{translations.ingredients.title[language]}</h4>
            <p className="text-white">{translations.ingredients.description[language]}</p>
          </div>
          
          <div className="bg-black border border-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-dancing-script mb-4 text-white">{translations.tradition.title[language]}</h4>
            <p className="text-white">{translations.tradition.description[language]}</p>
          </div>
          
          <div className="bg-black border border-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-dancing-script mb-4 text-pinseria-brightgreen">{translations.passion.title[language]}</h4>
            <p className="text-white">{translations.passion.description[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverPinsa;
