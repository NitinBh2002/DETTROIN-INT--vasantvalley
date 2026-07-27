"use client";

import React from "react";

export default function LearningCurriculumTables() {
  return (
    <section className="w-full font-sans bg-white py-16 lg:py-20 text-stone-900 border-b border-stone-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        <div id="above-and-beyond" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2.5px] bg-[#800000]"></span>
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
              ENRICHED CURRICULUM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Going Above & Beyond
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-700 text-sm leading-relaxed">
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold font-serif text-stone-900 text-base">Beyond Prescribed Syllabus</h3>
              <p className="text-xs text-stone-600">
                The curriculum goes beyond the prescribed CBSE syllabus, where the process is as important as the outcome. We nurture the cerebral, social, emotional, physical, spiritual and creative development of every child.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold font-serif text-stone-900 text-base">Humane Value System</h3>
              <p className="text-xs text-stone-600">
                A wide array of activities and a holistic curriculum structure nurtures well-rounded individuals. The focus is on collaboration and doing the right thing even when &apos;no one is looking&apos;.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#800000]">Key Skill</div>
              <h3 className="font-bold font-serif text-stone-900 text-base">Learning How to Learn</h3>
              <p className="text-xs text-stone-600">
                Critical thinking and &apos;learning how to learn&apos; are the key skills that students and teachers are encouraged to develop at Vasant Valley School.
              </p>
            </div>
          </div>
        </div>

        <div id="grade11-12-subjects" className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-6">
          <div>
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
              SENIOR SECONDARY SUBJECT SELECTION
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Grade 11 & 12 Subject Elective Options
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Students select their subjects across four elective pools:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#800000] text-white">
                  <th className="p-3.5 font-bold rounded-tl-xl">Elective 1</th>
                  <th className="p-3.5 font-bold">Elective 2</th>
                  <th className="p-3.5 font-bold">Elective 3</th>
                  <th className="p-3.5 font-bold rounded-tr-xl">Elective 4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700 bg-white">
                <tr>
                  <td className="p-3">Business Studies</td>
                  <td className="p-3">Accountancy</td>
                  <td className="p-3">Applied Art</td>
                  <td className="p-3">Biology</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="p-3">Economics</td>
                  <td className="p-3">Applied Art</td>
                  <td className="p-3">Physical Education</td>
                  <td className="p-3">Computer Science</td>
                </tr>
                <tr>
                  <td className="p-3">History</td>
                  <td className="p-3">Chemistry</td>
                  <td className="p-3">Pure Mathematics</td>
                  <td className="p-3">Economics</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="p-3">Mass Media</td>
                  <td className="p-3">Computer Science</td>
                  <td className="p-3">Sociology</td>
                  <td className="p-3">Entrepreneurship</td>
                </tr>
                <tr>
                  <td className="p-3">Painting</td>
                  <td className="p-3">Home Science</td>
                  <td className="p-3">Web Applications</td>
                  <td className="p-3">Geography</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="p-3">Physics</td>
                  <td className="p-3">Political Science</td>
                  <td className="p-3">Hindustani Vocal Music</td>
                  <td className="p-3">Psychology</td>
                </tr>
                <tr>
                  <td className="p-3">Sociology</td>
                  <td className="p-3">Psychology</td>
                  <td className="p-3">Tabla</td>
                  <td className="p-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="igcse" className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-xl space-y-8">
          <div className="border-b border-amber-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                CAMBRIDGE INTERNATIONAL CURRICULUM
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Cambridge IGCSE (Class 9 & 10)
              </h3>
            </div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#800000] text-white">
              Registered Cambridge International School
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-stone-700 leading-relaxed">
            <div className="bg-white p-6 rounded-2xl border border-amber-200/80 space-y-2">
              <h4 className="font-bold text-[#800000] uppercase tracking-wider text-xs">Why IGCSE?</h4>
              <p>
                Considered the most &apos;popular&apos; International Certification for 14-16-year-olds, the core of the IGCSE curriculum emphasizes a practical approach to learning based on inquiry. It works towards developing analytical, problem-solving, and communication skills. Learners ask questions, explore, brainstorm, discuss and share ideas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-200/80 space-y-2">
              <h4 className="font-bold text-[#800000] uppercase tracking-wider text-xs">Why IGCSE at Vasant Valley?</h4>
              <p>
                The teaching-learning process in Vasant Valley School is synchronised to the methods followed by the Cambridge Board. The essence of our pedagogy is &apos;learning for understanding&apos; and reading beyond course books, which epitomises the IGCSE philosophy.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-stone-900">
              Grade 9 IGCSE Subject Selection Scheme (9 Subjects Total):
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#800000] text-white">
                    <th className="p-3.5 font-bold rounded-tl-xl">Category</th>
                    <th className="p-3.5 font-bold rounded-tr-xl">Subject Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 bg-white">
                  <tr>
                    <td className="p-3 font-bold text-stone-900 bg-stone-50">Mandatory</td>
                    <td className="p-3">English Language, Global Perspectives</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-stone-900 bg-stone-50">Elective 1</td>
                    <td className="p-3">Spanish / Hindi / (French *to be studied privately)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-stone-900 bg-stone-50">Elective 2</td>
                    <td className="p-3">English Literature, Information and Communication Technology (ICT)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-stone-900 bg-stone-50">Elective 3</td>
                    <td className="p-3">Economics, Physics, History</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-stone-900 bg-stone-50">Elective 4</td>
                    <td className="p-3">Extended Mathematics</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-stone-900 bg-stone-50">Elective 5</td>
                    <td className="p-3">Biology, Coordinated Sciences, Economics</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-stone-900 bg-stone-50">Elective 6</td>
                    <td className="p-3">Art and Design, Computer Science</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-stone-900 bg-stone-50">Elective 7</td>
                    <td className="p-3">Chemistry, Business Studies, Environmental Management</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
