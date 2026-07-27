"use client";

import React, { useState } from "react";
import PageHero from "@/src/components/PageHero";

export default function PrivacyPolicySection() {
  const [activeSection, setActiveSection] = useState<"terms" | "disclaimer" | "privacy" | "refund">("privacy");

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      
      <PageHero
        badge="LEGAL & GOVERNANCE"
        title="Terms, Privacy & Policies"
        description="Review Vasant Valley School's Terms & Conditions, Disclaimer Policy, Privacy Policy, and Online Fee Refund Policy."
        backgroundImage="/about-image.jpg"
      />

      <div className="bg-[#FAF5EE] py-6 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveSection("privacy")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              activeSection === "privacy" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveSection("terms")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              activeSection === "terms" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Terms & Conditions
          </button>

          <button
            onClick={() => setActiveSection("disclaimer")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              activeSection === "disclaimer" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Disclaimer Policy
          </button>

          <button
            onClick={() => setActiveSection("refund")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
              activeSection === "refund" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Refund Policy
          </button>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-16">
        
        {activeSection === "privacy" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="border-b border-stone-200 pb-6 flex items-center justify-between">
              <div>
                <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                  OFFICIAL INSTITUTIONAL STATEMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Privacy Policy
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            <div className="space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
              <p>
                This is an educational institute&apos;s website. Thank you for examining our privacy statement. If you are only browsing this website, we do not capture data that allows us to identify you individually.
              </p>

              <div className="bg-[#FAF5EE] p-5 rounded-2xl border-l-4 border-[#800000] space-y-2">
                <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider">Information Collection & Use</h3>
                <p className="text-xs text-stone-600">
                  If you choose to submit an application or send an email containing personal data, we may share necessary data with authorized staff to process your request in the most efficient way. We do not sell or distribute personal information to commercial entities.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-serif font-bold text-stone-900">Data Security Standards</h3>
                <p className="text-xs text-stone-600">
                  To safeguard your personal data, all electronic transmissions of sensitive data (such as online fee payment details) are secured with appropriate encryption technology and industry-standard protocols.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "terms" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="border-b border-stone-200 pb-6 flex items-center justify-between">
              <div>
                <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                  ONLINE REGISTRATION & USAGE TERMS
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Terms & Conditions
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#800000] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600">
              By using the Online Registration Fee Payment system, you agree to the following terms:
            </p>

            <div className="space-y-4">
              {[
                "The information provided by you is true and correct to the best of your knowledge.",
                "You understand that Vasant Valley School reserves the right to change/modify the rules and regulations relating to admission (notified on our website from time to time) to the courses conducted by it and you agree to abide by the same.",
                "The decision of Vasant Valley School in regards to granting or rejecting admission to any course conducted by it is final and binding on you.",
                "You authorize Vasant Valley School to charge your Credit Card / bank account towards the fee as per the authorization given by you in the Online Application Form.",
                "You understand and accept that the jurisdiction for any disputes relating to Vasant Valley School is New Delhi, India.",
                "Vasant Valley School will not be responsible for any damage suffered by you from use of the services on this site.",
              ].map((term, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="w-7 h-7 rounded-full bg-[#800000] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium pt-0.5">
                    {term}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "disclaimer" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="border-b border-stone-200 pb-6 flex items-center justify-between">
              <div>
                <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                  LEGAL DISCLAIMER POLICY (WWW.VASANTVALLEY.ORG)
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Disclaimer Policy
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>

            <p className="text-xs text-stone-600">
              You are required to accept the terms and conditions contained in this Disclaimer Policy to avail of any Service through www.vasantvalley.org. All terms and conditions are incorporated by reference herein.
            </p>

            <div className="space-y-4">
              {[
                "Force Majeure: Vasant Valley School shall in no event be liable for default due to government restrictions or unforeseen circumstances not within control including strikes, war, natural calamities, acts of God or force majeure.",
                "Right to Update: Vasant Valley School reserves every right to update or modify this Disclaimer policy from time to time, notified on our website.",
                "Verification Liability: Information contained herein is true to the best of School's knowledge. Users are liable to independently verify all information from the School office.",
                "Copyright & Intellectual Property: All contents on www.vasantvalley.org are property of Vasant Valley School protected by international copyright laws. Any unauthorized copying for commercial purposes is prohibited.",
                "Commercial Exploitation & Framing: Reproduction, duplication, reselling, or framing of any logo, trademark or proprietary content without express written consent is strictly prohibited.",
                "Account Confidentiality: Users assume all responsibility for maintaining confidentiality of their account password and access restricting. Losses due to misuse shall be borne exclusively by the user.",
                "Civil & Criminal Prosecution: Unauthorized duplication or modification of information may result in civil and criminal prosecution.",
                "Limitation of Direct/Indirect Damages: Users agree not to hold Vasant Valley School liable for direct, indirect, or consequential damages resulting from site usage.",
                "Third-Party Links: External links on www.vasantvalley.org do not constitute endorsement of third-party content.",
                "Interception & Virus Protection: Transmissions may be intercepted by third parties. Vasant Valley School shall not be held liable for virus or spyware defects in intercepted files.",
                "Service Providers & Vendors: Written agreements ensure Vasant Valley School is not liable for deficiency in third-party vendor services or quality control.",
                "General Damage Waiver: In no event shall Vasant Valley School, its affiliates, employees or agents be liable for punitive, special or incidental losses.",
                "Full Acknowledgment: User acknowledges reading and independently evaluating the consequences of using www.vasantvalley.org services.",
                "ARBITRATION: Any dispute shall be referred to a Sole Arbitrator appointed jointly under the Indian Arbitration & Conciliation Act, 1996. Seat of Arbitration shall be at New Delhi in English.",
                "GOVERNING LAW & JURISDICTION: Governed by laws of India. Courts of competent jurisdiction at New Delhi shall have exclusive jurisdiction.",
              ].map((clause, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#800000]">
                    Clause {idx + 1}
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed font-medium">
                    {clause}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-2xl border border-amber-200 text-xs text-stone-700 italic">
              Severability: If any term or provision of this Agreement is held invalid or unenforceable, the remainder of this Agreement shall not be affected.
            </div>
          </div>
        )}

        {activeSection === "refund" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="border-b border-stone-200 pb-6 flex items-center justify-between">
              <div>
                <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                  ONLINE FEE PAYMENT REVERSAL RULES
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Refund Policy
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider">1. System Receipt</h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    A receipt will be generated by the system upon receipt by the School of payment of fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800000] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider">2. Discrepancy Resolution</h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    If there is any discrepancy regarding the student&apos;s fee amount deposited online (through Credit Cards, Debit Card or Net banking), it has to be resolved in person only at the school office.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF5EE] p-6 rounded-2xl border border-amber-200 space-y-3">
                <h3 className="font-bold font-serif text-[#800000] text-sm">3. Error Handling & Reversal Process</h3>
                <p className="text-xs text-stone-700">
                  In case of an error found in online fee payment, such as double payment or technical failure, the refund request will be verified by the accounts department and processed directly to the original bank account within 7 to 10 working days.
                </p>
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
