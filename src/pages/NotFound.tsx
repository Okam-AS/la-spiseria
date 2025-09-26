
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const translations = {
    title: {
      no: "404",
      en: "404",
      it: "404"
    },
    message: {
      no: "Oops! Siden ble ikke funnet",
      en: "Oops! Page not found",
      it: "Oops! Pagina non trovata"
    },
    returnHome: {
      no: "Tilbake til forsiden",
      en: "Return to Home",
      it: "Ritorna alla Home"
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{translations.title[language]}</h1>
        <p className="text-xl text-gray-600 mb-4">{translations.message[language]}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {translations.returnHome[language]}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
