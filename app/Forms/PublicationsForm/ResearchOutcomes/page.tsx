"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export interface ResearchOutcome {
  _id: string;
  initiative: string;
  initiators: string[];
  activities: string[];
}

const ResearchOutcomesPage = () => {
  const [researchOutcomes, setResearchOutcomes] = useState<ResearchOutcome[]>([]);

  useEffect(() => {
    const fetchResearchOutcomes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/PublicationsRoute/ResearchOutcomes', {
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
      const response = await fetch(`http://localhost:3000/api/PublicationsRoute/ResearchOutcomes/${id}`, {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Research Outcomes</h1>
      <Link href="/Forms/PublicationsForm/ResearchOutcomes/new" className="mx-2 my-2 bg-blue-600 text-black px-4 py-2 rounded-md cursor-pointer">
        Add Research Outcome
      </Link>
      {researchOutcomes.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Research Outcomes</h2>
          <div className="grid grid-cols-3 gap-4">
            {researchOutcomes.map((outcome) => (
              <div key={outcome._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">Initiative: {outcome.initiative}</p>
                <p className="text-lg font-medium mb-2">Initiators: {outcome.initiators.join(', ')}</p>
                <p className="text-lg font-medium mb-2">Activities: {outcome.activities.join(', ')}</p>
                <Link href={`/Forms/PublicationsForm/ResearchOutcomes/${outcome._id}`} className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
                  Edit
                </Link>
                <button onClick={() => handleDeleteResearchOutcome(outcome._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchOutcomesPage;
