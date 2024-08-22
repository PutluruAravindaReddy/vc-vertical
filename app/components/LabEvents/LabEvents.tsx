"use client";

import { SetStateAction, useState } from "react";
import Image from "next/image";
import frontPoster from "@/public/img/vclabevents/Front.jpg";
import backPoster from "@/public/img/vclabevents/Back.jpg";

export default function LabEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc:any) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Page Heading */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8  mx-auto">
        <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-6 pb-0">
          <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
            VC Lab Events
          </span>
        </h2>
      </div>

      {/* Event Card */}
      <div className="max-w-[85rem] mx-auto pt-7 p-4 md:p-6 lg:p-8 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md relative">
        {/* Status Indicator */}
        <div className="absolute top-0 right-6 md:top-4 md:right-4 bg-green-500 text-white text-xs md:text-sm lg:text-base px-3 py-1 rounded-full">
          Upcoming
        </div>

        {/* Event Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Side: Event Posters */}
          <div className="flex flex-col md:flex-col gap-4 items-start">
            <div
              className="relative cursor-pointer"
              onClick={() => openModal(frontPoster)}
            >
              <Image
                src={frontPoster}
                alt="Event Poster Front"
                className="rounded-lg w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-104"
              />
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => openModal(backPoster)}
            >
              <Image
                src={backPoster}
                alt="Event Poster Back"
                className="rounded-lg w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-104"
              />
            </div>
          </div>

          {/* Right Side: Event Content */}
          <div className="col-span-2">
            {/* Event Title and Subtitle */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              SUMMIT VC 1.0: Unleashing the Power of Computer Vision
            </h2>
            <h3 className="italic text-lg md:text-xl lg:text-2xl mb-6">
              Harnessing the Full Potential of Computer Vision
            </h3>

            {/* Date and Location */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-300 mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4V2H5v2H2v2h3v2h2V6h3V4H7zm5 6h5v1H2v-1h5v-1H4V8h2V6h2v2h2v1h4v1h-2v1zm7 10V8H7v10h10v2h-2v2h4v-4h2zM5 19H2v2h3v-2zm15-2v2h-3v2h3v-4z" />
                </svg>
                <span className="text-sm md:text-base lg:text-lg">
                  29 August 2024, 9:30 AM - 4:30 PM
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-300 mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.141 2 5 5.141 5 9c0 1.148.228 2.23.645 3.2l6.071 10.658L17.355 12.2c.417-.97.645-2.052.645-3.2 0-3.859-3.141-7-7-7zm0 2c2.753 0 5 2.247 5 5 0 .919-.215 1.777-.6 2.54L12 19.944 7.6 11.54C7.215 10.777 7 9.919 7 9c0-2.753 2.247-5 5-5z" />
                </svg>
                <span className="text-sm md:text-base lg:text-lg">
                  TP401 & 402, 4th Floor Tech Park
                </span>
              </div>
            </div>

            {/* Keynote Speakers */}
            {/* <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
              Keynote Speakers
            </h3>
            <div className="mb-8 grid grid-cols-1 gap-4">
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-400 dark:bg-gray-700 flex justify-center items-center mr-3">
                  <span className="text-white text-base md:text-lg lg:text-xl">
                    A
                  </span>
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg lg:text-xl">
                    Dr. Azizul Azizan
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg">
                    Senior Lecturer, Universiti Teknologi Malaysia
                  </p>
                </div>
              </div>
          
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-400 dark:bg-gray-700 flex justify-center items-center mr-3">
                  <span className="text-white text-base md:text-lg lg:text-xl">
                    B
                  </span>
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg lg:text-xl">
                    Dr. Brian Smith
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg">
                    Professor, Stanford University
                  </p>
                </div>
              </div>
            </div> */}
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Objectives
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg mb-4">
            The objective of SUMMIT VC 1.0 is to bring together leading experts, innovators, and enthusiasts in the field of computer vision to explore and advance the transformative potential of this technology.
                  </p>
            {/* Focus Areas */}
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Focus Areas
            </h3>
            <ul className="list-disc pl-5 mb-8">
              <li className="mb-1 text-sm md:text-base lg:text-lg">
                TECH TALK 1: Challenges and Solutions in Real-Time Computer Vision
              </li>
              <li className="mb-1 text-sm md:text-base lg:text-lg">
                PANEL DISCUSSION 1: Driving Innovation and Efficiency Through Computer Vision in Industry
              </li>
              <li className="mb-1 text-sm md:text-base lg:text-lg">
                TECH TALK 2: Opportunities and challenges in utilizing AR/VR for sustainable development
              </li>
              <li className="mb-1 text-sm md:text-base lg:text-lg">
                PANEL DISCUSSION 2: Unveiling Virtual Frontiers: AR/VR for Sustainable Development Goals
              </li>
            </ul>

            {/* Registration Section */}
            <div className="mt-6 flex flex-row md:flex-row justify-between items-center">
              <span className="font-bold text-base md:text-lg lg:text-xl text-orange-600 dark:text-orange-300">
                Registration Fee ₹ 300
              </span>
              <button className=" md:mt-0 bg-blue-600 dark:bg-blue-400 text-white text-sm md:text-base lg:text-lg rounded-full px-6 py-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScD9YSPCrW-EyHMN6qJYXJ56y9mEBb7y60yf8luTPKeuRBoYw/viewform">
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Screen Image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative">
            <Image
              src={selectedImage||""} 
              alt="Event Poster Fullscreen"
              className="w-full h-auto max-w-screen-md max-h-screen-md object-cover"
            />
          </div>
          <button
              onClick={closeModal}
              className="absolute top-8 right-4 md:top-4 md:right-4 bg-gray-900 text-white border-2 border-solid border-white px-3 py-1.5 rounded-[50%] focus:outline-none"
            >
              ✕
            </button>
        </div>
      )}
    </>
  );
}
