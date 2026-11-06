"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Briefcase, Calendar, Users } from "lucide-react";

interface TimelineItem {
  period: string;
  roleID: string;
  roleEN: string;
  institution: string;
  location: string;
  descriptionID: string[];
  descriptionEN: string[];
  type: "experience" | "education" | "organization";
}

const timelineData: TimelineItem[] = [
  {
    period: "Agu 2026 — Sekarang",
    roleID: "Digital Transformation (DX) Intern",
    roleEN: "Digital Transformation (DX) Intern",
    institution: "PT Denso Indonesia",
    location: "Bekasi, Indonesia",
    descriptionID: [
      "Mengembangkan solusi aplikasi web interaktif menggunakan Next.js, TypeScript, dan Tailwind CSS untuk sentralisasi pengetahuan produk dan alur kerja operasional Divisi Tube & Hose Production.",
      "Merancang wireframe sistem dan prototipe interaktif UI/UX menggunakan Figma untuk menyelaraskan alur kerja teknis dengan kebutuhan operasional.",
      "Membangun dan mengintegrasikan API backend menggunakan Express.js serta mengelola struktur data di Microsoft SQL Server.",
      "Berkolaborasi dengan tim manufaktur lintas fungsi untuk mengidentifikasi peluang transformasi digital dan merampingkan proses dokumentasi internal.",
    ],
    descriptionEN: [
      "Developed interactive web application solutions using Next.js, TypeScript, and Tailwind CSS to centralize product knowledge and operational workflows in the Tube & Hose Production Division.",
      "Designed system wireframes and interactive UI/UX prototypes using Figma to align technical workflows with operational requirements.",
      "Built and integrated backend APIs using Express.js and managed data structures in Microsoft SQL Server.",
      "Collaborated with cross-functional manufacturing teams to identify digital transformation opportunities and streamline internal documentation processes.",
    ],
    type: "experience",
  },
  {
    period: "Sep 2024 — Des 2024",
    roleID: "Web Development Intern",
    roleEN: "Web Development Intern",
    institution: "PLN UP3 CIKOKOL",
    location: "Tangerang, Indonesia",
    descriptionID: [
      "Mengembangkan aplikasi web full-stack pemantauan staf kebersihan menggunakan Laravel, Bootstrap, dan MySQL untuk menggantikan alur pelaporan manual.",
      "Mengimplementasikan fitur inti meliputi verifikasi unggah foto lapangan real-time, operasi CRUD tugas, dan dashboard penilaian supervisor.",
      "Membangun kontrol akses berbasis peran (RBAC), mengoptimalkan database MySQL, dan menyusun panduan pengguna (user manual) untuk meningkatkan efisiensi operasional harian.",
    ],
    descriptionEN: [
      "Developed a full-stack cleaning staff monitoring web app using Laravel, Bootstrap, and MySQL to replace manual reporting workflows.",
      "Implemented core features including real-time field photo upload verification, task CRUD operations, and a supervisor rating dashboard.",
      "Built role-based access control (RBAC), optimized MySQL databases, and compiled user manuals to improve daily workflow efficiency.",
    ],
    type: "experience",
  },
  {
    period: "Feb 2024 — Jun 2024",
    roleID: "Studi Independen — Web Full Stack Development",
    roleEN: "Independent Study — Web Full Stack Development",
    institution: "GameLab.ID",
    location: "Salatiga, Indonesia",
    descriptionID: [
      "Menyelesaikan pelatihan intensif pengembangan full-stack dengan fokus pada teknologi web modern meliputi Laravel, PHP, MySQL, JavaScript, dan HTML/CSS.",
      "Mengembangkan Laundry Management Web App sebagai proyek capstone, mengelola alur transaksi end-to-end dan pelacakan pesanan real-time.",
      "Menangani desain skema database SQL dan menerapkan validasi input ketat guna memastikan integritas data transaksi.",
    ],
    descriptionEN: [
      "Completed intensive full-stack development training focusing on modern web technologies including Laravel, PHP, MySQL, JavaScript, and HTML/CSS.",
      "Developed Laundry Management Web App as a capstone project, managing end-to-end transaction flows and real-time order tracking.",
      "Handled SQL database schema design and implemented input validation to ensure transaction data integrity.",
    ],
    type: "experience",
  },
  {
    period: "Sep 2021 — Agu 2025",
    roleID: "S1 Teknik Informatika (Informatics Engineering) — IPK 3.78 / 4.00",
    roleEN: "Bachelor of Informatics Engineering — GPA 3.78 / 4.00",
    institution: "Institut Teknologi Perusahaan Listrik Negara (IT-PLN)",
    location: "Jakarta Barat, Indonesia",
    descriptionID: [
      "Mata Kuliah Relevan: Web Development, Database Systems, Software Engineering, Object-Oriented Programming, Jaringan Komputer.",
      "Skripsi: Modeling of Solar Panel Output Using Integration of LVQ and Perceptron Algorithms to Determine Battery Charging Priority.",
    ],
    descriptionEN: [
      "Relevant Coursework: Web Development, Database Systems, Software Engineering, Object-Oriented Programming, Computer Networks.",
      "Thesis: Modeling of Solar Panel Output Using Integration of LVQ and Perceptron Algorithms to Determine Battery Charging Priority.",
    ],
    type: "education",
  },
  {
    period: "Mar 2022 — Apr 2023",
    roleID: "Divisi Acara (Event Division)",
    roleEN: "Event Division",
    institution: "Himpunan Mahasiswa Informatika (HIMAKA IT-PLN)",
    location: "Jakarta, Indonesia",
    descriptionID: [
      "LKMM Pra-TD (Mar 2023 - Apr 2023): Menyusun rencana acara komprehensif, logistik, materi pelatihan, dan evaluasi kepuasan peserta.",
      "Bakti Sosial HIMAKA (Mar 2022 - Apr 2022): Merencanakan kegiatan pengabdian sosial, koordinasi dengan penerima manfaat, institusi sosial, dan sponsor.",
    ],
    descriptionEN: [
      "LKMM Pra-TD (Mar 2023 - Apr 2023): Drafted comprehensive event plans, managed logistics, training materials, and evaluated feedback for continuous improvement.",
      "Bakti Sosial HIMAKA (Mar 2022 - Apr 2022): Developed planning for social service activities, venue coordination, and sponsor communication.",
    ],
    type: "organization",
  },
];

