"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export interface Workshop {
  _id: string;
  title: string;
  organizers: string[];
  startDate: string;
  endDate?: string;
  location?: string;
  link?: string;
}

const WorkshopsPage = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/PublicationsRoute/Workshops', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch workshops');
        }

        const responseData = await response.json();
        console.log('Fetched workshops:', responseData.data);
        setWorkshops(responseData.data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchWorkshops();
  }, []);

  const handleDeleteWorkshop = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/PublicationsRoute/Workshops/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete workshop');
      }

      const updatedWorkshops = workshops.filter(workshop => workshop._id !== id);
      setWorkshops(updatedWorkshops);
    } catch (error) {
      console.error('Error deleting workshop:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Workshops</h1>
      <Link href="/Forms/PublicationsForm/Workshops/new" className="mx-2 my-2 bg-blue-600 text-black px-4 py-2 rounded-md cursor-pointer">
        Add Workshop
      </Link>
      {workshops.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Workshops</h2>
          <div className="grid grid-cols-3 gap-4">
            {workshops.map((workshop) => (
              <div key={workshop._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">Title: {workshop.title}</p>
                <p className="text-lg font-medium mb-2">Organizers: {workshop.organizers.join(', ')}</p>
                <p className="text-lg font-medium mb-2">Start Date: {workshop.startDate}</p>
                {workshop.endDate && <p className="text-lg font-medium mb-2">End Date: {workshop.endDate}</p>}
                {workshop.location && <p className="text-lg font-medium mb-2">Location: {workshop.location}</p>}
                {workshop.link && <p className="text-lg font-medium mb-2">Link: <a href={workshop.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">{workshop.link}</a></p>}
                <Link href={`/Forms/PublicationsForm/Workshops/${workshop._id}`} className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
                  Edit
                </Link>
                <button onClick={() => handleDeleteWorkshop(workshop._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
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

export default WorkshopsPage;
