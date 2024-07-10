"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Workshop {
  _id: string;
  title: string;
  organizers: string[];
  startDate: string;
  endDate: string;
  location: string;
  link: string;
}

const EditWorkshopPage = ({ params }: any) => {
  const id = params.id;
  const [workshop, setWorkshop] = useState<Workshop>({
    _id: '',
    title: '',
    organizers: [],
    startDate: '',
    endDate: '',
    location: '',
    link: '',
  });

  useEffect(() => {
    const fetchWorkshop = async () => {
      try {
        const response = await fetch(`/api/PublicationsRoute/Workshops/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch workshop');
        }

        const responseData = await response.json();
        console.log('Fetched workshop:', responseData.data);
        setWorkshop(responseData.data);
      } catch (error) {
        console.error('Error fetching workshop:', error);
      }
    };

    if (id) {
      fetchWorkshop();
    }
  }, [id]);

  const handleEditWorkshop = async () => {
    try {
      const response = await fetch(`/api/PublicationsRoute/Workshops/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: workshop.title,
          organizers: workshop.organizers,
          startDate: workshop.startDate,
          endDate: workshop.endDate,
          location: workshop.location,
          link: workshop.link,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit workshop');
      }

      // Optionally handle success or redirect
      console.log('Workshop edited successfully!');
    } catch (error) {
      console.error('Error editing workshop:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Workshop</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter workshop title"
          value={workshop.title}
          onChange={(e) => setWorkshop({ ...workshop, title: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter organizers (comma separated)"
          value={workshop.organizers.join(', ')}
          onChange={(e) => setWorkshop({ ...workshop, organizers: e.target.value.split(',').map(org => org.trim()) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter start date"
          value={workshop.startDate}
          onChange={(e) => setWorkshop({ ...workshop, startDate: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter end date (optional)"
          value={workshop.endDate}
          onChange={(e) => setWorkshop({ ...workshop, endDate: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter location (optional)"
          value={workshop.location}
          onChange={(e) => setWorkshop({ ...workshop, location: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter link (optional)"
          value={workshop.link}
          onChange={(e) => setWorkshop({ ...workshop, link: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <Link href="/publications" onClick={handleEditWorkshop} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
        Save Changes
      </Link>
    </div>
  );
};

export default EditWorkshopPage;
