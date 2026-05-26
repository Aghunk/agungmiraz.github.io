import React, { useState, useEffect } from "react";
import { Compass, Menu, X, ArrowUpRight, Github, Linkedin, Mail, Globe } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { Language } from "../translations";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
  t: {
    about: string;
    works: string;
    experience: string;
    skills: string;
    contact: string;
    emailMe: string;
    subLogo: string;
    contactNow: string;
  };
}

export default function Header({ activeSection, onNavigate, lang, onLangChange, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "tentang", label: t.about },
    { id: "karya", label: t.works },
    { id: "pengalaman", label: t.experience },
    { id: "keahlian", label: t.skills },
    { id: "kontak", label: t.contact },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ja", label: "JA" },
    { code: "de", label: "DE" },
    { code: "fr", label: "FR" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F6]/90 backdrop-blur-md border-b border-neutral-200/50 py-3 shadow-xs"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name */}
        <div 
          onClick={() => handleLinkClick("tentang")} 
          className="cursor-pointer group flex items-center gap-2.5 shrink-0"
        >
          <div className="w-8 h-8 rounded-xs bg-neutral-900 flex items-center justify-center text-[#FAF9F6] text-sm font-mono font-bold transition-transform group-hover:rotate-6">
            AM
          </div>
          <div>
            <span className="font-sans font-bold text-sm tracking-tight text-neutral-900 block leading-none">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase block mt-1">
              {t.subLogo}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-sans text-xs font-semibold tracking-wide uppercase transition-colors hover:text-neutral-950 cursor-pointer ${
                activeSection === link.id
                  ? "text-neutral-950 font-bold relative after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-0.5 after:bg-neutral-950"
                  : "text-neutral-500"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Language switcher & Email */}
        <div className="hidden md:flex items-center gap-5">
          {/* Minimal Inline Lang Switcher */}
          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-sm border border-neutral-200/80">
            <Globe className="w-3.5 h-3.5 text-neutral-400 mx-1.5" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onLangChange(l.code)}
                className={`px-2 py-0.5 font-mono text-[10px] font-bold rounded-xs transition-colors cursor-pointer ${
                  lang === l.code
                    ? "bg-neutral-900 text-[#FAF9F6]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 text-[#FAF9F6] font-sans text-xs font-medium tracking-wide rounded-sm hover:bg-neutral-800 transition-colors"
          >
            <span>{t.emailMe}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Action Row */}
        <div className="flex items-center gap-3.5 md:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-1 bg-neutral-105 p-1 rounded-sm border border-neutral-200">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onLangChange(l.code)}
                className={`px-1.5 py-0.5 font-mono text-[9px] font-bold rounded-xs cursor-pointer ${
                  lang === l.code
                    ? "bg-neutral-900 text-[#FAF9F6]"
                    : "text-neutral-500"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-[#FAF9F6] z-40 border-t border-neutral-200/50 flex flex-col p-6 animate-fade-in shadow-xl">
          <nav className="flex flex-col gap-6 py-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left font-sans text-base font-semibold tracking-wide block py-1.5 border-b border-neutral-100 ${
                  activeSection === link.id
                    ? "text-neutral-950 border-neutral-900"
                    : "text-neutral-500"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto space-y-6 pb-12">
            <div className="h-px bg-neutral-200/60" />
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
              <Mail className="w-4 h-4 text-neutral-400" />
              <span>{PERSONAL_INFO.email}</span>
            </div>
            
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-900 text-[#FAF9F6] font-sans text-sm font-semibold rounded-sm tracking-wide"
            >
              <span>{t.contactNow}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
