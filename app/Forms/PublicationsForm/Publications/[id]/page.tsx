// EditPublicationPage.tsx

"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Publication {
  _id: string; // Assuming _id is used as the identifier
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

const EditPublicationPage = ({ params }: any) => {
  const publicationId = params.id;
  const [publication, setPublication] = useState<Publication>({
    _id: '',
    title: '',
    authors: [],
    journal: '',
    year: undefined,
    pages: '',
    impactFactor: undefined,
    SNIP: undefined,
    DOI: '',
    link: '',
    date: '',
  });

  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const response = await fetch(`/api/PublicationsRoute/Publications/${publicationId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch publication');
        }

        const responseData = await response.json();
        console.log('Fetched publication:', responseData.data);
        setPublication(responseData.data);
      } catch (error) {
        console.error('Error fetching publication:', error);
      }
    };

    if (publicationId) {
      fetchPublication();
    }
  }, [publicationId]);

  const handleEditPublication = async () => {
    try {
      const response = await fetch(`/api/PublicationsRoute/Publications/${publicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: publication.title,
          authors: publication.authors,
          journal: publication.journal,
          year: publication.year,
          pages: publication.pages,
          impactFactor: publication.impactFactor,
          SNIP: publication.SNIP,
          DOI: publication.DOI,
          link: publication.link,
          date: publication.date,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit publication');
      }

      // Optionally handle success or redirect
      console.log('Publication edited successfully!');
    } catch (error) {
      console.error('Error editing publication:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Publication</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter title"
          value={publication.title}
          onChange={(e) => setPublication({ ...publication, title: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter authors (comma-separated)"
          value={publication.authors.join(', ')}
          onChange={(e) => setPublication({ ...publication, authors: e.target.value.split(',').map(author => author.trim()) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter journal"
          value={publication.journal}
          onChange={(e) => setPublication({ ...publication, journal: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="number"
          placeholder="Enter year"
          value={publication.year ?? ''}
          onChange={(e) => setPublication({ ...publication, year: Number(e.target.value) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter pages"
          value={publication.pages}
          onChange={(e) => setPublication({ ...publication, pages: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="number"
          placeholder="Enter impact factor"
          value={publication.impactFactor ?? ''}
          onChange={(e) => setPublication({ ...publication, impactFactor: Number(e.target.value) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="number"
          placeholder="Enter SNIP"
          value={publication.SNIP ?? ''}
          onChange={(e) => setPublication({ ...publication, SNIP: Number(e.target.value) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter DOI"
          value={publication.DOI}
          onChange={(e) => setPublication({ ...publication, DOI: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter link"
          value={publication.link}
          onChange={(e) => setPublication({ ...publication, link: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter date"
          value={publication.date}
          onChange={(e) => setPublication({ ...publication, date: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <Link href="/publications" onClick={handleEditPublication} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
        Save Changes
      </Link>
    </div>
  );
};

export default EditPublicationPage;
