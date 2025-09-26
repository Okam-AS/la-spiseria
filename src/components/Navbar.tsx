
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsScrolled(position > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle hash change and scroll to section
  useEffect(() => {
    // Check if we're on the home page and have a hash
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # character
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small timeout to ensure the DOM is ready
      }
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    // Check if we're already on the home page
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        setIsMenuOpen(false);
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home with the section hash
      setIsMenuOpen(false);
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'shadow-md py-2' 
        : 'py-3'
    } bg-black`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f1e8dfe0-b22e-4b3d-a0ba-4575f5d81425.png" 
                alt="La Spiseria Logo" 
                className="w-auto h-[140px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 ml-6">
            <button 
              onClick={() => scrollToSection('hjem')} 
              className="font-myriad font-medium text-white hover:text-pinseria-red transition-colors"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('om-oss')} 
              className="font-myriad font-medium text-white hover:text-pinseria-red transition-colors"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('pinsa')} 
              className="font-myriad font-medium text-white hover:text-pinseria-red transition-colors"
            >
              {t('nav.pinsa')}
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')} 
              className="font-myriad font-medium text-white hover:text-pinseria-red transition-colors"
            >
              {t('nav.contact')}
            </button>
            <Link to="/blogg" className="font-myriad font-medium text-white hover:text-pinseria-red transition-colors">{t('nav.blog')}</Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center ml-6">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-pinseria-red/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full shadow-lg z-20 bg-black">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('hjem')}
              className="py-2 px-3 text-white hover:bg-white/10 rounded-md transition-colors font-myriad text-left"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('om-oss')}
              className="py-2 px-3 text-white hover:bg-white/10 rounded-md transition-colors font-myriad text-left"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('pinsa')}
              className="py-2 px-3 text-white hover:bg-white/10 rounded-md transition-colors font-myriad text-left"
            >
              {t('nav.pinsa')}
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="py-2 px-3 text-white hover:bg-white/10 rounded-md transition-colors font-myriad text-left"
            >
              {t('nav.contact')}
            </button>
            <Link 
              to="/blogg"
              className="py-2 px-3 text-white hover:bg-white/10 rounded-md transition-colors font-myriad text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
