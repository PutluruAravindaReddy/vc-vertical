// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { useSession } from "next-auth/react";

// export default function NavBar() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const { data: session } = useSession();

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const darkModeMediaQuery = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       );
//       setIsDarkMode(darkModeMediaQuery.matches);
//       const handleChange = (e: {
//         matches: boolean | ((prevState: boolean) => boolean);
//       }) => {
//         setIsDarkMode(e.matches);
//       };
//       darkModeMediaQuery.addEventListener("change", handleChange);
//       return () =>
//         darkModeMediaQuery.removeEventListener("change", handleChange);
//     }
//   }, []);
//   const pathname = usePathname();
//   const isVCLabActive =
//     pathname === "/VCLAB/Members" ||
//     pathname === "/VCLAB/Projects" ||
//     pathname === "/VCLAB/Equipments" ||
//     pathname === "/VCLAB/Events";
//   console.log(pathname);
//   return (
//     <>
//       {/* ========== HEADER ========== */}
//       <header className="flex bg-gradient-to-tl from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF]  flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-white border-b border-gray-200 text-[1.1rem] py-1 sticky top-0">
//         <nav
//           className="relative max-w-[85rem] w-full mx-auto px-4  sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
//           aria-label="Global"
//         >
//           <div className="flex items-center justify-between">
//             <a
//               href="/"
//               className="flex flex-row items-center hover:scale-105"
//               aria-label="Brand"
//             >
//               <img
//                 src="/img/Logo/srm_logo.svg"
//                 alt="Srm Logo"
//                 className="w-30 h-[2rem] lg:w-33 lg:h-[2.5rem]"
//               />
//               <img
//                 src="/img/Logo/vc_logo.jpg"
//                 alt="Vertical Logo"
//                 className=" w-[2.6rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[50%] "
//               />
//             </a>

