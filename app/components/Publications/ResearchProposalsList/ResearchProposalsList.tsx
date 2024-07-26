"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

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

const ResearchProposalsList = () => {
  const { data: session } = useSession();
  const [researchProposals, setResearchProposals] = useState<ResearchProposal[]>([]);

  useEffect(() => {
    const fetchResearchProposals = async () => {
      try {
        const response = await fetch('/api/PublicationsRoute/ResearchProposals', {
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
      const response = await fetch(`/api/PublicationsRoute/ResearchProposals/${id}`, {
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
    <div>
      {researchProposals.map((proposal) => (
        <div key={proposal._id} className="bg-white dark:bg-[#333333] shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl dark:text-[#EDEDED] font-bold text-justify mb-2">{proposal.title}</h2>
          
          {/* Authors */}
          <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong className=" dark:text-gray-200">Authors:</strong> {proposal.authors.join(', ')}
          </p>
          
          {/* Scheme (if available) */}
          {proposal.scheme && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className=" dark:text-gray-200">Scheme:</strong> {proposal.scheme}
            </p>
          )}
          
          {/* File Number (if available) */}
          {proposal.fileNumber && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className=" dark:text-gray-200">File Number:</strong> {proposal.fileNumber}
            </p>
          )}
          
          {/* Principal Investigator (if available) */}
          {proposal.principalInvestigator && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className=" dark:text-gray-200">Principal Investigator:</strong> {proposal.principalInvestigator}
            </p>
          )}
          
          {/* Co-Investigators (if available) */}
          {proposal.coInvestigators && proposal.coInvestigators.length > 0 && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className=" dark:text-gray-200">Co-Investigators:</strong> {proposal.coInvestigators.join(', ')}
            </p>
          )}
          
          {/* Duration (if available) */}
          {proposal.duration && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className=" dark:text-gray-200">Duration:</strong> {proposal.duration}
            </p>
          )}
          
          {/* Total Budget (if available) */}
          {proposal.totalBudget && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className=" dark:text-gray-200">Total Budget:</strong> {proposal.totalBudget}
            </p>
          )}
          
          {/* Status (if available) */}
          {proposal.status && (
            <p className="text-gray-700 dark:text-gray-300 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong className=" dark:text-gray-200">Status:</strong> {proposal.status}
            </p>
          )}
          {session?.user?.name && (
            <div className="flex items-center justify-center mx-4 mb-2 space-x-2">
              <Link
                href={`/Forms/PublicationsForm/ResearchProposals/${proposal._id}`}
                className="px-4 py-2 font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-75 transition duration-200"
              >
                Edit
              </Link>
              <Link
                className="px-4 my-3 py-2 font-semibold text-white bg-green-700 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-200"
                href="/Forms/PublicationsForm/ResearchProposals/new"
              >
                Add
              </Link>
              <button
                onClick={() => handleDeleteResearchProposal(proposal._id)}
                className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResearchProposalsList;
