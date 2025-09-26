
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="text-white relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="font-playfair text-2xl font-bold text-white italic">La Spiseria</span>
            </Link>
            <p className="mt-4 max-w-xs text-gray-200 font-myriad">
              {t('footer.about')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 font-playfair text-white">{t('footer.menu')}</h3>
              <ul className="space-y-2">
                <li><Link to="/#pinsa" className="text-white hover:text-pinseria-red transition-colors font-myriad">{t('nav.pinsa')}</Link></li>
                <li><Link to="/#om-oss" className="text-white hover:text-pinseria-red transition-colors font-myriad">{t('nav.about')}</Link></li>
                <li><Link to="/blogg" className="text-white hover:text-pinseria-red transition-colors font-myriad">{t('nav.blog')}</Link></li>
                <li><Link to="/#kontakt" className="text-white hover:text-pinseria-red transition-colors font-myriad">{t('nav.contact')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 font-playfair text-white">{t('footer.legal')}</h3>
              <ul className="space-y-2">
                <li><Link to="/personvern" className="text-white hover:text-pinseria-red transition-colors font-myriad">{t('footer.privacy')}</Link></li>
                <li><Link to="/vilkar" className="text-white hover:text-pinseria-red transition-colors font-myriad">{t('footer.terms')}</Link></li>
                <li><Link to="/cookies" className="text-white hover:text-pinseria-red transition-colors font-myriad">{t('footer.cookies')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 font-playfair text-white">{t('footer.social')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-pinseria-red transition-colors font-myriad">Facebook</a></li>
                <li><a href="#" className="text-white hover:text-pinseria-red transition-colors font-myriad">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-white text-sm text-center font-myriad">
            &copy; {new Date().getFullYear()} La Spiseria Tønsberg. {t('footer.rights')}
          </p>
          <p className="text-gray-400 text-xs text-center mt-2 font-myriad">
            Nettside utviklet av <a href="https://griv.no" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GRIV</a>
          </p>
        </div>
      </div>

      {/* Decorative images with adjusted opacity for better visibility against black background */}
      <img 
        src="https://lapinseria.at/wp-content/uploads/2024/10/draw-pinsa.png"
        alt=""
        className="block absolute right-0 top-12 w-48 opacity-10 -z-0 scale-x-[-1]"
      />
      <img 
        src="https://lapinseria.at/wp-content/uploads/2024/10/tiramisu-2.png"
        alt=""
        className="block absolute left-0 bottom-12 w-48 opacity-10 -z-0"
      />
    </footer>
  );
};

export default Footer;
