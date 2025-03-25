import { useEffect, useState, useRef } from 'react';

// Custom hook for scroll-based animations and visibility tracking
const useIntersectionObserver = (options = {}) => {
  // Reference to the target element
  const elementRef = useRef(null);
  // Track if element is in viewport
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create observer instance
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    // Start observing when element is available
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return { elementRef, isVisible };
};

export default useIntersectionObserver;
