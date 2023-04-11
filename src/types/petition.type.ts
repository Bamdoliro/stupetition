export type StatusType =
  | 'PETITION'
  | 'EXPIRED'
  | 'WAITING'
  | 'ANSWERED'
  | 'APPROVED'
  | 'WROTE';

export interface WritePetitionType {
  title: string;
  content: string;
}

export interface CommentType {
  id: number;
  comment: string;
  createdAt: string;
  hasPermission: boolean;
  writer: Writer;
}

export interface AnswerType {
  id: number;
  comment: string;
  createdAt: string;
  hasPermission: boolean;
}

export interface Writer {
  authority: string;
  email: string;
  schoolName: string;
  status: string;
  userId: number;
  name: string;
}

export interface PetitionDetailType {
  comments: CommentType[];
  content: string;
  id: number;
  numberOfApprover: number;
  percentageOfApprover: number;
  status: StatusType;
  answer: AnswerType[];
  title: string;
  createdAt: string;
  approved: boolean;
  writer: Writer;
  hasPermission: boolean;
}
