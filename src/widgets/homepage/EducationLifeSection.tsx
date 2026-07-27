"use client";

import React from "react";
import Image from "next/image";

export default function EducationLifeSection() {
  return (
    <section className="w-full bg-[#FAF5EE] text-stone-900 py-16 lg:py-24 relative overflow-hidden font-sans border-t border-amber-200/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100/80 text-[#800000] flex items-center justify-center font-bold text-sm">
                ☀️
              </div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                LIFE AT VASANT VALLEY
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight">
              <span className="font-normal text-stone-900 block">Education is</span>
              <span className="font-bold text-[#800000] block italic">preparation for life.</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
              The school day comprises academic and nonacademic Learning Experiences and is planned with special focus on the developmental needs of our students. The entire Campus is a &ldquo;Classroom&rdquo; and learning is continuous.
            </p>

            <div className="pt-4">
              <a
                href="/a-day-in-school"
                className="inline-flex items-center gap-3 bg-[#800000] hover:bg-[#660000] text-white px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span>A DAY IN SCHOOL</span>
                <span className="text-amber-300 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-900 border-4 border-white">
              <div className="relative aspect-[4/3] bg-stone-800">
                <Image
                  src="/education-life-section.png"
                  alt="A Day in Vasant Valley School"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-amber-300 border border-white/20">
                  <span>8:00 AM – 3:00 PM</span>
                </div>
                <h3 className="text-lg font-serif font-bold">Continuous Learning & Campus Life</h3>
                <p className="text-xs text-stone-200 font-light">
                  From morning assembly alcoves to music-filled corridor breaks and after-school sports camps.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-amber-200/50 -z-10 blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
