import React from 'react';
import PublicationCard from '../PublicationCard';

interface Publication {
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

interface PublicationsListProps {
  publications: Publication[];
}

const PublicationsList: React.FC<PublicationsListProps> = ({ publications }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center">
      {publications.map((pub, index) => (
        <PublicationCard
          key={index}
          title={pub.title}
          authors={pub.authors}
          journal={pub.journal}
          year={pub.year}
          pages={pub.pages}
          impactFactor={pub.impactFactor}
          SNIP={pub.SNIP}
          DOI={pub.DOI}
          link={pub.link}
          date={pub.date}
        />
      ))}
    </div>
  );
};

export default PublicationsList;
