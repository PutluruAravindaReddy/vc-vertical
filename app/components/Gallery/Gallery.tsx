"use client";

import React, { useState } from "react";
// import SliderGal from "./SliderGal/SliderGal";
import "./slider.css";

const Gallery = () => {
  const [activePanel, setActivePanel] = useState(0); // State to track active panel index

  const handlePanelClick = (index: React.SetStateAction<number>) => {
    setActivePanel(index); // Update active panel index
  };
  return (
    <>
      <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto">
        <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto">
          <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] sm:py-3 dark:text-white py-0">
            <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
              Gallery
            </span>
          </h2>
        </div>
        <div className="flex items-center justify-center overflow-hidden ">
          <div className="flex w-[95%] transition-opacity duration-300 ease-in delay-400">
            <div
              className={`panel ${activePanel === 0 ? "active" : ""}`}
              style={{ backgroundImage: "url(/img/Gallery/Img_1.png)" }}
              onClick={() => handlePanelClick(0)}
            >
              <h1></h1>
            </div>
            <div
              className={`panel ${activePanel === 1 ? "active" : ""}`}
              style={{ backgroundImage: "url(/img/Gallery/Img_6.jpg)" }}
              onClick={() => handlePanelClick(1)}
            >
              <h1></h1>
            </div>
            <div
              className={`panel ${activePanel === 2 ? "active" : ""}`}
              style={{ backgroundImage: "url(/img/Gallery/Img_9.jpg)" }}
              onClick={() => handlePanelClick(2)}
            >
              <h1></h1>
            </div>
            <div
              className={`panel ${activePanel === 3 ? "active" : ""}`}
              style={{ backgroundImage: "url(/img/Gallery/Img_2.png)" }}
              onClick={() => handlePanelClick(3)}
            >
              <h1></h1>
            </div>
            <div
              className={`panel ${activePanel === 4 ? "active" : ""}`}
              style={{ backgroundImage: "url(/img/Gallery/Img_7.jpg)" }}
              onClick={() => handlePanelClick(4)}
            >
              <h1></h1>
            </div>
            <div
              className={`panel ${activePanel === 5 ? "active" : ""}`}
              style={{ backgroundImage: "url(/img/Gallery/Img_8.jpg)" }}
              onClick={() => handlePanelClick(5)}
            >
              <h1></h1>
            </div>
          </div>
        </div>

        <div className="flex  justify-center my-14 sm:my-10">
          <div className="grid w-[95%] grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="space-y-2">
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_1.png"
                alt="Image Description"
              />
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_2.png"
                alt="Image Description"
              />
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_3.jpg"
                alt="Image Description"
              />
            </div>
            <div className="space-y-2">
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_4.jpg"
                alt="Image Description"
              />
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_5.jpg"
                alt="Image Description"
              />
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_6.jpg"
                alt="Image Description"
              />
            </div>
            <div className="space-y-2">
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_7.jpg"
                alt="Image Description"
              />
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_8.jpg"
                alt="Image Description"
              />
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_8.jpg"
                alt="Image Description"
              />
            </div>
            <div className="space-y-2">
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_8.jpg"
                alt="Image Description"
              />
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_8.jpg"
                alt="Image Description"
              />
              <img
                className="w-full sm:size-80 object-cover"
                src="/img/Gallery/Img_8.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
