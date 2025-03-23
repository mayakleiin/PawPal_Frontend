import { Comment } from "../types/Comment";

interface CommentsListProps {
  comments: Comment[];
  onDelete: (commentId: string) => void;
}

export default function CommentsList({
  comments,
  onDelete,
}: CommentsListProps) {
  return (
    <div className="mt-4">
      <h4 className="font-semibold">Comments</h4>
      {comments.map((comment) => (
        <div key={comment._id} className="border-b py-2 flex justify-between">
          <p>{comment.content}</p>
          <button
            onClick={() => onDelete(comment._id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
