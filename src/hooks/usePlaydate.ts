import { useState, useEffect } from "react";
import {
  getAllPlaydates,
  getSinglePlaydate,
  createPlaydate,
  updatePlaydate,
  deletePlaydate,
  joinPlaydate,
  leavePlaydate,
} from "../services/PlaydateService";
import { Playdate } from "../types/Playdate";

export function usePlaydates() {
  const [playdates, setPlaydates] = useState<Playdate[]>([]);
  const [singlePlaydate, setSinglePlaydate] = useState<Playdate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPlaydates = async (page = 1) => {
    try {
      setLoading(true);
      const res = await getAllPlaydates(page);
      setPlaydates(res.items);
      setCurrentPage(res.currentPage);
      setTotalPages(res.totalPages);
      setLoading(false);
    } catch {
      setError("Failed to fetch playdates");
      setLoading(false);
    }
  };

  const fetchSinglePlaydate = async (id: string) => {
    try {
      setLoading(true);
      const res = await getSinglePlaydate(id);
      setSinglePlaydate(res);
      setLoading(false);
    } catch {
      setError("Failed to fetch playdate");
      setLoading(false);
    }
  };

  const handleCreatePlaydate = async (data: {
    title: string;
    description: string;
    date: string;
    location: string;
  }) => {
    try {
      await createPlaydate(data);
      fetchPlaydates(currentPage);
    } catch {
      setError("Failed to create playdate");
    }
  };

  const handleUpdatePlaydate = async (id: string, data: Partial<Playdate>) => {
    try {
      await updatePlaydate(id, data);
      fetchPlaydates(currentPage);
    } catch {
      setError("Failed to update playdate");
    }
  };

  const handleDeletePlaydate = async (id: string) => {
    try {
      await deletePlaydate(id);
      fetchPlaydates(currentPage);
    } catch {
      setError("Failed to delete playdate");
    }
  };

  const handleJoinPlaydate = async (id: string, dogIds: string[]) => {
    try {
      await joinPlaydate(id, dogIds);
      fetchSinglePlaydate(id);
    } catch {
      setError("Failed to join playdate");
    }
  };

  const handleLeavePlaydate = async (id: string) => {
    try {
      await leavePlaydate(id);
      fetchSinglePlaydate(id);
    } catch {
      setError("Failed to leave playdate");
    }
  };

  useEffect(() => {
    fetchPlaydates();
  }, []);

  return {
    playdates,
    singlePlaydate,
    loading,
    error,
    currentPage,
    totalPages,
    fetchPlaydates,
    fetchSinglePlaydate,
    handleCreatePlaydate,
    handleUpdatePlaydate,
    handleDeletePlaydate,
    handleJoinPlaydate,
    handleLeavePlaydate,
    setCurrentPage,
  };
}
