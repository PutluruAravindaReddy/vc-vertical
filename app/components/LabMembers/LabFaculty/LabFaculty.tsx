import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LabFaculty() {
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 pb-10 pt-5 sm:px-6 lg:px-8 lg:pb-14 lg:pt-5 mx-auto">
        {/* Title */}
        <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6">
          <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
            Faculty Mentors
          </span>
        </h2>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Card 1 */}
          <a
  className="group border border-transparent rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gray-700 dark:hover:shadow-gray-300 transition duration-300 ease-in-out hover:border-white dark:hover:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-800"
  href="#"
>
  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden ">
    <img
      className="size-full w-[90%] pt-5 pl-[5%] rounded-[5%] hover:rounded-t-[30px] absolute top-0 start-0 object-cover group-hover:scale-105 group-hover:brightness-110 transition-transform duration-500 ease-in-out"
      src="/img/faculty/aruna_mam.jpg"
      alt="Image Description"
    />
  </div>
  <div className="mt-4 p-4">
    <h2 className="text-xl font-bold md:text-2xl md:leading-tight dark:text-white">
      Dr. Aruna M , ME , PhD
    </h2>
    <p className="mt-1 text-gray-600 dark:text-gray-400">
      Associate Professor
    </p>
    <hr className="my-2" />
    <h2 className="text-[1rem] mt-2 text-gray-800 font-bold lg:text-[0.9rem] dark:text-white">
      VISUAL COMPUTING LAB{" "}
      <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
        HEAD
      </span>
    </h2>
    <hr className="my-2" />
    <p className="mt-3 text-gray-800 dark:text-gray-200">
      Department of Computing Technologies
      <br />
      School of Computing, SRM Institute of Science and Technology,
      Kattankulathur
    </p>
    <Link
      href=""
      className="mt-5 inline-flex items-center gap-x-1 text-blue decoration-2 group-hover:underline font-medium"
    >
      Contact
      <svg
        className="flex-shrink-0 size-4"
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
    </Link>
  </div>
</a>

          {/* End Card 1 */}
          {/* Card 2 */}
          <a
  className="group border border-transparent rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out dark:hover:shadow-lg dark:hover:shadow-gray-300 dark:hover:border-gray-300 dark:hover:bg-gray-800 hover:bg-white hover:border-white"
  href="#"
>
  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
    <img
      className="size-full w-[90%] pt-5 pl-[5%] rounded-[5%] group-hover:rounded-[5%] dark:group-hover:rounded-t-[30px] absolute top-0 start-0 object-cover group-hover:scale-105 group-hover:brightness-110 transition-transform duration-500 ease-in-out"
      src="/img/faculty/arthi_mam.jpg"
      alt="Image Description"
    />
  </div>
  <div className="mt-4 p-4">
    <h2 className="text-xl font-bold md:text-2xl md:leading-tight dark:text-white">
      Dr. Arthi B, ME, PhD
    </h2>
    <p className="mt-1 text-gray-600 dark:text-gray-400">
      Associate Professor
    </p>
    <hr className="my-2" />
    <h2 className="text-[1rem] mt-2 text-gray-800 font-bold lg:text-[0.9rem] dark:text-white">
      VISUAL COMPUTING LAB{" "}
      <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
        HEAD
      </span>
    </h2>
    <hr className="my-2" />
    <p className="mt-3 text-gray-800 dark:text-gray-200">
      Department of Computing Technologies
      <br />
      School of Computing, SRM Institute of Science and Technology,
      Kattankulathur
    </p>
    <Link
      href=""
      className="mt-5 inline-flex items-center gap-x-1 text-blue decoration-2 group-hover:underline font-medium"
    >
      Contact
      <svg
        className="flex-shrink-0 size-4"
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
    </Link>
  </div>
</a>



          {/* End Card 2 */}
          {/* Add more cards as needed */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}

    </>
  );
}
