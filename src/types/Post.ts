export interface Post {
  _id: string;
  title: string;
  content: string;
  image?: string;
  owner: string;
  likes: string[];
  comments: string[];
  createdAt: string;
  updatedAt: string;
}
