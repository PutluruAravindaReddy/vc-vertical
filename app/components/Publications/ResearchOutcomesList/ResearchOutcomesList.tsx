export interface ResearchOutcome {
    initiative: string;
    initiators: string[];
    activities: string[];
  }
  // Adjust the import path as needed

interface ResearchOutcomesListProps {
  outcomes: ResearchOutcome[];
}

const ResearchOutcomesList: React.FC<ResearchOutcomesListProps> = ({ outcomes }) => {
  return (
    <div>
      {outcomes.map((outcome, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl font-bold text-justify mb-2">{outcome.initiative}</h2>
          
          {/* Initiators */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Initiators:</strong> {outcome.initiators.join(', ')}
          </p>
          
          {/* Activities */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Activities:</strong> {outcome.activities.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResearchOutcomesList;
