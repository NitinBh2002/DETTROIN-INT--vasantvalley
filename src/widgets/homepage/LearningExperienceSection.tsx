"use client";

import React from "react";

interface PillarNode {
  id: string;
  label: string;
  angleDeg: number;
  icon: React.ReactNode;
}

export default function LearningExperienceSection() {
  const pillars: PillarNode[] = [
    {
      id: "cerebral",
      label: "Cerebral",
      angleDeg: 270,
      icon: (
        <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: "social",
      label: "Social",
      angleDeg: 315,
      icon: (
        <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "physical",
      label: "Physical",
      angleDeg: 0,
      icon: (
        <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "spiritual",
      label: "Spiritual",
      angleDeg: 45,
      icon: (
        <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: "emotional",
      label: "Emotional",
      angleDeg: 90,
      icon: (
        <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "environmental",
      label: "Environmental",
      angleDeg: 135,
      icon: (
        <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "creative",
      label: "Creative",
      angleDeg: 180,
      icon: (
        <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "ethical",
      label: "Ethical",
      angleDeg: 225,
      icon: (
        <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V6z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#FAF5EE] text-stone-900 py-16 lg:py-24 relative overflow-hidden font-sans border-t border-stone-200/50">
      <div className="flex justify-center mb-8">
        <a
          href="#infrastructure"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-[#800000] text-xs font-bold uppercase tracking-widest transition-colors"
        >
          <span>&rarr; INFRASTRUCTURE</span>
        </a>
      </div>

      <div className="absolute top-12 left-8 w-40 h-24 grid grid-cols-8 gap-2 opacity-20 pointer-events-none">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#800000]"></div>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 w-72 h-72 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full text-[#800000]" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0 C20 30 20 70 50 100 C80 70 80 30 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-6 lg:pr-4">
            <div className="w-8 h-[2.5px] bg-[#800000]"></div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
                <span className="font-normal text-stone-900">Learning with</span> <br />
                <span className="font-bold text-[#800000]">Understanding</span>
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              While high academic achievement is a priority, the school aims to create a community of well-rounded individuals, who are compassionate and confident. This fosters a spirit of cooperation and mutual respect among the students and teachers.
            </p>

            <div className="pt-2">
              <a
                href="#learning-experience"
                className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>&rarr; LEARNING EXPERIENCE</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center items-center py-6 relative">
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px] flex items-center justify-center">
              
              <div className="absolute inset-4 rounded-full border border-amber-300/60 pointer-events-none"></div>
              <div className="absolute inset-16 rounded-full border border-dashed border-amber-200/80 pointer-events-none"></div>

              <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 bg-[#7A0016] text-white shadow-2xl flex flex-col items-center justify-center text-center p-4 transform rotate-45 rounded-2xl border-4 border-amber-100/30">
                <div className="transform -rotate-45 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 text-amber-200 mb-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                    </svg>
                  </div>
                  <span className="text-[9px] tracking-widest text-amber-300 font-semibold uppercase">
                    THE
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider my-0.5">
                    VASANT VALLEY
                  </span>
                  <span className="text-xs sm:text-sm font-serif font-bold text-amber-200 uppercase tracking-widest leading-tight">
                    LEARNING <br /> EXPERIENCE
                  </span>
                </div>
              </div>

              {pillars.map((pillar) => {
                const radius = 175;
                const angleRad = (pillar.angleDeg * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div
                    key={pillar.id}
                    className="absolute flex items-center gap-2"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border-2 border-amber-300/80 shadow-md flex items-center justify-center">
                      {pillar.icon}
                    </div>

                    <span className="text-xs font-bold tracking-wide text-stone-800 whitespace-nowrap">
                      {pillar.label}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
