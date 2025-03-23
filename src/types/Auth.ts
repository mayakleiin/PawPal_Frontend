import { User } from "./User";

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface GoogleSignInResponse extends LoginResponse {
  firstTimeLogin: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface GoogleSignInRequest {
  token: string;
}
