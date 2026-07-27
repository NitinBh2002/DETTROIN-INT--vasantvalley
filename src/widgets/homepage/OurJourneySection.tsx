"use client";

import React from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

export default function OurJourneySection() {
  return (
    <section className="w-full bg-white text-stone-900 py-16 lg:py-24 relative overflow-hidden font-sans border-t border-stone-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

          <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
            <div className="absolute -left-6 -top-6 w-20 h-20 grid grid-cols-5 gap-1.5 opacity-25 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-stone-400"></div>
              ))}
            </div>

            <div className="relative z-10 w-full max-w-sm bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-stone-100/80 text-center group hover:shadow-red-950/10 transition-all duration-300">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-red-50 text-[#800000] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 7v3m-2-1.5h4" />
                </svg>
              </div>

              <span className="text-[11px] font-extrabold tracking-widest text-[#800000] uppercase block mb-1">
                ESTABLISHED
              </span>

              <div className="flex items-center justify-center gap-3 my-2">
                <span className="w-6 h-[2px] bg-[#800000]/30"></span>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                  1990
                </span>
                <span className="w-6 h-[2px] bg-[#800000]/30"></span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full border-2 border-dashed border-stone-200 -z-0 pointer-events-none"></div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs tracking-widest font-extrabold uppercase">
                OUR JOURNEY
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
                <span className="font-normal text-stone-900">Building a Legacy of</span> <br />
                <span className="font-bold text-stone-900">Excellence </span>
                <span className="font-bold text-[#800000]">Since 1990</span>
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              <p>
                Vasant Valley School was established in 1990 by Mr. Aroon Purie and Mrs. Rekha Purie as an initiative of the Education Today Trust.
              </p>
              <p>
                The school began its journey with around 200 students and 16 teachers in July 1990. It is a self-financing inclusive day school spread over eight acres of land in Vasant Kunj, New Delhi, India.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/about-us" variant="primary">
                <span>&rarr; ABOUT US</span>
              </Button>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-[0.08] hidden xl:block">
        <Image
          src="/learning-banner-1.jpg"
          alt="Historic Campus Background"
          fill
          sizes="33vw"
          className="object-cover filter grayscale"
        />
      </div>
    </section>
  );
}
