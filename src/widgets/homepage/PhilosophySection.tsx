"use client";

import React from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

export default function PhilosophySection() {
  return (
    <section className="w-full bg-[#FAF8F5] text-stone-900 py-16 lg:py-24 relative overflow-hidden font-sans border-t border-stone-200/60">
      <div className="absolute top-8 left-6 w-64 h-64 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full text-[#800000]" fill="currentColor" viewBox="0 0 100 100">
          <path d="M50 0 C20 30 20 70 50 100 C80 70 80 30 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-6 space-y-6 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-100/80 text-[#800000] flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
                <span className="font-normal text-stone-900">Our Philosophy,</span> <br />
                <span className="font-bold text-[#800000]">Our Commitment</span>
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              The School&apos;s motto sets the standard for Vasant Valley School. Individualized attention for each student, a &quot;process-focused&quot; learning framework, equity of all stakeholders and commitment to society are the pillars of the School&apos;s philosophy. We believe that education is an enjoyable and interactive process.
            </p>

            <div className="pt-2">
              <Button href="/about-us/vision" variant="primary">
                <span>VISION</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-stone-900 border-4 border-white">
              <div className="relative aspect-[16/10] bg-stone-800">
                <Image
                  src="/our-philosphy.png"
                  alt="Vasant Valley School Sports & Student Achievements"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 bg-[#800000] text-white py-3 px-6 rounded-tr-3xl font-serif text-xs font-medium tracking-wide z-10">
                Excellence in Action
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-amber-100/50 -z-10 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
