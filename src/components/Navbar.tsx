"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/src/components/Button";
import {
  SearchIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isPathActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Admissions", href: "/admissions" },
    { name: "Announcements", href: "/announcements" },
    { name: "News & Events", href: "/news" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
  ];

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
            <Image
              src="/logo-vasant-valley.svg"
              alt="Vasant Valley School Logo"
              width={220}
              height={56}
              style={{ width: "auto" }}
              className="h-14 object-contain transition-transform group-hover:scale-105 duration-300"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" ref={dropdownRef}>
            {navItems.map((item) => {
              const active = isPathActive(item.href);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                    active ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute left-3 right-3 bottom-0 h-[2.5px] bg-[#800000] rounded-full animate-in fade-in duration-200"></span>
                  )}
                </a>
              );
            })}
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

            <Button variant="primary" className="!py-2 !px-5 text-xs">
              <UserIcon className="w-3.5 h-3.5 text-white/90" />
              <span>Log In</span>
            </Button>
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
          {navItems.map((item) => {
            const active = isPathActive(item.href);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg font-semibold ${
                  active ? "bg-red-50 text-[#800000]" : "text-stone-800 hover:bg-stone-100"
                }`}
              >
                {item.name}
              </a>
            );
          })}

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
