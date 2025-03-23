import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import RegisterForm from "../../components/RegisterForm";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate("/profile");
    } catch {
      setError("Registration failed");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <RegisterForm
        name={name}
        email={email}
        password={password}
        onNameChange={(e) => setName(e.target.value)}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
