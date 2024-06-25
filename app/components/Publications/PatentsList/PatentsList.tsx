import React from 'react';

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
  inventors?: string[];
  link?: string;
  faculty?: string;
}

interface PatentsListProps {
  patents: Patent[];
}

const PatentsList: React.FC<PatentsListProps> = ({ patents }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      {patents.map((patent, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2 max-w-full">
          <h2 className="text-md sm:text-xl text-justify	 font-bold mb-2">{patent.title}</h2>

          {patent.faculty && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Faculty:</strong> {patent.faculty}
            </p>
          )}
          
          {/* Inventors */}
          {patent.inventors && patent.inventors.length > 0 && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Inventors:</strong> {patent.inventors.join(', ')}
            </p>
          )}
          
          {/* Journal */}
          {patent.journal && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Journal:</strong> {patent.journal}
            </p>
          )}
          
          {/* Application Number */}
          {patent.applicationNumber && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Application Number:</strong> {patent.applicationNumber}
            </p>
          )}
          
          {/* Dates */}
          <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
            {patent.date && <><strong>Date:</strong> {patent.date}<br /></>}
            {patent.dateOfFiling && <><strong>Date of Filing:</strong> {patent.dateOfFiling}<br /></>}
            {patent.publicationDate && <><strong>Publication Date:</strong> {patent.publicationDate}<br /></>}
            {patent.dateOfGrant && <><strong>Date of Grant:</strong> {patent.dateOfGrant}<br /></>}
          </p>
          
          {/* Design Number */}
          {patent.designNumber && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Design Number:</strong> {patent.designNumber}
            </p>
          )}
          
          {/* Patent Office */}
          {patent.patentOffice && (
            <p className="text-gray-700 text-[0.8rem] sm:text-[1rem] mb-1">
              <strong>Patent Office:</strong> {patent.patentOffice}
            </p>
          )}
          
          {/* DOI and Link */}
          {patent.link && (
            <a
              href={patent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline block"
            >
              Read More
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default PatentsList;
