import React from "react";

export default function VerticalHead() {
  return (
    <>
      {/* Hero */}
      <div className="max-w-[85rem] mx-auto px-4 py-8 sm:py-10 lg:py-12 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="flex flex-col sm:flex-row md:items-center">
          {/* End Col */}
          <div className="relative ms-4 max-w-[15rem]">
            <img
              className="w-full rounded-md"
              src="/img/faculty/Sreedhar_sir.jpg"
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-2 -mb-2 me-2 -ms-2 lg:mt-3 lg:-mb-3 lg:me-3 lg:-ms-3 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0" />
          </div>
          <div className="max-w-[85rem] ml-2 lg:ml-2">
            <div className="flex-shrink-0">
              <h3 className="block text-lg mt-4 lg:mt-0 font-semibold text-gray-800 dark:text-white cursor-pointer">
                Dr. Sridhar S S
              </h3>
              <p className=" text-gray-500 text-justify">Professor</p>
            </div>
            <hr className="my-2" />
            <h2 className="text-[0.9rem] mt-2 text-gray-800 font-bold lg:text-[0.9rem] dark:text-white">
              VISUAL COMPUTING VERTICAL{" "}
              <span class="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
                HEAD
              </span>
            </h2>
            <hr className="my-2" />
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              Department of Computing Technologies
              <br />
              School of Computing , SRM Institute of Science and Technology ,
              Kattankulathur
            </p>
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 font-medium text-blue dark:text-blue-500"
                href="#"
              >
                Know more
                <svg
                  className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
