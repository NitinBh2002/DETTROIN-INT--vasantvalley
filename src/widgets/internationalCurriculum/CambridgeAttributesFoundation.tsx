"use client";

import React from "react";

const LEARNER_ATTRIBUTES = [
  {
    title: "Confident",
    desc: "in working with information and ideas – their own and those of others.",
    icon: "🌟",
  },
  {
    title: "Responsible",
    desc: "for themselves, responsive to and respectful of others.",
    icon: "🤝",
  },
  {
    title: "Reflective",
    desc: "as learners, developing their ability to learn.",
    icon: "🧘",
  },
  {
    title: "Innovative",
    desc: "and equipped for new and future challenges.",
    icon: "💡",
  },
  {
    title: "Engaged",
    desc: "intellectually and socially, ready to make a difference.",
    icon: "🔥",
  },
];

export default function CambridgeAttributesFoundation() {
  return (
    <section className="w-full font-sans bg-white py-16 lg:py-20 text-stone-900 border-b border-stone-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        <div id="attributes" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200 pb-4 gap-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                FIVE CORE PILLARS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Cambridge Learner Attributes
              </h2>
            </div>
            <a
              href="https://www.cambridgeinternational.org/why-choose-us/parents-and-students/in-class/the-cambridge-learner-attributes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#800000] hover:underline"
            >
              Learn More at Cambridge &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LEARNER_ATTRIBUTES.map((attr, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 hover:border-[#800000] transition-colors space-y-2 text-center"
              >
                <div className="text-2xl">{attr.icon}</div>
                <h3 className="font-serif font-bold text-stone-900 text-sm">{attr.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="foundation-year" className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-xl space-y-8">
          <div className="border-b border-amber-200 pb-6">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
              CLASS 8 PREPARATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Why Cambridge Foundation Year?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-700">
            <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-2">
              <div className="text-xl">🚀</div>
              <h4 className="font-bold text-stone-900 text-sm font-serif">Head Start on Skills</h4>
              <p>Head start on building the skills integral towards readiness for the IGCSE Programme.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-2">
              <div className="text-xl">🌉</div>
              <h4 className="font-bold text-stone-900 text-sm font-serif">Smooth Transition</h4>
              <p>Bridges the shift from CBSE/other curricula to the Cambridge system, reducing adjustment pressure in Class 9.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200 space-y-2">
              <div className="text-xl">🔍</div>
              <h4 className="font-bold text-stone-900 text-sm font-serif">Discipline Sampling</h4>
              <p>Sample a range of disciplines before making finalized subject choices for IGCSE.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-stone-900">
              List of Cambridge Foundation Year Subjects Offered at Vasant Valley School:
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#800000] text-white">
                    <th className="p-3.5 font-bold rounded-tl-xl">Department</th>
                    <th className="p-3.5 font-bold rounded-tr-xl">Subject Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 bg-white">
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Languages *</td>
                    <td className="p-3.5">
                      English Language and Literature, and Spanish or Hindi Language and Literature
                      <div className="text-[11px] text-stone-500 mt-1 italic">
                        * CBSE requires students to have studied 3 languages up to Class 8 to be eligible for CBSE Class 10 exams.<br />
                        * Some Indian universities require Hindi up to Class 8. Please complete due diligence before choosing.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Humanities & Social Sciences</td>
                    <td className="p-3.5">History, Economics, Environment Geography*, Global Perspectives**</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Sciences</td>
                    <td className="p-3.5">Biology, Physics, Chemistry, Environmental Management*</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Mathematics</td>
                    <td className="p-3.5">Mathematics</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Creative & Professional</td>
                    <td className="p-3.5">Art and Design, Applied Computing, Global Perspectives**</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-stone-500 italic">
              * Cambridge recognises Environmental Management as both a Science and a subject under Humanities.<br />
              ** Global Perspectives qualifies as both a Humanities subject and a Creative & Professional subject.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
