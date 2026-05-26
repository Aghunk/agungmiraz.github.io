import React from "react";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckSquare } from "lucide-react";

interface ExperienceTimelineProps {
  t: {
    preTitle: string;
    title: string;
    subTitle: string;
    workHeader: string;
    eduHeader: string;
    currentJobBadge: string;
    jobHighlightHeader: string;
    reloBadgeTitle: string;
    reloHeader: string;
    reloText: string;
    reloSla: string;
    reloSlaVal: string;
    reloStatus: string;
    reloStatusVal: string;
    reloDocs: string;
    reloDocsVal: string;
  };
  experiences: {
    company: string;
    role: string;
    period: string;
    location: string;
    highlights: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
    description: string;
  }[];
}

export default function ExperienceTimeline({ t, experiences, education }: ExperienceTimelineProps) {
  return (
    <section id="pengalaman" className="py-24 bg-[#F4F3EF] border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-xl mb-16">
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

        {/* Layout grid containing Experience on Left, Education on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Timeline Column */}
          <div className="lg:col-span-7 space-y-8 text-neutral-800">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-[#FAF9F6]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-xl text-neutral-900 tracking-tight">
                {t.workHeader}
              </h3>
            </div>

            <div className="space-y-10 pl-4 border-l-2 border-neutral-250 relative">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group space-y-4">
                  
                  {/* Outer circle indicator */}
                  <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-neutral-900 group-hover:bg-neutral-900 transition-colors" />

                  {/* Header metadata */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-sans font-bold text-lg text-neutral-900">
                        {exp.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-neutral-900 text-[#FAF9F6] text-[9px] font-mono uppercase font-bold tracking-wider">
                        {t.currentJobBadge}
                      </span>
                    </div>

                    <div className="flex flex-wrap text-neutral-505 font-sans text-xs gap-x-4 gap-y-1">
                      <span className="font-bold text-neutral-700">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Job Activities Highlights bullets */}
                  <div className="space-y-3 bg-white border border-neutral-200/70 p-5 rounded-sm shadow-xs group-hover:border-neutral-500 transition-colors">
                    <span className="font-mono text-[9px] text-[#2D4263] tracking-widest uppercase font-bold block mb-1">
                      {t.jobHighlightHeader}
                    </span>

                    <ul className="space-y-2.5">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          <CheckSquare className="w-4 h-4 mt-0.5 text-neutral-400 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Education Column & Professional Badge */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-[#FAF9F6]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-bold text-xl text-neutral-900 tracking-tight">
                  {t.eduHeader}
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 p-6 rounded-sm space-y-3"
                  >
                    <div className="space-y-1">
                      <span className="font-mono text-xs text-[#2D4263] font-bold">
                        {edu.period}
                      </span>
                      <h4 className="font-sans font-bold text-base text-neutral-900">
                        {edu.degree}
                      </h4>
                      <span className="font-sans text-xs text-neutral-500 font-semibold block">
                        {edu.institution}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Switzerland Young Professionals relocation endorsement block */}
            <div className="bg-neutral-900 text-[#FAF9F6] p-6 rounded-sm space-y-4 border border-neutral-800 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[9px] text-[#A1B57D] font-bold tracking-widest uppercase block">
                    {t.reloBadgeTitle}
                  </span>
                  <h4 className="font-sans font-bold text-base text-white tracking-tight mt-1">
                    {t.reloHeader}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-xs border border-neutral-700 bg-red-600 flex items-center justify-center font-bold text-[#FAF9F6] text-sm leading-none">
                  +
                </div>
              </div>

              <p className="font-sans text-xs text-[#C8C6C4] leading-relaxed">
                {t.reloText}
              </p>

              <div className="pt-2 flex flex-col gap-1.5 font-mono text-[10px] text-[#A1B57D]">
                <div className="flex justify-between border-b border-neutral-800 pb-1">
                  <span>{t.reloSla}</span>
                  <span className="text-white font-bold">{t.reloSlaVal}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-1">
                  <span>{t.reloStatus}</span>
                  <span className="text-white font-bold">{t.reloStatusVal}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.reloDocs}</span>
                  <span className="text-white font-bold">{t.reloDocsVal}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
