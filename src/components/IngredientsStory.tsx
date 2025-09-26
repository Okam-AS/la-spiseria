
import { useLanguage } from "@/context/LanguageContext";

const IngredientsStory = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-pinseria-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-pinseria-red mb-4">
            {t('ingredients.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-myriad">
            {t('ingredients.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Cured Ham */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/la-spiseria/lovable-uploads/e9dfd20e-2ed0-421d-b52a-f6a7d0631eac.png" 
                alt="Italian Cured Ham"
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-xl font-playfair text-pinseria-red mb-3">
              {t('ingredients.ham.title')}
            </h3>
            <p className="text-gray-700 font-myriad">
              {t('ingredients.ham.description')}
            </p>
          </div>

          {/* Mozzarella */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/la-spiseria/lovable-uploads/990fa58b-0981-4d22-8a0c-14c0e0775522.png" 
                alt="Mozzarella Fiordilatte"
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-xl font-playfair text-pinseria-red mb-3">
              {t('ingredients.mozzarella.title')}
            </h3>
            <p className="text-gray-700 font-myriad">
              {t('ingredients.mozzarella.description')}
            </p>
          </div>

          {/* Tomato Sauce */}
          <div className="text-center">
            <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/la-spiseria/lovable-uploads/812a89d5-7cc6-4c3a-9a96-fd6bb2fd7c4e.png" 
                alt="Italian Tomato Sauce"
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-xl font-playfair text-pinseria-red mb-3">
              {t('ingredients.tomato.title')}
            </h3>
            <p className="text-gray-700 font-myriad">
              {t('ingredients.tomato.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsStory;
