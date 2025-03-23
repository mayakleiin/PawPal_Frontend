import React from "react";
import { Playdate } from "../types/Playdate";

interface PlaydateDetailsProps {
  playdate: Playdate;
}

const PlaydateDetails: React.FC<PlaydateDetailsProps> = ({ playdate }) => {
  return (
    <div>
      <h2>{playdate.title}</h2>
      <p>{playdate.description}</p>
      <p>{playdate.date}</p>
      <p>{playdate.location}</p>
    </div>
  );
};

export default PlaydateDetails;
