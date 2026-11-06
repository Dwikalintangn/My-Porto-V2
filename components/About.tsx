"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, ShieldCheck, Factory, Cpu, CheckCircle2, Sparkles, BookOpen, ExternalLink } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    ID: {
      tag: "TENTANG SAYA // PROFIL REKAYASA",
      heading: "Rekayasa Perangkat Lunak Skalabel & Transformasi Digital Operasional",
      p1: "Saya adalah lulusan S1 Teknik Informatika (Informatics Engineering) dari Institut Teknologi PLN dengan IPK 3.78/4.00, berfokus pada Full Stack Web Development dan Digital Transformation (DX).",
      p2: "Memiliki rekam jejak nyata dalam menerjemahkan alur kerja manufaktur dan utilitas yang rumit menjadi aplikasi web yang efisien, responsif, dan terukur. Berpengalaman langsung melalui program magang industri di PT Denso Indonesia dan PLN UP3 Cikokol.",
      highlightTitle: "Standar Rekayasa & Prinsip Kerja:",
      highlights: [
        "Pengembangan Full Stack Modern (Next.js, TypeScript, Express.js, Laravel)",
        "Optimasi & Manajemen Database Relasional (Microsoft SQL Server, MySQL)",
        "Desain UI/UX & Prototipe Alur Kerja Interaktif Berbasis Figma",
        "Penerapan Machine Learning untuk Efisiensi Energi Surya (LVQ & Perceptron)",
      ],
      courseworkTitle: "Mata Kuliah Relevan (Coursework):",
      coursework: [
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Computer Networks",
        "Artificial Intelligence",
      ],
      eduDegree: "S1 Teknik Informatika",
      eduCampus: "Institut Teknologi PLN",
      eduGpaLabel: "IPK Kelulusan:",
      certTitle: "Sertifikasi Resmi",
      densoTitle: "Transformasi Digital Industri",
      densoDesc: "PT Denso Indonesia — Divisi Tube & Hose",
      thesisTitle: "Riset Skripsi AI / ML",
      thesisDesc: "Integrasi LVQ & Perceptron untuk Baterai Surya",
    },
    EN: {
      tag: "ABOUT ME // ENGINEERING PROFILE",
      heading: "Scalable Software Engineering & Operational Digital Transformation",
      p1: "I am an Informatics Engineering graduate from Institut Teknologi PLN (GPA 3.78/4.00) specializing in Full Stack Web Development and Digital Transformation (DX).",
      p2: "With a proven track record in translating complex manufacturing and utility workflows into intuitive, robust web applications. Experienced through industrial internships at PT Denso Indonesia and PLN UP3 Cikokol.",
      highlightTitle: "Engineering Standards & Core Competencies:",
      highlights: [
        "Modern Full Stack Engineering (Next.js, TypeScript, Express.js, Laravel)",
        "Relational Database Architecture & Query Tuning (MS SQL Server, MySQL)",
        "Interactive UI/UX Wireframing & Prototyping in Figma",
        "Machine Learning Modeling for Solar Energy Optimization (LVQ & Perceptron)",
      ],
      courseworkTitle: "Relevant Coursework:",
      coursework: [
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Computer Networks",
        "Artificial Intelligence",
      ],
      eduDegree: "B.Sc. Informatics Engineering",
      eduCampus: "Institut Teknologi PLN",
      eduGpaLabel: "Graduation GPA:",
      certTitle: "Professional Certifications",
      densoTitle: "Industrial Digital Transformation",
      densoDesc: "PT Denso Indonesia — Tube & Hose Division",
      thesisTitle: "AI / ML Thesis Research",
      thesisDesc: "LVQ & Perceptron Solar Battery Optimization",
    },
  }[lang];

  return (
    <section id="about" className="relative py-28 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. SECTION HEADER DENGAN ANIMASI FADE-UP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#c27b47]/10 text-[#c27b47] border border-[#c27b47]/20 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          {content.tag}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mt-2 max-w-3xl leading-tight">
          {content.heading}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* 2. KOLOM KIRI: Narasi, Standar Rekayasa & Coursework Cloud (7 Kolom) */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6 text-foreground/80 leading-relaxed text-base sm:text-lg"
        >
          <p className="border-l-2 border-[#c27b47] pl-4 italic text-foreground/90 font-medium">
            {content.p1}
          </p>

          <p className="text-foreground/70">
            {content.p2}
          </p>

          {/* Standar Rekayasa Checklists */}
          <div className="pt-6 border-t border-foreground/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#c27b47] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c27b47]" />
              {content.highlightTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.highlights.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-2.5 p-3 rounded-xl bg-foreground/[0.02] border border-foreground/5 hover:border-[#c27b47]/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#c27b47] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm text-foreground/80 leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Coursework Interactive Chips Cloud */}
          <div className="pt-6 border-t border-foreground/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground/60 font-semibold mb-3">
              {content.courseworkTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {content.coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-foreground/5 text-foreground/80 border border-foreground/10 hover:border-[#c27b47]/40 hover:text-[#c27b47] hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. KOLOM KANAN: BENTO SPOTLIGHT CARDS DENGAN REACT BITS CURSOR GLOW (5 Kolom) */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* SPOTLIGHT CARD 1: EDUKASI & IPK DENGAN ANIMATED METER */}
          <SpotlightCard spotlightColor="rgba(194, 123, 71, 0.22)">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#c27b47]/10 text-[#c27b47] flex items-center justify-center border border-[#c27b47]/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#c27b47] bg-[#c27b47]/10 px-2.5 py-1 rounded-full border border-[#c27b47]/20">
                2021 — 2025
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground font-mono">
              {content.eduDegree}
            </h3>
            <p className="text-xs font-mono text-foreground/60 mt-0.5">
              {content.eduCampus} &bull; Jakarta Barat
            </p>

            {/* GPA Score Meter */}
            <div className="mt-5 pt-4 border-t border-foreground/10">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-mono text-foreground/60 uppercase">
                  {content.eduGpaLabel}
                </span>
                <span className="text-2xl font-black font-mono text-[#c27b47]">
                  3.78 <span className="text-xs text-foreground/50 font-normal">/ 4.00</span>
                </span>
              </div>
              {/* Progress Bar 3.78/4.00 = 94.5% */}
              <div className="w-full bg-foreground/10 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "94.5%" }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-linear-to-r from-[#c27b47] to-amber-400"
                />
              </div>
            </div>
          </SpotlightCard>

          {/* SPOTLIGHT CARD 2: SERTIFIKASI PROFESIONAL */}
          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.18)">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                Verified Credentials
              </span>
            </div>

            <h4 className="text-base font-bold text-foreground font-mono">
              {content.certTitle}
            </h4>

            <div className="mt-3 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-foreground/[0.03] border border-foreground/5">
                <span className="text-foreground/80 font-medium">MikroTik Certified Network Associate</span>
                <span className="text-blue-400 font-bold">MTCNA</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-foreground/[0.03] border border-foreground/5">
                <span className="text-foreground/80 font-medium">Microsoft Office Specialist</span>
                <span className="text-blue-400 font-bold">MOS Word</span>
              </div>
            </div>
          </SpotlightCard>

          {/* SPOTLIGHT CARD 3: INDUSTRIAL DX & MANUFACTURING */}
          <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.18)">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground font-mono">
                  {content.densoTitle}
                </h4>
                <p className="text-xs font-mono text-foreground/60 mt-0.5">
                  {content.densoDesc}
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* SPOTLIGHT CARD 4: RISAT SKRIPSI MACHINE LEARNING */}
          <SpotlightCard spotlightColor="rgba(245, 158, 11, 0.18)">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground font-mono">
                  {content.thesisTitle}
                </h4>
                <p className="text-xs font-mono text-foreground/60 mt-0.5">
                  {content.thesisDesc}
                </p>
              </div>
            </div>
          </SpotlightCard>

        </motion.div>

      </div>

    </section>
  );
}
