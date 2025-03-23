import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/User";
import * as authService from "../services/AuthService";
import { tokenStorage } from "../utils/tokenStorage";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  async function login(email: string, password: string) {
    const res = await authService.login(email, password);
    setUser(res.user);
    setToken(res.accessToken);
    setRefreshToken(res.refreshToken);
  }

  async function register(name: string, email: string, password: string) {
    const res = await authService.register(name, email, password);
    setUser(res.user);
    setToken(res.accessToken);
    setRefreshToken(res.refreshToken);
  }

  async function logout() {
    if (refreshToken) {
      await authService.logout(refreshToken);
      setUser(null);
      setToken(null);
      setRefreshToken(null);
    }
  }

  async function googleLogin(credential: string) {
    const res = await authService.googleSignin(credential);
    setUser(res.user);
    setToken(res.accessToken);
    setRefreshToken(res.refreshToken);
    tokenStorage.setTokens(res.accessToken, res.refreshToken);
    return res.firstTimeLogin;
  }

  async function refreshTokens() {
    if (refreshToken) {
      const res = await authService.refresh(refreshToken);
      setToken(res.accessToken);
      setRefreshToken(res.refreshToken);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        refreshToken,
        login,
        logout,
        register,
        googleLogin,
        refreshTokens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
