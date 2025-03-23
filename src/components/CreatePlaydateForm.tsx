import React, { useState } from "react";

interface CreatePlaydateFormProps {
  onCreate: (data: {
    title: string;
    description: string;
    date: string;
    location: string;
  }) => void;
}

const CreatePlaydateForm: React.FC<CreatePlaydateFormProps> = ({
  onCreate,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        placeholder="Date"
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePlaydateForm;
