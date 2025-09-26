
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Cookies = () => {
  const { language } = useLanguage();
  
  // Translations for Cookies page
  const translations = {
    title: {
      no: "Informasjonskapsler (cookies)",
      en: "Cookies",
      it: "Cookie"
    },
    section1: {
      title: {
        no: "Hva er informasjonskapsler?",
        en: "What are cookies?",
        it: "Cosa sono i cookie?"
      },
      content: {
        no: "Informasjonskapsler (cookies) er små tekstfiler som plasseres på din enhet når du besøker nettsiden vår. De hjelper oss å gi deg en bedre brukeropplevelse.",
        en: "Cookies are small text files that are placed on your device when you visit our website. They help us give you a better user experience.",
        it: "I cookie sono piccoli file di testo che vengono posizionati sul tuo dispositivo quando visiti il nostro sito web. Ci aiutano a darti una migliore esperienza utente."
      }
    },
    section2: {
      title: {
        no: "Hvilke cookies bruker vi?",
        en: "What cookies do we use?",
        it: "Quali cookie utilizziamo?"
      },
      items: {
        item1: {
          no: "Nødvendige cookies for nettsidens funksjonalitet",
          en: "Necessary cookies for website functionality",
          it: "Cookie necessari per la funzionalità del sito web"
        },
        item2: {
          no: "Analysecookies for å forstå hvordan nettsiden brukes",
          en: "Analytics cookies to understand how the website is used",
          it: "Cookie di analisi per comprendere come viene utilizzato il sito web"
        },
        item3: {
          no: "Funksjonelle cookies for å huske dine preferanser",
          en: "Functional cookies to remember your preferences",
          it: "Cookie funzionali per ricordare le tue preferenze"
        }
      }
    },
    section3: {
      title: {
        no: "Dine valg",
        en: "Your choices",
        it: "Le tue scelte"
      },
      content: {
        no: "Du kan når som helst endre dine cookie-innstillinger i nettleseren din. Vær oppmerksom på at deaktivering av enkelte cookies kan påvirke funksjonaliteten på nettsiden.",
        en: "You can change your cookie settings in your browser at any time. Please note that deactivating certain cookies may affect the functionality of the website.",
        it: "Puoi modificare le impostazioni dei cookie nel tuo browser in qualsiasi momento. Tieni presente che la disattivazione di determinati cookie potrebbe influire sulla funzionalità del sito web."
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-pinseria-cream/20 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 font-playfair">{translations.title[language]}</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>{translations.section1.title[language]}</h2>
            <p>
              {translations.section1.content[language]}
            </p>

            <h2>{translations.section2.title[language]}</h2>
            <ul>
              <li>{translations.section2.items.item1[language]}</li>
              <li>{translations.section2.items.item2[language]}</li>
              <li>{translations.section2.items.item3[language]}</li>
            </ul>

            <h2>{translations.section3.title[language]}</h2>
            <p>
              {translations.section3.content[language]}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
