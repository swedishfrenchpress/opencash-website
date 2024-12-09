'use client'

import { useState, useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  blur?: boolean;
}

export function RevealOnScroll({ children, blur = false }: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mark component as loaded after mount
    setIsLoaded(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation if the page is loaded
        if (isLoaded && entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isLoaded]);

  const baseClasses = "transition-all duration-1000";
  const visibilityClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";
  const blurClasses = blur && !isVisible ? "blur-sm" : "blur-0";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${visibilityClasses} ${blurClasses}`}
    >
      {children}
    </div>
  );
} 