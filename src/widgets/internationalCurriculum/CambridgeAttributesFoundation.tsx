"use client";

import React from "react";

const LEARNER_ATTRIBUTES = [
  {
    title: "Confident",
    desc: "in working with information and ideas – their own and those of others.",
    iconType: "star",
  },
  {
    title: "Responsible",
    desc: "for themselves, responsive to and respectful of others.",
    iconType: "handshake",
  },
  {
    title: "Reflective",
    desc: "as learners, developing their ability to learn.",
    iconType: "reflective",
  },
  {
    title: "Innovative",
    desc: "and equipped for new and future challenges.",
    iconType: "bulb",
  },
  {
    title: "Engaged",
    desc: "intellectually and socially, ready to make a difference.",
    iconType: "fire",
  },
];

export default function CambridgeAttributesFoundation() {
  const renderAttributeIcon = (type: string) => {
    switch (type) {
      case "star":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case "handshake":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "reflective":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "bulb":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
    }
  };

  return (
    <section className="w-full font-sans bg-white py-16 lg:py-20 text-stone-900 border-b border-stone-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        <div id="attributes" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200 pb-4 gap-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                FIVE CORE PILLARS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Cambridge Learner Attributes
              </h2>
            </div>
            <a
              href="https://www.cambridgeinternational.org/why-choose-us/parents-and-students/in-class/the-cambridge-learner-attributes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#800000] hover:underline"
            >
              Learn More at Cambridge &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LEARNER_ATTRIBUTES.map((attr, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 hover:border-[#800000] transition-colors space-y-3 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-red-50 text-[#800000] flex items-center justify-center">
                  {renderAttributeIcon(attr.iconType)}
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-sm">{attr.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="foundation-year" className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-xl space-y-8">
          <div className="border-b border-amber-200 pb-6">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
              CLASS 8 PREPARATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Why Cambridge Foundation Year?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-700">
            <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-stone-900 text-sm font-serif">Head Start on Skills</h4>
              <p>Head start on building the skills integral towards readiness for the IGCSE Programme.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="font-bold text-stone-900 text-sm font-serif">Smooth Transition</h4>
              <p>Bridges the shift from CBSE/other curricula to the Cambridge system, reducing adjustment pressure in Class 9.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-stone-900 text-sm font-serif">Discipline Sampling</h4>
              <p>Sample a range of disciplines before making finalized subject choices for IGCSE.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
