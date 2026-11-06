"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpeedingTextProps {
  words: string[];
  interval?: number;
  className?: string;
  wordClassName?: string;
}

export const SpeedingText = ({
  words,
  interval = 3000,
  className = "",
  wordClassName = "",
}: SpeedingTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={`inline-flex items-center overflow-hidden relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{
            opacity: 0,
            x: 50,
            filter: "blur(10px)",
            scaleX: 1.25,
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            scaleX: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 24,
            },
          }}
          exit={{
            opacity: 0,
            x: -50,
            filter: "blur(12px)",
            scaleX: 1.35,
            transition: {
              duration: 0.22,
              ease: "easeInOut",
            },
          }}
          className={`inline-block whitespace-nowrap will-change-transform ${wordClassName}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default SpeedingText;

