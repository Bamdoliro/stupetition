export interface CreatePetitionType {
  title: string;
  content: string;
}

export interface GetPetitionType {
  createdAt: string;
  id: number;
  numberOfAgreers: number;
  title: string;
}

export type StatusType = 'PETITION' | 'EXPIRED' | 'WAITING' | 'ANSWERED';

export interface CommentType {
  id: number;
  comment: string;
  createdAt: string;
}

export interface GetPetitionDetailType {
  comments: CommentType[];
  content: string;
  id: number;
  numberOfAgreers: number;
  status: StatusType;
  answer: string | null;
  title: string;
  userEmail: string;
  createdAt: string;
  approved: boolean;
}

export interface PostPetitionType {
  comment?: string;
  petitionId: number;
}
