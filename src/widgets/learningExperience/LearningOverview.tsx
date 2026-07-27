"use client";

import React from "react";

export default function LearningOverview() {
  return (
    <section className="w-full font-sans bg-[#FBF9F5] py-16 lg:py-20 border-b border-stone-200 text-stone-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                HOLISTIC PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
              <span className="font-normal text-stone-900">Exceeding Expectations &</span> <br />
              <span className="font-bold text-[#800000]">Pushing Boundaries</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              The learning experience is focused on nurturing qualities such as <strong>leadership and self-discipline</strong> aiming towards the holistic development of each child.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal border-l-4 border-[#800000] pl-4 italic">
              &quot;The School environment in Vasant Valley encourages each student and teacher to exceed their own expectations and to push the boundaries of their understanding and beliefs.&quot;
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-xl font-bold font-serif">
                👑
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Leadership</h3>
              <p className="text-[11px] text-stone-500">Inspiring confidence and agency.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-xl font-bold font-serif">
                🎯
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Self-Discipline</h3>
              <p className="text-[11px] text-stone-500">Fostering intrinsic motivation.</p>
            </div>

            <div className="col-span-2 bg-[#FAF5EE] p-6 rounded-2xl border border-amber-200 text-center space-y-2">
              <div className="text-2xl">💡</div>
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
