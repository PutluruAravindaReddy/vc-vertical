"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface Patent {
  _id: string;
  title: string;
  journal?: string;
  applicationNumber?: string;
  date?: string;
  dateOfFiling?: string;
  publicationDate?: string;
  dateOfGrant?: string;
  designNumber?: string;
  patentOffice?: string;
  inventors?: string[];
  link?: string;
  faculty?: string;
}

const PatentsList = () => {
  const { data: session } = useSession();
  const [patents, setPatents] = useState<Patent[]>([]);

  useEffect(() => {
    const fetchPatents = async () => {
      try {
        const response = await fetch('/api/PublicationsRoute/Patents', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch patents');
        }

        const responseData = await response.json();
        console.log('Fetched patents:', responseData.data);
        setPatents(responseData.data);
      } catch (error) {
        console.error('Error fetching patents:', error);
      }
    };

    fetchPatents();
  }, []);

  const handleDeletePatent = async (id: string) => {
    try {
      const response = await fetch(`/api/PublicationsRoute/Patents/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete patent');
      }

      const updatedPatents = patents.filter(patent => patent._id !== id);
      setPatents(updatedPatents);
    } catch (error) {
      console.error('Error deleting patent:', error);
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-center">
      {patents.map((patent) => (
        <div key={patent._id} className="bg-white shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl text-justify	 font-bold mb-2">{patent.title}</h2>

          {patent.faculty && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Faculty:</strong> {patent.faculty}
            </p>
          )}
          
          {/* Inventors */}
          {patent.inventors && patent.inventors.length > 0 && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Inventors:</strong> {patent.inventors.join(', ')}
            </p>
          )}
          
          {/* Journal */}
          {patent.journal && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Journal:</strong> {patent.journal}
            </p>
          )}
          
          {/* Application Number */}
          {patent.applicationNumber && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Application Number:</strong> {patent.applicationNumber}
            </p>
          )}
          
          {/* Dates */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            {patent.date && <><strong>Date:</strong> {patent.date}<br /></>}
            {patent.dateOfFiling && <><strong>Date of Filing:</strong> {patent.dateOfFiling}<br /></>}
            {patent.publicationDate && <><strong>Publication Date:</strong> {patent.publicationDate}<br /></>}
            {patent.dateOfGrant && <><strong>Date of Grant:</strong> {patent.dateOfGrant}<br /></>}
          </p>
          
          {/* Design Number */}
          {patent.designNumber && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Design Number:</strong> {patent.designNumber}
            </p>
          )}
          
          {/* Patent Office */}
          {patent.patentOffice && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Patent Office:</strong> {patent.patentOffice}
            </p>
          )}
          
          {/* DOI and Link */}
          {patent.link && (
            <a
              href={patent.link}
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
                href={`/Forms/PublicationsForm/Patents/${patent._id}`}
                className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
              >
                Edit
              </Link>
              <Link
                className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                href="/Forms/PublicationsForm/Patents/new"
              >
                Add
              </Link>
              <button
                onClick={() => handleDeletePatent(patent._id)}
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

export default PatentsList;
