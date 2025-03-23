import { useState } from "react";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  addDog,
  updateDog,
  deleteDog,
} from "../services/UserService";
import { User } from "../types/User";
import { Dog } from "../types/Dog";

export function useUserProfile(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUser() {
    try {
      setLoading(true);
      const userData = await getUserProfile(userId);
      setUser(userData);
    } catch {
      setError("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile(formData: FormData) {
    try {
      setLoading(true);
      const updatedUser = await updateUserProfile(userId, formData);
      setUser(updatedUser);
    } catch {
      setError("Failed to update profile");
    } finally {
      setLoading(false);
    }
  }

  async function deleteProfile() {
    try {
      await deleteUserProfile(userId);
    } catch {
      setError("Failed to delete profile");
    }
  }

  async function handleAddDog(dogData: Partial<Dog>) {
    try {
      const updatedUser = await addDog(userId, dogData);
      setUser(updatedUser);
    } catch {
      setError("Failed to add dog");
    }
  }

  async function handleUpdateDog(dogId: string, dogData: Partial<Dog>) {
    try {
      const updatedUser = await updateDog(userId, dogId, dogData);
      setUser(updatedUser);
    } catch {
      setError("Failed to update dog");
    }
  }

  async function handleDeleteDog(dogId: string) {
    try {
      const updatedUser = await deleteDog(userId, dogId);
      setUser(updatedUser);
    } catch {
      setError("Failed to delete dog");
    }
  }

  return {
    user,
    loading,
    error,
    fetchUser,
    updateProfile,
    deleteProfile,
    handleAddDog,
    handleUpdateDog,
    handleDeleteDog,
  };
}
