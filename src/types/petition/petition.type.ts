export interface WritePetitionType {
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
  writer: Writer;
}

export interface Writer {
  authority: string;
  email: string;
  schoolName: string;
  status: string;
  userId: number;
}

export interface GetPetitionDetailType {
  comments: CommentType[];
  content: string;
  id: number;
  numberOfApprover: number;
  status: StatusType;
  answer: string | null;
  title: string;
  userEmail: string;
  createdAt: string;
  approved: boolean;
  writer: Writer;
}

export interface PostPetitionType {
  comment: string;
  petitionId?: number;
}
