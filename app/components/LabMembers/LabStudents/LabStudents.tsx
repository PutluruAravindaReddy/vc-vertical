import React from "react";
import LabStudentCard from "./LabStudentCard/LabStudentCard";

interface LabStudentsProps {
  title: string;
}

const LabStudents: React.FC<LabStudentsProps> = ({ title }) => {
  const first = [
    {
      name: "Akul Abrol",
      id: "RA2211003010029",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Paras Vichoray",
      id: "RA2211003010040",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Prashuk Jain",
      id: "RA2211003010027",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Tushar Ahlawat",
      id: "RA2211003010056",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const second = [
    {
      name: "Kelvin Puyam",
      id: "RA2211003010029",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Nishant Singh",
      id: "RA2211003010040",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const third = [
    {
      name: "Samuel Prabhakar Vara",
      id: "RA20110003010454",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Advita",
      id: "RA20110003010972",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const fourth = [
    {
      name: "Samuel Prabhakar Vara",
      id: "RA20110003010454",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Samarth Pandey",
      id: "RA2211",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Shanvi Kayal",
      id: "RA2211",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const fifth = [
    {
      name: "Ashmitha Mohan",
      id: "RA2211003010063",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Shriya Rukmini V",
      id: "RA2111003010594",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Meghana Kanneganti",
      id: "RA2111003010195",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "T Kavya Taneesha",
      id: "RA2111003011201",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const sixth = [
    {
      name: "Priyanshu",
      id: "RA2211003011518",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Arul Sood",
      id: "RA2211003011535",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Sanwariya Arora",
      id: "RA2211003011541",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const seventh = [
    {
      name: "RIFATH HOSSAIN",
      id: "RA2211003010628",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "NIPUN DHIMAN",
      id: "RA2211003010626",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "KRISHNA AGARWAL",
      id: "RA2211003010651",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "SAMARTH MISHRA",
      id: "RA2211003010659",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const eight = [
    {
      name: "Ksshitij Vijayraj Singare",
      id: "RA2211003011509",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Shreyansh Kumbhare",
      id: "RA2211003011495",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const nine = [
    {
      name: "Taranjeet Singh Bedi",
      id: "RA2211003010901",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Sukanya Singh",
      id: "RA2211003010902",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const ten = [
    {
      name: "Sayantan Roy",
      id: "RA2211003010846",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Aryan Mehra",
      id: "RA2211003010838",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Rishi Gupta",
      id: "RA2211003010843",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  
  const eleven = [
    {
      name: "Kaushik Umesh Chandra",
      id: "RA2211003011530",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Akash Chintaluri",
      id: "RA2211003011525",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Arun Krishnan",
      id: "RA2211003011523",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  
  const twelve = [
    {
      name: "Krish Mehta",
      id: "RA2211003010806",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Aadtiya Jha",
      id: "RA2211003010818",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Saksham Lamba",
      id: "RA2211003010867",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  
  const thirteen = [
    {
      name: "Chaitanya Sardhi Eerla",
      id: "RA2211003011536",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  
  const fourteen = [
    {
      name: "Lakshaya E",
      id: "RA2211003011489",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Vedhas Bidwai",
      id: "RA2211003011490",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Sai Siddartha K",
      id: "RA2211003011492",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  
  const fifteen = [
    {
      name: "Hajna Shaik",
      id: "RA2111003010154",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Amritha R",
      id: "RA2111003010173",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    // Add more objects as needed
  ];
  
  const sixteen = [
    {
      name: "Dipraman Mukherjee",
      id: "RA2011003010168",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "Himanshu Kumar",
      id: "RA2011003010430",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    // Add more objects as needed
  ];
  
  const seventeen = [
    {
      name: "DISHITA SIBAL",
      id: "RA201100301162",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "CHARVEE RATHOD",
      id: "RA2011100301121",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    // Add more objects as needed
  ];
  
  const eighteen = [
    {
      name: "T BHAVANA",
      id: "RA2011003011123",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
    {
      name: "B SHYAM KUMAR",
      id: "RA2011003011174",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  
  const nineteen = [
    {
      name: "ADARSH KUMAR",
      id: "RA2011003010459",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  const twenty = [
    {
      name: "Samuel Prabhakar Vara",
      id: "RA20110003010454",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    },
  ];
  
  

  return (
    <>
      <div className="max-w-[85rem] pt-0 lg:pt-0 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] dark:text-white py-2">
          <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
            Students 
          </span>
        </h2>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text  text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB]  text-transparent">
              POSE ESTIMATION USING RASPBERRY PI & FACIAL RECOGNITION
            </span>
          </div>
          <LabStudentCard students={first} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
              REALTIME WILDLIFE CONSERVATION SYSTEM
            </span>
          </div>
          <LabStudentCard students={second} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
              HEALTHSPHERE: TRANSFORMING PATIENT CARE THROUGH AI-INTEGRATED
              DISEASE DETECTION AND COMMUNICATION
            </span>
          </div>
          <LabStudentCard students={third} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
              LANE DETECTION SYSTEM
            </span>
          </div>
          <LabStudentCard students={fourth} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
              VISUAL NEXUS: VC LAB VOICE ASSISTANT
            </span>
          </div>
          <LabStudentCard students={fifth} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            SMART TRAFFIC DETECTION AND SIGNAL CONTROL MODEL
            </span>
          </div>
          <LabStudentCard students={sixth} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            VEHICLE CARBON EMISSION ANALYZER
            </span>
          </div>
          <LabStudentCard students={seventh} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            CROWD ANOMALY DETECTION
            </span>
          </div>
          <LabStudentCard students={eight} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            COLLEGE SECURITY GUARD PRESENCE VERIFICATION SYSTEM USING COMPUTER VISION
            </span>
          </div>
          <LabStudentCard students={nine} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            PREDICTION MODEL OF PEST OUTBREAK BASED ON PEST POPULATION AND ABIOTIC DATA
            </span>
          </div>
          <LabStudentCard students={ten} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            AGRICULTURAL ROBOT FOR TOMATO CROP HEALTH MONITORING
            </span>
          </div>
          <LabStudentCard students={eleven} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            OPTIMIZING PEST CONTROL WITH AUTOMATED BOOM SPRAYERS
            </span>
          </div>
          <LabStudentCard students={twelve} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            INTELLIATTENDANCE SYSTEM
            </span>
          </div>
          <LabStudentCard students={thirteen} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            CROWD DETECTION
            </span>
          </div>
          <LabStudentCard students={fourteen} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            FACIAL RECOGNITION
            </span>
          </div>
          <LabStudentCard students={fifteen} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            INTERACTIVE WHITEBOARD TRANSFORMATION USING HAND GESTURE RECOGNITION ON JETSON PLATFORMS (XAVIER NX)
            </span>
          </div>
          <LabStudentCard students={sixteen} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            DIABVISION: AUTOMATED MULTI-CLASS DETECTION OF MILD DIABETIC CONDITIONS IN RETINAL OCT IMAGES
            </span>
          </div>
          <LabStudentCard students={seventeen} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            AUTOMATED RO WATER QUALITY PREDICTION SYSTEM
            </span>
          </div>
          <LabStudentCard students={eighteen} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            INVENTORY MANAGEMENT SYSTEM USING OPENCV
            </span>
          </div>
          <LabStudentCard students={nineteen} />
        </div>
        <div className="lg:flex-col lg:justify-start mt-6">
          {/* Grid */}
          <div className="max-w-[79rem] mx-auto text-left mb-3 lg:mb-5">
            <span className="bg-clip-text text-base font-bold md:text-xl md:leading-tight mt-1 bg-[#2563EB] from-blue to-violet-600 text-transparent">
            HUMAN DETECTION IN SYNERGY WITH OSCC DETECTION
            </span>
          </div>
          <LabStudentCard students={twenty} />
        </div>

      </div>
    </>
  );
}


export default LabStudents;