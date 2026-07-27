"use client";

import React, { useState } from "react";
import PageHero from "@/src/components/PageHero";

interface AnnouncementItem {
  id: string;
  category: "Academic" | "Event" | "Admission" | "Important";
  title: string;
  description: string;
  date: string;
  iconType: "academic" | "event" | "admission" | "important";
  link?: string;
  important?: boolean;
}

const ALL_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "1",
    category: "Academic",
    title: "CBSE Class X & XII Board Exam Results 2024–25",
    description:
      "Vasant Valley School achieves 100% pass rate in CBSE Board examinations. Congratulations to all students and faculty members for extraordinary academic excellence.",
    date: "22 May 2024",
    iconType: "academic",
    important: true,
  },
  {
    id: "2",
    category: "Event",
    title: "Annual Sports & Athletic Meet 2024–25",
    description:
      "Annual Sports Day scheduled at the Main Athletic Ground. Parents and guardians are cordially invited to cheer for young athletes.",
    date: "15 June 2024",
    iconType: "event",
  },
  {
    id: "3",
    category: "Admission",
    title: "Registration Open for Foundation & Class XI (AS Levels)",
    description:
      "Online application portal is active for Academic Session 2026–27. Check eligibility criteria, schedule, and required document verification list.",
    date: "01 April 2024",
    iconType: "admission",
    important: true,
  },
  {
    id: "4",
    category: "Important",
    title: "Revised Summer School Timings & Bus Routes",
    description:
      "Please note the updated arrival and departure timings for Foundation to Class 12 starting next Monday. Transport schedules are updated online.",
    date: "28 May 2024",
    iconType: "important",
  },
  {
    id: "5",
    category: "Academic",
    title: "National Science Congress & STEM Innovation Laurels",
    description:
      "Our Junior STEM team won 1st prize at the National Science Congress for designing a zero-emission water purification model.",
    date: "10 June 2024",
    iconType: "academic",
  },
  {
    id: "6",
    category: "Event",
    title: "Inter-School Debating Championship & Symposium",
    description:
      "Vasant Valley School will host the 28th Annual Debate Competition featuring 35 top schools from across India.",
    date: "18 August 2024",
    iconType: "event",
  },
  {
    id: "7",
    category: "Admission",
    title: "Shortlisted Candidates List 2026–27 Foundation Batch",
    description:
      "First list of registered candidates for Foundation Class admissions has been published on the school portal.",
    date: "12 January 2025",
    iconType: "admission",
  },
  {
    id: "8",
    category: "Important",
    title: "Parent-Teacher Conference (PTC) Schedule",
    description:
      "Quarterly Parent-Teacher Interaction for Junior & Senior school will be conducted in the main building alcoves.",
    date: "05 October 2024",
    iconType: "important",
  },
];

export default function AllAnnouncementsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredAnnouncements = ALL_ANNOUNCEMENTS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderIcon = (type: AnnouncementItem["iconType"]) => {
    switch (type) {
      case "academic":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      case "event":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "admission":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "important":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      <PageHero
        badge="VASANT VALLEY ANNOUNCEMENTS"
        title="Official Notices & Updates"
        description="Stay informed with official school circulars, academic notices, event schedules, and admissions updates from Vasant Valley School."
        backgroundImage="/about-image.jpg"
      />

      <div className="bg-[#FAF5EE] py-6 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="max-w-xl mx-auto">
            <div className="relative flex items-center bg-white rounded-full p-2 shadow-md border border-stone-200">
              <span className="pl-4 text-stone-400">
                <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search announcements (e.g. CBSE, admissions, sports, timings)..."
                className="w-full px-3 py-2 text-xs text-stone-900 placeholder-stone-400 bg-transparent focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="pr-4 text-stone-400 hover:text-stone-700 text-xs font-bold cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["All", "Academic", "Event", "Admission", "Important"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#800000] text-white shadow-md scale-105"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {cat === "All" ? "All Notices" : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 space-y-12">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2.5px] bg-[#800000]"></span>
            <h2 className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
              SHOWING {filteredAnnouncements.length} ANNOUNCEMENTS
            </h2>
          </div>

          <span className="text-xs text-stone-500 font-medium">Updated Daily</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnnouncements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group border-t-4 border-t-[#800000]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-red-50 border border-[#800000]/20 flex items-center justify-center group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300">
                    {renderIcon(item.iconType)}
                  </div>

                  <span className="text-[10px] font-extrabold tracking-widest text-[#800000] bg-red-100/70 px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug group-hover:text-[#800000] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs font-medium">
                <div className="flex items-center gap-1.5 text-stone-500">
                  <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={1.8} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <span>{item.date}</span>
                </div>

                <a
                  href="/admissions"
                  className="flex items-center gap-1 text-[#800000] hover:text-[#600010] font-bold group-hover:translate-x-1 transition-transform"
                >
                  <span>Details</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
