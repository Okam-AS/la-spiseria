
import { createContext, useState, useContext, ReactNode } from "react";

type Language = 'no' | 'en' | 'it';

interface Translations {
  [key: string]: {
    no: string;
    en: string;
    it: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    no: 'Hjem',
    en: 'Home',
    it: 'Home'
  },
  'nav.about': {
    no: 'Om Oss',
    en: 'About Us',
    it: 'Chi Siamo'
  },
  'nav.pinsa': {
    no: 'Pinsa',
    en: 'Pinsa',
    it: 'Pinsa'
  },
  'nav.contact': {
    no: 'Kontakt',
    en: 'Contact',
    it: 'Contatti'
  },
  'nav.blog': {
    no: 'Blogg',
    en: 'Blog',
    it: 'Blog'
  },
  
  // Hero
  'hero.tagline': {
    no: 'Autentisk Italiensk Pinsa',
    en: 'Authentic Italian Pinsa',
    it: 'Autentica Pinsa Italiana'
  },
  'hero.title': {
    no: 'La Pinseria Italiana, hvor smaker møter tradisjon',
    en: 'La Pinseria Italiana, where flavors meet tradition',
    it: 'La Pinseria Italiana, dove i sapori incontrano la tradizione'
  },
  'hero.subtitle': {
    no: '"La Pinsa" er en nytolkning av en gammel oppskrift fra det antikke Romerriket. Ordet «Pinsa» kommer fra det latinske ordet "Pinsere" som betyr å strekke, å spre. Den tradisjonelle oppskriften har blitt revidert flere ganger gjennom århundrene, frem til i dag.',
    en: '"La Pinsa" is a reinterpretation of an ancient recipe from the Roman Empire. The word "Pinsa" comes from the Latin word "Pinsere" which means to stretch, to spread. The traditional recipe has been revised several times throughout the centuries, up to today.',
    it: '"La Pinsa" è una reinterpretazione di un\'antica ricetta dell\'Impero Romano. La parola "Pinsa" deriva dalla parola latina "Pinsere" che significa allungare, stendere. La ricetta tradizionale è stata rivista più volte nel corso dei secoli, fino ad oggi.'
  },
  'hero.book': {
    no: 'Bestill Bord',
    en: 'Book a Table',
    it: 'Prenota un Tavolo'
  },
  'hero.menu': {
    no: 'Se Meny',
    en: 'See Menu',
    it: 'Vedi Menu'
  },
  'hero.takeaway': {
    no: 'Bestill Takeaway',
    en: 'Order Takeaway',
    it: 'Ordina da Asporto'
  },

  // Ingredients Story
  'ingredients.title': {
    no: 'Kun de Beste Italienske Ingrediensene',
    en: 'Only the Best Italian Ingredients',
    it: 'Solo i Migliori Ingredienti Italiani'
  },
  'ingredients.subtitle': {
    no: 'Vi bruker kun høykvalitets italienske ingredienser for å gi deg den mest autentiske smaken',
    en: 'We use only high-quality Italian ingredients to give you the most authentic taste',
    it: 'Utilizziamo solo ingredienti italiani di alta qualità per offrirti il sapore più autentico'
  },
  'ingredients.ham.title': {
    no: 'Italiensk Spekemat',
    en: 'Italian Cured Ham',
    it: 'Prosciutto Italiano'
  },
  'ingredients.ham.description': {
    no: '100% italiensk spekemat av høyeste kvalitet, importert direkte fra Italia',
    en: '100% Italian cured ham of the highest quality, imported directly from Italy',
    it: '100% prosciutto italiano della massima qualità, importato direttamente dall\'Italia'
  },
  'ingredients.mozzarella.title': {
    no: 'Mozzarella Fiordilatte',
    en: 'Mozzarella Fiordilatte',
    it: 'Mozzarella Fiordilatte'
  },
  'ingredients.mozzarella.description': {
    no: 'Kremete mozzarella fiordilatte laget av fersk italiensk kumelk',
    en: 'Creamy mozzarella fiordilatte made from fresh Italian cow\'s milk',
    it: 'Cremosa mozzarella fiordilatte fatta con latte fresco di mucca italiana'
  },
  'ingredients.tomato.title': {
    no: 'Italiensk Tomatsaus',
    en: 'Italian Tomato Sauce',
    it: 'Salsa di Pomodoro Italiana'
  },
  'ingredients.tomato.description': {
    no: 'Tomatsaus laget 100% i Italia fra italienske tomater av beste kvalitet',
    en: 'Tomato sauce made 100% in Italy from the finest quality Italian tomatoes',
    it: 'Salsa di pomodoro fatta 100% in Italia con pomodori italiani della migliore qualità'
  },
  
