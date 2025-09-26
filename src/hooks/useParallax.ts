
import { useState, useEffect } from 'react';

interface ParallaxOptions {
  speed?: number;
  reverse?: boolean;
}

export function useParallax({ speed = 0.3, reverse = false }: ParallaxOptions = {}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const newOffset = reverse ? scrollPosition * speed : -scrollPosition * speed;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set the position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, reverse]);

  return offset;
}
