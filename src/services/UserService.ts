import axiosInstance from "../utils/axiosInstance";
import { User } from "../types/User";
import { Dog } from "../types/Dog";

// Get user profile by ID
export const getUserProfile = async (userId: string): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${userId}`);
  return response.data as User;
};

// Update user details
export const updateUserProfile = async (
  userId: string,
  formData: FormData
): Promise<User> => {
  const response = await axiosInstance.put(`/users/${userId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data as User;
};

// Delete user
export const deleteUserProfile = async (userId: string): Promise<void> => {
  await axiosInstance.delete(`/users/${userId}`);
};

// Add dog
export const addDog = async (
  userId: string,
  dogData: Partial<Dog>
): Promise<User> => {
  const response = await axiosInstance.post<User>(
    `/users/${userId}/dogs`,
    dogData
  );
  return response.data as User;
};

// Update dog
export const updateDog = async (
  userId: string,
  dogId: string,
  dogData: Partial<Dog>
): Promise<User> => {
  const response = await axiosInstance.put(
    `/users/${userId}/dogs/${dogId}`,
    dogData
  );
  return response.data as User;
};

// Delete dog
export const deleteDog = async (
  userId: string,
  dogId: string
): Promise<User> => {
  const response = await axiosInstance.delete<User>(
    `/users/${userId}/dogs/${dogId}`
  );
  return response.data;
};
