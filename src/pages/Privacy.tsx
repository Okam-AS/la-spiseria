
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Privacy = () => {
  const { language } = useLanguage();
  
  // Translations for Privacy page
  const translations = {
    title: {
      no: "Personvernerklæring",
      en: "Privacy Policy",
      it: "Politica sulla Privacy"
    },
    section1: {
      title: {
        no: "1. Informasjon om innsamling av personopplysninger",
        en: "1. Information about collection of personal data",
        it: "1. Informazioni sulla raccolta dei dati personali"
      },
      content: {
        no: "Vi tar ditt personvern på alvor og samler kun inn de opplysningene som er nødvendige for å gi deg best mulig service.",
        en: "We take your privacy seriously and only collect the information necessary to provide you with the best possible service.",
        it: "Prendiamo sul serio la tua privacy e raccogliamo solo le informazioni necessarie per fornirti il miglior servizio possibile."
      }
    },
    section2: {
      title: {
        no: "2. Hvilke opplysninger vi samler inn",
        en: "2. What information we collect",
        it: "2. Quali informazioni raccogliamo"
      },
      content: {
        no: "Vi samler inn følgende kategorier av personopplysninger:",
        en: "We collect the following categories of personal information:",
        it: "Raccogliamo le seguenti categorie di informazioni personali:"
      },
      items: {
        item1: {
          no: "Kontaktinformasjon (navn, e-post, telefonnummer)",
          en: "Contact information (name, email, phone number)",
          it: "Informazioni di contatto (nome, email, numero di telefono)"
        },
        item2: {
          no: "Bestillingshistorikk",
          en: "Order history",
          it: "Cronologia degli ordini"
        },
        item3: {
          no: "Informasjon om bruk av nettsiden",
          en: "Information about website usage",
          it: "Informazioni sull'utilizzo del sito web"
        }
      }
    },
    section3: {
      title: {
        no: "3. Hvordan vi bruker opplysningene",
        en: "3. How we use the information",
        it: "3. Come utilizziamo le informazioni"
      },
      content: {
        no: "Dine personopplysninger brukes til å:",
        en: "Your personal information is used to:",
        it: "Le tue informazioni personali vengono utilizzate per:"
      },
      items: {
        item1: {
          no: "Behandle bestillinger og leveranser",
          en: "Process orders and deliveries",
          it: "Elaborare ordini e consegne"
        },
        item2: {
          no: "Gi kundeservice",
          en: "Provide customer service",
          it: "Fornire assistenza clienti"
        },
        item3: {
          no: "Sende relevant informasjon om våre produkter og tjenester",
          en: "Send relevant information about our products and services",
          it: "Inviare informazioni pertinenti sui nostri prodotti e servizi"
        }
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
            <p>{translations.section1.content[language]}</p>

            <h2>{translations.section2.title[language]}</h2>
            <p>{translations.section2.content[language]}</p>
            <ul>
              <li>{translations.section2.items.item1[language]}</li>
              <li>{translations.section2.items.item2[language]}</li>
              <li>{translations.section2.items.item3[language]}</li>
            </ul>

            <h2>{translations.section3.title[language]}</h2>
            <p>{translations.section3.content[language]}</p>
            <ul>
              <li>{translations.section3.items.item1[language]}</li>
              <li>{translations.section3.items.item2[language]}</li>
              <li>{translations.section3.items.item3[language]}</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
