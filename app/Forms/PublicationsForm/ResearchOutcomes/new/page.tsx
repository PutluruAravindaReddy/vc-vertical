"use client";
import { useState } from 'react';
import Link from 'next/link';

const AddResearchOutcomePage = () => {
  const [initiative, setInitiative] = useState<string>('');
  const [initiators, setInitiators] = useState<string>('');
  const [activities, setActivities] = useState<string>('');

  const handleAddResearchOutcome = async () => {
    if (!initiative || !initiators) {
      alert('Please fill in all required fields.');
      return;
    }

    const initiatorsArray = initiators.split(',').map(initiator => initiator.trim());
    const activitiesArray = activities ? activities.split(',').map(activity => activity.trim()) : [];

    try {
      const response = await fetch('/api/PublicationsRoute/ResearchOutcomes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          initiative,
          initiators: initiatorsArray,
          activities: activitiesArray,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally handle success or redirect
      console.log('Research outcome added successfully!');
    } catch (error) {
      console.error('Error adding research outcome:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Research Outcome</h1>
      <div className="mb-4">
        <input
          type="text" required
          placeholder="Enter initiative"
          value={initiative}
          onChange={(e) => setInitiative(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text" required
          placeholder="Enter initiators (comma separated)"
          value={initiators}
          onChange={(e) => setInitiators(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text" required
          placeholder="Enter activities (comma separated, optional)"
          value={activities}
          onChange={(e) => setActivities(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <Link href="/publications" onClick={handleAddResearchOutcome} className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
        Add Research Outcome
      </Link>
      <Link href="/publications" className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4">
        Back to Research Outcomes
      </Link>
    </div>
  );
};

export default AddResearchOutcomePage;
