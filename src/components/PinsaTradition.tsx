import { useLanguage } from "@/context/LanguageContext";

const PinsaTradition = () => {
  const { language } = useLanguage();
  
  // Enhanced translations with local SEO keywords
  const translations = {
    title: {
      no: "Pinsa Romana Tradisjon i Tønsberg",
      en: "Pinsa Romana Tradition in Tønsberg",
      it: "Tradizione Pinsa Romana a Tønsberg"
    },
    subtitle: {
      no: "...noe mer enn vanlig pizza",
      en: "...something more than regular pizza",
      it: "...qualcosa di più della pizza normale"
    },
    description: {
      no: "La Spiseria bringer autentisk Pinsa Romana til Tønsberg. Et mesterverk av Lazios gastronomiske tradisjon: en myk smule innesluttet i et knasende skall. Vår deig følger en håndverksprosess med over 72 timers heving, som sikrer et lett fordøyelig og lett produkt - nå tilgjengelig på Øvre Langgate i Tønsberg.",
      en: "La Spiseria brings authentic Pinsa Romana to Tønsberg. A masterpiece of Lazio's gastronomic tradition: a soft crumb enclosed in a crunchy shell. Our dough follows an artisanal process with over 72 hours of rising, ensuring an easily digestible and light product - now available on Øvre Langgate in Tønsberg.",
      it: "La Spiseria porta l'autentica Pinsa Romana a Tønsberg. Un capolavoro della tradizione gastronomica laziale: una morbida mollica racchiusa in un guscio croccante. Il nostro impasto segue un processo artigianale con oltre 72 ore di lievitazione, assicurando un prodotto facilmente digeribile e leggero - ora disponibile su Øvre Langgate a Tønsberg."
    },
    digestible: {
      label: {
        no: "Fordøyelig",
        en: "Digestible",
        it: "Digeribile"
      },
      text: {
        no: "Lang hevedeig med en liten mengde gjær - perfekt for sensitive mager",
        en: "Long rising dough with a small amount of yeast - perfect for sensitive stomachs",
        it: "Impasto a lunga lievitazione con una piccola quantità di lievito - perfetto per stomaci sensibili"
      }
    },
    light: {
      label: {
        no: "Lett",
        en: "Light",
        it: "Leggero"
      },
      text: {
        no: "Høy hydrering med kaldt vann, mindre fett og færre kalorier enn tradisjonell pizza",
        en: "High hydration with cold water, less fat and fewer calories than traditional pizza",
        it: "Alta idratazione con acqua fredda, meno grassi e meno calorie della pizza tradizionale"
      }
    },
    healthy: {
      label: {
        no: "Sunt",
        en: "Healthy",
        it: "Sano"
      },
      text: {
        no: "Høy kvalitet, ferske og sesongbaserte råvarer importert direkte fra Italia",
        en: "High quality, fresh and seasonal ingredients imported directly from Italy",
        it: "Ingredienti di alta qualità, freschi e stagionali importati direttamente dall'Italia"
      }
    },
    verified: {
      label: {
        no: "Verifisert",
        en: "Verified",
        it: "Verificato"
      },
      text: {
        no: "Blanding av utvalgt mel (hvete, ris og soya INGEN GMO) og en skvett EVO-olje fra Italia",
        en: "Blend of selected flours (wheat, rice and soy NO GMO) and a splash of EVO oil from Italy",
        it: "Miscela di farine selezionate (frumento, riso e soia NO OGM) e un goccio di olio EVO dall'Italia"
      }
    },
    versatile: {
      label: {
        no: "Allsidig",
        en: "Versatile",
        it: "Versatile"
      },
      text: {
        no: "Uendelige kombinasjoner for å tilfredsstille enhver smak - tilgjengelig på La Spiseria Tønsberg",
        en: "Endless combinations to satisfy any taste - available at La Spiseria Tønsberg",
        it: "Infinite combinazioni per soddisfare ogni gusto - disponibili a La Spiseria Tønsberg"
      }
    },
    warning: {
      no: "Advarsel! Pinsa fra La Spiseria kan være avhengighetsskapende!",
      en: "Warning! Pinsa from La Spiseria can be addictive!",
      it: "Attenzione! La Pinsa di La Spiseria può creare dipendenza!"
    }
  };

  const features = [
    {
      label: translations.digestible.label[language],
      text: translations.digestible.text[language],
      icon: "🍃"
    },
    {
      label: translations.light.label[language],
      text: translations.light.text[language],
      icon: "💧"
    },
    {
      label: translations.healthy.label[language],
      text: translations.healthy.text[language],
      icon: "🌱"
    },
    {
      label: translations.verified.label[language],
      text: translations.verified.text[language],
      icon: "✓"
    },
    {
      label: translations.versatile.label[language],
      text: translations.versatile.text[language],
      icon: "🎨"
    }
  ];

  return (
    <section className="section-cream relative overflow-hidden" id="tradition">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-subtitle font-dancing-script mb-2">
            <span className="text-pinseria-red">{translations.title[language].substring(0, 6)}</span>
            <span className="text-white">{translations.title[language].substring(6, 12)}</span>
            <span className="text-pinseria-brightgreen">{translations.title[language].substring(12, 18)}</span>
            <span className="text-pinseria-red">{translations.title[language].substring(18, 24)}</span>
            <span className="text-white">{translations.title[language].substring(24)}</span>
          </h2>
          <p className="text-pinseria-red italic font-dancing-script text-xl mb-6">{translations.subtitle[language]}</p>
          <p className="text-body font-montserrat">
            {translations.description[language]}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="card-base group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-2xl group-hover:scale-110 transition-transform">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-dancing-script mb-2">
                    {index % 3 === 0 && <span className="text-pinseria-red">+ {feature.label}</span>}
                    {index % 3 === 1 && <span className="text-white">+ {feature.label}</span>}
                    {index % 3 === 2 && <span className="text-pinseria-brightgreen">+ {feature.label}</span>}
                  </h3>
                  <p className="text-white">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-pinseria-red text-lg font-dancing-script italic">
            {translations.warning[language]}
          </p>
          
          {/* Additional local SEO content */}
          <div className="mt-6 p-4 bg-black/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-white">
              <strong>Kom og opplev forskjellen på La Spiseria!</strong> Vi er stolte av å tilby Tønsbergs mest autentiske italienske Pinsa Romana på Øvre Langgate 42. Hver Pinsa lages med kjærlighet og tradisjonell italiensk håndverk.
            </p>
          </div>
          
          {/* Italian flag-inspired decoration */}
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-pinseria-brightgreen mx-1"></div>
            <div className="w-16 h-1 bg-white mx-1"></div>
            <div className="w-16 h-1 bg-pinseria-red mx-1"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements with better alt text */}
      <div className="absolute top-0 left-0 opacity-5 -z-10">
        <img 
          src="/la-spiseria/lovable-uploads/3b9e8b6d-d4a3-413c-b17b-acdfc8925d7b.png" 
          alt="Italienske ingredienser - La Spiseria Tønsberg" 
          className="w-48"
        />
      </div>
      <div className="absolute bottom-0 right-0 opacity-5 -z-10">
        <img 
          src="/la-spiseria/lovable-uploads/ad7f6b83-067f-42aa-a0b7-b9bd0e7703b0.png" 
          alt="Fersk Pinsa Romana - La Spiseria tradisjon" 
          className="w-48"
        />
      </div>
    </section>
  );
};

export default PinsaTradition;
