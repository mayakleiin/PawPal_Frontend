import React from "react";

type RegisterFormProps = {
  name: string;
  email: string;
  password: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function RegisterForm({
  name,
  email,
  password,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: RegisterFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-4 w-80 p-4 border rounded"
    >
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}
