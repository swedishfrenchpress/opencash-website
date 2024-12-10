'use client'

import React, { useState, useCallback, useRef } from 'react';

type ElementType = React.ElementType;

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  href?: string;
  asProps?: {
    target?: string;
    rel?: string;
    [key: string]: string | undefined;
  };
}

export const ScrambleText = ({ 
  text, 
  className = '', 
  as: Component = 'span',
  href,
  asProps = {}
}: ScrambleTextProps) => {
  const [scrambledText, setScrambledText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleText = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    return text
      .split('')
      .map(char => {
        if (char === ' ') return ' ';
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join('');
  }, [text]);

  const handleMouseEnter = useCallback(() => {
    let iterations = 0;
    
    intervalRef.current = setInterval(() => {
      setScrambledText(prev => {
        const newText = prev
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) {
              return text[index];
            }
            return scrambleText()[index];
          })
          .join('');
        
        iterations += 1/3;
        
        if (iterations >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
        
        return newText;
      });
    }, 30);
  }, [scrambleText, text]);

  const handleMouseLeave = useCallback(() => {
    setScrambledText(text);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [text]);

  if (Component === 'a') {
    return (
      <a 
        href={href} 
        {...asProps} 
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {scrambledText}
      </a>
    );
  }

  return (
    <Component 
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {scrambledText}
    </Component>
  );
}; 