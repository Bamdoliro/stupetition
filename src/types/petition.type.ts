export type StatusType = 'PETITION' | 'EXPIRED' | 'WAITING' | 'ANSWERED';

export interface WritePetitionType {
  title: string;
  content: string;
}

export interface PetitionListType {
  createdAt: string;
  id: number;
  numberOfApprover: number;
  title: string;
}

type CommentOptionType = 'STUDENT' | 'STUDENT_COUNCIL';

export interface CommentType {
  option: CommentOptionType;
  id: number;
  comment: string;
  createdAt: string;
  writer?: Writer;
}

export interface Writer {
  authority: string;
  email: string;
  schoolName: string;
  status: string;
  userId: number;
}

export interface PetitionDetailType {
  comments: CommentType[];
  content: string;
  id: number;
  numberOfApprover: number;
  status: StatusType;
  answer: CommentType[];
  title: string;
  userEmail: string;
  createdAt: string;
  approved: boolean;
  writer: Writer;
}
