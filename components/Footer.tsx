"use client";

import React from "react";
import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-foreground/10 bg-foreground/[0.01] py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand / Name */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#c27b47]/10 text-[#c27b47] border border-[#c27b47]/20">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground font-mono">
              DWIKA LINTANG NUGRAHA
            </p>
            <p className="text-xs text-foreground/50 font-mono">
              Informatics Engineering &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-foreground/60 hover:text-[#c27b47] transition-colors p-2 rounded-xl hover:bg-foreground/5"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}

