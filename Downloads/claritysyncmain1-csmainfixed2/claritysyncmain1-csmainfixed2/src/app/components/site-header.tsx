"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Templates", href: "/templates" },
  { label: "Widgets", href: "/widgets" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/#features" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-slate-100 font-semibold">
            {/* CS CLEAR logo */}
            <img 
              src="/FullLogo_Transparent_NoBuffer.png" 
              alt="CS CLEAR" 
              className="h-7 w-7 object-contain rounded-sm"
            />
            <span>ClaritySync</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV.map((item) => {
              const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)] ${
                    isActive
                      ? "bg-slate-100 dark:bg-gray-800 text-slate-900 dark:text-white"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Auth Buttons & Settings */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-slate-200 dark:border-slate-700">
              <ThemeToggle />
              <Link
                href="/auth/login"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)] rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-gradient-to-r from-[#1dcbf2] to-[#0ea5e9] text-white px-4 py-2 text-sm font-semibold rounded-full hover:from-[#0ea5e9] hover:to-[#0284c7] transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)]"
              >
                Sign Up
              </Link>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)]"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-black/50 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-4 flex flex-col space-y-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Settings & Auth Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 mt-4 flex flex-col space-y-2">
              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>
              <Link
                href="/auth/login"
                onClick={() => setOpen(false)}
                className="text-center rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                onClick={() => setOpen(false)}
                className="text-center bg-gradient-to-r from-[#1dcbf2] to-[#0ea5e9] text-white px-3 py-2 rounded-lg font-semibold hover:from-[#0ea5e9] hover:to-[#0284c7] transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}