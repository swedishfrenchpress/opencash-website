'use client'

import { useState, useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  blur?: boolean;
}

export function RevealOnScroll({ children, blur = false }: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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