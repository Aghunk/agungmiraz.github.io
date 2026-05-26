import React from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Linkedin, ArrowDown, ClipboardCheck, PlaneTakeoff, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onExploreWork: () => void;
  onExploreContact: () => void;
  t: {
    statusActive: string;
    statusSwitzerland: string;
    experienceCount: string;
    experienceLabel: string;
    certCount: string;
    certLabel: string;
    btnWorks: string;
    btnContact: string;
    scrollDown: string;
    technicalDossier: string;
    hardwareCompliant: string;
    supportSpecialist: string;
    relocationTitle: string;
    relocationValue: string;
  };
  personal: {
    name: string;
    title: string;
    tagline: string;
    summary: string;
  };
}

export default function Hero({ onExploreWork, onExploreContact, t, personal }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="tentang"
      className="relative min-h-screen pt-28 pb-16 px-6 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background grid representation */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-neutral-200/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-neutral-200/30 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Text Content Block */}
        <motion.div
          className="lg:col-span-7 flex flex-col space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 text-[#FAF9F6] text-[10px] font-mono font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.statusActive}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-[10px] font-mono font-bold tracking-wider uppercase">
              <PlaneTakeoff className="w-3 h-3" />
              {t.statusSwitzerland}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#9A9483]">
              {personal.title}
            </span>
            <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-[1.05]">
              {personal.name}
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-sans text-lg sm:text-xl text-neutral-600 font-light leading-relaxed max-w-xl"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="p-5 border-l-2 border-neutral-950 bg-neutral-100/50 rounded-r-md max-w-xl text-sm leading-relaxed text-neutral-700 font-sans"
          >
            {personal.summary}
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 max-w-md pt-2">
            <div className="border border-neutral-200/60 p-3 rounded-sm bg-white/70">
              <div className="font-mono text-xl font-bold text-neutral-900">{t.experienceCount}</div>
              <div className="font-sans text-[11px] text-neutral-500 uppercase tracking-wider font-semibold mt-1">
                {t.experienceLabel}
              </div>
            </div>
            <div className="border border-neutral-200/60 p-3 rounded-sm bg-white/70">
              <div className="font-mono text-xl font-bold text-neutral-900">{t.certCount}</div>
              <div className="font-sans text-[11px] text-neutral-500 uppercase tracking-wider font-semibold mt-1">
                {t.certLabel}
              </div>
            </div>
          </motion.div>

          {/* Interactive Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onExploreWork}
              className="px-6 py-3 bg-neutral-900 text-[#FAF9F6] font-sans text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
            >
              {t.btnWorks}
            </button>
            <button
              onClick={onExploreContact}
              className="px-6 py-3 border border-neutral-300 text-neutral-800 font-sans text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-neutral-100 hover:border-neutral-400 transition-colors cursor-pointer"
            >
              {t.btnContact}
            </button>
          </motion.div>
        </motion.div>

        {/* Visual Graphic Block (Schweizer / Minimalist Technical Layout aesthetics) */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          {/* Card framing */}
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[3/4] p-5 bg-[#FAF9F6] border border-neutral-200 shadow-xl rounded-sm flex flex-col justify-between overflow-hidden">
            {/* Top architectural stamp */}
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[9px] text-[#2D4263] font-bold block">
                  {t.technicalDossier}
                </span>
                <span className="font-mono text-[8px] text-neutral-400 block mt-0.5">
                  ID: AM-RELO-CH-2026
                </span>
              </div>
              <div className="w-5 h-5 rounded-xs border border-neutral-350 flex items-center justify-center bg-red-50">
                <span className="text-red-600 text-[10px] font-sans font-bold leading-none">+</span>
              </div>
            </div>

            {/* Simulated Stamp / Avatar Box */}
            <div className="w-full aspect-square my-4 border border-neutral-200 bg-neutral-100 relative group overflow-hidden flex items-center justify-center">
              {/* Profile Photo Placeholder overlay with nice aesthetics */}
              <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors z-10" />
              
              {/* Minimal geometric graphic representing hardware/network */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none z-0">
                <div className="w-full h-full opacity-60 flex flex-col items-center justify-center">
                  <div className="w-[120px] h-[120px] border-2 border-dashed border-neutral-300 rounded-full flex items-center justify-center relative animate-spin-slow">
                    <div className="w-[80px] h-[80px] border border-dashed border-neutral-400 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-neutral-900/10 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-neutral-600" />
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest mt-4">
                    {t.hardwareCompliant}
                  </span>
                </div>
              </div>

              {/* Realist Avatar Info overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3 py-2 border border-neutral-205 rounded-xs z-20 shadow-sm">
                <span className="font-sans font-bold text-xs text-neutral-900 block leading-tight">{personal.name}</span>
                <span className="font-mono text-[9px] text-neutral-500 block mt-0.5 leading-none">{t.supportSpecialist}</span>
              </div>
            </div>

            {/* Card Metadata Footer */}
            <div className="space-y-3.5">
              <div className="h-px bg-neutral-200/70" />
              <div className="flex flex-col gap-1.5 text-xs text-neutral-700">
                <div className="flex items-center gap-2 font-sans font-medium">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Sukabumi, West Java, ID</span>
                </div>
                <div className="flex items-center gap-2 font-sans">
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+62 819-3020-0015</span>
                </div>
              </div>
              
              {/* Switzerland candidacy footer details */}
              <div className="bg-neutral-55 w-full py-1.5 px-2.5 rounded-xs border border-neutral-200 flex items-center justify-between text-[10px] font-mono text-neutral-600">
                <span>{t.relocationTitle}</span>
                <span className="font-bold text-neutral-800">{t.relocationValue}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bounce Down Arrow Indicator */}
      <div 
        onClick={onExploreWork}
        className="mt-12 group cursor-pointer flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-[#9A9483] hover:text-neutral-950 transition-colors"
      >
        <span>{t.scrollDown}</span>
        <div className="w-6 h-10 border border-neutral-300 rounded-full p-1 flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-neutral-900 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
