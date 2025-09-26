
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiscoverPinsa from "@/components/DiscoverPinsa";
import IngredientsStory from "@/components/IngredientsStory";
import AboutChef from "@/components/AboutChef";
import PinsaTradition from "@/components/PinsaTradition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash navigation when component mounts
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <DiscoverPinsa />
        <IngredientsStory />
        <AboutChef />
        <PinsaTradition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
