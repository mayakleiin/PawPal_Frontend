import { Dog } from "./Dog";

export interface User {
  _id: string;
  name: string;
  email: string;
  city?: string;
  gender?: "Male" | "Female" | "Other";
  profileImage?: string;
  dogs: Dog[];
}
