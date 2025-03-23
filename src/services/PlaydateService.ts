import axiosInstance from "../utils/axiosInstance";
import { Playdate, GetAllPlaydatesResponse } from "../types/Playdate";

export const getAllPlaydates = async (
  page = 1
): Promise<GetAllPlaydatesResponse> => {
  const response = await axiosInstance.get<GetAllPlaydatesResponse>(
    `/playdates?page=${page}`
  );
  return response.data;
};

export const getSinglePlaydate = async (id: string): Promise<Playdate> => {
  const response = await axiosInstance.get(`/playdates/${id}`);
  return response.data as Playdate;
};

export const createPlaydate = async (data: {
  title: string;
  description: string;
  date: string;
  location: string;
}): Promise<Playdate> => {
  const response = await axiosInstance.post<Playdate>("/playdates", data);
  return response.data;
};

export const joinPlaydate = async (id: string, dogIds: string[]) => {
  const response = await axiosInstance.post(`/playdates/${id}/participants`, {
    dogIds,
  });
  return response.data;
};

export const leavePlaydate = async (id: string) => {
  const response = await axiosInstance.delete(`/playdates/${id}/participants`);
  return response.data;
};

export const updatePlaydate = async (
  playdateId: string,
  playdateData: Partial<Playdate>
): Promise<Playdate> => {
  const response = await axiosInstance.put<Playdate>(
    `/playdates/${playdateId}`,
    playdateData
  );
  return response.data;
};

export const deletePlaydate = async (
  playdateId: string
): Promise<{ message: string }> => {
  const response = await axiosInstance.delete<{ message: string }>(
    `/playdates/${playdateId}`
  );
  return response.data;
};
