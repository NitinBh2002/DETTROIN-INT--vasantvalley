"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  EyeIcon,
  GraduationIcon,
  GlobeIcon,
  HeartHandshakeIcon,
  BookIcon,
  BuildingIcon,
  ClockIcon,
  MegaphoneIcon,
  SearchIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MenuIcon,
  XIcon,
} from "./Icons";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  subItems?: SubMenuItem[];
}

const ABOUT_US_ITEMS: MenuItem[] = [
  { title: "Vision & Philosophy", icon: EyeIcon, href: "#vision" },
  { title: "The Learning Experience", icon: GraduationIcon, href: "#learning" },
  { title: "International Curriculum", icon: GlobeIcon, href: "#curriculum" },
  { title: "Special Education Needs", icon: HeartHandshakeIcon, href: "#special-needs" },
  {
    title: "Programmes",
    icon: BookIcon,
    href: "#programmes",
    subItems: [
      { title: "Intra-School", href: "#intra-school" },
      { title: "Inter-School", href: "#inter-school" },
    ],
  },
  { title: "Infrastructure", icon: BuildingIcon, href: "#infrastructure" },
  { title: "A Day in School", icon: ClockIcon, href: "#day-in-school" },
  { title: "Announcements", icon: MegaphoneIcon, href: "#announcements" },
];

const ACADEMICS_ITEMS: MenuItem[] = [
  { title: "Primary School", icon: GraduationIcon, href: "#primary" },
  { title: "Middle School", icon: BookIcon, href: "#middle" },
  { title: "Senior School", icon: BuildingIcon, href: "#senior" },
  { title: "Faculty & Staff", icon: GlobeIcon, href: "#faculty" },
];

