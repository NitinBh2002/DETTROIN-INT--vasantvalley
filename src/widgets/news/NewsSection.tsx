"use client";

import React, { useState } from "react";
import PageHero from "@/src/components/PageHero";

interface NewsItem {
  id: string;
  title: string;
  category: "Achievement" | "Academics" | "Sports" | "Cultural" | "Announcement";
  date: string;
  readTime: string;
  image: string;
  summary: string;
  featured?: boolean;
}

interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  tag: string;
}

const NEWS_ARTICLES: NewsItem[] = [
  {
    id: "1",
    title: "Representing India at the 17th Hwa Chong Asia-Pacific Young Leaders Summit 2026",
    category: "Achievement",
    date: "July 24, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    summary: "Vasant Valley School delegates showcased exceptional leadership and diplomacy at the international youth summit held in Singapore.",
    featured: true,
  },
  {
    id: "2",
    title: "Vasant Valley Ranked Top Co-Educational Day School in India",
    category: "Academics",
    date: "July 18, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    summary: "Recognized for holistic academic development, sports infrastructure, and innovative teaching methodologies in the national school survey.",
  },
  {
    id: "3",
    title: "Annual Sports Meet: Senior Basketball Team Clinches Inter-School Championship",
    category: "Sports",
    date: "July 12, 2026",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
    summary: "Our senior boys and girls teams displayed formidable teamwork and skill, securing gold medals in the CBSE regional tournament.",
  },
  {
    id: "4",
    title: "Intra-School Performing Arts & Music Festival 'Tarang 2026'",
    category: "Cultural",
    date: "June 28, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    summary: "Over 400 students across junior and senior school participated in classical music, contemporary drama, and vocal performances.",
  },
  {
    id: "5",
    title: "Teacher Enrichment Programme: Global Pedagogy & Mindfulness Workshop",
    category: "Announcement",
    date: "June 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    summary: "Faculty members completed specialized training modules on inclusive education, project-based learning, and student counseling.",
  },
  {
    id: "6",
    title: "India University Fair 2026 Hosted at Vasant Valley Campus",
    category: "Academics",
    date: "May 30, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    summary: "Representatives from over 45 leading Indian and global universities interacted with Class XI and XII students regarding career pathways.",
  },
];

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "e1",
    day: "10",
    month: "AUG",
    title: "Class XI (AS Levels) Entrance Examination (Session 1)",
    time: "10:00 AM - 12:00 PM",
    location: "Main Auditorium",
    tag: "Admissions",
  },
  {
    id: "e2",
    day: "13",
    month: "AUG",
    title: "Class XI (AS Levels) Entrance Examination (Session 2)",
    time: "10:00 AM - 12:00 PM",
    location: "Main Auditorium",
    tag: "Admissions",
  },
  {
    id: "e3",
    day: "25",
    month: "AUG",
    title: "Inter-House Debate Competition (Junior & Senior)",
    time: "09:00 AM - 02:00 PM",
    location: "Mini Amphitheatre",
    tag: "Cultural",
  },
  {
    id: "e4",
    day: "05",
    month: "SEP",
    title: "Teacher's Day Special Assembly & Student Council Presentations",
    time: "08:30 AM - 11:30 AM",
    location: "School Grounds",
    tag: "Celebration",
  },
];

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles = selectedCategory === "All"
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((article) => article.category === selectedCategory);

  const featuredArticle = NEWS_ARTICLES.find((item) => item.featured) || NEWS_ARTICLES[0];

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      
      <PageHero
        badge="VASANT VALLEY SCHOOL"
        title="News & Events"
        description="Discover the latest announcements, achievements, student milestones, and upcoming campus events at Vasant Valley School."
        backgroundImage="/about-image.jpg"
      />

      <div className="bg-[#FAF5EE] py-6 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-2">
          {["All", "Achievement", "Academics", "Sports", "Cultural", "Announcement"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                selectedCategory === cat ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 space-y-16">
        
        {selectedCategory === "All" && featuredArticle && (
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-stone-900">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
              <span className="absolute top-6 left-6 bg-[#800000] text-white text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Featured Story
              </span>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-stone-500 font-semibold">
                  <span className="text-[#800000] font-bold uppercase tracking-wider">{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight group-hover:text-[#800000] transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-stone-600 text-sm leading-relaxed font-normal">
                  {featuredArticle.summary}
                </p>
              </div>

              <div>
                <a
                  href={`#news-${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>Read Full Story</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                LATEST UPDATES
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                School News & Articles
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              Showing {filteredArticles.length} stories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#800000] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-stone-400 font-medium">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug group-hover:text-[#800000] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href={`#news-${article.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#800000] group-hover:underline"
                  >
                    <span>Read Article</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-8">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                MARK YOUR CALENDAR
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Upcoming School Events
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_EVENTS.map((evt) => (
              <div
                key={evt.id}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 hover:border-amber-300 transition-all duration-200 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#800000] text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                  <span className="text-lg font-black leading-none">{evt.day}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-200 leading-tight">
                    {evt.month}
                  </span>
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#800000] bg-red-100 px-2.5 py-0.5 rounded-full">
                      {evt.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-500">{evt.time}</span>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 font-serif leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-stone-600 flex items-center gap-1">
                    <span>📍</span>
                    <span>{evt.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#800000] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-amber-300 text-xs font-extrabold tracking-widest uppercase">
              STAY CONNECTED WITH VASANT VALLEY
            </span>
            <h2 className="text-3xl font-serif font-bold">
              Subscribe to School Newsletter
            </h2>
            <p className="text-stone-200 text-xs sm:text-sm font-light">
              Receive monthly event summaries, student accomplishments, and principal announcements directly in your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-md mx-auto flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 relative z-10"
          >
            <input
              type="email"
              placeholder="Enter parent or student email..."
              className="w-full bg-transparent px-4 py-2 text-xs text-white placeholder-stone-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#800000] hover:bg-amber-100 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 shadow-md transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

      </section>

    </div>
  );
}
