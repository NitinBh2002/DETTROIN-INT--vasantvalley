"use client";

import React, { useState } from "react";
import PageHero from "@/src/components/PageHero";

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
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "General Inquiry",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-stone-900 selection:bg-[#800000] selection:text-white">
      
      <PageHero
        badge="GET IN TOUCH"
        title="Contact Us"
        description="We are here to assist you with admissions, campus visits, academic inquiries, or general information. Reach out to Vasant Valley School today."
        backgroundImage="/about-image.jpg"
        location="Vasant Kunj, New Delhi"
        phone="+91 11 41767940"
        email="info@vasantvalley.edu.in"
      />

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#800000] transition-colors duration-300 group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-[#800000] flex items-center justify-center text-2xl shadow-sm">
                📍
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#800000]">
                OUR LOCATION
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Vasant Valley School
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">
                Sector C, Vasant Kunj,<br />
                New Delhi - 110070, India
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Vasant+Valley+School+Vasant+Kunj+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>SEE MAP</span>
              <span>&rarr;</span>
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#800000] transition-colors duration-300 group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-[#800000] flex items-center justify-center text-2xl shadow-sm">
                📞
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#800000]">
                PHONE & FAX
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                School Office
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">
                Main Line: <strong className="text-stone-900">+91 11 41767940</strong><br />
                Office Hours: Mon - Fri (08:00 AM - 04:00 PM)
              </p>
            </div>

            <a
              href="tel:+911141767940"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>CALL US NOW</span>
              <span>&rarr;</span>
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#800000] transition-colors duration-300 group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-[#800000] flex items-center justify-center text-2xl shadow-sm">
                ✉️
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#800000]">
                EMAIL INQUIRIES
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Email Desks
              </h3>
              <div className="text-xs text-stone-600 space-y-1 font-medium">
                <p>General: <a href="mailto:info@vasantvalley.edu.in" className="text-[#800000] font-bold underline">info@vasantvalley.edu.in</a></p>
                <p>Admissions: <a href="mailto:admissions@vasantvalley.edu.in" className="text-[#800000] font-bold underline">admissions@vasantvalley.edu.in</a></p>
                <p>Alumni Desk: <a href="mailto:alumni@vasantvalley.edu.in" className="text-[#800000] font-bold underline">alumni@vasantvalley.edu.in</a></p>
              </div>
            </div>

            <a
              href="mailto:info@vasantvalley.edu.in"
              className="inline-flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <span>SEND AN EMAIL</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-6">
            <div>
              <span className="text-[#800000] text-xs font-extrabold tracking-widest uppercase block mb-1">
                ONLINE INQUIRY FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Send Us a Message
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Fill in the details below and our administrative office will get back to you promptly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl space-y-2 text-center animate-in fade-in duration-300">
                <div className="text-3xl">✅</div>
                <h3 className="text-base font-bold">Thank You! Message Received</h3>
                <p className="text-xs text-emerald-700">
                  Your inquiry has been logged successfully. The Vasant Valley School administrative office will reply via email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-stone-800">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="e.g. parent@example.com"
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

                <button
                  type="submit"
                  className="w-full bg-[#800000] hover:bg-[#660000] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Send Message
                </button>
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
                <a
                  href="https://maps.google.com/?q=Vasant+Valley+School+Vasant+Kunj+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#800000] text-white px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                >
                  Open Map
                </a>
              </div>

              <div className="relative aspect-[4/3] w-full bg-stone-200 overflow-hidden">
                <iframe
                  title="Vasant Valley School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.772583802958!2d77.1438902!3d28.5300589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c35a14d59a5%3A0x6b77c3e5ad8d8b9e!2sVasant%20Valley%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md space-y-4">
              <h3 className="text-sm font-bold font-serif text-[#800000] border-b border-stone-100 pb-2">
                Visiting Hours & Timings
              </h3>

              <div className="space-y-2 text-xs text-stone-700">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span>08:00 AM - 04:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Saturday:</span>
                  <span>08:30 AM - 01:30 PM (1st & 3rd Sat)</span>
                </div>
                <div className="flex justify-between items-center text-stone-400">
                  <span className="font-semibold">Sunday & Public Holidays:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
