import axiosInstance from "../utils/axiosInstance";
import { Comment } from "../types/Comment";

// Get comments by post
export const getCommentsByPost = async (postId: string): Promise<Comment[]> => {
  const response = await axiosInstance.get(`/posts/${postId}/comments`);
  return response.data as Comment[];
};

// Create comment
export const createComment = async (data: {
  text: string;
  postId: string;
}): Promise<Comment> => {
  const response = await axiosInstance.post(`/posts/${data.postId}/comments`, {
    content: data.text,
  });
  return response.data as Comment;
};

// Delete comment
export const deleteComment = async (postId: string, commentId: string) => {
  const response = await axiosInstance.delete(
    `/posts/${postId}/comments/${commentId}`
  );
  return response.data;
};
