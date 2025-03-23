import { useState, useCallback } from "react";
import {
  getCommentsByPost,
  createComment,
  deleteComment,
} from "../services/CommentService";
import { Comment } from "../types/Comment";

export function useComments(postId: string) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchComments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getCommentsByPost(postId);
      setComments(response);
    } catch {
      setError("Failed to load comments");
    } finally {
      setLoading(false);
    }
  }, [postId]);

  const handleAddComment = async (text: string) => {
    try {
      await createComment({ postId, text });
      fetchComments();
    } catch {
      setError("Failed to add comment");
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment(postId, commentId);
      fetchComments();
    } catch {
      setError("Failed to delete comment");
    }
  };

  return {
    comments,
    loading,
    error,
    fetchComments,
    handleAddComment,
    handleDeleteComment,
  };
}
