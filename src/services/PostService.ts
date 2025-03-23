import axiosInstance from "../utils/axiosInstance";
import { Post } from "../types/Post";

interface GetAllPostsResponse {
  posts: Post[];
  totalPages: number;
}

// Get paginated posts
export const getAllPosts = async (
  page: number = 1
): Promise<GetAllPostsResponse> => {
  const response = await axiosInstance.get(`/posts?page=${page}`);
  return response.data as GetAllPostsResponse;
};

// Get single post
export const getSinglePost = async (postId: string): Promise<Post> => {
  const response = await axiosInstance.get<Post>(`/posts/${postId}`);
  return response.data;
};

// Create new post
export const createPost = async (formData: FormData) => {
  const response = await axiosInstance.post("/posts", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update post
export const updatePost = async (postId: string, formData: FormData) => {
  const response = await axiosInstance.put(`/posts/${postId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete post
export const deletePost = async (postId: string) => {
  const response = await axiosInstance.delete(`/posts/${postId}`);
  return response.data;
};

// Like post
export const likePost = async (postId: string, userId: string) => {
  const response = await axiosInstance.post(
    `/posts/${postId}/like?userId=${userId}`
  );
  return response.data;
};

// Unlike post
export const unlikePost = async (postId: string, userId: string) => {
  const response = await axiosInstance.post(
    `/posts/${postId}/unlike?userId=${userId}`
  );
  return response.data;
};
