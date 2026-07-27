"use client";

import React from "react";

interface InstagramPost {
  id: string;
  type: "carousel" | "reel";
  title: string;
  subtitle?: string;
  image: string;
  link: string;
  tag?: string;
  layoutType: "banner" | "brush" | "fair" | "polaroid";
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "1",
    type: "carousel",
    title: "Global Achievement 🇸🇬",
    subtitle: "Representing Vasant Valley School at the 17th Hwa Chong Asia-Pacific Young Leaders Summit 2026",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    link: "https://www.instagram.com/",
    layoutType: "banner",
  },
  {
    id: "2",
    type: "reel",
    title: "WHAT HAPPENED IN SCHOOL OVER THE SUMMER HOLIDAYS?",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    link: "https://www.instagram.com/",
    layoutType: "brush",
  },
  {
    id: "3",
    type: "carousel",
    title: "INDIA UNIVERSITY FAIR 2026",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    link: "https://www.instagram.com/",
    layoutType: "fair",
  },
  {
    id: "4",
    type: "carousel",
    title: "Global Universities, Endless Possibilities",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    link: "https://www.instagram.com/",
    layoutType: "polaroid",
  },
];

export default function InstagramSection() {
  return (
    <section className="w-full bg-[#F5F2EC] text-stone-900 py-16 lg:py-20 font-sans border-t border-stone-200/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#800000]">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-900 tracking-tight">
            Follow Us on Instagram
          </h2>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#800000] hover:underline inline-block"
          >
            @vasantvalleyschool
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col aspect-square border border-stone-200/80"
            >
              <div className="absolute top-3 right-3 z-20 text-white/90 drop-shadow-md">
                {post.type === "carousel" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="14" height="14" rx="2" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h12a2 2 0 002-2V7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                )}
              </div>

              {post.layoutType === "banner" && (
                <div className="h-full flex flex-col bg-[#FDFBF7] p-3 text-center justify-between">
                  <div className="pt-2 px-2 space-y-1">
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
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}

              {post.layoutType === "brush" && (
                <div className="relative h-full w-full bg-stone-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
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
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}

              {post.layoutType === "polaroid" && (
                <div className="h-full bg-[#FFFDF9] p-4 flex flex-col items-center justify-between">
                  <div className="relative w-full flex-1 bg-white p-2.5 shadow-md rounded border border-stone-200/80 flex flex-col items-center">
                    <div className="absolute -top-1.5 right-6 w-4 h-8 border-2 border-stone-400/80 rounded-full rotate-12 z-20"></div>
                    <div className="w-full flex-1 overflow-hidden rounded bg-stone-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-[10px] font-bold text-[#800000] text-center mt-2 tracking-wide font-serif">
                      {post.title}
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-[#800000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                <div className="w-12 h-12 rounded-full bg-white/95 text-[#800000] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
