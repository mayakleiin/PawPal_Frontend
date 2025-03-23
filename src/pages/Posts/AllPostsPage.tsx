import { useEffect, useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import PostList from "../../components/PostList";

export default function AllPostsPage() {
  const {
    posts,
    fetchPosts,
    handleLikePost,
    handleUnlikePost,
    handleDeletePost,
    totalPages,
  } = usePosts();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage, fetchPosts]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      <PostList
        posts={posts}
        onLike={(postId) => handleLikePost(postId, "userId")}
        onUnlike={(postId) => handleUnlikePost(postId, "userId")}
        onDelete={handleDeletePost}
      />
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
