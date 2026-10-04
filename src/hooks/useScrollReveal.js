import { useEffect, useState, useCallback } from 'react';

export function useScrollReveal(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0,
    stagger = 0,
    index = 0,
    prefersReducedMotion = false
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useCallback((node) => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    if (node && !hasAnimated) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) {
                setHasAnimated(true);
                observer.disconnect();
              }
            }, delay + index * stagger);
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        },
        { threshold, rootMargin }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, [threshold, rootMargin, triggerOnce, delay, stagger, index, prefersReducedMotion, hasAnimated]);

  return { ref: elementRef, isVisible, hasAnimated };
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}