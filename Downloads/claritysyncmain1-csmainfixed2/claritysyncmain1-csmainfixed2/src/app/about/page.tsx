import Link from 'next/link';
import type { FC, SVGProps } from "react";
import StarField from '../components/star-field';

// Icons
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

export default function AboutPage() {
  return (
    <div className="font-sans text-slate-800 dark:text-white min-h-screen bg-slate-50 dark:bg-black">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-slate-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 text-slate-900 dark:text-white font-semibold">
              <img
                src="/FullLogo_Transparent_NoBuffer.png"
                alt="CS CLEAR"
                className="h-8 w-8 object-contain rounded-sm"
              />
              <span>ClaritySync</span>
            </Link>
            <Link 
              href="/" 
              className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        {/* Hero Section */}
        <section className="relative text-center mb-16">
          <StarField />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About ClaritySync
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Student built for students. We're on a mission to make productivity simple and accessible for everyone.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="relative mb-16">
          <StarField />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-slate-100 mb-6">
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
                As Canadians, we value simplicity, reliability, and genuine helpfulness. That's why we built ClaritySync—clean, 
                easy-to-use Notion templates and widgets that actually work the way you think.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 dark:text-shadow-[0_0_8px_rgba(29,203,242,0.3)]">
                We're especially passionate about helping students succeed. Whether you're managing coursework, 
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
        </section>

        {/* Mission & Values Section */}
        <section className="relative mb-16">
          <StarField />
          <h2 className="text-3xl md:text-4xl font-normal text-center text-slate-900 dark:text-slate-100 mb-6">
            Our Mission & Values
          </h2>
          
          <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            We're on a mission to make productivity simple and accessible for everyone, especially students. 
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
        </section>

        {/* Why ClaritySync Section */}
        <section className="relative mb-16">
          <StarField />
          <h2 className="text-3xl md:text-4xl font-normal text-center text-slate-900 dark:text-white mb-6">
            Why ClaritySync?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-slate-600 dark:text-gray-300 mb-12">
            Our mission is to eliminate the noise and friction in modern workflows. We provide simple, effective Notion templates and widgets that help you and your team stay focused on what truly matters, fostering alignment and boosting productivity without the clutter.
          </p>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
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
        </section>

        {/* CTA Section */}
        <section className="relative text-center">
          <StarField />
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white dark:text-shadow-[0_0_10px_rgba(29,203,242,0.4)] sm:text-4xl mb-8">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              Explore Widgets
            </Link>
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
            <Link href="/about" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-100 hover:underline underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
