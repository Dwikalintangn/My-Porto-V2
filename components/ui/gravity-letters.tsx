"use client";

import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface GravityLettersProps {
  text: string;
  className?: string;
  letterClassName?: string;
}

export const GravityLetters = ({
  text,
  className = "",
  letterClassName = "",
}: GravityLettersProps) => {
  // Split by words first so individual words NEVER break in the middle
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.3em] gap-y-1 ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <GravityLetter
              key={`${char}-${wordIndex}-${charIndex}`}
              char={char}
              index={charIndex}
              className={letterClassName}
            />
          ))}
        </span>
      ))}
    </span>
  );
};

const GravityLetter = ({
  char,
  className,
}: {
  char: string;
  index: number;
  className: string;
}) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  const triggerGravity = async () => {
    if (isHovered) return;
    setIsHovered(true);

    // Random slight rotation & drop distance for natural physics
    const randomRotate = (Math.random() - 0.5) * 45;
    const dropDistance = 25 + Math.random() * 20;

    // Drop down with gravity
    await controls.start({
      y: dropDistance,
      rotate: randomRotate,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 12,
      },
    });

    // Spring bounce back to baseline
    await controls.start({
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 15,
      },
    });

    setIsHovered(false);
  };

  return (
    <motion.span
      animate={controls}
      onMouseEnter={triggerGravity}
      onClick={triggerGravity}
      className={`inline-block cursor-pointer select-none origin-bottom will-change-transform ${className}`}
    >
      {char}
    </motion.span>
  );
};

export default GravityLetters;
