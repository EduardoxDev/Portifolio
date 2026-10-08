"use client";

import { motion } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Adapted from React Bits "Animated Content": a quiet fade-and-rise once the block enters the viewport. */
export function AnimatedContent({ children, className, delay = 0 }: AnimatedContentProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
