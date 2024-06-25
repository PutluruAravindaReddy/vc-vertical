
interface PublicationCardProps {
  title: string;
  authors: string[];
  journal?: string; // Make journal optional if not available
  year?: number; // Make year optional
  pages?: string; // Optional if needed
  impactFactor?: number; // Optional if needed
  SNIP?: number; // Optional if needed
  DOI?: string; // Optional if needed
  link?: string; // Link to the publication
  date?: string; // Optional if needed
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  title,
  authors,
  journal,
  year,
  pages,
  impactFactor,
  SNIP,
  DOI,
  link,
  date,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 max-w-full">
      <h2 className="text-md sm:text-xl font-bold text-justify	 mb-2">{title}</h2>
      <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
        <strong>Authors:</strong> {authors.join(', ')}
      </p>
      {journal && (
        <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
          <strong>Journal:</strong> {journal}
        </p>
      )}
      {year && (
        <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
          <strong>Year:</strong> {year}
        </p>
      )}
      {pages && (
        <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
          <strong>Pages:</strong> {pages}
        </p>
      )}
      {impactFactor && (
        <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
          <strong>Impact Factor:</strong> {impactFactor}
        </p>
      )}
      {SNIP && (
        <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
          <strong>SNIP:</strong> {SNIP}
        </p>
      )}
      {DOI && (
        <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
          <strong>DOI:</strong>{' '}
          <a href={DOI} target="_blank" rel="noopener noreferrer">
            {DOI}
          </a>
        </p>
      )}
      {date && (
        <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
          <strong>Date:</strong> {date}
        </p>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2563EB] hover:underline block"
        >
          Read More
        </a>
      )}
    </div>
  );
};

export default PublicationCard;
