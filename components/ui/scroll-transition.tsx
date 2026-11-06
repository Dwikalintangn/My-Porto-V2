"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * ScrollSection: Bungkus setiap section dengan efek transisi scroll halus
 * Saat section masuk ke viewport, ia bertransisi naik, memudar masuk dari blur halus
 */
export const ScrollSection = ({
  children,
  className = "",
  delay = 0,
}: ScrollSectionProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`relative w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollProgressBar (Aceternity Style):
 * Indikator progres scroll tipis bercahaya di paling atas layar
 */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-linear-to-r from-[#c27b47] via-amber-400 to-[#c27b47] origin-left z-50 shadow-[0_0_12px_rgba(194,123,71,0.8)] pointer-events-none"
    />
  );
};

export default ScrollSection;

