"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export interface ResearchOutcome {
  _id: string;
  initiative: string;
  initiators: string[];
  activities: string[];
}

const ResearchOutcomesList = () => {
  const { data: session } = useSession();
  const [researchOutcomes, setResearchOutcomes] = useState<ResearchOutcome[]>([]);

  useEffect(() => {
    const fetchResearchOutcomes = async () => {
      try {
        const response = await fetch('/api/PublicationsRoute/ResearchOutcomes', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch research outcomes');
        }

        const responseData = await response.json();
        console.log('Fetched research outcomes:', responseData.data);
        setResearchOutcomes(responseData.data);
      } catch (error) {
        console.error('Error fetching research outcomes:', error);
      }
    };

    fetchResearchOutcomes();
  }, []);

  const handleDeleteResearchOutcome = async (id: string) => {
    try {
      const response = await fetch(`/api/PublicationsRoute/ResearchOutcomes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete research outcome');
      }

      const updatedResearchOutcomes = researchOutcomes.filter(outcome => outcome._id !== id);
      setResearchOutcomes(updatedResearchOutcomes);
    } catch (error) {
      console.error('Error deleting research outcome:', error);
    }
  };

  return (
    <div>
      {researchOutcomes.map((outcome) => (
        <div key={outcome._id} className="bg-white dark:bg-[#333333] shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl  dark:text-[#EDEDED] font-bold text-justify mb-2">{outcome.initiative}</h2>
          
          {/* Initiators */}
          <p className="text-gray-700 dark:text-gray-300  text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className='dark:text-gray-200 '>Initiators:</strong> {outcome.initiators.join(', ')}
          </p>
          
          {/* Activities */}
          <p className="text-gray-700 dark:text-gray-300  text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className='dark:text-gray-200 '>Activities:</strong> {outcome.activities.join(', ')}
          </p>
          {session?.user?.name && (
            <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
              <Link
                href={`/Forms/PublicationsForm/ResearchOutcomes/${outcome._id}`}
                className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
              >
                Edit
              </Link>
              <Link
                className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                href="/Forms/PublicationsForm/ResearchOutcomes/new"
              >
                Add
              </Link>
              <button
                onClick={() => handleDeleteResearchOutcome(outcome._id)}
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

export default ResearchOutcomesList;