export default function Experience() {
  const { lang } = useLanguage();

  const labels = {
    ID: {
      tag: "PENGALAMAN & REKAM JEJAK",
      heading: "Pengalaman Kerja, Edukasi, & Organisasi",
      subheading:
        "Rekam jejak profesional dalam transformasi digital korporat, rekayasa web full-stack, serta latar belakang akademis Teknik Informatika.",
    },
    EN: {
      tag: "EXPERIENCE & TRACK RECORD",
      heading: "Work Experience, Education & Leadership",
      subheading:
        "Professional track record in corporate digital transformation, full-stack web engineering, and academic achievements.",
    },
  }[lang];

  return (
    <section id="experience" className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-foreground/10">
      
      {/* SECTION HEADER */}
      <div className="mb-16">
        <span className="text-xs font-mono tracking-widest text-[#c27b47] uppercase font-bold">
          {labels.tag}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mt-3">
          {labels.heading}
        </h2>
        <p className="text-sm sm:text-base text-foreground/60 max-w-xl mt-3">
          {labels.subheading}
        </p>
      </div>

      {/* TIMELINE LIST */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-foreground/10 space-y-12 max-w-4xl">
        {timelineData.map((item, idx) => (
          <div key={idx} className="relative group">
            
            {/* Glowing Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-[#c27b47] group-hover:scale-125 group-hover:bg-[#c27b47] transition-all duration-300 shadow-md shadow-[#c27b47]/20" />

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#c27b47] font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {item.period}
              </span>
              <span className="text-foreground/40">•</span>
              <span className="text-foreground/60">{item.location}</span>
            </div>

            <div className="flex items-center gap-3 mb-1">
              {item.type === "education" ? (
                <GraduationCap className="w-5 h-5 text-[#c27b47]" />
              ) : item.type === "organization" ? (
                <Users className="w-5 h-5 text-blue-400" />
              ) : (
                <Briefcase className="w-5 h-5 text-emerald-400" />
              )}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {lang === "ID" ? item.roleID : item.roleEN}
              </h3>
            </div>

            <p className="text-sm font-mono text-[#c27b47] font-medium mb-3">
              {item.institution}
            </p>

            <ul className="space-y-2 mt-2">
              {(lang === "ID" ? item.descriptionID : item.descriptionEN).map((desc, dIdx) => (
                <li key={dIdx} className="text-sm sm:text-base text-foreground/75 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c27b47] shrink-0 mt-2" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </section>
  );
}
