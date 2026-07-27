"use client";

import React from "react";
import Image from "next/image";
import PageHero from "@/src/components/PageHero";
import Button from "@/src/components/Button";

interface LeaderCard {
  name: string;
  role: string;
  period?: string;
  image?: string;
  details?: string[];
}

const FOUNDERS = [
  {
    name: "Ms. Rekha Purie",
    role: "Chairperson",
    image: "/Rekha-Purie-1.jpg",
    bio: "Chairperson of Vasant Valley School. Co-envisioned a learning environment where Arts, Sports, and character building are as vital as academic excellence.",
  },
  {
    name: "Mr. Aroon Purie",
    role: "Co-Founder & Trustee",
    image: "/Aroon-Purie-2.jpg",
    bio: "Envisioned a paradigm where being a good citizen is more important than being a good student, nurturing independent minds to actualise their unique potential.",
  },
  {
    name: "Mr. Ved Vyas",
    role: "Founder-Principal (Modern School, Vasant Vihar)",
    image: "/Ved-Vyas-1-1.jpg",
    bio: "Worked closely with Mr. and Mrs. Purie to establish the vision & philosophy. Penmed the lyrics of the School Song 'Shreshtha Tamaya Karmane' (Excellence in Deed).",
  },
  {
    name: "Mr. Arun Kapur",
    role: "First Headmaster (1990 - 2020)",
    image: "/Arun-Kapur-1.jpg",
    bio: "Appointed first Headmaster in 1990. Led the school for 30 years with the initial group of 16 teachers, building Vasant Valley into a premier co-educational day school in India.",
  },
];

const PAST_LEADERS: LeaderCard[] = [
  {
    name: "Ranu Dattagupta",
    role: "Principal (1998 - 1999)",
    image: "/ranu.jpg",
    details: ["Principal: 1998 - 1999", "Head of Senior School: 1997 – 1999"],
  },
  {
    name: "Paramjit Kaur Narang",
    role: "Head of School (2001 - 2002)",
    image: "/narang.jpg",
    details: ["Head of School: 2001 - 2002", "Head of Senior School: 2000 - 2001", "Head of Junior School: 1993 - 2000"],
  },
  {
    name: "Peilu Oberoi",
    role: "Principal (2000 - 2006)",
    image: "/Peilu-Oberoi-1.jpg",
    details: ["Principal: 2000 - 2006", "Head of Junior School: 2000 - 2006"],
  },
  {
    name: "Rekha Bakshi",
    role: "Head of Junior School",
    image: "/Rekha-Bakshi-1.jpg",
    details: ["Head of Junior School: 2006 – 2019"],
  },
  {
    name: "Abha Ranjan",
    role: "Head of Special Section",
    image: "/abha.jpg",
    details: ["Head of Special Section: 1997 - 2002"],
  },
  {
    name: "Shalini Dave",
    role: "Head of Special Section",
    image: "/Shalini-Dave-1.jpg",
    details: ["Head of Special Section: 2002 – 2012"],
  },
  {
    name: "Sushmita Mitra",
    role: "Head of Special Section",
    image: "/Sushmita-Mitra-1.jpg",
    details: ["Head of Special Section: 2012 – 2022"],
  },
  {
    name: "Rekha Krishnan",
    role: "Principal (2006 - March 2025)",
    image: "/Rekha-Krishnan.jpeg",
    details: ["Principal: 2006 - March 2025"],
  },
];

const CURRENT_LEADERSHIP = [
  {
    name: "Sharmila Bakshi",
    role: "Principal",
    icon: "/sharmila.jpg",
  },
  {
    name: "Vijay Trivedi",
    role: "Head of Senior School",
    icon: "/vijay_trivedi_2-scaled.jpeg",
  },
  {
    name: "Mona Datta",
    role: "Head of Junior School",
    icon: "/mona-dutta.jpg",
  },
  {
    name: "A. P. John",
    role: "Administrative Head",
    icon: "/john.jpg",
  },
];

