"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ResearchProposal {
  _id: string;
  title: string;
  authors: string[];
  scheme: string;
  fileNumber: string;
  principalInvestigator: string;
  coInvestigators: string[];
  duration: string;
  totalBudget: string;
  status: string;
}

const EditResearchProposalPage = ({ params }: any) => {
  const id = params.id;
  const [researchProposal, setResearchProposal] = useState<ResearchProposal>({
    _id: '',
    title: '',
    authors: [],
    scheme: '',
    fileNumber: '',
    principalInvestigator: '',
    coInvestigators: [],
    duration: '',
    totalBudget: '',
    status: '',
  });

  useEffect(() => {
    const fetchResearchProposal = async () => {
      try {
        const response = await fetch(`/api/PublicationsRoute/ResearchProposals/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch research proposal');
        }

        const responseData = await response.json();
        console.log('Fetched research proposal:', responseData.data);
        setResearchProposal(responseData.data);
      } catch (error) {
        console.error('Error fetching research proposal:', error);
      }
    };

    if (id) {
      fetchResearchProposal();
    }
  }, [id]);

  const handleEditResearchProposal = async () => {
    try {
      const response = await fetch(`/api/PublicationsRoute/ResearchProposals/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: researchProposal.title,
          authors: researchProposal.authors,
          scheme: researchProposal.scheme,
          fileNumber: researchProposal.fileNumber,
          principalInvestigator: researchProposal.principalInvestigator,
          coInvestigators: researchProposal.coInvestigators,
          duration: researchProposal.duration,
          totalBudget: researchProposal.totalBudget,
          status: researchProposal.status,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit research proposal');
      }

      // Optionally handle success or redirect
      console.log('Research proposal edited successfully!');
    } catch (error) {
      console.error('Error editing research proposal:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Edit Research Proposal</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter research proposal title"
          value={researchProposal.title}
          onChange={(e) => setResearchProposal({ ...researchProposal, title: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter authors (comma separated)"
          value={researchProposal.authors.join(', ')}
          onChange={(e) => setResearchProposal({ ...researchProposal, authors: e.target.value.split(',').map(author => author.trim()) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter scheme (optional)"
          value={researchProposal.scheme}
          onChange={(e) => setResearchProposal({ ...researchProposal, scheme: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter file number (optional)"
          value={researchProposal.fileNumber}
          onChange={(e) => setResearchProposal({ ...researchProposal, fileNumber: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter principal investigator"
          value={researchProposal.principalInvestigator}
          onChange={(e) => setResearchProposal({ ...researchProposal, principalInvestigator: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter co-investigators (comma separated, optional)"
          value={researchProposal.coInvestigators.join(', ')}
          onChange={(e) => setResearchProposal({ ...researchProposal, coInvestigators: e.target.value.split(',').map(coInv => coInv.trim()) })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter duration (optional)"
          value={researchProposal.duration}
          onChange={(e) => setResearchProposal({ ...researchProposal, duration: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter total budget (optional)"
          value={researchProposal.totalBudget}
          onChange={(e) => setResearchProposal({ ...researchProposal, totalBudget: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter status (optional)"
          value={researchProposal.status}
          onChange={(e) => setResearchProposal({ ...researchProposal, status: e.target.value })}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
      </div>
      <Link href="/publications" onClick={handleEditResearchProposal} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">
        Save Changes
      </Link>
      <Link
        href="/publications"
        className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4"
      >
        Back to Publications
      </Link>
    </div>
  );
};

export default EditResearchProposalPage;
