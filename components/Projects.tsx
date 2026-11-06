"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, CheckCircle2, Factory, Zap, ShoppingBag, Cpu } from "lucide-react";
import { ThreeDTextReveal } from "@/components/ui/three-d-text-reveal";

export default function Projects() {
  const { lang } = useLanguage();

  const sectionLabels = {
    ID: {
      tag: "PROYEK & STUDI KASUS NYATA",
      heading: "Portofolio Rekayasa & Transformasi Digital",
      subheading:
        "Solusi perangkat lunak nyata yang dibangun untuk kebutuhan industri, perusahaan manufaktur (PT Denso Indonesia), utilitas energi (PLN), dan riset machine learning.",
      btnLive: "Live Demo",
      btnCode: "Lihat Kode",
    },
    EN: {
      tag: "REAL-WORLD PROJECTS & CASE STUDIES",
      heading: "Engineering & Digital Transformation Portfolio",
      subheading:
        "Practical software solutions delivered for enterprise manufacturing (PT Denso Indonesia), energy utility workflows (PLN), and machine learning research.",
      btnLive: "Live Demo",
      btnCode: "View Code",
    },
  }[lang];

  return (
    <section id="projects" className="relative py-28 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. EDITORIAL HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#c27b47] uppercase font-bold">
            {sectionLabels.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground mt-3 leading-tight">
            {sectionLabels.heading}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-foreground/60 max-w-md lg:text-right leading-relaxed">
          {sectionLabels.subheading}
        </p>
      </div>

      {/* 2. 3D CYLINDER TEXT REVEAL (React Bits Pro - Seamless 3D Depth) */}
      <div className="my-8">
        <ThreeDTextReveal
          items={[
            "DIGITAL TRANSFORMATION",
            "ENTERPRISE NEXT.JS APPS",
            "LARAVEL & SQL ARCHITECTURE",
            "ENERGY MACHINE LEARNING",
          ]}
        />
      </div>

      {/* 3. ASYMMETRICAL EDITORIAL BENTO SHOWCASE */}
      <div className="space-y-12">
        
        {/* ================= PROJECT 01: PT DENSO INDONESIA (Full Width Split 7:5) ================= */}
        <div className="group relative rounded-3xl p-6 sm:p-10 bg-foreground/[0.02] border border-foreground/10 hover:border-[#c27b47]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c27b47]/5 overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c27b47]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#c27b47]/15 transition-all duration-500" />

          {/* Top Identifier Bar */}
          <div className="flex items-center justify-between border-b border-foreground/10 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#c27b47] tracking-widest uppercase flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#c27b47]" />
                01 // PT DENSO INDONESIA — DX INTERNSHIP
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-500">
                Production Enterprise System
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Dwikalintangn"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-foreground/60 hover:text-foreground p-2 rounded-xl hover:bg-foreground/5 transition-all"
                aria-label="GitHub Repository"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Grid Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info Kiri (7 Kolom) */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground group-hover:text-[#c27b47] transition-colors mb-4">
                Tube & Hose Production Knowledge & Workflow DX Platform
              </h3>
              
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6 max-w-xl">
                {lang === "ID"
                  ? "Membangun aplikasi web interaktif menggunakan Next.js, TypeScript, dan Tailwind CSS untuk sentralisasi pengetahuan produk dan alur kerja operasional di Divisi Produksi Tube & Hose PT Denso Indonesia. Mengintegrasikan backend API Express.js dengan Microsoft SQL Server."
                  : "Engineered interactive web applications using Next.js, TypeScript, and Tailwind CSS to centralize product knowledge and operational workflows in PT Denso Indonesia's Tube & Hose Production Division. Built Express.js backend APIs connected to Microsoft SQL Server."}
              </p>

              {/* Key Architecture Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-foreground/80 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#c27b47] shrink-0" />
                  <span>Centralized Product Knowledge</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-foreground/80 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#c27b47] shrink-0" />
                  <span>Figma UI/UX Interactive Prototypes</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-foreground/80 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#c27b47] shrink-0" />
                  <span>Express.js & MS SQL Server APIs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-foreground/80 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#c27b47] shrink-0" />
                  <span>Cross-Functional Manufacturing DX</span>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Microsoft SQL Server", "Figma"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-foreground/5 text-foreground/80 border border-foreground/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Canvas Kanan (5 Kolom) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#0b0f17] border border-slate-800 p-5 shadow-xl overflow-hidden group-hover:border-[#c27b47]/40 transition-colors font-mono text-xs">
                
                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-slate-400 ml-2">denso-dx // tube-hose-prod</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Operational</span>
                </div>

                {/* Simulated Metrics */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">Target Division</span>
                    <span className="text-[#c27b47] font-semibold">Tube & Hose Production</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">Database Engine</span>
                    <span className="text-blue-400 font-semibold">Microsoft SQL Server</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400">Frontend Stack</span>
                    <span className="text-emerald-400 font-semibold">Next.js + TypeScript</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                  <span>PT Denso Indonesia — DX</span>
                  <span className="text-slate-300 font-bold">Aug 2026 — Present</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* ================= ASYMMETRICAL 2-COLUMN ROW (Span 7 & Span 5) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* PROJECT 02: PLN UP3 CIKOKOL (Span 7) */}
          <div className="lg:col-span-7 group relative rounded-3xl p-6 sm:p-8 bg-foreground/[0.02] border border-foreground/10 hover:border-[#c27b47]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-foreground/10 pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-[#c27b47] tracking-widest uppercase flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#c27b47]" />
                  02 // PLN UP3 CIKOKOL — WEB DEV
                </span>
                <span className="text-xs font-mono text-foreground/50">Sep — Dec 2024</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-[#c27b47] transition-colors mb-3">
                Field Cleaning Staff Monitoring & Verification System
              </h3>
              
              <p className="text-sm text-foreground/75 leading-relaxed mb-6">
                {lang === "ID"
                  ? "Aplikasi web full-stack monitoring staf kebersihan berbasis Laravel & MySQL untuk menggantikan alur pelaporan manual. Dilengkapi fitur verifikasi unggah foto lapangan real-time, CRUD tugas, dashboard penilaian supervisor, dan kontrol akses berbasis peran (RBAC)."
                  : "A full-stack cleaning staff monitoring web app built with Laravel & MySQL to replace manual reporting workflows. Featuring real-time field photo upload verification, task CRUD, supervisor rating dashboard, and role-based access control (RBAC)."}
              </p>

              {/* Functional Highlights */}
              <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/10 mb-6 font-mono text-xs text-foreground/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#c27b47] font-semibold">Core Verification:</span>
                  <span>Real-Time Field Photo Upload</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Access Control:</span>
                  <span className="text-emerald-500 font-semibold">Multi-Role RBAC System</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-foreground/10">
              {["Laravel", "PHP", "MySQL", "Bootstrap", "RBAC"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-foreground/5 text-foreground/75 border border-foreground/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* PROJECT 03: GAMELAB.ID CAPSTONE (Span 5) */}
          <div className="lg:col-span-5 group relative rounded-3xl p-6 sm:p-8 bg-foreground/[0.02] border border-foreground/10 hover:border-[#c27b47]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-foreground/10 pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-[#c27b47] tracking-widest uppercase flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#c27b47]" />
                  03 // GAMELAB.ID CAPSTONE
                </span>
                <span className="text-xs font-mono text-foreground/50">Feb — Jun 2024</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-[#c27b47] transition-colors mb-3">
                Laundry Management & Order Tracking App
              </h3>
              
              <p className="text-sm text-foreground/75 leading-relaxed mb-6">
                {lang === "ID"
                  ? "Proyek capstone studi independen full-stack untuk mengelola alur transaksi end-to-end dan pelacakan status pesanan secara real-time dengan skema database SQL terstruktur dan validasi input ketat."
                  : "Full-stack capstone web application managing end-to-end transaction flows and real-time order tracking, engineered with normalized SQL schemas and strict input validation."}
              </p>

              {/* Data Integrity */}
              <div className="p-4 rounded-2xl bg-[#0b0f17] border border-slate-800 mb-6 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between text-[#c27b47] mb-1 font-semibold">
                  <span>Order Lifecycle Tracking</span>
                  <span className="text-emerald-400">Real-Time</span>
                </div>
                <p className="text-slate-500 text-[11px]">Normalized Relational Schema • Input Integrity</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-foreground/10">
              {["Laravel", "PHP", "MySQL", "JavaScript", "HTML5/CSS3"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-foreground/5 text-foreground/75 border border-foreground/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ================= PROJECT 04: THESIS RESEARCH (Full Width Horizontal) ================= */}
        <div className="group relative rounded-3xl p-6 sm:p-8 bg-foreground/[0.02] border border-foreground/10 hover:border-[#c27b47]/50 transition-all duration-300 hover:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-[#c27b47] tracking-widest uppercase flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#c27b47]" />
                  04 // UNDERGRADUATE THESIS — INSTITUT TEKNOLOGI PLN
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  AI / Machine Learning Research
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-[#c27b47] transition-colors mb-3">
                Solar Panel Output Modeling via LVQ & Perceptron Algorithm Integration
              </h3>

              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6 max-w-2xl">
                {lang === "ID"
                  ? "Riset skripsi teknik informatika: Pemodelan output daya panel surya menggunakan integrasi algoritma Learning Vector Quantization (LVQ) dan Perceptron untuk menentukan prioritas pengisian baterai (Battery Charging Priority) secara cerdas dan efisien."
                  : "Informatics engineering thesis research: Modeling solar panel electrical output using an integrated Learning Vector Quantization (LVQ) and Perceptron machine learning algorithm to intelligently optimize battery charging priority."}
              </p>

              <div className="flex flex-wrap gap-2">
                {["Python", "Machine Learning", "LVQ Algorithm", "Perceptron", "Solar Energy Data", "Algorithm Optimization"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-foreground/5 text-foreground/75 border border-foreground/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Research Insight Card */}
            <div className="lg:col-span-4">
              <div className="p-5 rounded-2xl bg-[#0b0f17] border border-slate-800 font-mono text-xs text-slate-300 shadow-lg space-y-3">
                <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2 text-[11px]">
                  <span>Thesis Model Specs</span>
                  <span className="text-emerald-400">IT-PLN 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Primary Algorithm</span>
                  <span className="text-[#c27b47] font-semibold">LVQ + Perceptron</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Optimization Goal</span>
                  <span className="text-emerald-400 font-semibold">Battery Charging Priority</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">GPA Honor</span>
                  <span className="text-amber-400 font-semibold">3.78 / 4.00</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
