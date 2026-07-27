"use client";

import React, { useState } from "react";
import PageHero from "@/src/components/PageHero";
import Button from "@/src/components/Button";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "General Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      <PageHero
        badge="GET IN TOUCH"
        title="Contact Vasant Valley School"
        description="We welcome inquiries regarding admissions, school visits, academic programs, and administrative procedures."
        backgroundImage="/homepage-banner-1.jpeg"
        phone="+91 11 41767940"
        email="vasantvalley@vasantvalley.edu.in"
        location="Sector C, Vasant Kunj, New Delhi 110070"
      />

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-3 hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#800000] flex items-center justify-center group-hover:bg-[#800000] group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-[11px] font-extrabold tracking-widest text-[#800000] uppercase block">
              CAMPUS ADDRESS
            </span>
            <h3 className="text-lg font-serif font-bold text-stone-900">Vasant Kunj, New Delhi</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Vasant Valley School, Sector C, Vasant Kunj, New Delhi – 110070, India.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-3 hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#800000] flex items-center justify-center group-hover:bg-[#800000] group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-[11px] font-extrabold tracking-widest text-[#800000] uppercase block">
              PHONE NUMBERS
            </span>
            <h3 className="text-lg font-serif font-bold text-stone-900">School Desk</h3>
            <div className="text-xs text-stone-600 space-y-1 font-normal">
              <p>+91 11 26896547 / 41767940</p>
              <p>Office Hours: 8:00 AM – 4:00 PM (Mon–Fri)</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md space-y-3 hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#800000] flex items-center justify-center group-hover:bg-[#800000] group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[11px] font-extrabold tracking-widest text-[#800000] uppercase block">
              EMAIL DESK
            </span>
            <h3 className="text-lg font-serif font-bold text-stone-900">Official Inquiries</h3>
            <div className="text-xs text-stone-600 space-y-1 font-normal">
              <p>vasantvalley@vasantvalley.edu.in</p>
              <p>admissions@vasantvalley.edu.in</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-6">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                ONLINE INQUIRY FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Send Us a Message
              </h2>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-serif text-emerald-900">Thank You!</h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Your message has been received by the Vasant Valley School office. Our admissions desk will respond to your inquiry within 24 to 48 working hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-[#800000] hover:underline pt-2 inline-block cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-stone-800">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#800000]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-800">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ananya@example.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#800000]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-stone-800">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#800000]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-stone-800">Inquiry Department</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#800000]"
                    >
                      <option>General Inquiry</option>
                      <option>Admissions Pre-School</option>
                      <option>Admissions Class 1-7</option>
                      <option>Admissions Class XI</option>
                      <option>Alumni Desk</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-800">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject of your message..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#800000]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-800">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-[#800000]"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="!w-full"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xl space-y-0">
              <div className="p-6 bg-stone-900 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-base font-serif font-bold">School Map & Directions</h3>
                  <p className="text-[11px] text-amber-200 font-medium">Sector C, Vasant Kunj, New Delhi</p>
                </div>
              </div>
              <div className="h-72 w-full bg-stone-200 relative">
                <iframe
                  title="Vasant Valley School Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7925184209935!2d77.15174337618037!3d28.515891389366473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e2e1ad2c1ad%3A0x6b9d2dbd0dfbf019!2sVasant%20Valley%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
