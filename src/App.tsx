/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorksList from "./components/WorksList";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactForm from "./components/ContactForm";
import { ArrowUp, Terminal, Shield, Cpu, ExternalLink } from "lucide-react";
import { TRANSLATIONS, Language } from "./translations";

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [activeSection, setActiveSection] = useState("tentang");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = TRANSLATIONS[lang];

  // Monitor scroll for Scroll-to-Top visibility and Active Section Tracking
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top visibility
      setShowScrollTop(window.scrollY > 500);

      // Section high-contrast intersection calculation
      const sections = ["tentang", "karya", "pengalaman", "keahlian", "kontak"];
      
      const scrollPosition = window.scrollY + 250; // offset for triggers

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-neutral-800 selection:bg-neutral-200">
      
      {/* Stick-to-Top Navigation */}
      <Header 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
        lang={lang}
        onLangChange={setLang}
        t={t.header}
      />

      {/* Main Content Sections */}
      <main className="relative">
        
        {/* Section 1: Hero & Main Introduction */}
        <Hero 
          onExploreWork={() => scrollToSection("karya")} 
          onExploreContact={() => scrollToSection("kontak")} 
          t={t.hero}
          personal={t.personal}
        />

        {/* Section 2: IT System Design & Drawings Blueprint Gallery */}
        <WorksList 
          t={t.works} 
          projects={t.projects} 
        />

        {/* Section 3: Professional Experience & Education */}
        <ExperienceTimeline 
          t={t.experience} 
          experiences={t.experiences} 
          education={t.education}
        />

        {/* Section 4: Deep Skills Grid, Competencies & Verified Certificates search */}
        <SkillsGrid 
          t={t.skills} 
          skillCategories={t.skillCategories} 
          certifications={t.certifications} 
        />

        {/* Section 5: Secure Contact Form & Sandbox Inbox Simulator */}
        <ContactForm 
          t={t.contact} 
        />

      </main>

      {/* Swiss Minimalist Footer Design */}
      <footer className="bg-neutral-900 text-[#FAF9F6] py-16 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xs bg-white text-neutral-900 flex items-center justify-center font-mono font-bold text-sm">
                AM
              </div>
              <span className="font-sans font-bold text-sm tracking-widest text-[#FAF9F6]">
                {t.personal.name}
              </span>
            </div>
            
            <p className="font-sans text-xs text-neutral-400 max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>

            <span className="font-mono text-[9px] text-[#A1B57D] block tracking-wide uppercase font-bold text-emerald-500">
              🇨🇭 {t.footer.footerRef}
            </span>
          </div>

          {/* Column 2: Navigation Map */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-semibold block">
              {t.footer.navTitle}
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => scrollToSection("tentang")} className="text-neutral-300 hover:text-white transition-colors cursor-pointer">
                  {t.footer.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("karya")} className="text-neutral-300 hover:text-white transition-colors cursor-pointer">
                  {t.footer.works}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pengalaman")} className="text-neutral-300 hover:text-white transition-colors cursor-pointer">
                  {t.footer.experience}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("keahlian")} className="text-neutral-300 hover:text-white transition-colors cursor-pointer">
                  {t.footer.skills}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("kontak")} className="text-[#A1B57D] hover:text-white transition-colors cursor-pointer">
                  {t.footer.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Meta & System specs */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs text-neutral-400">
            <span className="font-mono text-[10px] uppercase tracking-widest font-semibold block">
              {t.footer.specTitle}
            </span>
            
            <div className="space-y-1.5 text-[10px] leading-relaxed">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                <span>{t.footer.fontSpec}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-neutral-500" />
                <span>{t.footer.securitySpec}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-neutral-500" />
                <span>{t.footer.structureSpec}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="font-mono text-[9px] text-neutral-500 block font-semibold uppercase">
                DEVELOPER PORTAL VERIFIED
              </span>
              <span className="text-neutral-300 text-[10px] font-sans">
                Sukabumi, Jawa Barat, Indonesia
              </span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-7 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500">
          <span>{t.personal.name.toUpperCase()} PORTFOLIO © 2026. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-1">
            <span>{t.footer.designRef}</span>
            <ExternalLink className="w-3 h-3 text-neutral-600" />
          </span>
        </div>
      </footer>

      {/* Scroll to Top Circle Button floating */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-neutral-900 border border-neutral-850 hover:bg-neutral-800 text-[#FAF9F6] rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
