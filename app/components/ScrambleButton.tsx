'use client'

import { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
}

export function ScrambleText({ text, className = '', as = 'button', href }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setDisplayText(prev => {
        const scrambled = prev
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');

        if (iterations >= text.length) {
          clearInterval(interval);
        }

        return scrambled;
      });

      iterations += 1;
    }, 50);

    return () => clearInterval(interval);
  }, [isHovering, text]);

  const props = {
    className,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
    href,
  };

  return as === 'button' 
    ? <button {...props}>{displayText}</button>
    : <a {...props}>{displayText}</a>;
} 