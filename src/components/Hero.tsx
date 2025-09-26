
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useParallax } from "@/hooks/useParallax";
import { useEffect, useState } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const backgroundOffset = useParallax({ speed: 0.15 });
  const foregroundOffset = useParallax({ speed: 0.3, reverse: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hjem" 
      className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden flex items-center justify-center" 
      style={{
        height: 'calc(100vh - 80px)',
        minHeight: '500px',
        backgroundImage: 'url("/la-spiseria/lovable-uploads/2e06ac55-0504-4041-bd34-c9e8213bca18.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Semi-transparent overlay to ensure text readability */}
      <div 
        className="absolute inset-0 bg-black/50 z-0" 
        style={{ transform: `translateY(${backgroundOffset}px)` }} 
      />
      
      <div 
        className="container mx-auto px-4 relative z-10 flex items-center justify-center py-8 md:py-12" 
        style={{ transform: `translateY(${foregroundOffset}px)` }}
      >
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-pinseria-red/20 text-white rounded-full text-sm font-medium font-myriad">
              {t('hero.tagline')}
            </span>
          </div>
          <h1 className="text-headline font-playfair text-white mb-6 text-4xl md:text-5xl lg:text-6xl">
            La Spiseria - {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white mb-4 max-w-2xl mx-auto font-myriad">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://shop.okam.no/store/la-spiseria" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-pinseria-red hover:bg-pinseria-red/90 text-white font-myriad font-medium h-12 px-6 rounded-md transition-colors" 
              aria-label="Bestill autentisk italiensk pinsa fra La Spiseria Tønsberg"
            >
              Bestill her
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
