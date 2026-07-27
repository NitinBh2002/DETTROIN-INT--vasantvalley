"use client";

import React, { useState, useEffect, useCallback } from "react";

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
  cardImage: string;
  cardBadge: string;
  cardTitle: string;
  cardDesc: string;
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
    cardImage: "/homepage-banner-1.jpeg",
    cardBadge: "A",
    cardTitle: "Auditorium & Arts",
    cardDesc:
      "Hosting annual theater, debates, and national symposia in our state-of-the-art auditorium.",
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
    cardImage: "/homepage-banner-2.jpeg",
    cardBadge: "S",
    cardTitle: "STEM & Innovation Lab",
    cardDesc:
      "State-of-the-art robotics labs empowering young minds to build sustainable technologies.",
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
    cardImage: "/homepage-banner-3.jpeg",
    cardBadge: "G",
    cardTitle: "International Exchange",
    cardDesc:
      "Partnering with leading schools across Europe and Asia for global exposure.",
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
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative bg-stone-950 text-white min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-40 scale-105" : "opacity-0 scale-100"
            } transform transition-transform duration-10000 pointer-events-none`}
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-stone-950/80 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2.5px] bg-amber-400"></span>
            <span className="text-amber-400 text-xs tracking-widest font-semibold uppercase">
              {activeSlideData.badge}
            </span>
          </div>

          <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-tight">
              {activeSlideData.titleLine1} <br />
              <span className="font-bold text-white">{activeSlideData.titleHighlight}</span>
            </h1>
            <p className="text-xl sm:text-2xl font-serif italic text-amber-200/90 font-normal mt-2">
              {activeSlideData.subtitle}
            </p>
          </div>

          <p className="text-stone-300 text-sm sm:text-base max-w-md font-light leading-relaxed min-h-[60px]">
            {activeSlideData.description}
          </p>

          <div className="pt-4 flex items-center gap-4 flex-wrap">
            <a
              href={activeSlideData.primaryCtaLink}
              className="inline-flex items-center gap-3 bg-[#800000] hover:bg-[#660000] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-xl hover:shadow-red-900/30 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <span>{activeSlideData.primaryCtaText}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href={activeSlideData.secondaryCtaLink}
              className="inline-flex items-center gap-2 border border-stone-600 hover:border-amber-400 text-stone-300 hover:text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
            >
              <span>{activeSlideData.secondaryCtaText}</span>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-stone-900/80 backdrop-blur-sm p-4 sm:p-6 group">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-800">
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                    idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                  style={{ backgroundImage: `url('${slide.cardImage}')` }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />

              <div className="absolute top-6 right-6 w-3/5 bg-white/95 text-stone-900 rounded-xl p-4 shadow-xl border border-stone-200 backdrop-blur-md transform rotate-1">
                <div className="w-7 h-7 rounded-full bg-[#800000] text-white font-bold text-xs flex items-center justify-center mb-2 shadow-sm">
                  {activeSlideData.cardBadge}
                </div>
                <h4 className="text-xs font-bold text-stone-900 mb-1">
                  {activeSlideData.cardTitle}
                </h4>
                <p className="text-[10px] text-stone-600 leading-snug">
                  {activeSlideData.cardDesc}
                </p>
              </div>

              <div className="absolute left-4 bottom-4 flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-[#800000] text-white flex items-center justify-center transition-all duration-300 shadow-lg border border-stone-700 cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-[#800000] text-white flex items-center justify-center transition-all duration-300 shadow-lg border border-stone-700 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`relative h-2.5 rounded-full transition-all duration-500 cursor-pointer overflow-hidden ${
                  currentSlide === idx ? "w-12 bg-[#800000]" : "w-3 bg-stone-700 hover:bg-stone-500"
                }`}
              >
                {currentSlide === idx && (
                  <span className="absolute inset-0 bg-amber-400 animate-pulse"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-white/95 backdrop-blur-md text-stone-900 border-t border-stone-200 shadow-xl py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
            <div className="p-2.5 bg-red-100 rounded-xl text-[#800000]">
              <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">Holistic Education</h3>
              <p className="text-xs text-stone-500 mt-0.5">Balanced academics, arts, sports & life values.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
            <div className="p-2.5 bg-red-100 rounded-xl text-[#800000]">
              <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">Global Perspective</h3>
              <p className="text-xs text-stone-500 mt-0.5">International curriculum with cultural exchange.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
            <div className="p-2.5 bg-red-100 rounded-xl text-[#800000]">
              <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">Safe Environment</h3>
              <p className="text-xs text-stone-500 mt-0.5">Nurturing and secure campus for every child.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
            <div className="p-2.5 bg-red-100 rounded-xl text-[#800000]">
              <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">Excellence Driven</h3>
              <p className="text-xs text-stone-500 mt-0.5">Encouraging talents and extraordinary achievements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
