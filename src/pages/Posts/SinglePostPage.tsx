import { useParams } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { useComments } from "../../hooks/useComments";
import CommentsList from "../../components/CommentsList";
import { useState, useEffect } from "react";

export default function SinglePostPage() {
  const { id } = useParams<{ id: string }>();
  const {
    singlePost,
    fetchSinglePost,
    handleLikePost,
    handleUnlikePost,
    handleDeletePost,
  } = usePosts();
  const { comments, fetchComments, handleAddComment, handleDeleteComment } =
    useComments(id || "");
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (id) {
      fetchSinglePost(id);
      fetchComments();
    }
  }, [id, fetchSinglePost, fetchComments]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{singlePost.title}</h2>
      <p>{singlePost.content}</p>
      {singlePost.image && (
        <img src={singlePost.image} alt="Post" className="mt-2" />
      )}
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => handleLikePost(singlePost._id, singlePost.owner)}
          className="text-blue-500"
        >
          Like ({singlePost.likes.length})
        </button>
        <button
          onClick={() => handleUnlikePost(singlePost._id, singlePost.owner)}
          className="text-gray-500"
        >
          Unlike
        </button>
        <button
          onClick={() => handleDeletePost(singlePost._id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
      <div className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add comment..."
          className="border p-2 w-full"
        />
        <button
          onClick={() => {
            handleAddComment(newComment);
            setNewComment("");
          }}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Add Comment
        </button>
      </div>
      <CommentsList comments={comments} onDelete={handleDeleteComment} />
    </div>
  );
}
