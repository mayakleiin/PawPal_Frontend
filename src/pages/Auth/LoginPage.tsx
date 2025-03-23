import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import LoginForm from "../../components/LoginForm";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/profile");
    } catch {
      setError("Incorrect email or password");
    }
  }

  async function handleGoogleLogin(credential: string) {
    try {
      const firstTime = await googleLogin(credential);
      if (firstTime) {
        navigate("/complete-profile");
      } else {
        navigate("/profile");
      }
    } catch {
      setError("Google login failed");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
        onGoogleLogin={handleGoogleLogin}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
