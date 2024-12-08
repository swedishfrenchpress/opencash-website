'use client'

import { motion } from "framer-motion";

export const RevealOnScroll = ({ children, blur = false }: { children: React.ReactNode, blur?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: blur ? "blur(20px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        filter: { duration: 1.0 } // Longer duration for blur effect
      }}
    >
      {children}
    </motion.div>
  );
}; 