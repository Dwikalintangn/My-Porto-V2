"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal, Database, Activity, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export default function FeaturedShowcase() {
  const { lang } = useLanguage();

  const titleContent = {
    ID: {
      badge: "ARSITEKTUR UTAMA // FLAGSHIP SHOWCASE",
      line1: "Dari Arsitektur Backend Skalabel Hingga",
      highlight: "Antarmuka Pengguna yang Presisi",
    },
    EN: {
      badge: "CORE ARCHITECTURE // FLAGSHIP SHOWCASE",
      line1: "From Scalable Backend Systems To",
      highlight: "Precision Interactive User Interfaces",
    },
  }[lang];

  return (
    <section className="relative overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#c27b47]/10 text-[#c27b47] border border-[#c27b47]/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {titleContent.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
              {titleContent.line1} <br />
              <span className="bg-linear-to-r from-[#c27b47] via-amber-400 to-[#c27b47] bg-clip-text text-transparent">
                {titleContent.highlight}
              </span>
            </h2>
          </>
        }
      >
        {/* Mockup Inside 3D Container Scroll */}
        <div className="w-full h-full flex flex-col bg-[#0b0f17] text-slate-100 font-mono select-none">
          
          {/* Top Window Bar */}
          <div className="h-10 px-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-slate-400 ml-2 hidden sm:inline">
                dwika-workspace — nextjs-core-architecture
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production Cluster • Active</span>
            </div>
          </div>

          {/* IDE Content Area */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
            
            {/* Sidebar (3 Cols) */}
            <div className="hidden md:block md:col-span-3 bg-slate-950/70 border-r border-slate-800/80 p-3 text-xs">
              <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-2">
                Project Explorer
              </p>
              <div className="space-y-1 text-slate-400">
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-slate-800/50 text-[#c27b47]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>denso-dx/workflow.ts</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-900">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span>database/mssql-schema.sql</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-900">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>thesis/lvq-perceptron.py</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-900">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span>pln-cikokol/monitoring.php</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-2">
                  System Health
                </p>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>API Latency</span>
                    <span className="text-emerald-400 font-semibold">12ms</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Uptime</span>
                    <span className="text-emerald-400 font-semibold">99.98%</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Lighthouse</span>
                    <span className="text-[#c27b47] font-semibold">100/100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Code / Architecture Window (9 Cols) */}
            <div className="col-span-12 md:col-span-9 p-4 sm:p-6 overflow-y-auto bg-slate-950/40 text-xs sm:text-sm leading-relaxed">
              <div className="space-y-2 text-slate-300">
                <p className="text-slate-500">// 1. Profil Rekayasa & Transformasi Digital</p>
                <p>
                  <span className="text-indigo-400">export interface</span>{" "}
                  <span className="text-amber-300">InformaticsEngineer</span> {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">engineer:</span>{" "}
                  <span className="text-emerald-300">&quot;Dwika Lintang Nugraha&quot;</span>;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">almaMater:</span>{" "}
                  <span className="text-emerald-300">&quot;Institut Teknologi PLN (IPK 3.78)&quot;</span>;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Express.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Laravel&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;MS SQL Server&quot;</span>];
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">experience:</span>{" "}
                  <span className="text-[#c27b47]">&quot;PT Denso Indonesia (DX Intern) &bull; PLN UP3 Cikokol&quot;</span>;
                </p>
                <p>{"}"}</p>

                <p className="pt-3 text-slate-500">// 2. Pipeline Eksekusi Sistem</p>
                <p>
                  <span className="text-indigo-400">async function</span>{" "}
                  <span className="text-blue-400">deliverDigitalTransformation</span>() {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">centralizeOperationalWorkflows</span>();
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">integrateRelationalDatabase</span>();
                </p>
                <p className="pl-4 text-emerald-400">
                  <span className="text-purple-400">return</span>{" "}
                  &quot;Production Ready &bull; Zero Bottlenecks&quot;;
                </p>
                <p>{"}"}</p>
              </div>

              {/* Bottom Quick Metric Cards */}
              <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 uppercase">Architecture</p>
                  <p className="text-xs font-bold text-white mt-0.5">Micro-Modular</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 uppercase">Type Safety</p>
                  <p className="text-xs font-bold text-emerald-400 mt-0.5">100% Strict</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 uppercase">Responsiveness</p>
                  <p className="text-xs font-bold text-[#c27b47] mt-0.5">Fluid 60FPS</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-400 uppercase">Database</p>
                  <p className="text-xs font-bold text-blue-400 mt-0.5">Prisma / SQL</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </ContainerScroll>
    </section>
  );
}

