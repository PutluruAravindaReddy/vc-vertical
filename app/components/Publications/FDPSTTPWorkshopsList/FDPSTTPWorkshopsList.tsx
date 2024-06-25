interface FDPSTTPWorkshop {
    title: string;
    organizers: string[];
    startDate: string;
    endDate?: string;
    location?: string;
    link?: string;
  }
  // Adjust the import path as needed

interface FDPSTTPWorkshopsListProps {
  events: FDPSTTPWorkshop[];
}

const FDPSTTPWorkshopsList: React.FC<FDPSTTPWorkshopsListProps> = ({ events }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl font-bold text-justify mb-2">{event.title}</h2>
          
          {/* Organizers */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Organizers:</strong> {event.organizers.join(', ')}
          </p>
          
          {/* Date */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            <strong>Date:</strong> {event.startDate}
            {event.endDate && ` - ${event.endDate}`}
          </p>
          
          {/* Location (if available) */}
          {event.location && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Location:</strong> {event.location}
            </p>
          )}
          
          {/* Link (if available) */}
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline block"
            >
              More Info
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default FDPSTTPWorkshopsList;
