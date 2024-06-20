import React from "react";
import LabStudents from "../LabStudents";

interface LabStudentsProps {
  title: string;
  // Add more props here if needed
}

const LabteamCard: React.FC = () => {
  const LabTeamData: LabStudentsProps[] = [
    {
      title: "HI hello"
    },
  ];
  
  return (
    <>
      {LabTeamData.map((data, index) => (
        <LabStudents key={index} title={data.title} />
      ))}
    </>
  );
}

export default LabteamCard;
