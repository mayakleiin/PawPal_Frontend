import { createContext } from "react";
import { User } from "../types/User";

interface AuthContextType {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  googleLogin: (credential: string) => Promise<boolean>;
  refreshTokens: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
