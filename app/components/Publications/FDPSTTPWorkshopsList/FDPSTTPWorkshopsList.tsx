"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export interface Workshop {
  _id: string;
  title: string;
  organizers: string[];
  startDate: string;
  endDate?: string;
  location?: string;
  link?: string;
}

const FDPSTTPWorkshopsList = () => {
  const { data: session } = useSession();
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch(
          "/api/PublicationsRoute/Workshops",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch workshops");
        }

        const responseData = await response.json();
        console.log("Fetched workshops:", responseData.data);
        setWorkshops(responseData.data);
      } catch (error) {
        console.error("Error fetching workshops:", error);
      }
    };

    fetchWorkshops();
  }, []);

  const handleDeleteWorkshop = async (id: string) => {
    try {
      const response = await fetch(
        `/api/PublicationsRoute/Workshops/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete workshop");
      }

      const updatedWorkshops = workshops.filter(
        (workshop) => workshop._id !== id
      );
      setWorkshops(updatedWorkshops);
    } catch (error) {
      console.error("Error deleting workshop:", error);
    }
  };

  return (
    <div>
      {workshops.map((workshop) => (
        <div
          key={workshop._id}
          className="bg-white dark:bg-[#333333] shadow-md rounded-lg p-4 m-2 max-w-full"
        >
          <h2 className="text-md sm:text-xl dark:text-[#EDEDED] font-bold text-justify mb-2">
            {workshop.title}
          </h2>

          {/* Organizers */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className="dark:text-gray-200">Organizers:</strong> {workshop.organizers.join(", ")}
          </p>

          {/* Date */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className="dark:text-gray-200">Date:</strong> {workshop.startDate}
            {workshop.endDate && ` - ${workshop.endDate}`}
          </p>

          {/* Location (if available) */}
          {workshop.location && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className="dark:text-gray-200">Location:</strong> {workshop.location}
            </p>
          )}

          {/* Link (if available) */}
          {workshop.link && (
            <a
              href={workshop.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline block"
            >
              More Info
            </a>
          )}

          {session?.user?.name && (
            <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
              <Link
                href={`/Forms/PublicationsForm/Workshops/${workshop._id}`}
                className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
              >
                Edit
              </Link>
              <Link
                className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                href="/Forms/PublicationsForm/Workshops/new"
              >
                Add
              </Link>
              <button
                onClick={() => handleDeleteWorkshop(workshop._id)}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FDPSTTPWorkshopsList;
