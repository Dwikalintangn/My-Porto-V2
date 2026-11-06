"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ThreeDTextRevealProps {
  items: string[];
  className?: string;
  itemClassName?: string;
}

export const ThreeDTextReveal = ({
  items = [
    "FULL STACK ARCHITECTURE",
    "TACTILE USER EXPERIENCES",
    "MODERN NEXT.JS ECOSYSTEM",
    "ZERO-BOTTLENECK SYSTEMS",
  ],
  className = "",
  itemClassName = "",
}: ThreeDTextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across a generous viewport range
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out scroll with a responsive spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const total = items.length;
  // Calculate angle between each facet
  const angleStep = 360 / total;
  // Cylinder radius in pixels - generous for grand 3D perspective
  const radius = 180;

  // Rotation through full cycle as user scrolls
  const rotation = useTransform(smoothProgress, [0, 1], [-120, 120]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[440px] flex items-center justify-center overflow-hidden my-6 select-none ${className}`}
      style={{
        perspective: "1200px",
        // Smooth top/bottom fade mask so words emerge and dissolve organically without harsh borders
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 28%, black 72%, transparent 100%)",
      }}
    >
      {/* 3D Rotating Cylinder Wheel */}
      <motion.div
        style={{
          rotateX: rotation,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-24 flex items-center justify-center"
      >
        {items.map((item, index) => {
          const angle = index * angleStep;
          return (
            <div
              key={index}
              style={{
                transform: `rotateX(${angle}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              className={`absolute inset-0 flex items-center justify-center px-4 ${itemClassName}`}
            >
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-center uppercase font-mono drop-shadow-sm bg-linear-to-r from-foreground/80 via-[#c27b47] to-foreground/80 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                {item}
              </span>
            </div>
          );
        })}
      </motion.div>

      {/* Subtle Ambient Backlight Glow behind the cylinder */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-32 bg-[#c27b47]/10 rounded-full blur-[80px]" />
      </div>
    </div>
  );
};

export default ThreeDTextReveal;
