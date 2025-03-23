export interface Participant {
  userId: string;
  dogIds: string[];
}

export interface Playdate {
  _id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  owner: string;
  participants: Participant[];
}

export interface GetAllPlaydatesResponse {
  items: Playdate[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}
