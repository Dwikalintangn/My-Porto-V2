"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TechItem {
  name: string;
  category: string;
  accent: string;
  icon: () => React.ReactNode;
}

const techStack: TechItem[] = [
  {
    name: "Next.js",
    category: "Full Stack Framework",
    accent: "#ffffff",
    icon: () => (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 180 180">
        <path d="M90 0C40.29 0 0 40.29 0 90s40.29 90 90 90 90-40.29 90-90S139.71 0 90 0zM57.9 135V45h13.8l50.4 69.3V45H135v90h-13.8L70.8 65.7V135H57.9z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Typed Language",
    accent: "#3178c6",
    icon: () => (
      <svg className="w-6 h-6 fill-[#3178c6]" viewBox="0 0 128 128">
        <path d="M1.5 0h125v128H1.5V0z" fill="#3178c6"/>
        <path d="M68.5 83.2c1.9 3.2 4.6 5.8 8.1 7.7 3.5 1.9 7.7 2.9 12.6 2.9 3.9 0 7.3-.6 10.2-1.9 2.9-1.3 5.2-3.2 6.8-5.6 1.6-2.5 2.4-5.4 2.4-8.8 0-3-.7-5.5-2.1-7.5-1.4-2-3.4-3.7-6-5-2.6-1.3-6.4-2.7-11.4-4.2-6.5-1.9-11.4-3.7-14.8-5.4-3.4-1.7-5.9-4-7.5-6.8-1.6-2.8-2.4-6.4-2.4-10.7 0-4.6 1.2-8.6 3.6-12.1 2.4-3.5 5.8-6.2 10.2-8.1s9.6-2.8 15.6-2.8c6.6 0 12.3 1.3 17.2 3.8 4.9 2.5 8.7 6.3 11.4 11.2l-12.4 8c-1.8-3.3-4.1-5.7-7-7.2-2.9-1.5-6.4-2.3-10.4-2.3-3.6 0-6.6.6-9 1.8-2.4 1.2-4.2 2.8-5.3 4.8-1.1 2-1.7 4.2-1.7 6.6 0 2.6.7 4.7 2.1 6.4 1.4 1.7 3.4 3.1 6 4.3 2.6 1.2 6.7 2.6 12.2 4.3 6.6 2 11.7 4 15.2 6.1s6.1 4.7 7.8 7.7c1.7 3 2.6 7 2.6 12 0 4.9-1.3 9.3-3.9 13.2-2.6 3.9-6.3 6.9-11.1 9-4.8 2.1-10.7 3.2-17.7 3.2-7.5 0-14-1.5-19.5-4.5-5.5-3-9.7-7.6-12.6-13.8l13.6-8.2zM21.7 30h48.3v13.6H47.1v76.8H30.4V43.6H21.7V30z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Express.js",
    category: "Backend API",
    accent: "#ffffff",
    icon: () => (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    ),
  },
  {
    name: "MS SQL Server",
    category: "Enterprise Database",
    accent: "#cc292b",
    icon: () => (
      <svg className="w-6 h-6 fill-[#cc292b]" viewBox="0 0 24 24">
        <path d="M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm0 2c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2zm8 14c0 .7-3.6 2-8 2s-8-1.3-8-2v-2.3c2.1 1.4 5 2.3 8 2.3s5.9-.9 8-2.3V18zm0-4c0 .7-3.6 2-8 2s-8-1.3-8-2v-2.3c2.1 1.4 5 2.3 8 2.3s5.9-.9 8-2.3V14zm0-4c0 .7-3.6 2-8 2s-8-1.3-8-2V7.7c2.1 1.4 5 2.3 8 2.3s5.9-.9 8-2.3V10z"/>
      </svg>
    ),
  },
  {
    name: "Laravel",
    category: "PHP Framework",
    accent: "#ff2d20",
    icon: () => (
      <svg className="w-6 h-6 fill-[#ff2d20]" viewBox="0 0 24 24">
        <path d="M22.5 12l-9.5 5.5v-11z M12 6.5L2.5 12l9.5 5.5z"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    category: "Relational Database",
    accent: "#00758f",
    icon: () => (
      <svg className="w-6 h-6 fill-[#00758f]" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-6h2v6z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Modern Styling",
    accent: "#38bdf8",
    icon: () => (
      <svg className="w-6 h-6 fill-[#38bdf8]" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "UI/UX Prototyping",
    accent: "#a259ff",
    icon: () => (
      <svg className="w-6 h-6 fill-[#a259ff]" viewBox="0 0 24 24">
        <path d="M8 2h4a4 4 0 010 8H8V2zm0 8h4a4 4 0 110 8H8v-8zm0 8h4a4 4 0 11-4 4v-4zm-4-4a4 4 0 118 0H4zm0-8a4 4 0 014-4v8H4V6z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Machine Learning & AI",
    accent: "#3776ab",
    icon: () => (
      <svg className="w-6 h-6 fill-[#3776ab]" viewBox="0 0 24 24">
        <path d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H5.8S2 6.1 2 10.5s3.3 4.2 3.3 4.2h2v-2.9s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.1-2.8-3.4-5.6-3.4zm-2.4 1.3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm2.6 18.7c4.4 0 4.1-1.9 4.1-1.9v-2H12v-.6h6.2s3.8.4 3.8-4-3.3-4.2-3.3-4.2h-2v2.9s.1 3.3-3.3 3.3H7.7s-3.2-.1-3.2 3.1 2.8 3.4 5.6 3.4zm2.4-1.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"/>
      </svg>
    ),
  },
  {
    name: "PHP",
    category: "Backend Language",
    accent: "#777bb4",
    icon: () => (
      <svg className="w-6 h-6 fill-[#777bb4]" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V8h2v2z"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Web Core Language",
    accent: "#f7df1e",
    icon: () => (
      <svg className="w-6 h-6 fill-[#f7df1e]" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm13.7 14.5c1.4 0 2.3-.7 2.3-1.8 0-1.2-.9-1.6-2.2-2.1l-.8-.3c-1.3-.5-1.9-.9-1.9-1.7 0-.8.6-1.4 1.7-1.4 1 0 1.6.4 2 1.2l1.4-.9c-.7-1.3-1.8-1.9-3.4-1.9-2 0-3.3 1.2-3.3 2.9 0 1.3.8 2 2.3 2.5l.8.3c1.4.5 2.1 1 2.1 1.9 0 .9-.8 1.6-2.1 1.6-1.5 0-2.3-.8-2.7-1.7l-1.5.9c.7 1.6 2 2.5 4.6 2.5zm-6.8-.2V8.5H8.2v6.2c0 1.8-.9 2.5-2.3 2.5-.8 0-1.5-.3-1.9-.7l-.7 1.4c.7.6 1.7.9 2.8.9 2.4 0 3.7-1.2 3.7-3.5z"/>
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    category: "CSS Framework",
    accent: "#7952b3",
    icon: () => (
      <svg className="w-6 h-6 fill-[#7952b3]" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H8V7h3c1.7 0 3 1.3 3 3 0 .9-.4 1.7-1.1 2.2.9.4 1.6 1.3 1.6 2.3 0 1.9-1.6 3.5-3.5 3.5zm0-8.5H9.5v2.2H11c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1zm.4 4.5H9.5v2.5h1.9c.7 0 1.3-.6 1.3-1.3-.1-.6-.6-1.2-1.3-1.2z"/>
      </svg>
    ),
  },
];

export default function TechStackMarquee() {
  const { lang } = useLanguage();

  const label = lang === "ID" ? "KEAHLIAN TEKNOLOGI // HARD SKILLS" : "TECHNICAL SKILLS & TOOLKIT";
  const sublabel =
    lang === "ID"
      ? "Teknologi produksi & basis data yang digunakan dalam pengalaman magang industri dan pengembangan sistem"
      : "Production technologies and databases leveraged across industrial DX internships and software engineering";

  // Duplicate items for infinite seamless scroll
  const marqueeItems = [...techStack, ...techStack];
  const marqueeItemsReverse = [...techStack.slice().reverse(), ...techStack.slice().reverse()];

  return (
    <section className="relative py-16 overflow-hidden border-y border-foreground/10 bg-foreground/[0.015]">
      
      {/* Title & Subtle Label */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="text-xs font-mono tracking-widest text-[#c27b47] uppercase font-bold">
          {label}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2">
          Industrial & Full Stack Engineering Stack
        </h3>
        <p className="text-sm text-foreground/60 max-w-lg mx-auto mt-2">
          {sublabel}
        </p>
      </div>

      {/* Marquee Wrapper with Smooth Left/Right Mask */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        
        {/* ROW 1: Forward Scroll */}
        <div className="animate-marquee py-2 flex gap-4 sm:gap-6">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`row1-${tech.name}-${idx}`}
              className="group relative flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-background/80 border border-foreground/10 hover:border-[#c27b47]/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default shrink-0"
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center p-2 bg-foreground/5 group-hover:scale-110 transition-transform duration-300"
              >
                {tech.icon()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground group-hover:text-[#c27b47] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-foreground/50 tracking-wider uppercase">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Reverse Scroll */}
        <div className="animate-marquee-reverse py-2 flex gap-4 sm:gap-6 mt-3">
          {marqueeItemsReverse.map((tech, idx) => (
            <div
              key={`row2-${tech.name}-${idx}`}
              className="group relative flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-background/80 border border-foreground/10 hover:border-[#c27b47]/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default shrink-0"
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center p-2 bg-foreground/5 group-hover:scale-110 transition-transform duration-300"
              >
                {tech.icon()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground group-hover:text-[#c27b47] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-foreground/50 tracking-wider uppercase">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
