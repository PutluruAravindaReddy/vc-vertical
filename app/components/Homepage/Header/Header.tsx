"use client";
import React, { useEffect, useState } from 'react';
import "./HeroSection.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden dark:before:bg-black before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className={`hero-section-container ${animate ? 'animate' : ''}`}>
        <div className="max-w-[85rem] relative mx-auto px-4  sm:px-6 lg:px-8 pt-[11rem] pb-10">
          <br />
          <br />
          {/* Title */}
          <div className="mt-2 relative max-w-xl text-center mx-auto ">
            <h1 className="block font-bold text-gray-800  text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Visual Computing{" "}
              <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
                Vertical
              </span>
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400 ">
              We are interested in various problems dedicated to research,
              development, and experimentation in the field of visual computing,
              which encompasses computer vision, image processing, and related
              areas.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center ">
            <Link
              className="inline-flex justify-center font-bold text-xl items-center gap-x-3 text-center bg-gradient-to-tl from-blue to-violet-600 hover:from-violet-600 hover:to-blue border border-transparent text-black dark:text-gray-200 rounded-full py-3 px-4 "
              href="/VCLAB/Members"
            >
              <Image
                src="/img/Logo/vc_logo.jpg"
                alt="Hacktrix-Logo"
                width={45}
                height={16}
                className="  flex-shrink-0 size-7 rounded-[50%] "
              />
              Explore
            </Link>
          </div>
          {/* End Buttons */}
        </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}