"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Copy, Check, MessageSquare, Send, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = "dwikalintangn@gmail.com";
  const location = "Bekasi, Jawa Barat, Indonesia";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const labels = {
    ID: {
      tag: "HUBUNGI SAYA // KONTAK",
      heading: "Mari Berkolaborasi & Bangun Transformasi Digital",
      subheading:
        "Terbuka untuk peluang kerja penuh waktu (Full-time), kontrak, proyek freelance, maupun diskusi seputar Full Stack Web & Digital Transformation.",
      copyLabel: "Salin Email",
      copiedLabel: "Tersalin!",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formMsg: "Pesan Anda",
      formSubmit: "Kirim Pesan",
      formSuccess: "Terima kasih! Pesan Anda telah diterima.",
    },
    EN: {
      tag: "GET IN TOUCH // CONTACT",
      heading: "Let's Collaborate & Build Digital Transformations",
      subheading:
        "Open for full-time opportunities, contracts, freelance builds, or tech discussions around Full Stack Web & Digital Transformation.",
      copyLabel: "Copy Email",
      copiedLabel: "Copied!",
      formName: "Full Name",
      formEmail: "Email Address",
      formMsg: "Your Message",
      formSubmit: "Send Message",
      formSuccess: "Thank you! Your message has been received.",
    },
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-foreground/10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* KOLOM KIRI: Informasi & Direct Contacts (6 Kolom) */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#c27b47] uppercase font-bold">
              {labels.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mt-3 leading-tight">
              {labels.heading}
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 mt-4 leading-relaxed max-w-md">
              {labels.subheading}
            </p>
          </div>

          {/* Quick Copy Email Card */}
          <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/10 max-w-md">
            <span className="text-xs font-mono text-foreground/50 uppercase tracking-wider block mb-2">
              Direct Email
            </span>
            <div className="flex items-center justify-between gap-4">
              <span className="text-base sm:text-lg font-mono font-semibold text-foreground truncate">
                {email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium bg-[#c27b47]/10 text-[#c27b47] hover:bg-[#c27b47]/20 border border-[#c27b47]/20 transition-all duration-200 shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{labels.copiedLabel}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{labels.copyLabel}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="space-y-3 font-mono text-xs max-w-md">
            
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/10 text-foreground/80">
              <MapPin className="w-4 h-4 text-[#c27b47]" />
              <span>{location}</span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/10 text-foreground/80">
              <span className="text-foreground/60">Professional Profile</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/dwika-lintang-nugraha"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c27b47] transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/Dwikalintangn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c27b47] transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: Contact Form (6 Kolom) */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/10 shadow-xl">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#c27b47]" />
            <span>Kirim Pesan Langsung</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-foreground/60 mb-1.5">
                {labels.formName}
              </label>
              <input
                required
                type="text"
                placeholder="Dwika Lintang Nugraha"
                className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/15 focus:border-[#c27b47] focus:ring-1 focus:ring-[#c27b47] outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-foreground/60 mb-1.5">
                {labels.formEmail}
              </label>
              <input
                required
                type="email"
                placeholder="dwikalintangn@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/15 focus:border-[#c27b47] focus:ring-1 focus:ring-[#c27b47] outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-foreground/60 mb-1.5">
                {labels.formMsg}
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tuliskan pesan Anda di sini..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/15 focus:border-[#c27b47] focus:ring-1 focus:ring-[#c27b47] outline-none text-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#c27b47] hover:bg-[#b06f3e] text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-[#c27b47]/20 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{labels.formSubmit}</span>
            </button>

            {submitted && (
              <p className="text-xs font-mono text-emerald-500 text-center mt-2 animate-fade-in">
                {labels.formSuccess}
              </p>
            )}
          </form>
        </div>

      </div>

    </section>
  );
}
