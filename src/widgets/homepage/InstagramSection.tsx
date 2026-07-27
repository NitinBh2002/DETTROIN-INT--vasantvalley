"use client";

import React from "react";
import Image from "next/image";
import Slider from "@/src/components/Slider";

interface InstagramPost {
  id: string;
  type: "carousel" | "reel";
  title: string;
  subtitle?: string;
  image: string;
  likes: string;
  comments: string;
  layoutType: "banner" | "brush" | "fair" | "polaroid";
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "1",
    type: "carousel",
    title: "Vasant Valley Learning Experiences",
    subtitle: "Classroom without boundaries across 8 acres",
    image: "/education-life-section.png",
    likes: "1.2k",
    comments: "48",
    layoutType: "banner",
  },
  {
    id: "2",
    type: "reel",
    title: "Summer Holiday Adventures & Discovery",
    image: "/our-philosphy.png",
    likes: "2.4k",
    comments: "89",
    layoutType: "brush",
  },
  {
    id: "3",
    type: "carousel",
    title: "Annual STEM & Book Fair Highlights",
    subtitle: "Excellence in Action",
    image: "/about-image.jpg",
    likes: "980",
    comments: "32",
    layoutType: "fair",
  },
  {
    id: "4",
    type: "carousel",
    title: "Sports Day Victories & Teamwork",
    image: "/a-day-in-school-banner.jpg",
    likes: "1.8k",
    comments: "64",
    layoutType: "polaroid",
  },
];

export default function InstagramSection() {
  return (
    <section className="w-full font-sans bg-white py-16 lg:py-24 border-t border-stone-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                SOCIAL CORNER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
              Follow Us On Instagram
            </h2>
          </div>

          <a
            href="https://www.instagram.com/vasantvalleyschool/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#600010] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all w-fit"
          >
            <span>@vasantvalleyschool</span>
            <span>&rarr;</span>
          </a>
        </div>

        <div>
          <Slider>
            {INSTAGRAM_POSTS.map((post) => (
              <div
                key={post.id}
                className="min-w-[280px] sm:min-w-[310px] lg:min-w-[325px] max-w-[340px] flex-1 snap-start rounded-2xl border border-stone-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white group flex flex-col justify-between h-[380px]"
              >
                {post.layoutType === "banner" && (
                  <div className="h-full flex flex-col justify-between p-4 bg-[#FAF8F5]">
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold tracking-widest text-[#800000] uppercase block">
                        CAMPUS INSIGHTS
                      </span>
                      <h3 className="text-xs font-serif font-bold text-stone-900 tracking-wide">
                        {post.title}
                      </h3>
                      {post.subtitle && (
                        <p className="text-[9.5px] text-stone-600 leading-snug font-light">
                          {post.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="relative mt-2 rounded-lg overflow-hidden flex-1 bg-stone-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                )}

                {post.layoutType === "brush" && (
                  <div className="relative h-full w-full bg-stone-900">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/30 to-transparent"></div>
                    <div className="absolute inset-0 p-5 flex flex-col items-center justify-center text-center">
                      <div className="border-y-2 border-stone-200/60 py-3 px-2 bg-stone-950/40 backdrop-blur-xs rounded-md">
                        <h3 className="text-sm font-black text-amber-100 uppercase tracking-wider leading-tight font-serif">
                          WHAT HAPPENED
                        </h3>
                        <span className="text-[10px] text-white tracking-widest uppercase block my-0.5">
                          IN SCHOOL OVER THE
                        </span>
                        <h4 className="text-base font-extrabold text-white tracking-tight leading-tight">
                          SUMMER HOLIDAYS?
                        </h4>
                      </div>
                    </div>
                  </div>
                )}

                {post.layoutType === "fair" && (
                  <div className="h-full flex flex-col bg-[#FAF5EE] p-3 text-center justify-between">
                    <div className="py-2 px-1 border-b border-[#800000]/20 mb-2">
                      <h3 className="text-xs font-serif font-extrabold text-[#800000] uppercase tracking-wider">
                        {post.title}
                      </h3>
                    </div>
                    <div className="relative rounded-lg overflow-hidden flex-1 bg-stone-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                )}

                {post.layoutType === "polaroid" && (
                  <div className="h-full bg-[#FFFDF9] p-4 flex flex-col items-center justify-between">
                    <div className="relative w-full flex-1 bg-white p-2.5 shadow-md rounded border border-stone-200/80 flex flex-col items-center">
                      <div className="absolute -top-1.5 right-6 w-4 h-8 border-2 border-stone-400/80 rounded-full rotate-12 z-20"></div>
                      <div className="relative w-full flex-1 overflow-hidden rounded bg-stone-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-[10px] font-bold text-[#800000] text-center mt-2 tracking-wide font-serif">
                        {post.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
