import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStackMarquee from "@/components/TechStackMarquee";
import FeaturedShowcase from "@/components/FeaturedShowcase";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollProgressBar, ScrollSection } from "@/components/ui/scroll-transition";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      {/* 1. ACETERNITY SCROLL PROGRESS BEAM (Top Indicator) */}
      <ScrollProgressBar />

      {/* 2. NAVBAR */}
      <Navbar />

      <div className="pt-16">
        {/* HERO */}
        <Hero />

        {/* TECH STACK MARQUEE DENGAN SCROLL TRANSITION */}
        <ScrollSection>
          <TechStackMarquee />
        </ScrollSection>

        {/* FLAGSHIP SHOWCASE 3D SCROLL */}
        <ScrollSection>
          <FeaturedShowcase />
        </ScrollSection>

        {/* ABOUT SECTION */}
        <ScrollSection>
          <About />
        </ScrollSection>

        {/* PROJECTS SECTION */}
        <ScrollSection>
          <Projects />
        </ScrollSection>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <ScrollSection>
          <Experience />
        </ScrollSection>

        {/* CONTACT SECTION */}
        <ScrollSection>
          <Contact />
        </ScrollSection>

        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
