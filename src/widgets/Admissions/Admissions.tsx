"use client";

import React, { useState } from "react";
import PageHero from "@/src/components/PageHero";
import Button from "@/src/components/Button";

const FOUNDATION_LINKS = [
  {
    title: "Shortlisted (Second List) & Waiting List 2026–27",
    href: "#",
    tag: "New",
  },
  {
    title: "Shortlisted (First List) & Waiting List 2026–27",
    href: "#",
    tag: "Archive",
  },
  {
    title: "Applicants List & Points Awarded 2026–27",
    href: "#",
  },
  {
    title: "List of All Registered Applicants 2026-27",
    href: "#",
  },
  {
    title: "Details of Seats Available",
    href: "#",
  },
  {
    title: "Criteria for Awarding Points",
    href: "#",
  },
  {
    title: "Admission Process Timeline",
    href: "#",
  },
  {
    title: "Original Documents Required for Verification",
    href: "#",
  },
  {
    title: "Admission Process FAQs",
    href: "#",
  },
];

export default function Admissions() {
  const [activeTab, setActiveTab] = useState<"preschool" | "class1to7" | "class11" | "fee">("preschool");

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      
      <PageHero
        badge="VASANT VALLEY SCHOOL"
        title="Admissions 2026 - 2027"
        description="Welcome to the Vasant Valley School admissions portal. Learn about eligibility, timelines, application processes, and fee structures for all year groups."
        backgroundImage="/about-image.jpg"
      />

      <div className="bg-[#FAF5EE] py-6 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveTab("preschool")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activeTab === "preschool" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            Pre-School (FDN)
          </button>
          <button
            onClick={() => setActiveTab("class1to7")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activeTab === "class1to7" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            Class 1 to 7
          </button>
          <button
            onClick={() => setActiveTab("class11")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activeTab === "class11" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            Class XI (AS Levels)
          </button>
          <button
            onClick={() => setActiveTab("fee")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activeTab === "fee" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            Fee Structure
          </button>
        </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 space-y-16">
        
        <div id="preschool" className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200 pb-6 gap-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                ACADEMIC SESSION 2026-27
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Admission to Pre-School (Foundation)
              </h2>
            </div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
              Online Registration Active
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm leading-relaxed">
              <p>
                The registration process for admission to Pre School (Foundation) is done online, in strict compliance with the guidelines issued by the Department of Education.
              </p>
              
              <div className="bg-[#FAF5EE] p-5 rounded-2xl border-l-4 border-[#800000] text-xs space-y-2">
                <p className="font-semibold text-stone-900">EWS/DG & CWSN Categories Notice:</p>
                <p>
                  Under the provisions of the RTE Act-2009, the processing of admissions in the EWS/DG and CWSN categories lies with the Department of Education. Therefore, all applications under these categories must be submitted directly to the Department of Education.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#800000]">Age Eligibility & Relaxation</h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#800000] font-bold">•</span>
                    <span>Children should be born between <strong>1st April, 2022 and 31st March, 2023</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#800000] font-bold">•</span>
                    <span>In accordance with DoE order dated 22/11/2025, an age relaxation of up to 30 days is available. Children born between <strong>1st March, 2022 and 31st March, 2022</strong> are also eligible for admission.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900 mb-3">
                Important Links & Documents
              </h3>
              
              <div className="space-y-2.5">
                {FOUNDATION_LINKS.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-red-50/70 border border-stone-200/80 hover:border-red-200 transition-all duration-200"
                  >
                    <span className="text-xs font-semibold text-stone-800 group-hover:text-[#800000]">
                      {link.title}
                    </span>
                    <span className="text-xs text-[#800000] font-bold group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="class1to7" className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-8">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
              MIDDLE & PRIMARY SCHOOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Admission for Class 1 to Class 7
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                Admission to each year group depends strictly on a vacancy. There are a limited number of children and three sections to each class.
              </p>
              <p>
                All applications are kept on record for three months. A fresh application needs to be sent to reiterate your interest if you do not hear from the school office in three months time. No form needs to be filled at the time of initial application.
              </p>
              <p className="text-xs text-stone-600 italic">
                * In case of children with special needs, the above procedure is to be followed. Admission is dependent on vacancy in the relevant year group.
              </p>
              <p>
                Applications for admission need to be sent to:{" "}
                <a href="mailto:admissions@vasantvalley.edu.in" className="font-bold text-[#800000] underline">
                  admissions@vasantvalley.edu.in
                </a>
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#FAF5EE] p-6 rounded-2xl border border-amber-200 text-center space-y-4">
              <h3 className="text-base font-bold font-serif text-stone-900">Ready to Apply?</h3>
              <p className="text-xs text-stone-600">
                Click below to open the online application form for Class 1 to Class 7.
              </p>
              <Button
                href="#application-form"
                variant="primary"
                className="!w-full text-center"
              >
                CLICK HERE TO FILL THE APPLICATION FORM
              </Button>
            </div>
          </div>
        </div>

        <div id="class11" className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-200 pb-6 gap-4">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                SENIOR SCHOOL (2026-27)
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Class XI (AS Levels) Admissions
              </h2>
            </div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-red-100 text-[#800000] border border-red-200">
              Entrance Exam Dates Announced
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm leading-relaxed">
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="text-xs font-bold text-[#800000] uppercase tracking-wider">Eligibility Criteria</h3>
                <p className="text-xs">
                  Students who have scored an average of at least <strong>70%</strong> in their last school examination in Class X in the following subjects: <em>English, Second Language, Mathematics, Science, and Social Science</em> are eligible to take the entrance test.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="text-xs font-bold text-[#800000] uppercase tracking-wider">Test Details</h3>
                <p className="text-xs">
                  Students will take an Admission Test in <strong>English (1 hour)</strong> and <strong>Mathematics (30 minutes)</strong> for subjects requiring Mathematics/Physics/Chemistry/Economics/Accountancy.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Selection Steps</h3>
                <ol className="space-y-2 text-xs text-stone-600 list-decimal pl-4">
                  <li>Admission test will be held at 10:00 AM on the selected date.</li>
                  <li>Admissions Officer contacts shortlisted candidates for interaction.</li>
                  <li>Parents meet the admission committee (Seats reserved for EWS & DG per govt rules).</li>
                  <li>Subject to verification of original documents.</li>
                </ol>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#800000] text-white p-6 rounded-2xl space-y-4 shadow-lg">
                <h3 className="text-base font-serif font-bold text-amber-200">Entrance Test Schedule</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Day 1:</span>
                    <strong className="text-amber-200">Tuesday, 10th March 2026</strong>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span>Day 2:</span>
                    <strong className="text-amber-200">Friday, 13th March 2026</strong>
                  </div>
                  <p className="text-[11px] text-stone-200 pt-1">Time: 10:00 AM at Vasant Valley School Campus.</p>
                </div>

                <Button
                  href="#class11-form"
                  variant="white"
                  className="!w-full text-center"
                >
                  CLICK HERE TO FILL THE APPLICATION FORM
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div id="fee" className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-8">
          <div className="border-b border-stone-200 pb-6">
            <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
              ACADEMIC FEES & CHARGES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Fee Structure (Current Session)
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#800000] text-white">
                  <th className="p-3.5 font-bold rounded-tl-xl">Fee Component</th>
                  <th className="p-3.5 font-bold">FDN (Pre-School) - Class 5</th>
                  <th className="p-3.5 font-bold">Class 6 - 10</th>
                  <th className="p-3.5 font-bold rounded-tr-xl">Class 11 - 12</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr className="bg-stone-50/60">
                  <td className="p-3.5 font-bold text-stone-900">Tuition Fee (Quarterly)</td>
                  <td className="p-3.5 font-semibold text-[#800000]">₹ 51,228</td>
                  <td className="p-3.5 font-semibold text-[#800000]">₹ 58,881</td>
                  <td className="p-3.5 font-semibold text-[#800000]">₹ 70,098</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-stone-900">Annual Charges (Quarterly)</td>
                  <td className="p-3.5">₹ 25,638</td>
                  <td className="p-3.5">₹ 25,638</td>
                  <td className="p-3.5">₹ 25,638</td>
                </tr>
                <tr className="bg-stone-50/60">
                  <td className="p-3.5 font-bold text-stone-900">Development Fee (Annually)</td>
                  <td className="p-3.5">₹ 30,738</td>
                  <td className="p-3.5">₹ 35,330</td>
                  <td className="p-3.5">₹ 42,060</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-stone-900">Admission Fee (One Time)</td>
                  <td className="p-3.5">₹ 200</td>
                  <td className="p-3.5">₹ 200</td>
                  <td className="p-3.5">₹ 200</td>
                </tr>
                <tr className="bg-stone-50/60">
                  <td className="p-3.5 font-bold text-stone-900">Security Deposit (One Time)</td>
                  <td className="p-3.5">₹ 500</td>
                  <td className="p-3.5">₹ 500</td>
                  <td className="p-3.5">₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#800000]">
              Earmarked & Other Charges
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 border-b border-stone-200 pb-1">Academic & Tech Charges</h4>
                <div className="flex justify-between">
                  <span>ERP Charges (Quarterly):</span>
                  <strong className="text-stone-900">₹ 1,000</strong>
                </div>
                <div className="flex justify-between">
                  <span>Math Programme (Quarterly, Class 2-8):</span>
                  <strong className="text-stone-900">₹ 810</strong>
                </div>
                <div className="flex justify-between">
                  <span>Parent & Escort ID Card:</span>
                  <strong className="text-stone-900">₹ 50</strong>
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 border-b border-stone-200 pb-1">Transport Fees (Quarterly)</h4>
                <div className="flex justify-between">
                  <span>Bus Vasant Kunj:</span>
                  <strong className="text-stone-900">₹ 10,494</strong>
                </div>
                <div className="flex justify-between">
                  <span>Bus Non-Vasant Kunj:</span>
                  <strong className="text-stone-900">₹ 15,741</strong>
                </div>
                <div className="flex justify-between">
                  <span>Bus Vasant Vihar & Munirka:</span>
                  <strong className="text-stone-900">₹ 12,243</strong>
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 border-b border-stone-200 pb-1">Meals (Quarterly)</h4>
                <div className="flex justify-between">
                  <span>FDN - Class 3 (Breakfast & Lunch):</span>
                  <strong className="text-stone-900">₹ 9,429</strong>
                </div>
                <div className="flex justify-between">
                  <span>Class 4 - 12 (Breakfast & Lunch):</span>
                  <strong className="text-stone-900">₹ 10,320</strong>
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h4 className="font-bold text-stone-900 border-b border-stone-200 pb-1">Annual Charges</h4>
                <div className="flex justify-between">
                  <span>Medical Charges (Annually):</span>
                  <strong className="text-stone-900">₹ 2,000</strong>
                </div>
                <div className="flex justify-between">
                  <span>Group Insurance (Annually):</span>
                  <strong className="text-stone-900">₹ 500</strong>
                </div>
                <div className="flex justify-between">
                  <span>Founder&apos;s Day, Calendar, Photo (Annually):</span>
                  <strong className="text-stone-900">₹ 2,650</strong>
                </div>
                <div className="flex justify-between">
                  <span>After School Extension Camps (Optional):</span>
                  <strong className="text-stone-900">₹ 30,000</strong>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
