"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type RoleType = "teacher" | "student" | "parent";

export default function LoginPage() {
  const [activeRole, setActiveRole] = useState<RoleType>("teacher");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginSuccess(true);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full font-sans bg-[#FAF5EE] text-stone-900 flex flex-col justify-between relative overflow-hidden selection:bg-[#800000] selection:text-white">

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#800000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>



      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-4 flex flex-col items-center justify-center relative z-10 space-y-6">

        <div className="text-center space-y-2 flex flex-col items-center">
          <div className="relative w-28 h-28 mb-1 drop-shadow-md">
            <Image
              src="/logo-vasant-valley.svg"
              alt="Vasant Valley School Logo"
              width={112}
              height={112}
              style={{ width: "auto", height: "auto" }}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Vasant Valley School
          </h1>
          <p className="text-xs text-stone-500 font-medium">Digital Campus & ERP Login Portal</p>
        </div>

        <div className="w-full bg-white rounded-3xl border border-stone-200/90 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">

          <div className="lg:col-span-5 bg-[#800000] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full border-8 border-white/10 pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 block mb-1">
                  PORTAL SELECTION
                </span>
                <h2 className="font-serif font-bold text-xl leading-tight text-white">
                  Select Account Role
                </h2>
                <p className="text-xs text-amber-100/80 font-normal mt-1">
                  Choose your account type below to sign in to your dashboard.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => {
                    setActiveRole("teacher");
                    setLoginSuccess(false);
                  }}
                  className={`w-full p-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer border ${activeRole === "teacher"
                    ? "bg-white text-[#800000] border-white shadow-md"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
                    </svg>
                    <span>Teacher Login</span>
                  </div>
                  {activeRole === "teacher" && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#800000]"></span>
                  )}
                </button>

                <button
                  onClick={() => {
                    setActiveRole("student");
                    setLoginSuccess(false);
                  }}
                  className={`w-full p-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer border ${activeRole === "student"
                    ? "bg-white text-[#800000] border-white shadow-md"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                    <span>Student Login</span>
                  </div>
                  {activeRole === "student" && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#800000]"></span>
                  )}
                </button>

                <button
                  onClick={() => {
                    setActiveRole("parent");
                    setLoginSuccess(false);
                  }}
                  className={`w-full p-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer border ${activeRole === "parent"
                    ? "bg-white text-[#800000] border-white shadow-md"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Parent Login</span>
                  </div>
                  {activeRole === "parent" && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#800000]"></span>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20 text-[10.5px] text-white/80 space-y-1 relative z-10">
              <p className="font-semibold">IT Helpdesk Support:</p>
              <p>vasantvalley@vasantvalley.edu.in • +91 11 41767940</p>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 bg-white flex flex-col justify-center space-y-6">

            <div className="space-y-1 border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#800000]"></span>
                <span className="text-[11px] font-extrabold text-[#800000] uppercase tracking-wider">
                  {activeRole === "teacher" ? "Faculty Access" : activeRole === "student" ? "Student Access" : "Parent Access"}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Sign In to {activeRole === "teacher" ? "Teacher" : activeRole === "student" ? "Student" : "Parent"} Account
              </h3>
              <p className="text-xs text-stone-500 font-normal">
                Enter your Login ID and Password below to access your portal.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-xs">
              {loginSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-emerald-900 text-sm">Authentication Successful!</h4>
                  <p className="text-xs text-emerald-700">Redirecting to Vasant Valley {activeRole.toUpperCase()} Portal...</p>
                </div>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <label className="font-bold text-stone-700">Login ID / Registered Email *</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-stone-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={
                          activeRole === "teacher"
                            ? "employee@vasantvalley.edu.in"
                            : activeRole === "student"
                              ? "admission_no@vasantvalley.edu.in"
                              : "registered email or mobile"
                        }
                        className="w-full bg-stone-50/80 border border-stone-300 rounded-xl pl-10 pr-3.5 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#800000] focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-bold text-stone-700">Password *</label>
                      <a href="#" className="text-[11px] text-[#800000] font-bold hover:underline">
                        Forgot Password ?
                      </a>
                    </div>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-stone-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full bg-stone-50/80 border border-stone-300 rounded-xl pl-10 pr-3.5 py-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#800000] focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-stone-300 text-[#800000] focus:ring-[#800000]"
                      />
                      <span className="text-stone-600 font-medium">Keep me signed in</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#800000] hover:bg-[#600010] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <span>Authenticating Credentials...</span>
                    ) : (
                      <>
                        <span>Sign In as {activeRole.toUpperCase()}</span>
                        <span>&rarr;</span>
                      </>
                    )}
                  </button>
                </>
              )}
            </form>

            <div className="pt-2 text-center text-[10.5px] text-stone-400 flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>256-bit SSL Encrypted Official School Server</span>
            </div>

          </div>

        </div>

      </div>


    </div>
  );
}
