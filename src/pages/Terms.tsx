
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Terms = () => {
  const { language } = useLanguage();
  
  // Translations for Terms page
  const translations = {
    title: {
      no: "Vilkår og betingelser",
      en: "Terms and Conditions",
      it: "Termini e Condizioni"
    },
    section1: {
      title: {
        no: "1. Generelle vilkår",
        en: "1. General terms",
        it: "1. Termini generali"
      },
      content: {
        no: "Ved å bruke våre tjenester aksepterer du disse vilkårene. Les dem nøye før du bruker nettstedet.",
        en: "By using our services, you accept these terms. Read them carefully before using the website.",
        it: "Utilizzando i nostri servizi, accetti questi termini. Leggili attentamente prima di utilizzare il sito web."
      }
    },
    section2: {
      title: {
        no: "2. Bestilling og levering",
        en: "2. Ordering and delivery",
        it: "2. Ordini e consegna"
      },
      content: {
        no: "Alle bestillinger er bindende. Vi forbeholder oss retten til å avvise bestillinger ved kapasitetsbegrensninger.",
        en: "All orders are binding. We reserve the right to reject orders due to capacity constraints.",
        it: "Tutti gli ordini sono vincolanti. Ci riserviamo il diritto di rifiutare ordini a causa di limitazioni di capacità."
      }
    },
    section3: {
      title: {
        no: "3. Priser og betaling",
        en: "3. Prices and payment",
        it: "3. Prezzi e pagamento"
      },
      content: {
        no: "Alle priser er oppgitt i norske kroner og inkluderer mva. Betaling skjer ved bestilling.",
        en: "All prices are in Norwegian kroner and include VAT. Payment is made upon ordering.",
        it: "Tutti i prezzi sono in corone norvegesi e includono l'IVA. Il pagamento viene effettuato al momento dell'ordine."
      }
    },
    section4: {
      title: {
        no: "4. Angrerett",
        en: "4. Right of withdrawal",
        it: "4. Diritto di recesso"
      },
      content: {
        no: "For matbestillinger gjelder ikke angrerettloven da dette er ferskvarer.",
        en: "For food orders, the right of withdrawal does not apply as these are fresh products.",
        it: "Per gli ordini di cibo, il diritto di recesso non si applica in quanto si tratta di prodotti freschi."
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

            <h2>{translations.section3.title[language]}</h2>
            <p>{translations.section3.content[language]}</p>

            <h2>{translations.section4.title[language]}</h2>
            <p>{translations.section4.content[language]}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
