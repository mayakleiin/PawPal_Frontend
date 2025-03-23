import { useState } from "react";
import { Dog } from "../types/Dog";
import { addDog, updateDog, deleteDog } from "../services/UserService";

export function useDogs(userId: string) {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [error, setError] = useState("");

  async function handleAddDog(dogData: Partial<Dog>) {
    try {
      const updatedUser = await addDog(userId, dogData);
      setDogs(updatedUser.dogs);
    } catch {
      setError("Failed to add dog");
    }
  }

  async function handleUpdateDog(dogId: string, dogData: Partial<Dog>) {
    try {
      const updatedUser = await updateDog(userId, dogId, dogData);
      setDogs(updatedUser.dogs);
    } catch {
      setError("Failed to update dog");
    }
  }

  async function handleDeleteDog(dogId: string) {
    try {
      const updatedUser = await deleteDog(userId, dogId);
      setDogs(updatedUser.dogs);
    } catch {
      setError("Failed to delete dog");
    }
  }

  return { dogs, error, handleAddDog, handleUpdateDog, handleDeleteDog };
}
