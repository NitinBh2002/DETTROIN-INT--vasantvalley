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
    badge: "Excellence Since 1990",
    titleLine1: "Let",
    titleHighlight: "Knowledge Lead",
    subtitle: "Nurturing Minds. Inspiring Excellence.",
    description:
      "At Vasant Valley School, we empower students with academic excellence, creativity, compassion, and leadership, preparing them to thrive as responsible global citizens.",
    primaryCtaText: "Discover Vasant Valley",
    primaryCtaLink: "/about-us",
    secondaryCtaText: "Campus Tour",
    secondaryCtaLink: "/infrastructure",
    bgImage: "/homepage-banner-1.jpeg",
  },
  {
    id: "slide-2",
    badge: "Holistic Learning Experience",
    titleLine1: "Learning",
    titleHighlight: "Beyond Classrooms",
    subtitle: "Curiosity • Creativity • Character",
    description:
      "From world-class academics and innovation labs to performing arts, sports, and community service, every experience is designed to nurture confident, compassionate, and future-ready learners.",
    primaryCtaText: "Explore Academics",
    primaryCtaLink: "/learning-experience",
    secondaryCtaText: "View Curriculum",
    secondaryCtaLink: "/international-curriculum",
    bgImage: "/homepage-banner-2.jpeg",
  },
  {
    id: "slide-3",
    badge: "Admissions Open",
    titleLine1: "Building",
    titleHighlight: "Future Leaders",
    subtitle: "A Community of Excellence & Values",
    description:
      "Join a vibrant learning community where innovation, integrity, diversity, and global perspectives inspire every student to reach their highest potential.",
    primaryCtaText: "Apply Now",
    primaryCtaLink: "/admissions",
    secondaryCtaText: "Why Vasant Valley?",
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
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative bg-stone-950 text-white w-full h-[460px] sm:h-[500px] lg:h-[540px] flex flex-col justify-center overflow-hidden select-none"
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

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col justify-center w-full">
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

          <p className="text-stone-200 text-xs sm:text-sm max-w-md font-light leading-relaxed min-h-[48px]">
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
    </section>
  );
}
