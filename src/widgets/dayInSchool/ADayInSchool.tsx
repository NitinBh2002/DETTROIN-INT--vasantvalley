"use client";

import React from "react";
import PageHero from "@/src/components/PageHero";

export default function ADayInSchool() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      
      <PageHero
        badge="VASANT VALLEY CAMPUS LIFE"
        title="A Day in School"
        description="An invigorating and dynamic learning experience, both inside and outside the classroom."
        backgroundImage="/a-day-banner.jpg"
      />

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                THE LEARNING ENVIRONMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif leading-tight text-stone-900">
              Invigorating, Dynamic & Social
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              A typical day in Vasant Valley School involves an invigorating and dynamic learning experience, both inside and outside the classroom.
            </p>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-[#800000] shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 font-serif">Classroom Alcoves & Social Hubs</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every year group is divided into three sections with about 30 students each. The classrooms are built around an alcove which is the hub of social interaction for the children.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-2 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-xl font-bold font-serif">
                30
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">Students Per Section</h4>
              <p className="text-[11px] text-stone-500">Ensuring personalized teacher guidance.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-2 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-xl font-bold font-serif">
                3
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">Sections Per Class</h4>
              <p className="text-[11px] text-stone-500">Collaborative learning communities.</p>
            </div>

            <div className="col-span-2 bg-[#FAF5EE] p-6 rounded-2xl border border-amber-200 text-center space-y-2">
              <div className="text-2xl">🎵</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#800000]">No Bells, Just Music!</h4>
              <p className="text-xs text-stone-600">
                You will know that it&apos;s break time in school when you hear music playing in the corridors.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8">
          <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                DAILY STRUCTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                The Daily Schedule
              </h2>
            </div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
              8:00 AM - 3:00 PM
            </span>
          </div>

          <p className="text-stone-700 text-sm leading-relaxed">
            School timings are from <strong>8:00 am to 3:00 pm</strong> and the day is divided into four blocks with three breaks in between:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-center space-y-2 hover:border-[#800000] transition-colors">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#800000] block">BLOCK 1</span>
              <div className="text-lg font-serif font-bold text-stone-900">8:00 am – 9:35 am</div>
              <p className="text-[11px] text-stone-500">Morning Assembly & Core Academics</p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-center space-y-2 hover:border-[#800000] transition-colors">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#800000] block">BLOCK 2</span>
              <div className="text-lg font-serif font-bold text-stone-900">9:50 am – 11:10 am</div>
              <p className="text-[11px] text-stone-500">Interactive Learning & Projects</p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-center space-y-2 hover:border-[#800000] transition-colors">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#800000] block">BLOCK 3</span>
              <div className="text-lg font-serif font-bold text-stone-900">11:20 am – 1:20 pm</div>
              <p className="text-[11px] text-stone-500">Labs, Arts & Domain Learning</p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-center space-y-2 hover:border-[#800000] transition-colors">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#800000] block">BLOCK 4</span>
              <div className="text-lg font-serif font-bold text-stone-900">1:45 pm – 3:00 pm</div>
              <p className="text-[11px] text-stone-500">Co-Curricular & Class Reflections</p>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
            <h3 className="text-xs font-bold text-[#800000] uppercase tracking-wider">
              Timings for Early Year Groups
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200">
                <span className="font-bold text-stone-900">Foundation</span>
                <span className="font-serif font-semibold text-[#800000]">9:30 am to 1:00 pm</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200">
                <span className="font-bold text-stone-900">Nursery</span>
                <span className="font-serif font-semibold text-[#800000]">8:00 am to 1:00 pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
              ENRICHMENT & REFRESHMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Making the Most of Each School Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200">
              <div className="w-10 h-10 rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-lg">
                ⏱️
              </div>
              <h3 className="text-base font-bold text-stone-900 font-serif">Flexible Lesson Duration</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The duration of lessons varies from 20 to 60 minutes for different year groups. There are no bells ringing in school to indicate the beginning or end of a lesson. You will know that it&apos;s break time when music plays in the corridors!
              </p>
            </div>

            <div className="space-y-3 bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200">
              <div className="w-10 h-10 rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-lg">
                🍱
              </div>
              <h3 className="text-base font-bold text-stone-900 font-serif">Three Nutritious Breaks</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We have three breaks in the day: breakfast, midday break, and lunch. All children eat breakfast and lunch provided in school. The menu for the meals is accessible to students and parents.
              </p>
            </div>

            <div className="space-y-3 bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200">
              <div className="w-10 h-10 rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-lg">
                ⚽
              </div>
              <h3 className="text-base font-bold text-stone-900 font-serif">After-School Extension Camps</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                After 3:00 pm, children from Class 3 to 12 have the option of staying back for camps in sports and art forms. Conducted by domain experts, these camps hone skills in specific areas of interest.
              </p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
