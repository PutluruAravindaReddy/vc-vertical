"use client";
import React from "react";
import { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeMediaQuery.matches);
      const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
        setIsDarkMode(e.matches);
      };
      darkModeMediaQuery.addEventListener('change', handleChange);
      return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }
  }, []);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="flex bg-gradient-to-tl from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF] flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-white border-b border-gray-200 text-[1.1rem] py-1 sticky top-0">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4  sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex flex-row items-center hover:scale-105"
              aria-label="Brand"
            >
              <img
                src="/img/Logo/srm_logo.svg"
                alt="Hacktrix-Logo"
                className="w-30 h-[2rem] lg:w-33 lg:h-[2.5rem]"
              />
              <img
                src="/img/Logo/vc_logo.jpg"
                alt="Hacktrix-Logo"
                className=" w-[2.6rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[50%] "
              />
            </a>

            <div className="sm:hidden my-[1rem]">
              <button
                type="button"
                className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                              <svg className="rounded-full" width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill={isDarkMode ? 'white' : '#253AA0'}/>
                <path d="M17.75 28.5L26.25 20L17.75 11.5" stroke={isDarkMode ? '#0A0D10' : 'white'} strokeWidth="2.83333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row  sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <Link
                className={`font-medium sm:py-6 ${
                  pathname === "/"
                    ? "text-blue"
                    : "text-black hover:text-gray-500 sm:py-6 "
                }`}
                href="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className={`font-medium sm:py-6 ${
                  pathname === "/faculty"
                    ? "text-blue"
                    : "text-black hover:text-gray-500 sm:py-6 "
                }`}
                href="/faculty"
              >
                Faculty
              </Link>
              <Link
                className={`font-medium sm:py-6 ${
                  pathname === "/publications"
                    ? "text-blue"
                    : "text-black hover:text-gray-500 sm:py-6 "
                }`}
                href="./publications"
              >
                Publications
              </Link>
              <Link
                className={`font-medium sm:py-6 ${
                  pathname === "/events"
                    ? "text-blue"
                    : "text-black hover:text-gray-500 sm:py-6 "
                }`}
                href="/events"
              >
                Events
              </Link>
              <Link
               className={`font-medium sm:py-6 ${
                pathname === "/gallery"
                  ? "text-blue"
                  : "text-black hover:text-gray-500 sm:py-6 "
              }`}
                href="/gallery"
              >
                Gallery
              </Link>
              <div className="hs-dropdown  [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className={`flex items-center w-full hover:text-gray-500 font-medium ${
                    pathname === "/VCLAB/Members" || "/VCLAB/Projects" || "/VCLAB/Equipments" || "/VCLAB/Events"
                      ? "text-blue"
                      : "text-black hover:text-gray-500 "
                  } `}
                >
                  VC Lab
                  <svg
                    className="flex-shrink-0 ms-2 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="hs-dropdown-menu bg-gradient-to-tl from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF] transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2    before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <Link
                    className={`flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 ${
                      pathname === "/VCLAB/Members"
                        ? "text-blue"
                        : "text-black hover:text-gray-500 "
                    }`}

                    href="./VCLAB/Members"
                  >
                    Members
                  </Link>
                  {/* <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      >
                        Sub Menu
                        <svg
                          className="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          About
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Downloads
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Team Account
                        </Link>
                      </div>
                    </div> */}
                  <Link
                    className="flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                    href="#"
                  >
                    Projects
                  </Link>
                  <Link
                    className="flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                    href="#"
                  >
                    Equipments
                  </Link>
                  <Link
                    className="flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500  "
                    href="#"
                  >
                    Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </>
  );
}
