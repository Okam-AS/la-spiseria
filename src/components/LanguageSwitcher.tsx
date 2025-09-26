
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <div className="md:flex items-center gap-2 hidden">
        <Globe className="h-4 w-4 text-gray-600" />
        <ToggleGroup type="single" value={language} onValueChange={(value) => value && setLanguage(value as 'no' | 'en' | 'it')}>
          <ToggleGroupItem value="no" aria-label="Norwegian">NO</ToggleGroupItem>
          <ToggleGroupItem value="en" aria-label="English">EN</ToggleGroupItem>
          <ToggleGroupItem value="it" aria-label="Italian">IT</ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      {/* Mobile button */}
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-0 h-8 w-8 rounded-full"
          onClick={() => {
            const languages: Array<'no' | 'en' | 'it'> = ['no', 'en', 'it'];
            const currentIndex = languages.indexOf(language);
            const nextIndex = (currentIndex + 1) % languages.length;
            setLanguage(languages[nextIndex]);
          }}
        >
          <Globe className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
