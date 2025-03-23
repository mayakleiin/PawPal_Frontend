import React, { useState } from "react";

interface AddDogProps {
  isOpen: boolean;
  onClose: () => void;
  onDogAdd: (dogData: {
    name: string;
    birthYear: number;
    birthMonth: number;
    breed?: string;
  }) => void;
}

export default function AddDog({ isOpen, onClose, onDogAdd }: AddDogProps) {
  const [dogData, setDogData] = useState({
    name: "",
    birthYear: 2020,
    birthMonth: 1,
    breed: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDogData({ ...dogData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl mb-4">Add Dog</h2>
        <input
          type="text"
          name="name"
          placeholder="Dog Name"
          className="border mb-2 p-2 w-full"
          onChange={handleChange}
        />
        <input
          type="number"
          name="birthYear"
          placeholder="Birth Year"
          className="border mb-2 p-2 w-full"
          onChange={handleChange}
        />
        <input
          type="number"
          name="birthMonth"
          placeholder="Birth Month"
          className="border mb-2 p-2 w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          className="border mb-4 p-2 w-full"
          onChange={handleChange}
        />
        <div className="space-x-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => onDogAdd(dogData)}
          >
            Add Dog
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