  // About section - Italian Food Market
  'about.title': {
    no: 'Om Italian Food Market',
    en: 'About Italian Food Market',
    it: 'Su Italian Food Market'
  },
  'about.vision.title': {
    no: 'VÅR VISJON',
    en: 'OUR VISION',
    it: 'LA NOSTRA VISIONE'
  },
  'about.vision.description': {
    no: 'Alle kan være en god pizzakok, gitt de riktige verktøyene og ingrediensene. Du må være fantasifull, sterk i hjertet. Du må prøve ting som kanskje ikke fungerer, og du må ikke la noen definere dine grenser på grunn av hvor du kommer fra….',
    en: 'Anyone can be a good Pizza Chef, given the right tools & ingredients. You must be imaginative, strong-hearted. You must try things that may not work, and you must not let anyone define your limits because of where you come from….',
    it: 'Chiunque può essere un buon pizzaiolo, con gli strumenti e gli ingredienti giusti. Devi essere fantasioso, coraggioso. Devi provare cose che potrebbero non funzionare, e non devi lasciare che nessuno definisca i tuoi limiti a causa di dove vieni….'
  },
  'about.mission.title': {
    no: 'VÅR MISJON',
    en: 'OUR MISSION',
    it: 'LA NOSTRA MISSIONE'
  },
  'about.mission.description': {
    no: 'Å gi våre kunder de beste produktene, råvarer fra Italia og verktøy som hjelper dem med å lage fantastiske pizzaer og mer.',
    en: 'To provide our Customers with the best products, raw Italian ingredients & tools helping them making wonderful Pizzas & more.',
    it: 'Fornire ai nostri clienti i migliori prodotti, ingredienti italiani crudi e strumenti per aiutarli a fare pizze meravigliose e altro ancora.'
  },
  
  // Contact
  'contact.title': {
    no: 'Besøk La Spiseria',
    en: 'Visit La Spiseria',
    it: 'Visita La Spiseria'
  },
  'contact.subtitle': {
    no: 'Vi ser frem til å ønske deg velkommen til en unik matopplevelse over Big Ben på Torvet.',
    en: 'We look forward to welcoming you to a unique dining experience above Big Ben on Torvet.',
    it: 'Non vediamo l\'ora di accogliervi per un\'esperienza culinaria unica sopra il Big Ben a Torvet.'
  },
  'contact.info': {
    no: 'Kontaktinformasjon',
    en: 'Contact Information',
    it: 'Informazioni di Contatto'
  },
  'contact.address': {
    no: 'Adresse',
    en: 'Address',
    it: 'Indirizzo'
  },
  'contact.hours': {
    no: 'Åpningstider',
    en: 'Opening Hours',
    it: 'Orari di Apertura'
  },
  'contact.mon-fri': {
    no: 'Mandag - Fredag: 16:00 - 22:00',
    en: 'Monday - Friday: 16:00 - 22:00',
    it: 'Lunedì - Venerdì: 16:00 - 22:00'
  },
  'contact.sat-sun': {
    no: 'Lørdag - Søndag: 13:00 - 23:00',
    en: 'Saturday - Sunday: 13:00 - 23:00',
    it: 'Sabato - Domenica: 13:00 - 23:00'
  },
  'contact.reservation': {
    no: 'Reservasjon',
    en: 'Reservation',
    it: 'Prenotazione'
  },
  'contact.phone': {
    no: 'Telefon: 932 06 275',
    en: 'Phone: 932 06 275',
    it: 'Telefono: 932 06 275'
  },
  'contact.email': {
    no: 'E-post: booking@lapinseria.no',
    en: 'Email: booking@lapinseria.no',
    it: 'Email: booking@lapinseria.no'
  },
  'contact.followUs': {
    no: 'Følg oss',
    en: 'Follow us',
    it: 'Seguici'
  },
  'contact.getDirections': {
    no: 'Få veibeskrivelse i Google Maps',
    en: 'Get directions in Google Maps',
    it: 'Ottieni indicazioni su Google Maps'
  },
  
  // Footer
  'footer.about': {
    no: 'Oppdag ekte italiensk pinsa i Tønsberg. Prisvinnende kjøkkensjef og autentiske smaker.',
    en: 'Discover authentic Italian pinsa in Tønsberg. Award-winning chef and authentic flavors.',
    it: 'Scopri l\'autentica pinsa italiana a Tønsberg. Chef premiato e sapori autentici.'
  },
  'footer.menu': {
    no: 'Meny',
    en: 'Menu',
    it: 'Menu'
  },
  'footer.legal': {
    no: 'Juridisk',
    en: 'Legal',
    it: 'Legale'
  },
  'footer.privacy': {
    no: 'Personvern',
    en: 'Privacy',
    it: 'Privacy'
  },
  'footer.terms': {
    no: 'Vilkår',
    en: 'Terms',
    it: 'Termini'
  },
  'footer.cookies': {
    no: 'Cookies',
    en: 'Cookies',
    it: 'Cookies'
  },
  'footer.social': {
    no: 'Sosiale Medier',
    en: 'Social Media',
    it: 'Social Media'
  },
  'footer.rights': {
    no: 'Alle rettigheter reservert.',
    en: 'All rights reserved.',
    it: 'Tutti i diritti riservati.'
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('no');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
