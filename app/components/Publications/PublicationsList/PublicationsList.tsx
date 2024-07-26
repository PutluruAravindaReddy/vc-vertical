"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface Publication {
  _id: string;
  title: string;
  authors: string[];
  journal?: string;
  year?: number;
  pages?: string;
  impactFactor?: number;
  SNIP?: number;
  DOI?: string;
  link?: string;
  date?: string;
}

const PublicationsList = () => {
  const { data: session } = useSession();
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch(
          "/api/PublicationsRoute/Publications",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch publications");
        }

        const responseData = await response.json();
        console.log("Fetched publications:", responseData.data);
        setPublications(responseData.data);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };

    fetchPublications();
  }, []);

  const handleDeletePublication = async (id: string) => {
    try {
      const response = await fetch(
        `/api/PublicationsRoute/Publications/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete publication");
      }

      const updatedPublications = publications.filter(
        (publication) => publication._id !== id
      );
      setPublications(updatedPublications);
    } catch (error) {
      console.error("Error deleting publication:", error);
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-center">
      {publications.map((publication) => (
        <div
          key={publication._id}
          className="bg-white dark:bg-[#333333] shadow-md rounded-lg p-4 m-2 max-w-full"
        >
          <h2 className="text-md dark:text-[#EDEDED] sm:text-xl font-bold text-justify	 mb-2">
            {publication.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className="dark:text-gray-200">Authors:</strong> {publication.authors.join(", ")}
          </p>
          {publication.journal && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong  className="dark:text-gray-200">Journal:</strong> {publication.journal}
            </p>
          )}
          {publication.year && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong  className="dark:text-gray-200">Year:</strong> {publication.year}
            </p>
          )}
          {publication.pages && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong  className="dark:text-gray-200">Pages:</strong> {publication.pages}
            </p>
          )}
          {publication.impactFactor && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong  className="dark:text-gray-200">Impact Factor:</strong> {publication.impactFactor}
            </p>
          )}
          {publication.SNIP && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong  className="dark:text-gray-200">SNIP:</strong>
              {publication.SNIP}
            </p>
          )}
          {publication.DOI && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong  className="dark:text-gray-200">DOI:</strong>{" "}
              <a
                href={publication.DOI}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.DOI}
              </a>
            </p>
          )}
          {publication.date && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong  className="dark:text-gray-200">Date:</strong>
              {publication.date}
            </p>
          )}
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline block"
            >
              Read More
            </a>
          )}
          {session?.user?.name && (
            <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
              <Link
                href={`/Forms/PublicationsForm/Publications/${publication._id}`}
                className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
              >
                Edit
              </Link>
              <Link
                className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                href="/Forms/PublicationsForm/Publications/new"
              >
                Add
              </Link>
              <button
                onClick={() => handleDeletePublication(publication._id)}
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

export default PublicationsList;
