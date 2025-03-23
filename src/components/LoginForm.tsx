import React from "react";

type LoginFormProps = {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onGoogleLogin: (credential: string) => void;
};

export default function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onGoogleLogin,
}: LoginFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-4 w-80 p-4 border rounded"
    >
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      <button
        type="button"
        className="bg-red-500 text-white p-2 rounded"
        onClick={() => onGoogleLogin("google-credential-placeholder")}
      >
        Google Sign-In
      </button>
    </form>
  );
}
