"use client";

import React from "react";

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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Chairperson of Vasant Valley School. Co-envisioned a learning environment where Arts, Sports, and character building are as vital as academic excellence.",
  },
  {
    name: "Mr. Aroon Purie",
    role: "Co-Founder & Trustee",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "Envisioned a paradigm where being a good citizen is more important than being a good student, nurturing independent minds to actualise their unique potential.",
  },
  {
    name: "Mr. Ved Vyas",
    role: "Founder-Principal (Modern School, Vasant Vihar)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Worked closely with Mr. and Mrs. Purie to establish the vision & philosophy. Penmed the lyrics of the School Song 'Shreshtha Tamaya Karmane' (Excellence in Deed).",
  },
  {
    name: "Mr. Arun Kapur",
    role: "First Headmaster (1990 - 2020)",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "Appointed first Headmaster in 1990. Led the school for 30 years with the initial group of 16 teachers, building Vasant Valley into a premier co-educational day school in India.",
  },
];

const PAST_LEADERS: LeaderCard[] = [
  {
    name: "Ranu Dattagupta",
    role: "Principal (1998 - 1999)",
    details: ["Principal: 1998 - 1999", "Head of Senior School: 1997 – 1999"],
  },
  {
    name: "Paramjit Kaur Narang",
    role: "Head of School (2001 - 2002)",
    details: ["Head of School: 2001 - 2002", "Head of Senior School: 2000 - 2001", "Head of Junior School: 1993 - 2000"],
  },
  {
    name: "Peilu Oberoi",
    role: "Principal (2000 - 2006)",
    details: ["Principal: 2000 - 2006", "Head of Junior School: 2000 - 2006"],
  },
  {
    name: "Rekha Bakshi",
    role: "Head of Junior School",
    details: ["Head of Junior School: 2006 – 2019"],
  },
  {
    name: "Abha Ranjan",
    role: "Head of Special Section",
    details: ["Head of Special Section: 1997 - 2002"],
  },
  {
    name: "Shalini Dave",
    role: "Head of Special Section",
    details: ["Head of Special Section: 2002 – 2012"],
  },
  {
    name: "Sushmita Mitra",
    role: "Head of Special Section",
    details: ["Head of Special Section: 2012 – 2022"],
  },
  {
    name: "Rekha Krishnan",
    role: "Principal (2006 - March 2025)",
    details: ["Principal: 2006 - March 2025"],
  },
];

const CURRENT_LEADERSHIP = [
  {
    name: "Sharmila Bakshi",
    role: "Principal",
    icon: "🎓",
  },
  {
    name: "Vijay Trivedi",
    role: "Head of Senior School",
    icon: "🏛️",
  },
  {
    name: "Mona Datta",
    role: "Head of Junior School",
    icon: "📚",
  },
  {
    name: "A. P. John",
    role: "Administrative Head",
    icon: "💼",
  },
];

export default function AboutUs() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      
      <section className="relative bg-[#800000] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-image.jpg"
            alt="Vasant Valley School Building"
            className="w-full h-full object-cover opacity-25 filter brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-[#800000]/90 to-[#660000]/85 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-96 opacity-10 pointer-events-none flex items-center justify-end overflow-hidden z-10">
          <div className="w-72 h-72 border-8 border-white rotate-45 transform translate-x-20"></div>
          <div className="w-48 h-48 border-8 border-white rotate-45 transform translate-x-10"></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            <span>ABOUT VASANT VALLEY SCHOOL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
            Excellence in Deed
          </h1>

          <p className="text-stone-200 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Run by the Education Today Trust, Vasant Valley School is the realisation of Mr. Aroon Purie and Mrs. Rekha Purie’s vision of the ideal school experience for children.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#vision"
              className="bg-white text-[#800000] hover:bg-stone-100 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              Our Vision
            </a>
            <a
              href="#leadership"
              className="border border-white/40 hover:border-white text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              Leadership
            </a>
          </div>
        </div>
      </section>

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
                <div className="text-2xl">🎨</div>
                <h3 className="text-sm font-bold text-stone-900">Arts & Culture</h3>
                <p className="text-xs text-stone-600">Equally emphasized alongside academic learning.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-1.5">
                <div className="text-2xl">🏆</div>
                <h3 className="text-sm font-bold text-stone-900">Sports & Fitness</h3>
                <p className="text-xs text-stone-600">Building team character and physical agility.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/about-image.jpg"
                  alt="Vasant Valley School Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-200">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-base font-bold font-serif">{founder.name}</h3>
                      <p className="text-[11px] text-amber-300 font-medium">{founder.role}</p>
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
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 text-[#800000] flex items-center justify-center font-serif font-bold text-sm">
                  {leader.name.charAt(0)}
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
                className="bg-[#FFFDF9] rounded-2xl p-6 border-2 border-amber-200/80 shadow-md text-center space-y-4 hover:border-[#800000] transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#800000] text-white flex items-center justify-center text-2xl shadow-md">
                  {member.icon}
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

      <section className="py-16 lg:py-24 bg-[#FAF6F0] border-t border-stone-200/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                OUR FACULTY
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
                Staff & Teacher Enrichment
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Our staff is a diverse group of individuals, with a strong sense of commitment and a passion for learning. There are more than 150 teachers. All staff members are well qualified in their domain areas. We boast of content-creators for the NCERT and the CBSE, advisors to educational organizations, writers, musicians, theatre artists and sportspersons.
              </p>

              <div className="bg-white p-5 rounded-2xl border-l-4 border-[#800000] shadow-sm space-y-2">
                <span className="text-[#800000] font-serif italic text-base font-bold block">
                  &quot;Learning never stops&quot;
                </span>
                <p className="text-xs text-stone-600">
                  This has been the watermark for all staff at Vasant Valley School. The Teacher Enrichment Programme helps teachers access a vast storehouse of skills and knowledge.
                </p>
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Teachers are encouraged to attend courses across the world to understand global best practices. Diverse training modules range from classroom pedagogy, counseling, to Art, Yoga, and Mindfulness.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center text-xl shadow-md">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Alumni Network</h3>
                  <p className="text-xs text-[#800000] font-bold uppercase">Connected Worldwide</p>
                </div>
              </div>

              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                Since 1999, over 2000 students have graduated from the school and have found their calling all over the world. Their school experience has created bonds that have remained strong.
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Some of our Alumni have become parents and the second generation is already a part of our student body.
              </p>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[11px] text-stone-500 block uppercase font-medium">Contact Alumni Desk</span>
                  <a
                    href="mailto:alumni@vasantvalley.edu.in"
                    className="text-sm font-bold text-[#800000] hover:underline"
                  >
                    alumni@vasantvalley.edu.in
                  </a>
                </div>

                <a
                  href="mailto:alumni@vasantvalley.edu.in"
                  className="bg-[#800000] hover:bg-[#660000] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md"
                >
                  Connect with Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}