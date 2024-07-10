"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface Equipment {
  _id: string;
  name: string;
  manufacturer: string;
  installationDate: string;
  researchTests: string[];
  description: string;
  image: string;
}

const LabEquipments = () => {
  const { data: session } = useSession();
  const [equipments, setEquipments] = useState<Equipment[]>([]);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await fetch(
          "/api/VCLAB/EquipmentsRoute",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch VCLAB Equipments");
        }

        const responseData = await response.json();
        console.log("Fetched equipments:", responseData.data);
        setEquipments(responseData.data);
      } catch (error) {
        console.error("Error fetching equipments:", error);
      }
    };

    fetchEquipments();
  }, []);

  const handleDeleteEquipment = async (id: string) => {
    try {
      const response = await fetch(
        `/api/VCLAB/EquipmentsRoute/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Equipment");
      }

      const updatedEquipments = equipments.filter(
        (equipment) => equipment._id !== id
      );
      setEquipments(updatedEquipments);
    } catch (error) {
      console.error("Error deleting Equipment:", error);
    }
  };

  return (
    <div>
      <div className="max-w-[84rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-1 mx-auto p-8 mb-5">
        <h2 className="text-2xl text-gray-800 font-bold lg:text-[2rem] sm:py-3 dark:text-white py-0">
          <span className="bg-clip-text bg-gradient-to-tl from-blue to-violet-600 text-transparent">
            Lab Equipments
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {equipments.map((equipment) => (
            <motion.div
              whileHover="hover"
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              variants={{
                hover: {
                  scale: 1.05,
                },
              }}
              className="relative h-auto w-full shrink-0 overflow-hidden rounded-xl bg-white shadow-lg p-6 my-2 dark:bg-slate-900 hover:scale-105 hover:border-black hover:text-blue hover:border hover:border-solid"
            >
              <div className="relative z-10 text-gray-800 dark:text-white">
                <div className="flex flex-col items-center md:flex-row">
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    width={120}
                    height={120}
                    className="object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-center mt-4 md:mt-0">
                    <h2 className="text-md font-semibold text-[#2563EB] dark:text-white mx-2 mt-2">
                      {equipment.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mx-2 mt-1">
                      Manufacturer: {equipment.manufacturer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mx-2 mt-1">
                      Installed: {equipment.installationDate}
                    </p>
                  </div>
                </div>
                <h3 className="text-md font-semibold mt-2">Research/Tests</h3>
                <p className="m-1 text-justify text-sm text-gray-600 dark:text-gray-400">
                  {equipment.researchTests.join(", ")}
                </p>
                <h3 className="text-md font-semibold mt-2">Description</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 m-1 text-justify">
                  {equipment.description}
                </p>
              </div>
              {session?.user?.name && (
                <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
                  <Link
                    href={`/Forms/VCLAB/EquipmentsForm/${equipment._id}`}
                    className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
                  >
                    Edit
                  </Link>
                  <Link
                    className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                    href="/Forms/VCLAB/EquipmentsForm/new"
                  >
                    Add
                  </Link>
                  <button
                    onClick={() => handleDeleteEquipment(equipment._id)}
                    className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabEquipments;

// const Background = ({ image_top,image_bottom }:any) => {
//   return (
//     <motion.div
//       style={{
//         width: "320px",
//         height: "324px",
//       }}
//       className="absolute inset-11 ml-[20%]  z-0"
//       variants={{
//         hover: {
//           scale: 1.35,
//         },
//       }}
//       transition={{
//         duration: 1,
//         ease: "backInOut",
//       }}
//     >
//       <motion.div
//         style={{
//           backgroundImage: `url(${ image_top})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           width: "203px",
//           height: "203px",
//           borderRadius: "50%",
//         }}
//         className="absolute"
//         variants={{
//           hover: {
//             scaleY: 0.35,
//             y: -1,
//           },
//         }}
//         transition={{
//           duration: 1,
//           ease: "backInOut",
//           delay: 0.2,
//         }}
//       />
//       <motion.div
//         style={{
//           backgroundImage: `url(${image_bottom})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           width: "203px",
//           height: "87px",
//           borderRadius: "50%",
//         }}
//         className="absolute bottom-0"
//         variants={{
//           hover: {
//             scaleY: 2.1,
//             y: -35,
//           },
//         }}
//         transition={{
//           duration: 1,
//           ease: "backInOut",
//           delay: 0.2,
//         }}
//       />
//     </motion.div>
//   );
// };