const CAMPUS_LIFE_ITEMS: MenuItem[] = [
  { title: "Sports & Athletics", icon: GlobeIcon, href: "#sports" },
  { title: "Clubs & Societies", icon: HeartHandshakeIcon, href: "#clubs" },
  { title: "Arts & Culture", icon: GraduationIcon, href: "#arts" },
  { title: "Student Council", icon: BuildingIcon, href: "#council" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openProgrammes, setOpenProgrammes] = useState<boolean>(true);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
            className="text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
            aria-label="Close search"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
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
              href="#"
              onClick={() => {
                setActiveTab("Home");
                setOpenDropdown(null);
              }}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeTab === "Home" ? "text-stone-900" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              Home
              {activeTab === "Home" && (
                <span className="absolute left-3 right-3 bottom-0 h-[2.5px] bg-[#800000] rounded-full animate-in fade-in duration-200"></span>
              )}
            </a>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("About Us")}
            >
              <button
                onClick={() => toggleDropdown("About Us")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  openDropdown === "About Us" || activeTab === "About Us"
                    ? "text-[#800000]"
                    : "text-stone-700 hover:text-[#800000]"
                }`}
              >
                About Us
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    openDropdown === "About Us" ? "rotate-180 text-[#800000]" : "text-stone-400"
                  }`}
                />
              </button>

              {openDropdown === "About Us" && (
                <div className="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-stone-100 py-3 z-50 transition-all duration-300 transform origin-top-left animate-in fade-in zoom-in-95 slide-in-from-top-2">
                  <div className="flex flex-col space-y-0.5 px-2">
                    {ABOUT_US_ITEMS.map((item) => {
                      const IconComp = item.icon;
                      const hasSub = item.subItems && item.subItems.length > 0;

                      return (
                        <div key={item.title} className="flex flex-col">
                          <a
                            href={item.href}
                            onClick={(e) => {
                              if (hasSub) {
                                e.preventDefault();
                                setOpenProgrammes(!openProgrammes);
                              } else {
                                setActiveTab("About Us");
                                setOpenDropdown(null);
                              }
                            }}
                            className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-stone-700 hover:text-[#800000] hover:bg-red-50/60 transition-all duration-200"
                          >
                            <div className="flex items-center gap-3">
                              <span className="p-1.5 rounded-lg bg-stone-100 group-hover:bg-red-100 text-[#800000] transition-colors duration-200">
                                <IconComp className="w-4 h-4 text-[#800000]" />
                              </span>
                              <span className="tracking-wide">{item.title}</span>
                            </div>
                            <ChevronRightIcon
                              className={`w-3.5 h-3.5 text-stone-300 group-hover:text-[#800000] group-hover:translate-x-0.5 transition-all duration-200 ${
                                hasSub && openProgrammes ? "rotate-90 text-[#800000]" : ""
                              }`}
                            />
                          </a>

                          {hasSub && openProgrammes && (
                            <div className="ml-9 border-l-2 border-dashed border-red-200 pl-3 my-1 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                              {item.subItems!.map((sub) => (
                                <a
                                  key={sub.title}
                                  href={sub.href}
                                  onClick={() => {
                                    setActiveTab("About Us");
                                    setOpenDropdown(null);
                                  }}
                                  className="block py-1.5 px-2.5 rounded-lg text-xs font-normal text-stone-500 hover:text-[#800000] hover:bg-red-50/40 transition-colors"
                                >
                                  - {sub.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("Academics")}
            >
              <button
                onClick={() => toggleDropdown("Academics")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  openDropdown === "Academics" || activeTab === "Academics"
                    ? "text-[#800000]"
                    : "text-stone-700 hover:text-[#800000]"
                }`}
              >
                Academics
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    openDropdown === "Academics" ? "rotate-180 text-[#800000]" : "text-stone-400"
                  }`}
                />
              </button>

              {openDropdown === "Academics" && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-stone-100 py-3 z-50 transition-all duration-300 transform origin-top-left animate-in fade-in zoom-in-95 slide-in-from-top-2">
                  <div className="flex flex-col space-y-0.5 px-2">
                    {ACADEMICS_ITEMS.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => {
                            setActiveTab("Academics");
                            setOpenDropdown(null);
                          }}
                          className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-stone-700 hover:text-[#800000] hover:bg-red-50/60 transition-all duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <span className="p-1.5 rounded-lg bg-stone-100 group-hover:bg-red-100 text-[#800000] transition-colors">
                              <IconComp className="w-4 h-4 text-[#800000]" />
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <ChevronRightIcon className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#800000] group-hover:translate-x-0.5 transition-all" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#admissions"
              onClick={() => {
                setActiveTab("Admissions");
                setOpenDropdown(null);
              }}
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeTab === "Admissions" ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              Admissions
            </a>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("Campus Life")}
            >
              <button
                onClick={() => toggleDropdown("Campus Life")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  openDropdown === "Campus Life" || activeTab === "Campus Life"
                    ? "text-[#800000]"
                    : "text-stone-700 hover:text-[#800000]"
                }`}
              >
                Campus Life
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    openDropdown === "Campus Life" ? "rotate-180 text-[#800000]" : "text-stone-400"
                  }`}
                />
              </button>

              {openDropdown === "Campus Life" && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-stone-100 py-3 z-50 transition-all duration-300 transform origin-top-left animate-in fade-in zoom-in-95 slide-in-from-top-2">
                  <div className="flex flex-col space-y-0.5 px-2">
                    {CAMPUS_LIFE_ITEMS.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => {
                            setActiveTab("Campus Life");
                            setOpenDropdown(null);
                          }}
                          className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-stone-700 hover:text-[#800000] hover:bg-red-50/60 transition-all duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <span className="p-1.5 rounded-lg bg-stone-100 group-hover:bg-red-100 text-[#800000] transition-colors">
                              <IconComp className="w-4 h-4 text-[#800000]" />
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <ChevronRightIcon className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#800000] group-hover:translate-x-0.5 transition-all" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#news"
              onClick={() => {
                setActiveTab("News & Events");
                setOpenDropdown(null);
              }}
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                activeTab === "News & Events" ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              News & Events
            </a>

            <a
              href="#alumni"
              onClick={() => {
                setActiveTab("Alumni");
                setOpenDropdown(null);
              }}
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeTab === "Alumni" ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              Alumni
            </a>

            <a
              href="#contact"
              onClick={() => {
                setActiveTab("Contact Us");
                setOpenDropdown(null);
              }}
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                activeTab === "Contact Us" ? "text-[#800000]" : "text-stone-700 hover:text-[#800000]"
              }`}
            >
              Contact Us
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-stone-600 hover:text-[#800000] p-2 rounded-full hover:bg-stone-100 transition-all duration-200 focus:outline-none"
              title="Search"
              aria-label="Toggle search bar"
            >
              <SearchIcon className="w-4 h-4" />
            </button>

            <div className="h-5 w-[1px] bg-stone-300"></div>

            <button className="flex items-center gap-2 bg-[#800000] hover:bg-[#660000] text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95">
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
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            Home
          </a>

          <div>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "About Us" ? null : "About Us")}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
            >
              <span>About Us</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  mobileExpanded === "About Us" ? "rotate-180 text-[#800000]" : ""
                }`}
              />
            </button>

            {mobileExpanded === "About Us" && (
              <div className="ml-4 my-1 space-y-1 pl-2 border-l-2 border-red-200">
                {ABOUT_US_ITEMS.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 hover:text-[#800000] hover:bg-red-50/50 rounded-md"
                    >
                      <IconComp className="w-3.5 h-3.5 text-[#800000]" />
                      <span>{item.title}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "Academics" ? null : "Academics")}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
            >
              <span>Academics</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  mobileExpanded === "Academics" ? "rotate-180 text-[#800000]" : ""
                }`}
              />
            </button>

            {mobileExpanded === "Academics" && (
              <div className="ml-4 my-1 space-y-1 pl-2 border-l-2 border-red-200">
                {ACADEMICS_ITEMS.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-medium text-stone-700 hover:text-[#800000]"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#admissions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            Admissions
          </a>

          <a
            href="#news"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            News & Events
          </a>

          <a
            href="#alumni"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            Alumni
          </a>

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-stone-800 hover:bg-stone-100"
          >
            Contact Us
          </a>

          <div className="pt-2">
            <button className="w-full flex items-center justify-center gap-2 bg-[#800000] text-white py-2.5 rounded-xl text-sm font-semibold shadow-md">
              <UserIcon className="w-4 h-4" />
              <span>Log In</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
