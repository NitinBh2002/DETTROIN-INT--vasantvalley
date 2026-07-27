"use client";

import React from "react";

export default function LearningAssessmentCycle() {
  const cycleSteps = [
    { step: "1", title: "Designing Curriculum", desc: "Formulated with clear Learning Outcomes" },
    { step: "2", title: "Teaching & Learning", desc: "Inquiry-based pedagogy & active engagement" },
    { step: "3", title: "Assessments", desc: "Formative & Summative evaluation" },
    { step: "4", title: "Feedback", desc: "Tri-directional input from Teachers, Students & Parents" },
    { step: "5", title: "Reporting", desc: "Detailed quantitative & qualitative cycle reports" },
    { step: "6", title: "Analysis of Results", desc: "Identifying individual & group learning gaps" },
    { step: "7", title: "Reinforcements", desc: "Targeted interventions to fill learning gaps" },
    { step: "8", title: "Reassessment", desc: "Continuous progress monitoring & growth" },
  ];

  return (
    <section className="w-full font-sans bg-white py-16 lg:py-24 text-stone-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2.5px] bg-[#800000]"></span>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase">
                QUALITATIVE & QUANTITATIVE FEEDBACK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Assessment & Reporting
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              We share a detailed report with the parents at the end of each Learning Cycle which gives a complete picture of the child&apos;s strengths, interests and skills.
            </p>

            <div className="bg-[#FAF5EE] p-6 rounded-2xl border-l-4 border-[#800000] space-y-2">
              <h3 className="font-serif font-bold text-stone-900 text-sm">Beyond Plain Grades</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Since grades can at best provide an understanding of one aspect of a child&apos;s development; the report is a combination of quantitative and qualitative feedback from all teachers, tutors, student self-assessments, and parent feedback.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF8F5] p-8 rounded-3xl border border-stone-200 shadow-xl space-y-4">
            <h3 className="text-base font-serif font-bold text-[#800000]">Components of the Cycle Report</h3>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-[#800000] font-bold">1. Quantitative Marks</span>
                <p className="text-[11px] text-stone-500">Academic subject scores & benchmarks.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-[#800000] font-bold">2. Qualitative Remarks</span>
                <p className="text-[11px] text-stone-500">Teacher & tutor observations on growth.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-[#800000] font-bold">3. Student Self-Assessment</span>
                <p className="text-[11px] text-stone-500">Personal reflection on goals & progress.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="text-[#800000] font-bold">4. Parent Feedback</span>
                <p className="text-[11px] text-stone-500">Home observations & partnership.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#800000] text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="text-amber-300 text-xs font-extrabold tracking-widest uppercase">
              PEDAGOGICAL FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              THE CYCLE OF LEARNING
            </h2>
            <p className="text-stone-200 text-xs sm:text-sm font-light">
              A continuous, 8-stage cycle ensuring curriculum alignment, gap analysis, and reinforcement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {cycleSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-amber-300 text-[#800000] font-extrabold flex items-center justify-center text-xs">
                    {item.step}
                  </span>
                  <span className="text-[10px] text-amber-200 font-bold uppercase tracking-widest">
                    STAGE {item.step}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-sm text-white pt-1">{item.title}</h3>
                <p className="text-[11px] text-stone-200 font-light leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
