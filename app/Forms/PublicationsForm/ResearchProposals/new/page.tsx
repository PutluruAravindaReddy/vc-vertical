"use client";
import { useState } from 'react';
import Link from 'next/link';

const AddResearchProposalPage = () => {
  const [title, setTitle] = useState<string>('');
  const [authors, setAuthors] = useState<string>('');
  const [scheme, setScheme] = useState<string>('');
  const [fileNumber, setFileNumber] = useState<string>('');
  const [principalInvestigator, setPrincipalInvestigator] = useState<string>('');
  const [coInvestigators, setCoInvestigators] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [totalBudget, setTotalBudget] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleAddResearchProposal = async () => {
    if (!title || !authors || !principalInvestigator) {
      alert('Please fill in all required fields.');
      return;
    }

    const authorsArray = authors.split(',').map(author => author.trim());
    const coInvestigatorsArray = coInvestigators ? coInvestigators.split(',').map(coInv => coInv.trim()) : [];

    try {
      const response = await fetch('/api/PublicationsRoute/ResearchProposals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          authors: authorsArray,
          scheme: scheme || undefined,
          fileNumber: fileNumber || undefined,
          principalInvestigator,
          coInvestigators: coInvestigatorsArray,
          duration: duration || undefined,
          totalBudget: totalBudget || undefined,
          status: status || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally handle success or redirect
      console.log('Research proposal added successfully!');
    } catch (error) {
      console.error('Error adding research proposal:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Research Proposal</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter research proposal title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter authors (comma separated)"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter scheme (optional)"
          value={scheme}
          onChange={(e) => setScheme(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter file number (optional)"
          value={fileNumber}
          onChange={(e) => setFileNumber(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter principal investigator"
          value={principalInvestigator}
          onChange={(e) => setPrincipalInvestigator(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter co-investigators (comma separated, optional)"
          value={coInvestigators}
          onChange={(e) => setCoInvestigators(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter duration (optional)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter total budget (optional)"
          value={totalBudget}
          onChange={(e) => setTotalBudget(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter status (optional)"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <Link href="/publications"
        onClick={handleAddResearchProposal}
        className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Add Research Proposal
      </Link>
      <Link
        href="/publications"
        className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4"
      >
        Back to Research Proposals
      </Link>
    </div>
  );
};

export default AddResearchProposalPage;
