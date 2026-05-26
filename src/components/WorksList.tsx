import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Server, Radio, ShieldAlert, Cpu, Check, ZoomIn, X, BarChart3, Clock, Settings, CircleDot } from "lucide-react";
import { Project } from "../types";

interface WorksListProps {
  t: {
    preTitle: string;
    title: string;
    subTitle: string;
    aestheticBadgeTitle: string;
    aestheticBadgeText: string;
    allTab: string;
    detailBlueprint: string;
    cadTitle: string;
    methedologyTitle: string;
    methodologyText: string;
    paramTitle: string;
    regionTitle: string;
    regionValue: string;
    techTitle: string;
    cadBtn: string;
    cadAlert: string;
  };
  projects: Project[];
}

export default function WorksList({ t, projects }: WorksListProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(p => p.category === activeTab);

  // Helper to render customized interactive SVGs for each project based on its id
  const renderTechnicalSVG = (id: string, isExpanded: boolean = false) => {
    const sizeClasses = isExpanded ? "w-full h-64 md:h-80" : "w-full h-44 sm:h-48";
    
    switch (id) {
      case "network-architecture":
        return (
          <div className={`${sizeClasses} bg-[#12161E] relative rounded-xs border border-neutral-800 overflow-hidden flex items-center justify-center p-4 group`}>
            {/* Grid background */}
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            <svg className="w-full h-full max-w-[280px] md:max-w-[400px]" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer boundary */}
              <rect x="10" y="10" width="380" height="180" rx="4" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* WAN Link */}
              <circle cx="200" cy="30" r="14" stroke="#60a5fa" strokeWidth="2" className="animate-pulse" />
              <text x="200" y="34" fill="#60a5fa" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">WAN</text>
              
              {/* Firewall */}
              <rect x="175" y="70" width="50" height="24" rx="2" fill="#ef4444" fillOpacity="0.1" stroke="#f87171" strokeWidth="1.5" />
              <text x="200" y="85" fill="#f87171" fontSize="9" fontFamily="monospace" textAnchor="middle">FW-01</text>
              
              {/* Core switch */}
              <rect x="160" y="120" width="80" height="26" rx="2" fill="#3b82f6" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="1.5" />
              <text x="200" y="136" fill="#60a5fa" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CORE-SW01</text>

              {/* Endpoint Subnets */}
              <circle cx="80" cy="165" r="10" stroke="#a3a3a3" strokeWidth="1.5" />
              <text x="80" y="185" fill="#a3a3a3" fontSize="8" fontFamily="monospace" textAnchor="middle">MGT-VLAN 10</text>
              
              <circle cx="200" cy="165" r="10" stroke="#10b981" strokeWidth="1.5" />
              <text x="200" y="185" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">PROD-VLAN 20</text>
              
              <circle cx="320" cy="165" r="10" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="320" y="185" fill="#f59e0b" fontSize="8" fontFamily="monospace" textAnchor="middle">GUEST-VLAN 30</text>

              {/* Connecting lines */}
              <path d="M200 44 L200 70" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M200 94 L200 120" stroke="#f87171" strokeWidth="1.5" />
              <path d="M200 146 L80 165" stroke="#e5e5e5" strokeWidth="1.2" />
              <path d="M200 146 L200 155" stroke="#10b981" strokeWidth="1.2" />
              <path d="M200 146 L320 165" stroke="#e5e5e5" strokeWidth="1.2" />
            </svg>
            <span className="absolute top-2 right-2 bg-neutral-900 border border-neutral-750 px-2 py-0.5 rounded-xs text-[8px] font-mono text-[#60a5fa]">
              STATUS: SECURE
            </span>
          </div>
        );
        
      case "workstation-ergonomics":
        return (
          <div className={`${sizeClasses} bg-[#12161E] relative rounded-xs border border-neutral-800 overflow-hidden flex items-center justify-center p-4`}>
            {/* Grid background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:14px_14px]" />
            
            <svg className="w-full h-full max-w-[280px] md:max-w-[400px]" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Isometric / flat desk representation */}
              {/* Table Top */}
              <polygon points="50,110 200,60 350,110 200,160" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
              
              {/* High-Performance PC Base (on table) */}
              <rect x="180" y="85" width="40" height="35" fill="#0f172a" stroke="#ef4444" strokeWidth="1.2" />
              <text x="200" y="105" fill="#f87171" fontSize="7" fontFamily="monospace" textAnchor="middle">ITX-NODE</text>
              
              {/* Arrow ventilation representations (Airflow direction) */}
              <path d="M 120,130 Q 160,110 180,105" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 2" className="animate-pulse" />
              <text x="130" y="115" fill="#60a5fa" fontSize="7" fontFamily="monospace" className="rotate-[5deg]">COLD AIR IN</text>
              
              <path d="M 220,105 Q 260,110 280,130" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="260" y="115" fill="#f87171" fontSize="7" fontFamily="monospace">HOT EXHAUST</text>

              {/* Ground loop monitoring line */}
              <line x1="200" y1="120" x2="200" y2="150" stroke="#10b981" strokeWidth="1" />
              <circle cx="200" cy="150" r="3" fill="#10b981" />
              <text x="210" y="153" fill="#10b981" fontSize="7" fontFamily="monospace">EARTH GROUND</text>
            </svg>
            <span className="absolute top-2 right-2 bg-neutral-900 border border-neutral-750 px-2 py-0.5 rounded-xs text-[8px] font-mono text-[#ef4444]">
              FLOW: OPTIMIZED
            </span>
          </div>
        );
        
      case "endpoint-gpo":
        return (
          <div className={`${sizeClasses} bg-[#12161E] relative rounded-xs border border-neutral-800 overflow-hidden flex items-center justify-center p-4`}>
            {/* Grid background */}
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            <svg className="w-full h-full max-w-[280px] md:max-w-[400px]" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Root Directory */}
              <rect x="25" y="30" width="110" height="24" rx="2" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" />
              <text x="80" y="45" fill="#60a5fa" fontSize="9" fontFamily="monospace" textAnchor="middle">AD.PRATAMA.LOCAL</text>
              
              {/* OU levels */}
              <path d="M80 54 L80 150" stroke="#475569" strokeWidth="1.5" />
              
              {/* OU Branch Level 1 */}
              <path d="M80 90 L130 90" stroke="#475569" strokeWidth="1.5" />
              <rect x="130" y="78" width="90" height="24" rx="2" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1" />
              <text x="175" y="93" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">OU-WORKSTATIONS</text>
              
              <path d="M175 102 L175 130" stroke="#475569" strokeWidth="1" />
              <path d="M175 130 L210 130" stroke="#475569" strokeWidth="1" />
              <rect x="210" y="118" width="100" height="24" rx="2" fill="#f59e0b" fillOpacity="0.05" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
              <text x="260" y="133" fill="#fbbf24" fontSize="8" fontFamily="monospace" textAnchor="middle">GPO-BLOCK-USB-DLP</text>

              {/* OU Branch Level 2 */}
              <path d="M80 150 L130 150" stroke="#475569" strokeWidth="1.5" />
              <rect x="130" y="138" width="90" height="24" rx="2" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="1" />
              <text x="175" y="153" fill="#818cf8" fontSize="8" fontFamily="monospace" textAnchor="middle">OU-PRODUCTION-USERS</text>
            </svg>
            <span className="absolute top-2 right-2 bg-neutral-900 border border-neutral-750 px-2 py-0.5 rounded-xs text-[8px] font-mono text-[#34d399]">
              GPO: LOCKDOWN
            </span>
          </div>
        );
        
      case "servicedesk-workflow":
        return (
          <div className={`${sizeClasses} bg-[#12161E] relative rounded-xs border border-neutral-800 overflow-hidden flex items-center justify-center p-4`}>
            {/* Grid background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:14px_14px]" />
            
            <svg className="w-full h-full max-w-[280px] md:max-w-[400px]" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ticket pipeline stages */}
              <g transform="translate(10, 0)">
                {/* Request */}
                <rect x="10" y="80" width="70" height="30" rx="3" fill="#4b5563" stroke="#9ca3af" strokeWidth="1" />
                <text x="45" y="98" fill="#e5e5e5" fontSize="8" fontFamily="monospace" textAnchor="middle">1. Request</text>
                
                {/* Arrow 1 */}
                <path d="M85 95 L110 95" stroke="#9ca3af" strokeWidth="1.5" />
                
                {/* L1 Response */}
                <rect x="110" y="75" width="75" height="40" rx="3" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="147" y="93" fill="#60a5fa" fontSize="8" fontFamily="monospace" textAnchor="middle">2. L1 Helpdesk</text>
                <text x="147" y="105" fill="#93c5fd" fontSize="7" fontFamily="sans-serif" textAnchor="middle">SLA: 15m</text>
                
                <path d="M185 95 L210 95" stroke="#3b82f6" strokeWidth="1.5" />
                
                {/* L2 Diagnostics */}
                <rect x="210" y="75" width="80" height="40" rx="3" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
                <text x="250" y="93" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">3. L2 HW Tech</text>
                <text x="250" y="105" fill="#a7f3d0" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Troubleshoot</text>
                
                <path d="M290 95 L315 95" stroke="#10b981" strokeWidth="1.5" />
                
                {/* Resolved */}
                <circle cx="335" cy="95" r="15" fill="#78350f" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="335" y="98" fill="#fbbf24" fontSize="8" fontFamily="monospace" textAnchor="middle">4. OK</text>
              </g>
            </svg>
            <span className="absolute top-2 right-2 bg-neutral-900 border border-neutral-750 px-2 py-0.5 rounded-xs text-[8px] font-mono text-[#fbbf24]">
              SLA: 100% SUCCESS
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  const handleDownloadBlueprint = () => {
    setDownloadSuccess(t.cadAlert);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <section id="karya" className="py-24 border-y border-neutral-200/50 bg-[#F4F3EF]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-semibold text-[#2D4263] tracking-widest uppercase block mb-2">
              {t.preTitle}
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              {t.title}
            </h2>
            <p className="font-sans text-neutral-500 text-sm max-w-xl mt-3">
              {t.subTitle}
            </p>
          </div>
          
          {/* Quick Info Badge */}
          <div className="bg-neutral-900 text-[#FAF9F6] p-4 border border-neutral-800 max-w-xs rounded-sm shrink-0">
            <span className="font-mono text-[9px] text-[#C8C6C4] tracking-wider uppercase block">
              {t.aestheticBadgeTitle}
            </span>
            <span className="font-sans text-xs font-medium block mt-1">
              {t.aestheticBadgeText}
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide rounded-sm cursor-pointer transition-colors ${
                activeTab === cat
                  ? "bg-neutral-900 text-[#FAF9F6]"
                  : "text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200/50"
              }`}
            >
              {cat === "all" ? t.allTab : cat}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layoutId={`project-container-${project.id}`}
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setDownloadSuccess(null);
              }}
              className="group bg-white border border-neutral-250 p-5 rounded-sm flex flex-col justify-between hover:border-neutral-900 transition-all duration-300 hover:shadow-lg cursor-pointer animate-fade-in"
            >
              <div>
                {/* Interactive Tech Preview Widget */}
                <div className="mb-4">
                  {renderTechnicalSVG(project.id)}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-neutral-100 text-neutral-600 font-mono text-[9px] rounded-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-1 mt-1">
                  <span className="font-mono text-[10px] uppercase text-[#9A9483] tracking-widest font-semibold block">
                    {project.category}
                  </span>
                  <h3 className="font-sans font-bold text-lg text-neutral-900 group-hover:text-neutral-950 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-neutral-600 leading-relaxed mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Specs and action button */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[10px] font-mono text-neutral-500">
                  {project.stats?.[0] && (
                    <div>
                      <span className="block font-bold text-neutral-800">{project.stats[0].value}</span>
                    </div>
                  )}
                  {project.stats?.[1] && (
                    <div className="border-l border-neutral-200 pl-4">
                      <span className="block font-bold text-neutral-800">{project.stats[1].value}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1 font-sans text-xs font-bold text-neutral-900 hover:gap-2 transition-all">
                  <span>{t.detailBlueprint}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Slide-Over Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xs"
              />

              {/* Modal Window Container */}
              <motion.div
                layoutId={`project-container-${selectedProject.id}`}
                className="relative bg-[#FAF9F6] border border-neutral-300 w-full max-w-3xl rounded-sm shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-neutral-200/70 flex justify-between items-start bg-neutral-100/30">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#2D4263] block mb-1">
                      {t.cadTitle}
                    </span>
                    <h3 className="font-sans font-bold text-xl md:text-2xl text-neutral-900 tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-xs border border-neutral-255 bg-white text-neutral-500 hover:text-neutral-900 transition-colors hover:bg-neutral-100 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1">
                  
                  {/* Detailed Interactive SVG Schematic View */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-[#9A9483] tracking-widest uppercase block">
                      CAD DRAWING PREVIEW (INLINE VECTOR)
                    </span>
                    {renderTechnicalSVG(selectedProject.id, true)}
                  </div>

                  {/* Overview Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                    <div className="md:col-span-8 space-y-4">
                      <div className="space-y-1.5">
                        <span className="font-sans font-bold text-xs text-neutral-900 uppercase tracking-wide block">
                          {t.methedologyTitle}
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {selectedProject.details}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-sans font-bold text-xs text-neutral-900 uppercase tracking-wide block">
                          Desain Parameter & Logika
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {t.methodologyText}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-4 bg-white border border-neutral-250 p-4 rounded-xs space-y-4">
                      {/* Metric Stats */}
                      <span className="font-mono text-[9px] text-[#2D4263] tracking-widest uppercase font-bold block">
                        {t.paramTitle}
                      </span>
                      
                      <div className="space-y-3">
                        {selectedProject.stats?.map((stat, sIdx) => (
                          <div key={sIdx} className="border-b border-neutral-100 pb-2 last:border-0 last:pb-0">
                            <span className="font-sans text-[10px] text-neutral-500 uppercase block">
                              {stat.label}
                            </span>
                            <span className="font-mono text-sm font-bold text-neutral-900">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <span className="font-mono text-[9px] text-neutral-400 block mb-1">
                          {t.regionTitle}
                        </span>
                        <span className="font-sans text-xs text-neutral-700 font-semibold">
                          {t.regionValue}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-4 border-t border-neutral-200">
                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider block mb-2.5">
                      {t.techTitle}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-neutral-900 text-[#FAF9F6] font-mono text-xs rounded-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inline Simulator Download Alert */}
                  {downloadSuccess && (
                    <div className="p-3 bg-neutral-900 text-[#FAF9F6] border border-neutral-800 rounded-sm font-mono text-[10px] tracking-wide animate-fade-in flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#A1B57D]" />
                      <span>{downloadSuccess}</span>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-neutral-100/60 border-t border-neutral-200 flex justify-between items-center flex-wrap gap-4">
                  <span className="font-mono text-[9px] text-neutral-500">
                    AGUNG MIRAZ / IT NETWORK & HARDWARE SCHEMATIC © 2026
                  </span>
                  
                  <button
                    onClick={handleDownloadBlueprint}
                    className="px-4 py-2 bg-neutral-900 text-[#FAF9F6] font-mono text-[9px] font-bold rounded-xs tracking-wide uppercase hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>{t.cadBtn}</span>
                    <Settings className="w-3 h-3 animate-spin-slow" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