export default function AboutUs() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">

      <PageHero
        badge="ABOUT VASANT VALLEY SCHOOL"
        title="Excellence in Deed"
        description="Run by the Education Today Trust, Vasant Valley School is the realisation of Mr. Aroon Purie and Mrs. Rekha Purie’s vision of the ideal school experience for children."
        backgroundImage="/about-image.jpg"
        primaryButton={{ text: "Our Vision", href: "#vision" }}
        secondaryButton={{ text: "Leadership", href: "#leadership" }}
      />

      <section id="vision" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                THE FOUNDING PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
              <span className="font-normal">Nurturing</span> <br />
              <span className="font-bold text-[#800000]">Independent Minds</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              Mr. and Mrs. Purie envisioned a learning experience in which the Arts and Sports are as important as academic learning, creating a paradigm where being a good citizen was more important than being a good student.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal border-l-4 border-[#800000] pl-4 italic">
              &quot;Vasant Valley School aims to nurture independent minds, and create a space where students are encouraged to actualise their innate and unique potential.&quot;
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#800000] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-stone-900">Arts & Culture</h3>
                <p className="text-xs text-stone-600">Equally emphasized alongside academic learning.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#800000] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-stone-900">Sports & Fitness</h3>
                <p className="text-xs text-stone-600">Building team character and physical agility.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/about-image.jpg"
                  alt="Vasant Valley School Campus"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200 shadow-lg">
                <h4 className="text-sm font-bold text-stone-900">Vasant Valley School Campus</h4>
                <p className="text-xs text-stone-600">Spread over eight acres in Vasant Kunj, New Delhi, India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="founders" className="bg-white py-16 lg:py-24 border-t border-stone-200/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
              PIONEERS & FOUNDERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              The Visionaries Behind The Institution
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              The foundational pillars whose foresight established Vasant Valley School&apos;s educational paradigm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-200 shadow-inner">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-base font-bold font-serif leading-snug">{founder.name}</h3>
                      <p className="text-[11px] text-amber-300 font-semibold mt-0.5">{founder.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="past-leaders" className="py-16 lg:py-24 bg-[#F5F2EC] border-t border-stone-200/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
              30 YEARS OF LEGACY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Past School Leaders & Pillars
            </h2>
            <p className="text-stone-700 text-xs sm:text-sm italic">
              &quot;The School stands proud and tall on the shoulders of those who have strengthened the motto of Excellence in Deed over the last 30 years.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAST_LEADERS.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-200 space-y-4 group"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shadow-sm shrink-0 bg-stone-100">
                  <Image
                    src={leader.image || "/about-image.jpg"}
                    alt={leader.name}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div>
                  <h3 className="text-base font-bold text-stone-900">{leader.name}</h3>
                  <p className="text-xs font-semibold text-[#800000]">{leader.role}</p>
                </div>

                <div className="pt-2 border-t border-stone-100 space-y-1">
                  {leader.details?.map((detail, dIdx) => (
                    <p key={dIdx} className="text-[11px] text-stone-600 font-medium">
                      • {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-white py-16 lg:py-24 border-t border-stone-200/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
              CURRENT GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              The Current Leadership Team
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Guiding Vasant Valley School with commitment, innovation, and educational vision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURRENT_LEADERSHIP.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-2xl p-6 border-2 border-amber-200/80 shadow-md text-center space-y-4 hover:border-[#800000] transition-all duration-300 group"
              >
                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#800000] shadow-md shrink-0 bg-stone-100">
                  <Image
                    src={member.icon}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-stone-900">{member.name}</h3>
                  <p className="text-xs font-extrabold text-[#800000] uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-8 lg:p-10 border border-stone-200 space-y-4 max-w-4xl mx-auto text-stone-700 text-xs sm:text-sm leading-relaxed">
            <h3 className="text-lg font-serif font-bold text-[#800000] border-b border-amber-200/80 pb-2">
              Heads of Department & Coordinators
            </h3>
            <p>
              Each domain area has a Head of Department and the ten Heads of Department work very closely with the Leadership Team to ensure an optimal school experience for our students.
            </p>
            <p>
              The curriculum, both academic and non-academic is structured around the Areas of Development. Five Teacher Coordinators are responsible for the Cerebral, Creative, Physical, Social-Emotional and Spiritual Development of all students and staff. The Coordinators in charge of various year groups, are responsible for the execution of plans and processes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#800000] text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium">
            Join the Vasant Valley Family
          </h2>
          <p className="text-stone-200 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Discover admissions, interactive campus tours, and opportunities to excel at Vasant Valley School.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button href="/admissions" variant="white">
              Admissions Portal
            </Button>
            <Button href="/contact" variant="darkOutline">
              Connect with Us
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}