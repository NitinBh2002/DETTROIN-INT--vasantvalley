"use client";

import React from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

export default function EducationLifeSection() {
  return (
    <section className="w-full bg-[#FAF5EE] text-stone-900 py-16 lg:py-24 relative overflow-hidden font-sans border-t border-amber-200/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100/80 text-[#800000] flex items-center justify-center font-bold text-sm">
                <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
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
              <Button href="/a-day-in-school" variant="primary">
                <span>A DAY IN SCHOOL</span>
                <span>&rarr;</span>
              </Button>
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
                  Divided into structured blocks with breaks, fostering active social interaction and experiential learning.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
