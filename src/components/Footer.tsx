"use client";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full font-sans text-stone-800 bg-[#F9F8F6] border-t border-stone-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          <div className="lg:col-span-3 space-y-6 lg:pr-4 lg:border-r lg:border-stone-200/80 min-h-full">
            <div className="flex flex-col items-start">
              <a href="/" className="group focus:outline-none">
                <img
                  src="/logo-vasant-valley.svg"
                  alt="Vasant Valley School Logo"
                  className="h-20 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
                />
              </a>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed max-w-xs font-medium">
              Nurturing curious minds and confident hearts to shape a better tomorrow.
            </p>

            <div className="grid grid-cols-4 gap-2 pt-2 max-w-xs">
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#800000] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-[11px] text-stone-600 font-medium mt-2 leading-tight group-hover:text-[#800000]">
                  Holistic Education
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#800000] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                  </svg>
                </div>
                <span className="text-[11px] text-stone-600 font-medium mt-2 leading-tight group-hover:text-[#800000]">
                  Global Perspective
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#800000] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-[11px] text-stone-600 font-medium mt-2 leading-tight group-hover:text-[#800000]">
                  Safe Environment
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#800000] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-[11px] text-stone-600 font-medium mt-2 leading-tight group-hover:text-[#800000]">
                  Excellence Driven
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:px-4 lg:border-r lg:border-stone-200/80 min-h-full">
            <div>
              <h3 className="text-sm font-bold tracking-wider text-[#800000] uppercase mb-4 pb-1 border-b border-[#800000]/20 inline-block">
                EXPLORE
              </h3>
              <ul className="space-y-2.5 text-xs">
                {[
                  { name: "Home", href: "/" },
                  { name: "Vision & Philosophy", href: "/about-us#vision" },
                  { name: "The Learning Experience", href: "/learning-experience" },
                  { name: "International Curriculum", href: "/international-curriculum" },
                  { name: "Infrastructure", href: "/infrastructure" },
                  { name: "A Day in School", href: "/a-day-in-school" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="group flex items-center text-stone-700 hover:text-[#800000] transition-colors duration-150 font-medium"
                    >
                      <svg
                        className="w-3 h-3 mr-1.5 text-stone-400 group-hover:text-[#800000] group-hover:translate-x-0.5 transition-all duration-150"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wider text-[#800000] uppercase mb-4 pb-1 border-b border-[#800000]/20 inline-block">
                ABOUT US
              </h3>
              <ul className="space-y-2.5 text-xs">
                {[
                  { name: "About Us", href: "/about-us" },
                  { name: "Admissions", href: "/admissions" },
                  { name: "Announcements", href: "/#announcements" },
                  { name: "News & Events", href: "/news" },
                  { name: "FAQs", href: "/faq" },
                  { name: "Privacy Policy", href: "/privacy" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="group flex items-center text-stone-700 hover:text-[#800000] transition-colors duration-150 font-medium"
                    >
                      <svg
                        className="w-3 h-3 mr-1.5 text-stone-400 group-hover:text-[#800000] group-hover:translate-x-0.5 transition-all duration-150"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wider text-[#800000] uppercase mb-4 pb-1 border-b border-[#800000]/20 inline-block">
                QUICK LINKS
              </h3>
              <ul className="space-y-2.5 text-xs">
                {[
                  { name: "School Profile", href: "/about-us" },
                  { name: "Admissions Portal", href: "/admissions" },
                  { name: "News & Articles", href: "/news" },
                  { name: "Frequently Asked Questions", href: "/faq" },
                  { name: "Contact Us", href: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="group flex items-center text-stone-700 hover:text-[#800000] transition-colors duration-150 font-medium"
                    >
                      <svg
                        className="w-3 h-3 mr-1.5 text-stone-400 group-hover:text-[#800000] group-hover:translate-x-0.5 transition-all duration-150"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6 lg:pl-4 min-h-full">
            <div>
              <h3 className="text-sm font-bold tracking-wider text-[#800000] uppercase mb-4 pb-1 border-b border-[#800000]/20 inline-block">
                CONTACT US
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-[#800000] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+911141767940" className="text-stone-800 hover:text-[#800000] font-medium transition-colors">
                    +91 11 41767940
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-[#800000] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:info@vasantvalley.edu.in" className="text-stone-800 hover:text-[#800000] font-medium transition-colors">
                    info@vasantvalley.edu.in
                  </a>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-[#800000] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-stone-700 leading-snug font-medium">
                    Sector C, Vasant Kunj,<br />
                    New Delhi 110070, India
                  </span>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-[#800000] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div className="text-stone-700 leading-snug font-medium">
                    <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-bold tracking-wider text-[#800000] uppercase mb-3">
                FOLLOW US
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white flex items-center justify-center transition-colors duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white flex items-center justify-center transition-colors duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white flex items-center justify-center transition-colors duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full border border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white flex items-center justify-center transition-colors duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="relative bg-[#800000] text-white overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 w-64 pointer-events-none opacity-10 flex justify-end items-center overflow-hidden">
          <div className="w-48 h-48 border-4 border-white rotate-45 transform translate-x-16 translate-y-8"></div>
          <div className="w-32 h-32 border-4 border-white rotate-45 transform translate-x-8 translate-y-4"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-5 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light">
          
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-normal tracking-wide">
              © Vasant Valley School 2021
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
          </div>

          <div className="text-center text-white/90 max-w-2xl leading-relaxed text-[11px] sm:text-xs">
            We are grateful to our alumni, <span className="text-white font-medium">Ishaan Gupta (Class of 2006)</span>, <span className="text-white font-medium">Medha Vira Gupta (Class of 2009)</span> and <span className="text-white font-medium">Samvid Gupta (Class of 2010)</span> for their generous support in creating the website.
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-white/90 text-[11px] sm:text-xs">
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="w-8 h-8 rounded-full bg-white text-[#800000] flex items-center justify-center hover:bg-stone-100 transition-all duration-200 shadow-md ml-2 group"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
