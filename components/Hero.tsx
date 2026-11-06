"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, Sparkles, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Spotlight } from "@/components/ui/Spotlight";
import { GravityLetters } from "@/components/ui/gravity-letters";
import { SpeedingText } from "@/components/ui/speeding-text";

export default function Hero() {
  const { lang } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  // Mouse Parallax Physics (React Bits Style)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid reaction
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transformations for depth
  const textX = useTransform(smoothX, [-0.5, 0.5], [15, -15]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const photoX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const photoY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);
  const photoRotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const photoRotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Content Dictionary (Bilingual ID / EN)
  const content = {
    ID: {
      statusBadge: "Available for new opportunities",
      dateLabel: "PORTFOLIO // 2026",
      location: "Bekasi, Indonesia • Remote / Onsite",
      headlineBg: "ENGINEER.",
      name: "DWIKA LINTANG NUGRAHA",
      title: "INFORMATICS ENGINEERING",
      subtitle:
        "Lulusan Teknik Informatika Institut Teknologi PLN (IPK 3.78) berfokus pada Full Stack Web Development & Digital Transformation menggunakan Next.js, TypeScript, Express.js, Laravel, dan SQL.",
      btnProjects: "Lihat Projects",
      btnContact: "Hubungi Saya",
      specTag: "FULL STACK WEB",
      focusTag: "DIGITAL TRANSFORMATION",
    },
    EN: {
      statusBadge: "Available for new opportunities",
      dateLabel: "PORTFOLIO // 2026",
      location: "Bekasi, Indonesia • Remote / Onsite",
      headlineBg: "ENGINEER.",
      name: "DWIKA LINTANG NUGRAHA",
      title: "INFORMATICS ENGINEERING",
      subtitle:
        "Informatics Engineering graduate from Institut Teknologi PLN (GPA 3.78) specializing in Full Stack Web Development & Digital Transformation with Next.js, TypeScript, Express.js, Laravel, and SQL.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      specTag: "FULL STACK WEB",
      focusTag: "DIGITAL TRANSFORMATION",
    },
  }[lang];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden px-6 lg:px-12 py-10 select-none"
    >
      {/* 1. ACETERNITY SPOTLIGHT (Ambient stage lighting) */}
      <Spotlight
        className="-top-40 left-0 md:left-48 md:-top-20"
        fill="#c27b47"
      />
      <Spotlight
        className="top-20 right-0 md:-right-20 opacity-30"
        fill="#3b82f6"
      />

      {/* Subtle Background Grid with Radial Fade */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* 2. TOP EDITORIAL BAR */}
      <div className="relative z-30 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-foreground/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-foreground/70 uppercase">
            {content.statusBadge}
          </span>
        </div>

        {/* Location & Work Availability Info */}
        <div className="flex items-center gap-2 text-xs text-foreground/70 font-mono tracking-wide">
          <MapPin className="w-3.5 h-3.5 text-[#c27b47]" />
          <span>{content.location}</span>
        </div>

        <div className="hidden md:block text-xs font-mono text-foreground/50 tracking-wider">
          {content.dateLabel}
        </div>
      </div>

      {/* 3. MAIN STAGE (Centerpiece with Layered Cutout & Big Typography) */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto flex items-center justify-center py-6 lg:py-12">
        
        {/* LAYER BELAKANG: GIANT EDITORIAL TYPOGRAPHY */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        >
          <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] font-black tracking-tighter leading-none text-[#c27b47] opacity-85 dark:opacity-80 drop-shadow-sm select-none">
            {content.headlineBg}
          </h1>
        </motion.div>

        {/* LAYER DEPAN: CUTOUT PORTRAIT PHOTO (Overlapping text with 3D Tilt) */}
        <motion.div
          style={{
            x: photoX,
            y: photoY,
            rotateX: photoRotateX,
            rotateY: photoRotateY,
            transformPerspective: 1000,
          }}
          className="relative z-20 w-72 h-[420px] sm:w-80 sm:h-[480px] lg:w-96 lg:h-[550px] flex items-end justify-center"
        >
          {/* Subtle Ambient Backlight Glow under Subject */}
          <div className="absolute inset-0 rounded-full bg-linear-to-t from-[#c27b47]/20 via-transparent to-transparent blur-2xl pointer-events-none" />

          {!imageError ? (
            <div className="relative w-full h-full">
              <Image
                src="/profile.png"
                alt="Dwika Lintang Nugraha"
                fill
                priority
                sizes="(max-width: 768px) 300px, 450px"
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] transition-all duration-300"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            // Placeholder interaktif jika profile.png belum dimasukkan ke public/
            <div className="w-full h-full border-2 border-dashed border-[#c27b47]/40 rounded-3xl bg-foreground/5 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#c27b47]/10 flex items-center justify-center text-[#c27b47] mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Letakkan Foto Transparan
              </p>
              <p className="text-xs text-foreground/60 font-mono">
                public/profile.png
              </p>
              <span className="mt-4 text-[11px] px-3 py-1 rounded-full bg-[#c27b47]/15 text-[#c27b47] font-mono">
                Layer Auto Depth Active
              </span>
            </div>
          )}

          {/* Floating Subtle Specs Tag Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-[-20px] sm:left-[-40px] bottom-16 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/80 backdrop-blur-md border border-foreground/10 shadow-lg text-xs font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c27b47]" />
            <span className="text-foreground/80">{content.specTag}</span>
          </motion.div>

          {/* Floating Subtle Specs Tag Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute right-[-20px] sm:right-[-40px] top-28 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background/80 backdrop-blur-md border border-foreground/10 shadow-lg text-xs font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c27b47]" />
            <span className="text-foreground/80">{content.focusTag}</span>
          </motion.div>
        </motion.div>

      </div>

      {/* 4. BOTTOM EDITORIAL IDENTITY & CTA */}
      <div className="relative z-30 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-foreground/10 pt-6">
        
        {/* Nama & Gelar (Kolom Kiri 6 Kolom) */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <div className="inline-block max-w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-black tracking-tight leading-[1.08] text-foreground">
              <GravityLetters text={content.name} />
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c27b47] animate-pulse" />
              <SpeedingText
                words={[
                  content.title,
                  "FULL STACK WEB DEVELOPER",
                  "DIGITAL TRANSFORMATION (DX)",
                  "NEXT.JS, TYPESCRIPT & EXPRESS",
                  "LARAVEL & SQL DATABASES",
                ]}
                interval={2800}
                className="text-xs sm:text-sm font-mono tracking-widest text-[#c27b47] uppercase font-bold"
              />
            </div>
          </div>
          <p className="text-sm text-foreground/70 max-w-md mx-auto lg:mx-0 mt-3 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* CTA & Social Actions (Kolom Kanan 6 Kolom) */}
        <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
          
          {/* Tombol Utama dengan Border Glow Interaktif */}
          <a
            href="#projects"
            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-[#c27b47]/50"
          >
            <span className="absolute inset-0 bg-linear-to-r from-[#c27b47] via-amber-400 to-[#c27b47] rounded-xl opacity-70 group-hover:opacity-100 transition-opacity blur-[1px]" />
            <span className="relative flex items-center gap-2 px-6 py-3 rounded-xl bg-background hover:bg-background/90 text-foreground font-medium text-sm transition-all duration-300">
              {content.btnProjects}
              <ArrowRight className="w-4 h-4 text-[#c27b47] group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Tombol Sekunder */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-foreground/15 hover:border-foreground/30 bg-foreground/5 hover:bg-foreground/10 text-foreground text-sm font-medium transition-all duration-300"
          >
            {content.btnContact}
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-2 pl-2">
            <a
              href="https://github.com/Dwikalintangn"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-foreground/10 hover:border-[#c27b47]/50 hover:text-[#c27b47] transition-all duration-300 text-foreground/70"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dwika-lintang-nugraha"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-foreground/10 hover:border-[#c27b47]/50 hover:text-[#c27b47] transition-all duration-300 text-foreground/70"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:dwikalintangn@gmail.com"
              className="p-2.5 rounded-xl border border-foreground/10 hover:border-[#c27b47]/50 hover:text-[#c27b47] transition-all duration-300 text-foreground/70"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
