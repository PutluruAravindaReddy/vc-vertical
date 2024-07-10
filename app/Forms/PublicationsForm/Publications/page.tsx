"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

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

const PublicationsPage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/PublicationsRoute/Publications', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch publications');
        }

        const responseData = await response.json();
        console.log('Fetched publications:', responseData.data);
        setPublications(responseData.data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };

    fetchPublications();
  }, []);

  const handleDeletePublication = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/PublicationsRoute/Publications/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete publication');
      }

      const updatedPublications = publications.filter(publication => publication._id !== id);
      setPublications(updatedPublications);
    } catch (error) {
      console.error('Error deleting publication:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Publications</h1>
      <Link href="/Forms/PublicationsForm/Publications/new" className="mx-2 my-2 bg-blue-600 text-black px-4 py-2 rounded-md cursor-pointer">Add Publication</Link>
      {publications.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Publications</h2>
          <div className="grid grid-cols-3 gap-4">
            {publications.map((publication) => (
              <div key={publication._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">{publication.title}</p>
                <p className="text-sm mb-2">Authors: {publication.authors.join(', ')}</p>
                {publication.journal && <p className="text-sm mb-2">Journal: {publication.journal}</p>}
                {publication.year && <p className="text-sm mb-2">Year: {publication.year}</p>}
                {publication.pages && <p className="text-sm mb-2">Pages: {publication.pages}</p>}
                {publication.impactFactor && <p className="text-sm mb-2">Impact Factor: {publication.impactFactor}</p>}
                {publication.SNIP && <p className="text-sm mb-2">SNIP: {publication.SNIP}</p>}
                {publication.DOI && <p className="text-sm mb-2">DOI: {publication.DOI}</p>}
                {publication.link && <a href={publication.link} target="_blank" className="text-blue-600 underline mb-2 block">Read More</a>}
                {publication.date && <p className="text-sm mb-2">Date: {publication.date}</p>}
                <Link href={`/Forms/PublicationsForm/Publications/${publication._id}`} className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">Edit</Link>
                <button onClick={() => handleDeletePublication(publication._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationsPage;
