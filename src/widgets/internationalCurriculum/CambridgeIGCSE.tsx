"use client";

import React from "react";

export default function CambridgeIGCSE() {
  return (
    <section className="w-full font-sans bg-[#FAF8F5] py-16 lg:py-20 text-stone-900 border-b border-stone-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        <div id="igcse-detail" className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-8">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
              INTERNATIONAL CERTIFICATION (CLASSES 9-10)
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Why Cambridge IGCSE?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-stone-700 leading-relaxed">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm font-serif">World-Renowned Qualification</h3>
              <p>
                Cambridge IGCSE is the world&apos;s most popular international qualification for 14 to 16 year olds. The core of the curriculum emphasizes a practical approach to learning based on inquiry.
              </p>
              <ul className="space-y-1 list-disc pl-4 text-stone-600">
                <li>Subject content & applying knowledge to familiar and new situations</li>
                <li>Intellectual enquiry and problem solving</li>
                <li>Flexibility, responsiveness to change, and working in English</li>
                <li>Influencing outcomes and global cultural awareness</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm font-serif">Global Recognition & Pathway</h3>
              <p>
                Provides an ideal foundation for higher-level courses such as IBDP, A Levels, and North American AP tests.
              </p>
              <p className="bg-[#FAF5EE] p-4 rounded-xl border border-amber-200 text-stone-800 font-medium">
                Has worldwide recognition and is officially equivalent to the Certificate of Secondary Education from Indian education boards, GCSE (UK), and O Level.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-stone-100 pt-4">
              <h3 className="text-sm font-serif font-bold text-stone-900">
                List of Cambridge IGCSE Subjects Offered (Classes 9 & 10, 2026-2028):
              </h3>
              <span className="text-[11px] text-[#800000] font-bold">
                * Max 9 subjects (min 7-8 takers required per elective)
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
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Mandatory</td>
                    <td className="p-3.5">First Language English (0500) and Global Perspectives (0457)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 1</td>
                    <td className="p-3.5">Spanish (0530) / Hindi (0549)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 2</td>
                    <td className="p-3.5">Literature in English (0475) / Chemistry (0620)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 3</td>
                    <td className="p-3.5">History (0470) / Physics (0625)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 4</td>
                    <td className="p-3.5">Mathematics (0580)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 5</td>
                    <td className="p-3.5">Business Studies (0450) / Economics (0455)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 6</td>
                    <td className="p-3.5">Art and Design (0400) / Computer Science (0478) / ICT (0417)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-stone-900 bg-stone-50">Elective 7</td>
                    <td className="p-3.5">Environmental Management (0680) / Biology (0610) / Geography (0460)</td>
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
