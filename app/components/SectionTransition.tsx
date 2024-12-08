'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionTransitionProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function SectionTransition({ 
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: SectionTransitionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const animations = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[direction]}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut",
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}