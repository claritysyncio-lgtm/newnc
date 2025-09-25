'use client';

import Link from 'next/link';
import React from "react";
import type { FC, SVGProps } from "react";
import StarField from './components/star-field';

// --- Icon Components ---
const FocusIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AlignIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const LightbulbIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 17.25a6.75 6.75 0 113.5 0v1.25a1.5 1.5 0 01-1.5 1.5h-0.5a1.5 1.5 0 01-1.5-1.5v-1.25z"
    />
  </svg>
);

const MapPinIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UsersIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HeartIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
  </svg>
);

// --- Main Page Component ---
export default function Home() {

  return (
    <div className="font-sans text-slate-800 dark:text-white">
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative isolate flex items-center justify-center min-h-[calc(100svh-4rem)] py-24 sm:py-28 overflow-hidden bg-white dark:bg-black">
          <StarField />
          
          {/* Centered glow effect for dark mode */}
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-transparent via-[rgba(29,203,242,0.1)] to-transparent rounded-full blur-[120px] animate-breathing-glow dark:block hidden -z-10" style={{marginTop: '-160px', marginLeft: '-160px'}} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-transparent via-[rgba(29,203,242,0.08)] to-transparent rounded-full blur-[80px] animate-breathing-glow dark:block hidden -z-10" style={{marginTop: '-128px', marginLeft: '-128px'}} />

          <div className="px-6 sm:px-8 lg:px-10 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src="/logo.png" 
                    alt="CS CLEAR" 
                    className="h-28 w-28 object-contain rounded-lg animate-fade-and-spin dark:animate-text-illumination"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <h1 
                  className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white/90 dark:animate-text-illumination"
                  id="claritysync-title"
                >
                  ClaritySync
                </h1>
                <p className="mt-3 text-xl md:text-2xl font-semibold text-slate-700 dark:text-white/90 dark:animate-text-illumination">
                  Unlock clarity. Live in sync.
                </p>
              </div>

              <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-600 dark:text-gray-300 dark:animate-text-illumination">
                Notion templates and widgets to bring focus, alignment, and productivity.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/templates/with-transition"
                  className="px-6 sm:px-8 py-3 rounded-full bg-[#1dcbf2] text-white font-semibold shadow-sm shadow-[rgba(29,203,242,0.2)] hover:bg-[hsl(191,89%,46%)] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.6)] active:scale-95 will-change-transform dark:animate-button-illumination"
                  style={{ transform: 'translateZ(0)' }}
                >
                  Explore Templates
                </Link>
                <Link
                  href="/widgets/with-transition"
                  className="px-6 sm:px-8 py-3 rounded-full bg-white dark:bg-gray-900 text-slate-700 dark:text-white ring-1 ring-slate-200 dark:ring-gray-800 font-semibold hover:bg-slate-50 dark:hover:bg-gray-800 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 dark:focus-visible:ring-gray-600 active:scale-95 will-change-transform dark:animate-button-illumination"
                  style={{ transform: 'translateZ(0)' }}
                >
                  Widgets
                </Link>
              </div>
            </div>
          </div>
          {/* Scroll hint arrow */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400/50 dark:text-slate-500/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-10 w-14 animate-bounce"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l8 8 8-8" />
            </svg>
          </div>
          {/* Seamless narrow gradient */}
          {/* Removed bottom gradient as per user feedback */}
        </section>

        {/* About Section */}
        <section id="about" className="relative py-16 sm:py-20 bg-white dark:bg-black">
          <StarField />
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-normal text-center text-slate-900 dark:text-white -mt-12" id="why-claritysync-title">
              Why ClaritySync?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-slate-600 dark:text-gray-300" id="why-claritysync-desc">
              Our mission is to eliminate the noise and friction in modern workflows. We provide simple, effective Notion templates and widgets that help you and your team stay focused on what truly matters, fostering alignment and boosting productivity without the clutter.
            </p>

            <div className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 dark:shadow-[0_0_20px_rgba(29,203,242,0.4)] dark:shadow-cyan-500/30">
                <FocusIcon className="h-12 w-12 text-[#1dcbf2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">Stay Focused</h3>
                <p className="text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_6px_rgba(29,203,242,0.2)]">
                  Minimize distractions with streamlined templates and powerful widgets that keep you organized.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 dark:shadow-[0_0_20px_rgba(29,203,242,0.4)] dark:shadow-cyan-500/30">
                <AlignIcon className="h-12 w-12 text-[#1dcbf2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">Turn Chaos into Clarity</h3>
                <p className="text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_6px_rgba(29,203,242,0.2)]">
                  Stay organized with notes, reminders, and updates all in one place. Use it for your own studies or with friends—so nothing slips through the cracks.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 dark:shadow-[0_0_20px_rgba(29,203,242,0.4)] dark:shadow-cyan-500/30">
                <LightbulbIcon className="h-12 w-12 text-[#1dcbf2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">Work Smarter</h3>
                <p className="text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_6px_rgba(29,203,242,0.2)]">
                  Leverage powerful tools designed for efficiency, not complexity. Get more done with less effort.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Mission & Values Section */}
        <section className="relative py-16 sm:py-20 bg-white dark:bg-black">
          <StarField />
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-normal text-center text-slate-900 dark:text-slate-100 mb-6" id="mission-values-title">
              Our Mission & Values
            </h2>
            
            <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto" id="mission-values-desc">
              We&apos;re on a mission to make productivity simple and accessible for everyone, especially students. 
              Our values guide everything we create—from the Notion templates we design to the widgets we build.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 dark:shadow-[0_0_20px_rgba(29,203,242,0.4)] dark:shadow-cyan-500/30 dark:animate-button-illumination">
                <UsersIcon className="h-12 w-12 text-[#1dcbf2] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">Student-First</h3>
                <p className="text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_6px_rgba(29,203,242,0.2)]">
                  We prioritize students and learners, creating tools that support academic success and personal growth.
                </p>
              </div>
              
              <div className="relative text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 dark:shadow-[0_0_20px_rgba(29,203,242,0.4)] dark:shadow-cyan-500/30 dark:animate-button-illumination">
                <LightbulbIcon className="h-12 w-12 text-[#1dcbf2] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">Simplicity</h3>
                <p className="text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_6px_rgba(29,203,242,0.2)]">
                  Clean, intuitive design that eliminates complexity and makes productivity tools accessible to everyone.
                </p>
              </div>
              
              <div className="relative text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 dark:shadow-[0_0_20px_rgba(29,203,242,0.4)] dark:shadow-cyan-500/30 dark:animate-button-illumination">
                <HeartIcon className="h-12 w-12 text-[#1dcbf2] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">Genuine Care</h3>
                <p className="text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_6px_rgba(29,203,242,0.2)]">
                  We genuinely care about making your life easier, not just selling you another tool to manage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-16 sm:py-20 bg-white dark:bg-black">
          <StarField />
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-slate-100 mb-6" id="our-story-title">
                  Our Story
                </h2>
                <div className="mb-6 p-4 bg-gradient-to-r from-[#1dcbf2]/10 to-transparent rounded-lg border-l-4 border-[#1dcbf2]">
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">
                    Student built for students.
                  </p>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)] mb-6">
                  Developed in Canada, ClaritySync was founded on a simple belief: life should be easier, not more complicated. 
                  We saw students and professionals struggling with cluttered, overwhelming tools that promised productivity but delivered confusion.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)] mb-6">
                  As Canadians, we value simplicity, reliability, and genuine helpfulness. That&apos;s why we built ClaritySync—clean, 
                  easy-to-use Notion templates and widgets that actually work the way you think.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">
                  We&apos;re especially passionate about helping students succeed. Whether you&apos;re managing coursework, 
                  planning projects, or staying organized, our tools are designed to support your academic journey.
                </p>
              </div>
              <div className="relative bg-slate-50 dark:bg-gray-900 p-8 rounded-2xl border border-slate-200 dark:border-gray-800 dark:shadow-[0_0_20px_rgba(29,203,242,0.4)] dark:shadow-cyan-500/30 dark:animate-button-illumination">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-6 w-6 text-[#1dcbf2] mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">Proudly Canadian</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_6px_rgba(29,203,242,0.2)]">
                  Based in Canada, we understand the unique challenges of modern life and work. 
                  Our solutions are built with Canadian values of simplicity, reliability, and community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="relative bg-white dark:bg-black">
          <StarField />
          <div className="max-w-4xl mx-auto text-center py-16 sm:py-20 px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white dark:text-shadow-[0_0_10px_rgba(29,203,242,0.4)] sm:text-4xl">
              <span className="block">Start building clarity into your workflow today.</span>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/templates/with-transition"
                className="px-6 sm:px-8 py-3 rounded-full bg-[#1dcbf2] text-white font-semibold shadow-sm shadow-[rgba(29,203,242,0.2)] hover:bg-[hsl(191,89%,46%)] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.6)] active:scale-95 will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              >
                Explore Templates
              </Link>
              <Link
                href="/widgets/with-transition"
                className="px-6 sm:px-8 py-3 rounded-full bg-[#1dcbf2] text-white font-semibold shadow-sm shadow-[rgba(29,203,242,0.2)] hover:bg-[hsl(191,89%,46%)] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.6)] active:scale-95 will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              >
                Widgets
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-gray-800 text-slate-500 dark:text-gray-300">
        <div className="max-w-6xl mx-auto py-8 px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ClaritySync. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <Link href="#about" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#features" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
