"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Patent {
  _id: string; // Assuming _id is used as the identifier
  title: string;
  journal?: string;
  applicationNumber?: string;
  date?: string;
  dateOfFiling?: string;
  publicationDate?: string;
  dateOfGrant?: string;
  designNumber?: string;
  patentOffice?: string;
  inventors: string[];
  link?: string;
  faculty?: string;
}

const EditPatentPage = ({ params }: any) => {
  const patentId = params.id;
  const [patent, setPatent] = useState<Patent>({
    _id: '',
    title: '',
    journal: '',
    applicationNumber: '',
    date: '',
    dateOfFiling: '',
    publicationDate: '',
    dateOfGrant: '',
    designNumber: '',
    patentOffice: '',
    inventors: [],
    link: '',
    faculty: '',
  });

  useEffect(() => {
    const fetchPatent = async () => {
      try {
        const response = await fetch(`/api/PublicationsRoute/Patents/${patentId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch patent');
        }

        const responseData = await response.json();
        console.log('Fetched patent:', responseData.data);
        setPatent(responseData.data);
      } catch (error) {
        console.error('Error fetching patent:', error);
      }
    };

    if (patentId) {
      fetchPatent();
    }
  }, [patentId]);

  const handleEditPatent = async () => {
    try {
      const response = await fetch(`/api/PublicationsRoute/Patents/${patentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: patent.title,
          journal: patent.journal,
          applicationNumber: patent.applicationNumber,
          date: patent.date,
          dateOfFiling: patent.dateOfFiling,
          publicationDate: patent.publicationDate,
          dateOfGrant: patent.dateOfGrant,
          designNumber: patent.designNumber,
          patentOffice: patent.patentOffice,
          inventors: patent.inventors,
          link: patent.link,
          faculty: patent.faculty,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit patent');
      }

      console.log('Patent edited successfully!');
      // Optionally handle success or redirect
    } catch (error) {
      console.error('Error editing patent:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Patent</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter title"
          value={patent.title}
          onChange={(e) => setPatent({ ...patent, title: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter journal"
          value={patent.journal}
          onChange={(e) => setPatent({ ...patent, journal: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
          <input
          type="text"
          placeholder="Enter application number"
          value={patent.applicationNumber}
          onChange={(e) => setPatent({ ...patent, applicationNumber: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter date"
          value={patent.date}
          onChange={(e) => setPatent({ ...patent, date: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter date of filing"
          value={patent.dateOfFiling}
          onChange={(e) => setPatent({ ...patent, dateOfFiling: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter publication date"
          value={patent.publicationDate}
          onChange={(e) => setPatent({ ...patent, publicationDate: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter date of grant"
          value={patent.dateOfGrant}
          onChange={(e) => setPatent({ ...patent, dateOfGrant: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter design number"
          value={patent.designNumber}
          onChange={(e) => setPatent({ ...patent, designNumber: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter patent office"
          value={patent.patentOffice}
          onChange={(e) => setPatent({ ...patent, patentOffice: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter inventors (comma-separated)"
          value={patent.inventors.join(', ')}
          onChange={(e) => setPatent({ ...patent, inventors: e.target.value.split(',').map(inventor => inventor.trim()) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter link"
          value={patent.link}
          onChange={(e) => setPatent({ ...patent, link: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter faculty"
          value={patent.faculty}
          onChange={(e) => setPatent({ ...patent, faculty: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <Link href="/publications" onClick={handleEditPatent} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
        Save Changes
      </Link>
      <Link href="/publications" className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4">
        Back to Patents
      </Link>
    </div>
  );
};

export default EditPatentPage;
