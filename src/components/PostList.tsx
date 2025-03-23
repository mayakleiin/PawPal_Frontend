import { Post } from "../types/Post";

interface PostListProps {
  posts: Post[];
  onLike: (postId: string) => void;
  onUnlike: (postId: string) => void;
  onDelete: (postId: string) => void;
}

export default function PostList({
  posts,
  onLike,
  onUnlike,
  onDelete,
}: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post._id} className="border p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="Post" className="mt-2" />}
          <div className="flex space-x-2 mt-2">
            <button onClick={() => onLike(post._id)} className="text-blue-500">
              Like ({post.likes.length})
            </button>
            <button
              onClick={() => onUnlike(post._id)}
              className="text-gray-500"
            >
              Unlike
            </button>
            <button onClick={() => onDelete(post._id)} className="text-red-500">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
