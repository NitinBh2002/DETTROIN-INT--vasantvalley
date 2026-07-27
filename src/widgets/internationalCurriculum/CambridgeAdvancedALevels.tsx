"use client";

import React from "react";

export default function CambridgeAdvancedALevels() {
  return (
    <section className="w-full font-sans bg-white py-16 lg:py-24 text-stone-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        <div id="as-a-levels" className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-8">
          <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                CAMBRIDGE ADVANCED PROGRAMME (CLASSES 11-12)
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Cambridge AS and A Levels
              </h2>
            </div>
            <a
              href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-international-as-and-a-levels/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#800000] hover:underline"
            >
              Official AS & A Level Details &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                Cambridge International A Level is typically a <strong>two-year course</strong>, and Cambridge International AS Level is typically <strong>one year</strong>.
              </p>
              <p>
                Universities worldwide value and recognise Cambridge International AS & A Level qualifications since it develops learners&apos; knowledge, independent thinking, handling sources, and logical argumentation.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-stone-200 space-y-3 text-xs text-stone-700">
              <h3 className="font-bold text-stone-900 text-sm font-serif">Assessment Options at Vasant Valley</h3>
              
              <div className="space-y-2">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-[#800000]">1. AS Level Only:</strong> Syllabus content is half a Cambridge International A Level.
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-[#800000]">2. Staged Assessment Route:</strong> Students take AS Level in Class 11 and complete final A Level in Class 12. Marks can be carried forward twice within a 13-month period.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-stone-200 pt-4">
              <h3 className="text-sm font-serif font-bold text-stone-900">
                List of Cambridge AS and A Levels Subjects Offered:
              </h3>
              <span className="text-[11px] text-[#800000] font-bold">
                ** Min 5 takers required per subject
              </span>
            </div>

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
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Optional (AS Level)</td>
                    <td className="p-3.5">
                      English Language General Paper (8021)*
                      <span className="block text-[11px] text-stone-500 italic mt-0.5">
                        * Students may choose not to opt for English General Paper, assuming independent review of target university requirements.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 1 (AS & A Levels)</td>
                    <td className="p-3.5">Physics (9702) / Business (9609) / History (9489)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 2 (AS & A Levels)</td>
                    <td className="p-3.5">Chemistry (9701) / Psychology (9990) / Computer Science (9618)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 3 (AS & A Levels)</td>
                    <td className="p-3.5">Mathematics (9709) / Sociology (9699) / Geography (9696)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 4 (AS & A Levels)</td>
                    <td className="p-3.5">Economics (9708) / Biology (9700) / Art and Design (9479)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#FAF5EE] p-6 rounded-2xl border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h4 className="font-bold text-[#800000] uppercase tracking-wider">Important Examination Series Guidelines</h4>
            <ul className="space-y-1.5 list-disc pl-4 text-stone-600">
              <li>
                The Board Examinations will be administered as a part of the <strong>March Series examinations</strong> for our Cambridge AS and A Level programme.
              </li>
              <li>
                Subjects not offered in the March Series (such as History, Geography, Computer Science etc.) will be administered in the <strong>June Series</strong>.
              </li>
              <li>
                English Language General Paper (AS Level) board examination is conducted as part of the March Series in Class 12.
              </li>
              <li>
                Students can choose to study a total of <strong>3 or 4 subjects</strong> over and above English Language in consultation with the College Counselling Team. <em>Note: Students cannot choose two subjects from the same elective group.</em>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
