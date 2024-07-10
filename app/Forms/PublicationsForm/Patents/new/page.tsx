"use client"

import { useState } from 'react';
import Link from 'next/link';

interface Patent {
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

const AddPatentPage = () => {
  const [title, setTitle] = useState<string>('');
  const [journal, setJournal] = useState<string>('');
  const [applicationNumber, setApplicationNumber] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [dateOfFiling, setDateOfFiling] = useState<string>('');
  const [publicationDate, setPublicationDate] = useState<string>('');
  const [dateOfGrant, setDateOfGrant] = useState<string>('');
  const [designNumber, setDesignNumber] = useState<string>('');
  const [patentOffice, setPatentOffice] = useState<string>('');
  const [inventors, setInventors] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [faculty, setFaculty] = useState<string>('');

  const handleAddPatent = async () => {
    const inventorsArray = inventors.split(',').map(inventor => inventor.trim());

    if (!title || inventorsArray.length === 0) {
      alert('Please fill in all required fields.');
      return;
    }

    const patent: Patent = {
      title,
      journal,
      applicationNumber,
      date,
      dateOfFiling,
      publicationDate,
      dateOfGrant,
      designNumber,
      patentOffice,
      inventors: inventorsArray,
      link,
      faculty,
    };

    try {
      const response = await fetch('/api/PublicationsRoute/Patents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patent),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Patent added successfully!');
      // Reset form fields
      setTitle('');
      setJournal('');
      setApplicationNumber('');
      setDate('');
      setDateOfFiling('');
      setPublicationDate('');
      setDateOfGrant('');
      setDesignNumber('');
      setPatentOffice('');
      setInventors('');
      setLink('');
      setFaculty('');
    } catch (error) {
      console.error('Error adding patent:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Patent</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter journal"
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter application number"
          value={applicationNumber}
          onChange={(e) => setApplicationNumber(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter date of filing"
          value={dateOfFiling}
          onChange={(e) => setDateOfFiling(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter publication date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter date of grant"
          value={dateOfGrant}
          onChange={(e) => setDateOfGrant(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter design number"
          value={designNumber}
          onChange={(e) => setDesignNumber(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter patent office"
          value={patentOffice}
          onChange={(e) => setPatentOffice(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter inventors (comma-separated)"
          value={inventors}
          onChange={(e) => setInventors(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter faculty"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <Link href="/publications" onClick={handleAddPatent} className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
        Add Patent
      </Link>
      <Link href="/publications" className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4">
        Back to Patents
      </Link>
    </div>
  );
};

export default AddPatentPage;
