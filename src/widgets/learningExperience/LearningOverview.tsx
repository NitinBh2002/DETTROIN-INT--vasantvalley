"use client";

import React from "react";

export default function LearningOverview() {
  return (
    <section className="w-full font-sans bg-[#FBF9F5] py-16 lg:py-20 text-stone-900 border-b border-stone-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                PEDAGOGY & PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Learning with Understanding
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              At Vasant Valley School, we believe that education is an enjoyable and interactive process. While high academic achievement is a priority, the school aims to create a community of well-rounded individuals who are compassionate, confident, and respectful.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
              Individualized attention for each student, a &ldquo;process-focused&rdquo; learning framework, equity of all stakeholders and commitment to society are the pillars of the School&apos;s philosophy.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Leadership</h3>
              <p className="text-[11px] text-stone-500">Inspiring confidence and agency.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                  <circle cx="12" cy="12" r="5" strokeWidth={1.8} />
                  <circle cx="12" cy="12" r="1" strokeWidth={1.8} fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Self-Discipline</h3>
              <p className="text-[11px] text-stone-500">Fostering intrinsic motivation.</p>
            </div>

            <div className="col-span-2 bg-[#FAF5EE] p-6 rounded-2xl border border-amber-200 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-full bg-red-100/80 text-[#800000] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#800000]">Holistic Development</h3>
              <p className="text-xs text-stone-600">
                Balancing intellectual, physical, emotional, and creative growth across all age groups.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
