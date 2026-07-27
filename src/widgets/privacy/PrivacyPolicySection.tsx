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
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activeSection === "privacy" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            🔒 Privacy Policy
          </button>
          <button
            onClick={() => setActiveSection("terms")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activeSection === "terms" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            🛡️ Terms & Conditions
          </button>
          <button
            onClick={() => setActiveSection("disclaimer")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activeSection === "disclaimer" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            ⚠️ Disclaimer Policy
          </button>
          <button
            onClick={() => setActiveSection("refund")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              activeSection === "refund" ? "bg-[#800000] text-white shadow-lg" : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            💳 Refund Policy
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
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                🔒
              </div>
            </div>

            <div className="space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
              <p>
                This is an educational institute&apos;s website. Thank you for examining our privacy statement. If you are only browsing this website, we do not capture data that allows us to identify you individually.
              </p>

              <div className="bg-[#FAF5EE] p-5 rounded-2xl border-l-4 border-[#800000] space-y-2">
                <h3 className="font-serif font-bold text-stone-900 text-sm">Strict Zero Data Sale Commitment</h3>
                <p className="text-xs text-stone-600">
                  We do not sell, distribute or rent your personal information to other parties for marketing purposes under any circumstances. We understand clearly that you and your information are one of our most important assets.
                </p>
                <p className="text-xs text-stone-600">
                  As a policy matter the information presented here will be disclosed only to the Bank / Credit Card Company for the process of approving your payment.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-stone-900">Information Sharing and Disclosure</h3>
                <p>We will not sell or rent your personally identifiable information to anyone. We will send personally identifiable information about you to other companies or people only when:</p>
                <ul className="space-y-2 list-disc pl-5 text-stone-600">
                  <li>We have your explicit consent to share the information.</li>
                  <li>We respond to subpoenas, court orders or legal process; or</li>
                  <li>We find that your actions on our web sites violate the Terms of Service.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-serif font-bold text-stone-900">Changes to this Privacy Policy</h3>
                <p>
                  The privacy policy is subject to modification from time to time. If we decide to change our privacy policy, we will post those changes here so that you will always know what information we gather, how we might use that information and whether we will disclose it to anyone.
                </p>
                <p>
                  Any significant changes to our privacy policy will be announced on our home page. If you do not agree with the changes in our policy you can simply discontinue to visit our website.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-[#800000] uppercase tracking-wider text-xs">Questions or Suggestions</h3>
                <p className="text-xs text-stone-600">
                  If you have questions or suggestions regarding our privacy policy, please send an email to us at:{" "}
                  <a href="mailto:vasantvalley@vasantvalley.org" className="font-bold text-[#800000] underline">
                    vasantvalley@vasantvalley.org
                  </a>
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
                  ONLINE REGISTRATION FEE PAYMENT RULES
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Terms & Conditions
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#800000] flex items-center justify-center text-xl font-bold">
                🛡️
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
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xl font-bold">
                📜
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
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xl font-bold">
                💳
              </div>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-lg">🧾</span>
                <div>
                  <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider">1. System Receipt</h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    A receipt will be generated by the system upon receipt by the School of payment of fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-lg">🏢</span>
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
                  In case of an error found in online fee payment, such as:
                </p>
                <ul className="space-y-1.5 text-xs text-stone-600 list-disc pl-5">
                  <li>Payment gets debited during credit/debit card transaction and internet goes down due to external server malfunction.</li>
                  <li>System fails to generate the required acknowledgment due to internet malfunction.</li>
                  <li>Payment gets debited twice due to server error.</li>
                </ul>
                <p className="text-xs text-stone-700 pt-1">
                  <strong>Resolution:</strong> If the parent presents bank intimation regarding the transaction authenticity to the school in person, the school will initiate an amount reversal once verified by the School office.
                </p>
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
