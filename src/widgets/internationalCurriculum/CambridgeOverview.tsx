"use client";

import React from "react";

export default function CambridgeOverview() {
  return (
    <section className="w-full font-sans bg-[#FBF9F5] py-16 lg:py-20 border-b border-stone-200 text-stone-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                CAMBRIDGE ASSESSMENT INTERNATIONAL EDUCATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
              <span className="font-normal text-stone-900">Registered Cambridge</span> <br />
              <span className="font-bold text-[#800000]">International School</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              Vasant Valley School is a registered <strong>Cambridge International School</strong> offering the Cambridge curriculum for <strong>Classes 8 to 12</strong>.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal border-l-4 border-[#800000] pl-4 italic">
              &quot;Class 8 serves as a foundation year, focusing on developing the skills and attributes essential for the Cambridge IGCSE programme in Classes 9 and 10, which then extend into the Cambridge Advanced programme in Class 11 (AS Level) and Class 12 (A Level).&quot;
            </p>

            <div className="pt-2">
              <a
                href="https://www.cambridgeinternational.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Visit Official Cambridge Website</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center font-bold text-xs font-serif">
                C8
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Foundation</h3>
              <p className="text-[11px] text-stone-500">Skill building & discipline sampling in Class 8.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center font-bold text-xs font-serif">
                IGCSE
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Classes 9-10</h3>
              <p className="text-[11px] text-stone-500">Inquiry-based international certification.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center font-bold text-xs font-serif">
                A/AS
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Classes 11-12</h3>
              <p className="text-[11px] text-stone-500">Advanced qualifications for global university entry.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
