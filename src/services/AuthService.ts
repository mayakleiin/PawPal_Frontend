import axios from "axios";
import { LoginResponse, GoogleSignInResponse } from "../types/Auth";

export async function register(
  name: string,
  email: string,
  password: string
): Promise<LoginResponse> {
  const res = await axios.post<LoginResponse>("/api/auth/register", {
    name,
    email,
    password,
  });
  return res.data;
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  const res = await axios.post<LoginResponse>("/api/auth/login", {
    email,
    password,
  });
  return res.data;
}

export async function googleSignin(
  credential: string
): Promise<GoogleSignInResponse> {
  const res = await axios.post<GoogleSignInResponse>("/api/auth/google", {
    credential,
  });
  return res.data;
}

export async function logout(
  refreshToken: string
): Promise<{ message: string }> {
  const res = await axios.post<{ message: string }>("/api/auth/logout", {
    refreshToken,
  });
  return res.data;
}

export async function refresh(
  refreshToken: string
): Promise<{ accessToken: string; refreshToken: string; message: string }> {
  const res = await axios.post<{
    accessToken: string;
    refreshToken: string;
    message: string;
  }>("/api/auth/refresh", { refreshToken });
  return res.data;
}
