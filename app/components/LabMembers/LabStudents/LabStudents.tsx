import React from "react";
import LabStudentCard from "./LabStudentCard/LabStudentCard";

export default function LabStudents() {
  const first = [
    {
      name: "Akul Abrol",
      id: "RA2211003010029",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Paras Vichoray",
      id: "RA2211003010040",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Prashuk Jain",
      id: "RA2211003010027",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Tushar Ahlawat",
      id: "RA2211003010056",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const second = [
    {
      name: "Akul Abrol",
      id: "RA2211003010029",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Paras Vichoray",
      id: "RA2211003010040",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Prashuk Jain",
      id: "RA2211003010027",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Tushar Ahlawat",
      id: "RA2211003010056",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Tushar Ahlawat",
      id: "RA2211003010056",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-gradient-to-tl from-blue to-violet-600 text-transparent">
              hi hello
            </span>
          </div>
          <LabStudentCard students={first} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-gradient-to-tl from-blue to-violet-600 text-transparent">
              hi hello
            </span>
          </div>
          <LabStudentCard students={second} />
        </div>
      </div>
    </>
  );
}
