import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToSection = useCallback((id: string, callback?: () => void) => {
    const isHash = id.startsWith('#');
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Only push hash if it's a hash-based navigation (starts with #)
      if (isHash) {
        window.history.pushState(null, '', `#${targetId}`);
        window.dispatchEvent(new Event('hashchange'));
      }
    }
    if (callback) callback();
  }, []);

  return scrollToSection;
};
