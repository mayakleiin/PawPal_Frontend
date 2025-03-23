import React, { useState } from "react";
import { User } from "../types/User";

interface EditProfileProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: FormData) => void;
  user: User;
}

export default function EditProfile({
  isOpen,
  onClose,
  onSave,
  user,
}: EditProfileProps) {
  const [formData, setFormData] = useState({
    name: user.name || "",
    city: user.city || "",
    gender: user.gender || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
    onSave(form);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl mb-4">Edit Profile</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          className="border mb-2 p-2 w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          className="border mb-2 p-2 w-full"
          onChange={handleChange}
        />
        <select
          name="gender"
          value={formData.gender}
          className="border mb-4 p-2 w-full"
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <div className="space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
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
