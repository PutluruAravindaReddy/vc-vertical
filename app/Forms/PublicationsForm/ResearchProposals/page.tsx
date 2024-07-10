"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export interface ResearchProposal {
  _id: string;
  title: string;
  authors: string[];
  scheme?: string;
  fileNumber?: string;
  principalInvestigator?: string;
  coInvestigators?: string[];
  duration?: string;
  totalBudget?: string;
  status?: string;
}

const ResearchProposalsPage = () => {
  const [researchProposals, setResearchProposals] = useState<ResearchProposal[]>([]);

  useEffect(() => {
    const fetchResearchProposals = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/PublicationsRoute/ResearchProposals', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch research proposals');
        }

        const responseData = await response.json();
        console.log('Fetched research proposals:', responseData.data);
        setResearchProposals(responseData.data);
      } catch (error) {
        console.error('Error fetching research proposals:', error);
      }
    };

    fetchResearchProposals();
  }, []);

  const handleDeleteResearchProposal = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/PublicationsRoute/ResearchProposals/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete research proposal');
      }

      const updatedResearchProposals = researchProposals.filter(proposal => proposal._id !== id);
      setResearchProposals(updatedResearchProposals);
    } catch (error) {
      console.error('Error deleting research proposal:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Research Proposals</h1>
      <Link href="/Forms/PublicationsForm/ResearchProposals/new" className="mx-2 my-2 bg-blue-600 text-black px-4 py-2 rounded-md cursor-pointer">
        Add Research Proposal
      </Link>
      {researchProposals.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Research Proposals</h2>
          <div className="grid grid-cols-3 gap-4">
            {researchProposals.map((proposal) => (
              <div key={proposal._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">Title: {proposal.title}</p>
                <p className="text-lg font-medium mb-2">Authors: {proposal.authors.join(', ')}</p>
                {proposal.scheme && <p className="text-lg font-medium mb-2">Scheme: {proposal.scheme}</p>}
                {proposal.fileNumber && <p className="text-lg font-medium mb-2">File Number: {proposal.fileNumber}</p>}
                {proposal.principalInvestigator && <p className="text-lg font-medium mb-2">Principal Investigator: {proposal.principalInvestigator}</p>}
                {proposal.coInvestigators && <p className="text-lg font-medium mb-2">Co-Investigators: {proposal.coInvestigators.join(', ')}</p>}
                {proposal.duration && <p className="text-lg font-medium mb-2">Duration: {proposal.duration}</p>}
                {proposal.totalBudget && <p className="text-lg font-medium mb-2">Total Budget: {proposal.totalBudget}</p>}
                {proposal.status && <p className="text-lg font-medium mb-2">Status: {proposal.status}</p>}
                <Link href={`/Forms/PublicationsForm/ResearchProposals/${proposal._id}`} className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
                  Edit
                </Link>
                <button onClick={() => handleDeleteResearchProposal(proposal._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
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

export default ResearchProposalsPage;
