import React from "react";
import { Playdate } from "../types/Playdate";

interface PlaydateListProps {
  playdates: Playdate[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PlaydateList: React.FC<PlaydateListProps> = ({
  playdates,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div>
      <ul>
        {playdates.map((p) => (
          <li key={p._id}>
            {p.title} - {p.date}
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PlaydateList;
