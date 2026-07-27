"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  SearchIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "./Icons";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-300 font-sans">
      <div
        className={`bg-stone-900 text-white overflow-hidden transition-all duration-300 ${
          isSearchOpen ? "max-h-24 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3 bg-stone-800/80 px-4 py-2 rounded-full border border-stone-700 focus-within:border-red-500 transition-colors">
            <SearchIcon className="w-5 h-5 text-red-400" />
            <input
              type="text"
              placeholder="Search Vasant Valley website, news, events, admissions..."
              className="w-full bg-transparent border-none text-sm text-white placeholder-stone-400 focus:outline-none"
              autoFocus={isSearchOpen}
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <a href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <div className="absolute inset-0 border-2 border-stone-800 transform rotate-45 rounded-sm bg-white shadow-sm"></div>
              <div className="absolute inset-1 border border-stone-300 transform rotate-45"></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-1">
                <span className="text-[7px] font-black tracking-widest text-[#800000] uppercase leading-none">
                  VASANT
                </span>
                <div className="w-5 h-[1.5px] bg-[#800000] my-[2px]"></div>
                <span className="text-[6.5px] font-bold tracking-wider text-stone-800 uppercase leading-none">
                  VALLEY
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold text-stone-900 tracking-tight text-lg leading-tight group-hover:text-[#800000] transition-colors">
                VASANT VALLEY
              </span>
              <span className="text-[10px] tracking-widest text-stone-500 uppercase font-semibold">
                Excellence In Education
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" ref={dropdownRef}>
            <a
              href="/"
              onClick={() => setActiveTab("Home")}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeTab === "Home" ? "text-stone-900" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              Home
              {activeTab === "Home" && (
                <span className="absolute left-3 right-3 bottom-0 h-[2.5px] bg-[#800000] rounded-full animate-in fade-in duration-200"></span>
              )}
            </a>

            <a
              href="/about-us"
              onClick={() => setActiveTab("About Us")}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeTab === "About Us" ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              About Us
              {activeTab === "About Us" && (
                <span className="absolute left-3 right-3 bottom-0 h-[2.5px] bg-[#800000] rounded-full animate-in fade-in duration-200"></span>
              )}
            </a>

            <a
              href="/admissions"
              onClick={() => setActiveTab("Admissions")}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeTab === "Admissions" ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              Admissions
              {activeTab === "Admissions" && (
                <span className="absolute left-3 right-3 bottom-0 h-[2.5px] bg-[#800000] rounded-full animate-in fade-in duration-200"></span>
              )}
            </a>

            <a
              href="/news"
              onClick={() => setActiveTab("News & Events")}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                activeTab === "News & Events" ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              News & Events
              {activeTab === "News & Events" && (
                <span className="absolute left-3 right-3 bottom-0 h-[2.5px] bg-[#800000] rounded-full animate-in fade-in duration-200"></span>
              )}
            </a>

            <a
              href="/contact"
              onClick={() => setActiveTab("Contact Us")}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                activeTab === "Contact Us" ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              Contact Us
              {activeTab === "Contact Us" && (
                <span className="absolute left-3 right-3 bottom-0 h-[2.5px] bg-[#800000] rounded-full animate-in fade-in duration-200"></span>
              )}
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-stone-600 hover:text-[#800000] p-2 rounded-full hover:bg-stone-100 transition-all duration-200 focus:outline-none cursor-pointer"
              title="Search"
              aria-label="Toggle search bar"
            >
              <SearchIcon className="w-4 h-4" />
            </button>

            <div className="h-5 w-[1px] bg-stone-300"></div>

            <button className="flex items-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer">
              <UserIcon className="w-3.5 h-3.5 text-white/90" />
              <span>Log In</span>
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-stone-700 p-2 rounded-lg hover:bg-stone-100"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-800 p-2 rounded-lg hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            Home
          </a>

          <a
            href="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            About Us
          </a>

          <a
            href="/admissions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            Admissions
          </a>

          <a
            href="/news"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            News & Events
          </a>

          <a
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            Contact Us
          </a>

          <div className="pt-2">
            <button className="w-full flex items-center justify-center gap-2 bg-[#800000] text-white py-2.5 rounded-xl text-sm font-semibold shadow-md cursor-pointer">
              <UserIcon className="w-4 h-4" />
              <span>Log In</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
