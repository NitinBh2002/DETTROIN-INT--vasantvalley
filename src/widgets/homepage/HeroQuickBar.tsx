import React from "react";

export default function HeroQuickBar() {
  return (
    <div className="w-full bg-white text-stone-900 border-b border-stone-200 shadow-md py-5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/70 border border-stone-100 hover:bg-stone-50 transition-colors">
          <div className="p-2.5 bg-red-100 rounded-lg text-[#800000] shrink-0">
            <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xs font-bold text-stone-900">Holistic Education</h3>
            <p className="text-[11px] text-stone-600">Balanced academics, arts & values.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/70 border border-stone-100 hover:bg-stone-50 transition-colors">
          <div className="p-2.5 bg-red-100 rounded-lg text-[#800000] shrink-0">
            <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
            </svg>
          </div>
          <div>
            <h3 className="text-xs font-bold text-stone-900">Global Perspective</h3>
            <p className="text-[11px] text-stone-600">International Cambridge curriculum.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/70 border border-stone-100 hover:bg-stone-50 transition-colors">
          <div className="p-2.5 bg-red-100 rounded-lg text-[#800000] shrink-0">
            <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xs font-bold text-stone-900">Safe Environment</h3>
            <p className="text-[11px] text-stone-600">Nurturing & secure 8-acre campus.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/70 border border-stone-100 hover:bg-stone-50 transition-colors">
          <div className="p-2.5 bg-red-100 rounded-lg text-[#800000] shrink-0">
            <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h3 className="text-xs font-bold text-stone-900">Excellence Driven</h3>
            <p className="text-[11px] text-stone-500">Encouraging extraordinary talents.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
