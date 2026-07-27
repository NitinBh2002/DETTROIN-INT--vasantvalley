"use client";

import React from "react";
import Slider from "@/src/components/Slider";

interface AnnouncementItem {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  iconType: "academic" | "event" | "admission" | "important";
  bgType: "cream" | "white";
  link: string;
}

const ANNOUNCEMENTS_DATA: AnnouncementItem[] = [
  {
    id: "1",
    category: "ACADEMIC",
    title: "CBSE Results 2024 Declared",
    description:
      "We are proud to share the outstanding CBSE Class X & XII results. Congratulations to all our students!",
    date: "22 May 2024",
    iconType: "academic",
    bgType: "cream",
    link: "#",
  },
  {
    id: "2",
    category: "EVENT",
    title: "Annual Sports Day 2024",
    description:
      "Join us for our Annual Sports Day on 15th June 2024. Let's celebrate fitness, teamwork and spirit!",
    date: "15 June 2024",
    iconType: "event",
    bgType: "white",
    link: "#",
  },
  {
    id: "3",
    category: "ADMISSION",
    title: "Admissions Open for 2024–25",
    description:
      "Admissions are now open for the Academic Year 2024–25. Apply now to secure your child's future.",
    date: "01 Apr 2024",
    iconType: "admission",
    bgType: "cream",
    link: "#",
  },
  {
    id: "4",
    category: "IMPORTANT",
    title: "School Timing Update",
    description:
      "Please note the new school timings starting 3rd June 2024. Check the timetable for more details.",
    date: "28 May 2024",
    iconType: "important",
    bgType: "white",
    link: "#",
  },
  {
    id: "5",
    category: "ACADEMIC",
    title: "National Science Congress Winners",
    description:
      "Our middle school team won first prize for their innovative renewable energy model.",
    date: "10 June 2024",
    iconType: "academic",
    bgType: "cream",
    link: "#",
  },
];

export default function Announcement() {
  const renderCardIcon = (type: AnnouncementItem["iconType"]) => {
    switch (type) {
      case "academic":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 14l2 2 4-4" />
          </svg>
        );
      case "event":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 013 10c0-1.61.954-3.003 2.34-3.666L11 3.5v13.5l-5.564-3.317z" />
          </svg>
        );
      case "admission":
        return (
          <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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
    <section className="w-full font-sans bg-[#F9F8F6] text-stone-900 pb-16">
      <div className="relative bg-[#7A0016] text-white py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-64 opacity-10 pointer-events-none flex items-center">
          <div className="w-48 h-48 border-4 border-white rotate-45 transform -translate-x-16"></div>
          <div className="w-32 h-32 border-4 border-white rotate-45 transform -translate-x-8"></div>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
          <div className="w-52 h-52 rounded-full border-4 border-amber-200 flex items-center justify-center">
            <svg className="w-32 h-32 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <span className="text-amber-300 text-xs tracking-widest font-bold uppercase block">
            ANNOUNCEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight">
            Stay Updated with What&apos;s Happening
          </h2>
          <p className="text-stone-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Find the latest news, important updates, and upcoming events from Vasant Valley Centre for Excellence in Education.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 -mt-8 relative z-20">
        <Slider>
          {ANNOUNCEMENTS_DATA.map((item) => (
            <div
              key={item.id}
              className={`min-w-[280px] sm:min-w-[310px] lg:min-w-[325px] max-w-[340px] flex-1 snap-start rounded-2xl border ${
                item.bgType === "cream" ? "bg-[#FFFDF8] border-amber-200/80" : "bg-white border-stone-200"
              } p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="w-12 h-12 rounded-full border border-[#800000]/30 flex items-center justify-center mb-5 group-hover:bg-[#800000]/10 transition-colors">
                  {renderCardIcon(item.iconType)}
                </div>

                <span className="text-[11px] font-extrabold tracking-wider text-[#800000] uppercase block mb-2">
                  {item.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug mb-3 group-hover:text-[#800000] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed font-normal mb-6">
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
                  href={item.link}
                  className="flex items-center gap-1 text-[#800000] hover:text-[#660000] font-bold group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read More</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-10">
          <button className="bg-[#7A0016] hover:bg-[#600010] text-white px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
            VIEW ALL ANNOUNCEMENTS
          </button>
        </div>
      </div>
    </section>
  );
}
