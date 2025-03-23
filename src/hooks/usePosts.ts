import { useState, useCallback } from "react";
import {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
} from "../services/PostService";
import { Post } from "../types/Post";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [singlePost, setSinglePost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = useCallback(async (page: number = 1) => {
    setLoading(true);
    try {
      const response = await getAllPosts(page);
      setPosts(response.posts);
      setTotalPages(response.totalPages);
    } catch {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchSinglePost = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const response = await getSinglePost(id);
      setSinglePost(response);
    } catch {
      setError("Failed to load post");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCreatePost = async (formData: FormData) => {
    try {
      await createPost(formData);
      fetchPosts();
    } catch {
      setError("Failed to create post");
    }
  };

  const handleUpdatePost = async (postId: string, formData: FormData) => {
    try {
      await updatePost(postId, formData);
      fetchPosts();
    } catch {
      setError("Failed to update post");
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      fetchPosts();
    } catch {
      setError("Failed to delete post");
    }
  };

  const handleLikePost = async (postId: string, userId: string) => {
    try {
      await likePost(postId, userId);
      fetchPosts();
    } catch {
      setError("Failed to like post");
    }
  };

  const handleUnlikePost = async (postId: string, userId: string) => {
    try {
      await unlikePost(postId, userId);
      fetchPosts();
    } catch {
      setError("Failed to unlike post");
    }
  };

  return {
    posts,
    singlePost,
    loading,
    error,
    totalPages,
    fetchPosts,
    fetchSinglePost,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost,
    handleLikePost,
    handleUnlikePost,
  };
}
