import React, { useState } from "react";
import { Search, Award, Globe2, Sparkles, Filter, CheckCircle2, FileText } from "lucide-react";

interface SkillsGridProps {
  t: {
    preTitle: string;
    title: string;
    subTitle: string;
    tabSkills: string;
    tabCerts: string;
    techBadge: string;
    softBadge: string;
    langBadge: string;
    searchPlaceholder: string;
    yearLabel: string;
    yearAll: string;
    certIdLabel: string;
    certVerified: string;
    noCertsTitle: string;
    noCertsResetBtn: string;
    softLevel: string;
    langNative: string;
    langProfessional: string;
  };
  skillCategories: {
    title: string;
    skills: string[];
  }[];
  certifications: {
    title: string;
    issuer: string;
    year: number;
  }[];
}

export default function SkillsGrid({ t, skillCategories, certifications }: SkillsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"skills" | "certs">("skills");
  const [yearFilter, setYearFilter] = useState<string>("all");

  // Filtering Logic for Certifications
  const filteredCerts = certifications.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = yearFilter === "all" || cert.year.toString() === yearFilter;
    return matchesSearch && matchesYear;
  });

  const years = ["all", "2026", "2025", "2016"];

  return (
    <section id="keahlian" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs font-semibold text-[#2D4263] tracking-widest uppercase block mb-2">
            {t.preTitle}
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            {t.title}
          </h2>
          <p className="font-sans text-neutral-500 text-sm mt-3">
            {t.subTitle}
          </p>
        </div>

        {/* Navigation Selector Tabs */}
        <div className="flex border-b border-neutral-200 mb-10 max-w-md">
          <button
            onClick={() => setActiveTab("skills")}
            className={`flex-1 pb-4 text-center font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "skills"
                ? "text-neutral-950 border-b-2 border-neutral-950 font-extrabold"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            {t.tabSkills}
          </button>
          <button
            onClick={() => setActiveTab("certs")}
            className={`flex-1 pb-4 text-center font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "certs"
                ? "text-neutral-950 border-b-2 border-neutral-950 font-extrabold"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            {t.tabCerts} ({certifications.length})
          </button>
        </div>

        {/* Tab 1: KEY SKILLS */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Technical Skills Block (Large) */}
            <div className="lg:col-span-7 space-y-8">
              {skillCategories.map((category, catIdx) => {
                if (category.title !== "Technical Skills" && category.title !== "Keahlian Teknis") return null;
                return (
                  <div key={catIdx} className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1 px-1.5 bg-neutral-900 text-[#FAF9F6] rounded-xs font-mono text-[10px] uppercase font-bold">
                        {t.techBadge}
                      </div>
                      <h3 className="font-sans font-bold text-lg text-neutral-900 uppercase tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.skills.map((skill, skIdx) => (
                        <div
                          key={skIdx}
                          className="bg-white border border-neutral-200/80 p-4 rounded-sm hover:border-neutral-900 transition-all duration-300 group flex items-start gap-3"
                        >
                          <div className="mt-0.5 rounded-full bg-neutral-100 p-1 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#FAF9F6]" />
                          </div>
                          <div>
                            <span className="font-sans font-semibold text-xs sm:text-sm text-neutral-800 group-hover:text-neutral-950 block">
                              {skill}
                            </span>
                            <span className="font-mono text-[9px] text-neutral-400 block mt-1">
                              PROVEN CAPABILITY
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Soft Skills & Languages Block (Sidebar) */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Soft Skills */}
              {skillCategories.map((category, catIdx) => {
                if (category.title !== "Soft Skills" && category.title !== "Keahlian Interpersonal") return null;
                return (
                  <div key={catIdx} className="space-y-4 bg-[#F4F3EF] border border-neutral-250 p-6 rounded-sm">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-neutral-800" />
                      <h3 className="font-sans font-bold text-base text-neutral-900 uppercase tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.skills.map((skill, skIdx) => (
                        <div key={skIdx} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="font-sans text-xs font-medium text-neutral-800">
                              {skill}
                            </span>
                            <span className="font-mono text-[9px] text-neutral-500">{t.softLevel}</span>
                          </div>
                          <div className="w-full bg-neutral-200/60 h-1 rounded-full overflow-hidden">
                            <div className="bg-neutral-900 h-full rounded-full" style={{ width: "90%" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Languages */}
              {skillCategories.map((category, catIdx) => {
                if (category.title !== "Languages" && category.title !== "Bahasa") return null;
                return (
                  <div key={catIdx} className="space-y-4 border border-neutral-200 p-6 rounded-sm bg-white">
                    <div className="flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-neutral-800" />
                      <h3 className="font-sans font-bold text-base text-neutral-900 uppercase tracking-tight">
                        {t.langBadge}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.skills.map((skill, skIdx) => (
                        <div key={skIdx} className="border-l-2 border-neutral-800 pl-3 py-1">
                          <span className="font-sans text-xs font-bold text-neutral-800 block">
                            {skill.split(" (")[0]}
                          </span>
                          <span className="font-mono text-[9px] text-[#9A9483] block uppercase tracking-wider mt-0.5 font-semibold">
                            {skill.includes("Native") || skill.includes("Asli") ? t.langNative : t.langProfessional}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        )}

        {/* Tab 2: CERTIFICATIONS SHEETS & SEARCH */}
        {activeTab === "certs" && (
          <div className="space-y-8 animate-fade-in">
            {/* Search Filter Controls bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between border border-neutral-200 p-4 bg-white rounded-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-2.5 w-4.5 h-4.5 text-neutral-400" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#FAF9F6] border border-neutral-200 rounded-xs text-xs font-sans text-neutral-800 focus:outline-none focus:border-neutral-900 focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex items-center gap-1.5 text-neutral-500 font-sans text-xs">
                  <Filter className="w-3.5 h-3.5" />
                  <span>{t.yearLabel}</span>
                </div>
                <div className="flex gap-1.5">
                  {years.map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setYearFilter(yr)}
                      className={`px-3 py-1.5 font-mono text-[10px] rounded-xs cursor-pointer ${
                        yearFilter === yr
                          ? "bg-neutral-900 text-[#FAF9F6] font-bold"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      {yr === "all" ? t.yearAll : yr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Certification Grid Results */}
            {filteredCerts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCerts.map((cert, certIdx) => (
                  <div
                    key={certIdx}
                    className="bg-white border border-neutral-200 p-5 rounded-sm hover:border-neutral-900 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-xs bg-red-50 border border-red-200 flex items-center justify-center text-red-600 font-sans font-bold text-xs">
                          {cert.year === 2026 ? "NEW" : cert.year}
                        </div>
                        <Award className="w-4.5 h-4.5 text-amber-500" />
                      </div>

                      <div className="space-y-1">
                        <span className="font-mono text-[9px] text-[#2D4263] font-bold tracking-widest uppercase block">
                          {cert.issuer}
                        </span>
                        <h4 className="font-sans font-bold text-sm text-neutral-900 leading-snug">
                          {cert.title}
                        </h4>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-sans text-neutral-500">
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {t.certVerified}
                      </span>
                      <span>{t.certIdLabel} {cert.year}-{certIdx + 112}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-neutral-200 rounded-sm bg-white">
                <FileText className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                <span className="font-sans text-sm text-neutral-500 block">
                  {t.noCertsTitle}
                </span>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setYearFilter("all");
                  }}
                  className="mt-4 px-4 py-2 bg-neutral-900 text-[#FAF9F6] font-sans text-xs font-semibold rounded-xs hover:bg-neutral-850 cursor-pointer"
                >
                  {t.noCertsResetBtn}
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
