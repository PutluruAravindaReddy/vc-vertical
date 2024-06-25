export interface ResearchProposal {
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

interface ResearchProposalsListProps {
  proposals: ResearchProposal[];
}

const ResearchProposalsList: React.FC<ResearchProposalsListProps> = ({ proposals }) => {
  return (
    <div>
      {proposals.map((proposal, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl font-bold text-justify mb-2">{proposal.title}</h2>
          
          {/* Authors */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Authors:</strong> {proposal.authors.join(', ')}
          </p>
          
          {/* Scheme (if available) */}
          {proposal.scheme && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Scheme:</strong> {proposal.scheme}
            </p>
          )}
          
          {/* File Number (if available) */}
          {proposal.fileNumber && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>File Number:</strong> {proposal.fileNumber}
            </p>
          )}
          
          {/* Principal Investigator (if available) */}
          {proposal.principalInvestigator && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Principal Investigator:</strong> {proposal.principalInvestigator}
            </p>
          )}
          
          {/* Co-Investigators (if available) */}
          {proposal.coInvestigators && proposal.coInvestigators.length > 0 && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Co-Investigators:</strong> {proposal.coInvestigators.join(', ')}
            </p>
          )}
          
          {/* Duration (if available) */}
          {proposal.duration && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Duration:</strong> {proposal.duration}
            </p>
          )}
          
          {/* Total Budget (if available) */}
          {proposal.totalBudget && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Total Budget:</strong> {proposal.totalBudget}
            </p>
          )}
          
          {/* Status (if available) */}
          {proposal.status && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Status:</strong> {proposal.status}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResearchProposalsList;
