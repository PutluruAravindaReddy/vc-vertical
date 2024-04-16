import React from "react";
import LabStudents from "../LabStudents";

export default function LabteamCard() {
  const LabTeamData = [
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
