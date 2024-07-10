"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ResearchOutcome {
  _id: string;
  initiative: string;
  initiators: string[];
  activities: string[];
}

const EditResearchOutcomePage = ({ params }: any) => {
  const id = params.id;
  const [researchOutcome, setResearchOutcome] = useState<ResearchOutcome>({
    _id: '',
    initiative: '',
    initiators: [],
    activities: [],
  });

  useEffect(() => {
    const fetchResearchOutcome = async () => {
      try {
        const response = await fetch(`/api/PublicationsRoute/ResearchOutcomes/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch research outcome');
        }

        const responseData = await response.json();
        console.log('Fetched research outcome:', responseData.data);
        setResearchOutcome(responseData.data);
      } catch (error) {
        console.error('Error fetching research outcome:', error);
      }
    };

    if (id) {
      fetchResearchOutcome();
    }
  }, [id]);

  const handleEditResearchOutcome = async () => {
    try {
      const response = await fetch(`/api/PublicationsRoute/ResearchOutcomes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          initiative: researchOutcome.initiative,
          initiators: researchOutcome.initiators,
          activities: researchOutcome.activities,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit research outcome');
      }

      // Optionally handle success or redirect
      console.log('Research outcome edited successfully!');
    } catch (error) {
      console.error('Error editing research outcome:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Research Outcome</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter initiative"
          value={researchOutcome.initiative}
          onChange={(e) => setResearchOutcome({ ...researchOutcome, initiative: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter initiators (comma separated)"
          value={researchOutcome.initiators.join(', ')}
          onChange={(e) => setResearchOutcome({ ...researchOutcome, initiators: e.target.value.split(',').map(initiator => initiator.trim()) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter activities (comma separated, optional)"
          value={researchOutcome.activities.join(', ')}
          onChange={(e) => setResearchOutcome({ ...researchOutcome, activities: e.target.value.split(',').map(activity => activity.trim()) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <button onClick={handleEditResearchOutcome} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
        Save Changes
      </button>
      <Link href="/publications" className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4">
        Back to Publications
      </Link>
    </div>
  );
};

export default EditResearchOutcomePage;