//             <div className="sm:hidden my-[1rem]">
//               <button
//                 type="button"
//                 className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
//                 data-hs-collapse="#navbar-collapse-with-animation"
//                 aria-controls="navbar-collapse-with-animation"
//                 aria-label="Toggle navigation"
//               >
//                 <svg
//                   className="rounded-full"
//                   width="50"
//                   height="50"
//                   viewBox="0 0 40 40"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect
//                     width="40"
//                     height="40"
//                     rx="20"
//                     fill={isDarkMode ? "white" : "#253AA0"}
//                   />
//                   <path
//                     d="M17.75 28.5L26.25 20L17.75 11.5"
//                     stroke={isDarkMode ? "#0A0D10" : "white"}
//                     strokeWidth="2.83333"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div
//             id="navbar-collapse-with-animation"
//             className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
//           >
//             <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row  sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
//               <Link
//                 className={`font-medium sm:py-6 ${
//                   pathname === "/"
//                     ? "text-blue"
//                     : "text-black dark:text-[#FFFFFF] hover:text-gray-500 sm:py-6 "
//                 }`}
//                 href="/"
//                 aria-current="page"
//               >
//                 Home
//               </Link>
//               <Link
//                 className={`font-medium sm:py-6 ${
//                   pathname === "/faculty"
//                     ? "text-blue"
//                     : "text-black dark:text-[#FFFFFF] hover:text-gray-500 sm:py-6 "
//                 }`}
//                 href="/faculty"
//               >
//                 Faculty
//               </Link>
//               <Link
//                 className={`font-medium sm:py-6 ${
//                   pathname === "/publications"
//                     ? "text-blue"
//                     : "text-black dark:text-[#FFFFFF] hover:text-gray-500 sm:py-6 "
//                 }`}
//                 href="/publications"
//               >
//                 Publications
//               </Link>
//               <Link
//                 className={`font-medium sm:py-6 ${
//                   pathname === "/events"
//                     ? "text-blue"
//                     : "text-black dark:text-[#FFFFFF] hover:text-gray-500 sm:py-6 "
//                 }`}
//                 href="/events"
//               >
//                 Events
//               </Link>
//               <Link
//                 className={`font-medium sm:py-6 ${
//                   pathname === "/gallery"
//                     ? "text-blue"
//                     : "text-black dark:text-[#FFFFFF] hover:text-gray-500 sm:py-6 "
//                 }`}
//                 href="/gallery"
//               >
//                 Gallery
//               </Link>
//               <div className="hs-dropdow  [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
//                 <button
//                   type="button"
//                   className={`flex items-center w-full font-medium ${
//                     isVCLabActive
//                       ? "text-blue"
//                       : "text-black dark:text-[#FFFFFF] hover:text-gray-500"
//                   }`}
//                 >
//                   VC Lab
//                   <svg
//                     className="flex-shrink-0 ms-2 size-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={24}
//                     height={24}
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="m6 9 6 6 6-6" />
//                   </svg>
//                 </button>
//                 <div className="hs-dropdown-menu dark:bg-black bg-gradient-to-tl from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF] transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
//                   <Link
//                     className={`flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base ${
//                       pathname === "/VCLAB/Members"
//                         ? "text-blue"
//                         : "text-black dark:text-[#FFFFFF] hover:text-gray-500"
//                     }`}
//                     href="/VCLAB/Members"
//                   >
//                     Members
//                   </Link>
//                   <Link
//                     className={`flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base ${
//                       pathname === "/VCLAB/Projects"
//                         ? "text-blue"
//                         : "text-black dark:text-[#FFFFFF] hover:text-gray-500"
//                     }`}
//                     href="/VCLAB/Projects"
//                   >
//                     Projects
//                   </Link>
//                   <Link
//                     className={`flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base ${
//                       pathname === "/VCLAB/Equipments"
//                         ? "text-blue"
//                         : "text-black dark:text-[#FFFFFF] hover:text-gray-500"
//                     }`}
//                     href="/VCLAB/Equipments"
//                   >
//                     Equipments
//                   </Link>
//                   <Link
//                     className={`flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base ${
//                       pathname === "/VCLAB/Events"
//                         ? "text-blue"
//                         : "text-black dark:text-[#FFFFFF] hover:text-gray-500"
//                     }`}
//                     href="/VCLAB/Events"
//                   >
//                     Events
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//       {/* ========== END HEADER ========== */}
//     </>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isVCLabActive = [
    "/VCLAB/Members",
    "/VCLAB/Projects",
    "/VCLAB/Equipments",
    "/VCLAB/Events",
  ].includes(pathname);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full border-b border-gray-400 text-[1.1rem] py-1 sticky top-0 bg-gradient-to-tl from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF] dark:bg-gradient-to-tr dark:from-black dark:via-black dark:to-black">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-row items-center hover:scale-103"
            aria-label="Brand"
          >
            <img
              src="/img/Logo/srm_logo.svg"
              alt="Srm Logo"
              className="w-30 h-[2rem] lg:w-33 lg:h-[2.5rem] dark:hidden"
            />
            <img
              src="/img/Logo/srm_logo_dark.svg"
              alt="Srm Logo"
              className="w-30 h-[2rem] lg:w-33 lg:h-[2.5rem] hidden dark:block"
            />
            <img
              src="/img/Logo/vc_logo.jpg"
              alt="Vertical Logo"
              className="w-[2.3rem] h-[2.2rem] lg:w-[2.7rem] lg:h-[2.7rem] rounded-[50%]"
            />
          </Link>

          <div className="sm:hidden my-[1rem]">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg text-gray-800 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="rounded-full"
                width="50"
                height="50"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  className="fill-current text-[#253AA0] dark:text-white"
                />
                <path
                  d="M17.75 28.5L26.25 20L17.75 11.5"
                  className="stroke-current text-white dark:text-black"
                  strokeWidth="2.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            {[
              { path: "/", label: "Home" },
              { path: "/faculty", label: "Faculty" },
              { path: "/publications", label: "Publications" },
              { path: "/events", label: "Events" },
              { path: "/gallery", label: "Gallery" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`font-medium sm:py-6 ${
                  pathname === path
                    ? "text-blue"
                    : "text-black dark:text-white hover:text-gray-500 sm:py-6"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] pb-3 sm:py-4">
              <button
                type="button"
                className={`flex items-center w-full font-medium ${
                  isVCLabActive
                    ? "text-blue"
                    : "text-black dark:text-white hover:text-gray-500"
                }`}
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
              <div className="hs-dropdown-menu bg-gradient-to-tl from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF] transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 dark:bg-gradient-to-tr dark:from-[#111827] dark:via-[#1f2937] dark:to-black">
                {[
                  { path: "/VCLAB/Members", label: "Members" },
                  { path: "/VCLAB/Projects", label: "Projects" },
                  { path: "/VCLAB/Equipments", label: "Equipments" },
                  { path: "/VCLAB/Events", label: "Events" },
                ].map(({ path, label }) => (
                  <Link
                    key={path}
                    href={path}
                    className={`flex items-center font-medium gap-x-3.5 py-2 px-3 rounded-lg text-base ${
                      pathname === path
                        ? "text-blue"
                        : "text-black dark:text-white hover:text-gray-500"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
