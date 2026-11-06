"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Globe, Menu, X, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: lang === "ID" ? "Tentang" : "About", href: "#about" },
    { name: lang === "ID" ? "Proyek" : "Projects", href: "#projects" },
    { name: lang === "ID" ? "Pengalaman" : "Experience", href: "#experience" },
    { name: lang === "ID" ? "Kontak" : "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 backdrop-blur-md bg-background/80 border-b border-foreground/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="p-2 rounded-xl bg-[#c27b47]/10 border border-[#c27b47]/20 text-[#c27b47] group-hover:scale-105 transition-transform">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight font-mono text-foreground">
            Dwika<span className="text-[#c27b47]">.</span>Lintang
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-foreground/70 hover:text-[#c27b47] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CONTROLS (Theme & Language Switcher) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/80 hover:text-[#c27b47] transition-all cursor-pointer"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#c27b47]" />
            <span>{lang}</span>
          </button>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground/80 hover:text-[#c27b47] transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground/80"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground/80"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-foreground/10 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-foreground/80 hover:text-[#c27b47] transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-2 border-t border-foreground/10 flex justify-between items-center">
              <span className="text-xs font-mono text-foreground/60">Language / Bahasa</span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-[#c27b47]/10 text-[#c27b47] border border-[#c27b47]/20"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
