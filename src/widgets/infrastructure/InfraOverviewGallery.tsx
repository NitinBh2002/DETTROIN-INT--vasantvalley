"use client";

import React, { useState } from "react";

interface GalleryPhoto {
  id: string;
  title: string;
  category: "Campus" | "Labs" | "Sports" | "Arts";
  image: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Green Courtyards & Botanical Garden",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g2",
    title: "State-of-the-Art Science Laboratories",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g3",
    title: "Outdoor Sports Complex & Athletic Fields",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g4",
    title: "Visual & Performing Arts Centre",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g5",
    title: "Main Auditorium & Cultural Stage",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "g6",
    title: "Open Mixed-Use Amphitheatre Area",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
  },
];

export default function InfraOverviewGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPhotos = activeCategory === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <section className="w-full font-sans bg-[#FBF9F5] py-16 lg:py-20 border-b border-stone-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                CAMPUS OVERVIEW
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-stone-900">
              A Flourishing Green & Inclusive Campus
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              The campus has sports fields, gardens, play areas and courtyards, with over <strong>400 species of trees and plants</strong>.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
              The school is surrounded by the busy neighbourhood of Vasant Kunj on one side and the main road connecting the capital city to the airport on the other. While there is a planned space for every activity, there are also many open &quot;mixed-use&quot; areas.
            </p>

            <div className="bg-[#FAF5EE] p-5 rounded-2xl border-l-4 border-[#800000] space-y-1">
              <span className="text-xs font-bold text-[#800000] uppercase tracking-wider block">
                Challenge Compliant Design
              </span>
              <p className="text-xs text-stone-700 leading-snug">
                The entire campus is challenge compliant, featuring ramps, accessible restrooms, and inclusive facilities for all students and visitors.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold font-serif">
                400+
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Flora Species</h3>
              <p className="text-[11px] text-stone-500">Trees and plants nurturing biodiversity.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-xl font-bold font-serif">
                8
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Acres Campus</h3>
              <p className="text-[11px] text-stone-500">Spacious learning environment in Delhi.</p>
            </div>

            <div className="col-span-2 bg-white p-6 rounded-2xl border border-stone-200 shadow-md text-center space-y-2">
              <div className="text-2xl">♿</div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Challenge Compliant</h3>
              <p className="text-xs text-stone-600">
                100% accessible ramps, elevators, and supportive facilities across all academic blocks.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 pt-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                VISUAL TOUR
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Campus Photo Gallery
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "Campus", "Labs", "Sports", "Arts"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-[#800000] text-white shadow-md"
                      : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200 aspect-[4/3] bg-stone-900"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#800000] px-2.5 py-0.5 rounded-full text-amber-200 inline-block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-sm font-bold font-serif leading-snug">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
