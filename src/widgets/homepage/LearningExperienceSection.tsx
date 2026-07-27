"use client";

import React, { useState } from "react";
import Button from "@/src/components/Button";

interface PillarItem {
  id: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

export default function LearningExperienceSection() {
  const [activePillar, setActivePillar] = useState<string>("cerebral");

  const pillars: PillarItem[] = [
    {
      id: "cerebral",
      label: "Cerebral",
      desc: "Fostering academic rigor & critical thinking",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: "social",
      label: "Social",
      desc: "Building empathy, teamwork & community spirit",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "physical",
      label: "Physical",
      desc: "Promoting fitness, sportsmanship & vitality",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "spiritual",
      label: "Spiritual",
      desc: "Nurturing inner peace & mindfulness",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: "emotional",
      label: "Emotional",
      desc: "Developing self-awareness & resilience",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "environmental",
      label: "Environmental",
      desc: "Cultivating sustainability & eco-consciousness",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "creative",
      label: "Creative",
      desc: "Encouraging artistic & original expression",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "ethical",
      label: "Ethical",
      desc: "Instilling moral integrity & good citizenship",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V6z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#FAF5EE] text-stone-900 py-10 sm:py-14 lg:py-16 font-sans border-t border-stone-200/70">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-300/60 pb-4 gap-3">
          <div className="space-y-1">
            <span className="text-[#800000] text-[10px] font-extrabold tracking-widest uppercase">
              VASANT VALLEY CURRICULUM
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-900">
              The Learning Experience
            </h2>
          </div>

          <a
            href="/learning-experience"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#800000] hover:text-[#600010] uppercase tracking-wider transition-colors"
          >
            <span>Explore All 8 Pillars</span>
            <span>&rarr;</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="w-8 h-8 rounded-lg bg-red-100 text-[#800000] flex items-center justify-center font-bold text-xs">
              <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-snug">
              Learning with Understanding
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              While high academic achievement is a priority, the school aims to create a community of well-rounded individuals who are compassionate, confident, and respectful.
            </p>

            <div className="bg-[#FAF5EE] p-3.5 rounded-xl border border-amber-200 text-xs space-y-1">
              <span className="font-bold text-[#800000]">Holistic Philosophy:</span>
              <p className="text-[11px] text-stone-600">
                Balancing intellectual, physical, emotional, and social development across all year groups.
              </p>
            </div>

            <div className="pt-1">
              <Button href="/learning-experience" variant="primary">
                <span>Read Full Pedagogy</span>
                <span>&rarr;</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-500 block px-1">
              8 Core Pillars of Education
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {pillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 space-y-1.5 cursor-pointer ${
                      isActive
                        ? "bg-[#800000] text-white border-[#800000] shadow-md scale-[1.02]"
                        : "bg-white text-stone-800 border-stone-200 hover:border-amber-400 hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          isActive ? "bg-white/20 text-amber-200" : "bg-red-50 text-[#800000]"
                        }`}
                      >
                        {pillar.icon}
                      </div>
                      <span className={`text-[9px] font-bold uppercase ${isActive ? "text-amber-300" : "text-stone-400"}`}>
                        PILLAR
                      </span>
                    </div>

                    <h4 className="text-xs font-bold leading-tight font-serif">{pillar.label}</h4>
                    <p className={`text-[10px] leading-tight ${isActive ? "text-stone-200" : "text-stone-500"}`}>
                      {pillar.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
