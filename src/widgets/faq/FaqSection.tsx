"use client";

import React, { useState } from "react";
import PageHero from "@/src/components/PageHero";
import Button from "@/src/components/Button";

interface FaqItem {
  id: string;
  category: "Academic & Boards" | "Admissions" | "School Life & Uniform" | "Administration & Careers";
  question: string;
  answer: React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "1",
    category: "Academic & Boards",
    question: "Which Examination Board is Vasant Valley School affiliated to?",
    answer: (
      <p>
        Vasant Valley School is affiliated to <strong>The Central Board of Secondary Education (CBSE)</strong> and is also registered as a <strong>Cambridge International School</strong> offering the Cambridge IGCSE and Cambridge A Level curriculums.
      </p>
    ),
  },
  {
    id: "2",
    category: "Academic & Boards",
    question: "What are the various subjects offered by Vasant Valley School under the CBSE?",
    answer: (
      <div className="space-y-4 text-xs">
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
          <h4 className="font-bold text-[#800000] uppercase tracking-wider">Class 10 CBSE Subjects</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-stone-700">
            <span>• English</span>
            <span>• Mathematics</span>
            <span>• Science</span>
            <span>• Social Science</span>
            <span>• Indian Music</span>
            <span>• Home Science</span>
            <span>• Computer Application</span>
            <span>• Hindi</span>
            <span>• Sanskrit</span>
            <span>• Basics of Accountancy</span>
            <span>• Basics of Business</span>
          </div>
        </div>

        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
          <h4 className="font-bold text-[#800000] uppercase tracking-wider">Class 12 CBSE Subjects</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-stone-700">
            <span>• English</span>
            <span>• History</span>
            <span>• Geography</span>
            <span>• Sociology</span>
            <span>• Political Science</span>
            <span>• Economics</span>
            <span>• Accountancy</span>
            <span>• Business Studies</span>
            <span>• Psychology</span>
            <span>• Mathematics</span>
            <span>• Physics</span>
            <span>• Chemistry</span>
            <span>• Biology</span>
            <span>• Biotechnology</span>
            <span>• Home Science</span>
            <span>• Applied Art</span>
            <span>• Painting</span>
            <span>• Sculpture</span>
            <span>• Indian Classical Music (Vocal)</span>
            <span>• Indian Classical Music (Inst.)</span>
            <span>• Computer Science</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "3",
    category: "Academic & Boards",
    question: "What are the various subjects offered by Vasant Valley School under the Cambridge IGCSE curriculum?",
    answer: (
      <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2 text-xs">
        <h4 className="font-bold text-[#800000] uppercase tracking-wider">Cambridge IGCSE Curriculum Subjects</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-stone-700">
          <span>• First Language English (0500)</span>
          <span>• French (0520)</span>
          <span>• Spanish (0530)</span>
          <span>• Hindi (0549)</span>
          <span>• Mathematics (0580)</span>
          <span>• International Mathematics (0607)</span>
          <span>• Biology (0610)</span>
          <span>• Physics (0625)</span>
          <span>• Chemistry (0620)</span>
          <span>• Environmental Management (0680)</span>
          <span>• Global Perspectives (0457)</span>
          <span>• History (0470)</span>
          <span>• Literature in English (0475)</span>
          <span>• Economics (0455)</span>
          <span>• Art and Design (0400)</span>
          <span>• Computer Science (0478)</span>
          <span>• ICT (0417)</span>
          <span>• Business Studies (0450)</span>
        </div>
      </div>
    ),
  },
  {
    id: "4",
    category: "Admissions",
    question: "How do I apply for admission for my ward?",
    answer: (
      <p>
        Applications for admission need to be sent to{" "}
        <a href="mailto:admissions@vasantvalley.org" className="font-bold text-[#800000] underline">
          admissions@vasantvalley.org
        </a>
        . Admission to each year group depends strictly on a vacancy. A paper copy of the application can also be submitted at the school office. The application needs to be refreshed every three months.
      </p>
    ),
  },
  {
    id: "5",
    category: "Admissions",
    question: "When does the Admission process for Pre School begin?",
    answer: (
      <p>
        The admissions process for Pre School begins in <strong>December</strong>. The details are uploaded on our website as per the timeline prescribed by the Department of Education.
      </p>
    ),
  },
  {
    id: "6",
    category: "Admissions",
    question: "When can prospective parents visit school?",
    answer: (
      <p>
        Prospective parents can register for an <strong>Open Day</strong> to take a guided tour of the school campus. Please visit the Open Day link on the website for registration details and schedule.
      </p>
    ),
  },
  {
    id: "7",
    category: "Admissions",
    question: "Is Vasant Valley School RTE compliant?",
    answer: (
      <p>
        Yes, Vasant Valley School is in strict compliance with the <strong>Right to Education (RTE) Act-2009</strong>.
      </p>
    ),
  },
  {
    id: "8",
    category: "School Life & Uniform",
    question: "What are the School Timings?",
    answer: (
      <p>
        The school day starts at <strong>8:00 a.m.</strong> and ends at <strong>3:00 p.m.</strong>
      </p>
    ),
  },
  {
    id: "9",
    category: "School Life & Uniform",
    question: "What is the school uniform?",
    answer: (
      <p>
        The school uniform is cotton salwar-kameez for girls across all year groups, from Foundation to Class 12. The boys’ uniform is cotton trousers and shirt. There is no separate winter uniform — both boys and girls wear a maroon sweater with the School stripes in winter. The uniform is available at the Uniform Shop on campus.
      </p>
    ),
  },
  {
    id: "10",
    category: "School Life & Uniform",
    question: "Do children have to carry all books home every day?",
    answer: (
      <p>
        No. Students keep their books and notebooks in their personal lockers in the classroom. Other than the school diary, there is barely any load in the school bag. Only those books and notebooks required for homework or test revision go home.
      </p>
    ),
  },
  {
    id: "11",
    category: "Academic & Boards",
    question: "Does Vasant Valley offer any foreign languages?",
    answer: (
      <p>
        Vasant Valley School does not offer any foreign languages in CBSE. All students study Hindi and Sanskrit till Class 8 and then opt for either one of these two languages for Classes 9 and 10.
      </p>
    ),
  },
  {
    id: "12",
    category: "Academic & Boards",
    question: "What is the academic year of the school?",
    answer: (
      <div className="space-y-2 text-xs">
        <p>The academic year runs from <strong>April to March</strong>, divided into four learning cycles:</p>
        <ul className="space-y-1 list-disc pl-4 text-stone-700">
          <li><strong>Learning Cycle 1:</strong> April to May</li>
          <li><strong>Learning Cycle 2:</strong> July to September</li>
          <li><strong>Learning Cycle 3:</strong> October to November</li>
          <li><strong>Learning Cycle 4:</strong> January to March</li>
        </ul>
      </div>
    ),
  },
  {
    id: "13",
    category: "Administration & Careers",
    question: "What is the procedure for payment of fees?",
    answer: (
      <p>
        All school dues should be paid by cheque or draft in the name of <strong>“VASANT VALLEY SCHOOL”</strong>. Fees can also be paid online using the Parent School Login ID portal.
      </p>
    ),
  },
  {
    id: "14",
    category: "Administration & Careers",
    question: "How can I apply for a job in Vasant Valley School?",
    answer: (
      <p>
        You need to upload your updated Resume on the Careers page of the School website or email it directly to{" "}
        <a href="mailto:careers@vasantvalley.edu.in" className="font-bold text-[#800000] underline">
          careers@vasantvalley.edu.in
        </a>
        .
      </p>
    ),
  },
  {
    id: "15",
    category: "Administration & Careers",
    question: "Does Vasant Valley offer hostel facility?",
    answer: (
      <p>
        We are a <strong>day school</strong> and do not offer any hostel or boarding facility.
      </p>
    ),
  },
  {
    id: "16",
    category: "Administration & Careers",
    question: "Is there any other campus of Vasant Valley School?",
    answer: (
      <p>
        Vasant Valley School has a second upcoming campus located in <strong>Gurgaon</strong>.
      </p>
    ),
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>("1");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      <PageHero
        badge="HELP & INFORMATION CENTER"
        title="Frequently Asked Questions"
        description="Find quick answers to common questions about admissions, board affiliations, subject options, school timings, uniforms, and administrative procedures."
        backgroundImage="/about-image.jpg"
      />

      <div className="bg-[#FAF5EE] py-6 border-b border-stone-200">
        <div className="max-w-xl mx-auto px-4">
          <div className="relative flex items-center bg-white rounded-full p-2 shadow-md border border-stone-200">
            <span className="pl-4 text-stone-400">
              <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any question (e.g. uniform, admissions, CBSE, fees)..."
              className="w-full px-3 py-2 text-xs text-stone-900 placeholder-stone-400 bg-transparent focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="pr-4 text-stone-400 hover:text-stone-700 text-xs font-bold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        
        <div className="flex flex-wrap justify-center gap-2">
          {["All", "Academic & Boards", "Admissions", "School Life & Uniform", "Administration & Careers"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                selectedCategory === cat
                  ? "bg-[#800000] text-white shadow-md scale-105"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat === "All" ? "All FAQs" : cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-50 text-[#800000] mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-serif text-stone-900">No Matching Questions Found</h3>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                We couldn&apos;t find any FAQs matching your search query &quot;{searchQuery}&quot;. Please try searching with different keywords or contact the school desk.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? "border-[#800000] shadow-md" : "border-stone-200/90 hover:border-amber-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold text-[#800000] bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider shrink-0 border border-red-100">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-stone-600 transition-transform duration-300 ${
                        isOpen ? "bg-[#800000] text-white rotate-180" : "bg-stone-100"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-stone-100 text-stone-700 text-xs sm:text-sm leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="bg-[#FAF5EE] rounded-3xl p-8 sm:p-10 border border-amber-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Still Have Questions?
            </h3>
            <p className="text-xs text-stone-600">
              Our admissions team and school office are always happy to clarify your doubts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button href="/contact" variant="primary">
              Contact School Office
            </Button>
          </div>
        </div>

      </section>

    </div>
  );
}
