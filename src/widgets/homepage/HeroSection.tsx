"use client";

import React, { useState, useEffect, useCallback } from "react";
import Button from "@/src/components/Button";

interface HeroSlide {
  id: string;
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  bgImage: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    badge: "Excellence in Education",
    titleLine1: "Laissez",
    titleHighlight: "lé savoir",
    subtitle: "Let Knowledge Lead",
    description:
      "Nurturing curious minds and confident hearts to shape a better tomorrow through holistic education and moral values.",
    primaryCtaText: "Discover More",
    primaryCtaLink: "/about-us",
    secondaryCtaText: "Virtual Tour",
    secondaryCtaLink: "/infrastructure",
    bgImage: "/homepage-banner-1.jpeg",
  },
  {
    id: "slide-2",
    badge: "Holistic Development",
    titleLine1: "Empowering",
    titleHighlight: "Future Leaders",
    subtitle: "Innovation & Integrity",
    description:
      "Integrating cutting-edge STEM education with creative expression, athletics, and community leadership.",
    primaryCtaText: "Explore Academics",
    primaryCtaLink: "/learning-experience",
    secondaryCtaText: "Curriculum Info",
    secondaryCtaLink: "/international-curriculum",
    bgImage: "/homepage-banner-2.jpeg",
  },
  {
    id: "slide-3",
    badge: "Global Perspective",
    titleLine1: "Inspiring",
    titleHighlight: "Global Citizens",
    subtitle: "Unity & Diversity",
    description:
      "Collaborative international exchange programs designed to foster empathy, cross-cultural learning, and lifelong curiosity.",
    primaryCtaText: "Apply For Admission",
    primaryCtaLink: "/admissions",
    secondaryCtaText: "Alumni Stories",
    secondaryCtaLink: "/about-us",
    bgImage: "/homepage-banner-3.jpeg",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative bg-stone-950 text-white w-full aspect-[16/9] min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] max-h-[580px] flex flex-col justify-between overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-60 scale-105" : "opacity-0 scale-100"
            } transform pointer-events-none`}
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex-1 flex flex-col justify-center w-full">
        <div className="max-w-xl space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-[2px] bg-amber-400"></span>
            <span className="text-amber-400 text-[11px] tracking-widest font-extrabold uppercase">
              {activeSlideData.badge}
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light tracking-tight leading-tight">
              {activeSlideData.titleLine1} <br />
              <span className="font-bold text-white">{activeSlideData.titleHighlight}</span>
            </h1>
            <p className="text-base sm:text-xl font-serif italic text-amber-200 font-normal">
              {activeSlideData.subtitle}
            </p>
          </div>

          <p className="text-stone-200 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            {activeSlideData.description}
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <Button href={activeSlideData.primaryCtaLink} variant="primary">
              <span>{activeSlideData.primaryCtaText}</span>
              <span>&rarr;</span>
            </Button>

            <Button
              href={activeSlideData.secondaryCtaLink}
              variant="darkOutline"
            >
              <span>{activeSlideData.secondaryCtaText}</span>
            </Button>
          </div>

          <div className="pt-3 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#800000] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/20 cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#800000] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/20 cursor-pointer"
                aria-label="Next Slide"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`relative h-2 rounded-full transition-all duration-500 cursor-pointer overflow-hidden ${
                      isActive ? "w-10 bg-[#800000]" : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  >
                    {isActive && (
                      <span
                        key={`timer-${currentSlide}`}
                        className="absolute inset-0 bg-amber-300 animate-pulse"
                      ></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <div className="relative z-20 bg-white/95 backdrop-blur-md text-stone-900 border-t border-stone-200 shadow-xl py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors">
            <div className="p-2 bg-red-100 rounded-lg text-[#800000] shrink-0">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-900">Holistic Education</h3>
              <p className="text-[11px] text-stone-500">Balanced academics, arts & values.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors">
            <div className="p-2 bg-red-100 rounded-lg text-[#800000] shrink-0">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-900">Global Perspective</h3>
              <p className="text-[11px] text-stone-500">International Cambridge curriculum.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors">
            <div className="p-2 bg-red-100 rounded-lg text-[#800000] shrink-0">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-900">Safe Environment</h3>
              <p className="text-[11px] text-stone-500">Nurturing & secure 8-acre campus.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors">
            <div className="p-2 bg-red-100 rounded-lg text-[#800000] shrink-0">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-900">Excellence Driven</h3>
              <p className="text-[11px] text-stone-500">Encouraging extraordinary talents.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
