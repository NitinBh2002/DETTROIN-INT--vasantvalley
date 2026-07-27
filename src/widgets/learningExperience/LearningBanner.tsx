"use client";

import React from "react";
import Image from "next/image";

export default function LearningBanner() {
  return (
    <section className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] overflow-hidden bg-stone-900 font-sans">
      <Image
        src="/learning-banner-1.jpg"
        alt="The Learning Experience Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center filter brightness-90"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent z-10" />

      <div className="absolute inset-0 z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-end pb-12 sm:pb-16 text-white space-y-3">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300 w-max">
          <span>VASANT VALLEY ACADEMICS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
          The Learning Experience
        </h1>

        <p className="text-stone-200 text-xs sm:text-sm lg:text-base max-w-2xl font-light leading-relaxed">
          Nurturing qualities such as leadership, self-discipline, and critical thinking towards the holistic development of each child.
        </p>
      </div>
    </section>
  );
}
