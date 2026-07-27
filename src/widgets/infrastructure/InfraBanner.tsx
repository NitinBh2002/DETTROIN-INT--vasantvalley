"use client";

import React from "react";
import Image from "next/image";

export default function InfraBanner() {
  return (
    <section className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] overflow-hidden bg-stone-900 font-sans">
      <Image
        src="/infra-banner-1.jpg"
        alt="Vasant Valley School Infrastructure & Campus"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center filter brightness-90"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent z-10" />

      <div className="absolute inset-0 z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-end pb-12 sm:pb-16 text-white space-y-3">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300 w-max">
          <span>VASANT VALLEY CAMPUS & FACILITIES</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
          School Infrastructure
        </h1>

        <p className="text-stone-200 text-xs sm:text-sm lg:text-base max-w-2xl font-light leading-relaxed">
          Spread over eight acres in Vasant Kunj, designed with world-class learning spaces, green courtyards, and challenge-compliant infrastructure.
        </p>
      </div>
    </section>
  );
}
