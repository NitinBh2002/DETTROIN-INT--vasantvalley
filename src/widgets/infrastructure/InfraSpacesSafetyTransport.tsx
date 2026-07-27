"use client";

import React from "react";

export default function InfraSpacesSafetyTransport() {
  return (
    <section className="w-full font-sans bg-white py-16 lg:py-20 text-stone-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        <div id="learning-spaces" className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8">
          <div className="border-b border-stone-200 pb-6 flex items-center justify-between">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                ACADEMIC & CREATIVE FACILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Learning Spaces
              </h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center text-xl shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.595 15.12a2 2 0 00-1.8 2.37l.794 3.97a2 2 0 001.96 1.61h11.002a2 2 0 001.96-1.61l.794-3.97a2 2 0 00-.887-2.072z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v9m-3-6h6" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                The School has well-equipped <strong>Science laboratories</strong>, two libraries, a state-of-the-art <strong>Occupational Therapy facility</strong>, an auditorium and gymnasium, extensive sports facilities and a specialized centre for the <strong>Visual and Performing Arts</strong>.
              </p>
              <p>
                All classrooms are equipped for streaming audio/visual content and the entire campus is wireless enabled for interactive learning.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900">Two Libraries</h4>
                <p className="text-[11px] text-stone-500">Rich collection of books & digital resources.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900">Occupational Therapy</h4>
                <p className="text-[11px] text-stone-500">Specialized sensory & motor facility.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900">Arts Centre & Auditorium</h4>
                <p className="text-[11px] text-stone-500">Visual arts studios & performance hall.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900">Wi-Fi Enabled Campus</h4>
                <p className="text-[11px] text-stone-500">Smart A/V streaming in all classrooms.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="health-safety" className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-xl space-y-8">
          <div className="border-b border-amber-200 pb-6 flex items-center justify-between">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                STUDENT & STAFF WELLBEING
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Health & Safety
              </h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center text-xl shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-4 text-stone-700 text-sm leading-relaxed">
              <h3 className="text-base font-bold text-stone-900 font-serif border-b border-stone-200 pb-2">
                Medical Care & Emergency Response
              </h3>
              <p>
                To ensure high quality primary medical care for the students and teachers, we have <strong>3 full time, qualified nurses</strong> on the campus and a <strong>Paediatrician available on call</strong>.
              </p>
              <p>
                There are two fully equipped medical rooms and by virtue of our location, we have several major hospitals within a kilometre of the school campus.
              </p>
              <p className="text-xs text-stone-600">
                We regularly conduct trainings, workshops and seminars to educate our students and staff on First Responder drills for health, fire, earthquakes and other natural disasters. All staff members and senior students are trained in basic minimum first aid.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4 text-stone-700 text-sm leading-relaxed">
              <h3 className="text-base font-bold text-stone-900 font-serif border-b border-stone-200 pb-2">
                Campus Security & Cyber Safety
              </h3>
              <p>
                An annual health check-up is conducted for students as well as all staff members. Our foremost priority is the safety and security of everyone on campus as well as the community.
              </p>
              <div className="bg-white p-5 rounded-2xl border border-amber-200 text-xs space-y-2">
                <p className="font-semibold text-[#800000]">Zero Tolerance Policy:</p>
                <p>
                  CCTV cameras, fire extinguishers, and air purifiers are installed throughout the school building and grounds. The School has a strict zero-tolerance policy regarding bullying and substance abuse. Regular workshops are held regarding Cyber Safety and safe technology use.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="transport" className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8">
          <div className="border-b border-stone-200 pb-6 flex items-center justify-between">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                COMMUTE & FLEET SAFETY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                School Transport
              </h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center text-xl shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h8m-8 4h8m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                Students from the neighbouring areas of South Delhi can avail the facility of school transport. The School encourages carpooling amongst the students who come to school in their own vehicles.
              </p>
              <p>
                We also encourage parents to organize private buses in areas where the School buses do not ply. The buses comply strictly with all guidelines of the Government of NCT, Delhi and the Hon&apos;ble Supreme Court of India.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#800000]">Fleet Guidelines</h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#800000] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>GPS Tracking & CCTV in buses</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#800000] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trained female attendants on board</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#800000] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Speed governors & first-aid kits</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#800000] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Supreme Court safety compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
