'use client'

import { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  blur?: boolean;
}

export const RevealOnScroll = ({ children, blur = false }: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only reveal if it hasn't been revealed before
        if (entry.isIntersecting && !hasRevealed) {
          setIsVisible(true);
          setHasRevealed(true);
          // Optionally unobserve after first reveal
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
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
  }, [hasRevealed]);

  const revealClasses = blur
    ? `transform transition-all duration-1000 ease-out
       ${isVisible ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-sm translate-y-8'}`
    : `transform transition-all duration-1000 ease-out
       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <div ref={ref} className={revealClasses}>
      {children}
    </div>
  );
};