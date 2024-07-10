"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

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

const PublicationsPage = () => {
  const [patents, setPatents] = useState<Patent[]>([]);

  useEffect(() => {
    const fetchPatents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/PublicationsRoute/Patents', {
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
      const response = await fetch(`http://localhost:3000/api/PublicationsRoute/Patents/${id}`, {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Patents</h1>
      <Link href="/Forms/PatentsForm/Patents/new" className="mx-2 my-2 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Add Patent</Link>
      {patents.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Patents</h2>
          <div className="grid grid-cols-3 gap-4">
            {patents.map((patent) => (
              <div key={patent._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">{patent.title}</p>
                {patent.journal && <p className="text-sm mb-2">Journal: {patent.journal}</p>}
                {patent.applicationNumber && <p className="text-sm mb-2">Application Number: {patent.applicationNumber}</p>}
                {patent.date && <p className="text-sm mb-2">Date: {patent.date}</p>}
                {patent.dateOfFiling && <p className="text-sm mb-2">Date of Filing: {patent.dateOfFiling}</p>}
                {patent.publicationDate && <p className="text-sm mb-2">Publication Date: {patent.publicationDate}</p>}
                {patent.dateOfGrant && <p className="text-sm mb-2">Date of Grant: {patent.dateOfGrant}</p>}
                {patent.designNumber && <p className="text-sm mb-2">Design Number: {patent.designNumber}</p>}
                {patent.patentOffice && <p className="text-sm mb-2">Patent Office: {patent.patentOffice}</p>}
                {patent.inventors && <p className="text-sm mb-2">Inventors: {patent.inventors.join(', ')}</p>}
                {patent.link && <a href={patent.link} target="_blank" className="text-blue-600 underline mb-2 block">Read More</a>}
                <Link href={`/Forms/PublicationsForm/Patents/${patent._id}`} className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
  Edit
</Link>

                <button onClick={() => handleDeletePatent(patent._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationsPage;
