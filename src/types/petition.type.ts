export type StatusType =
  | 'PETITION'
  | 'EXPIRED'
  | 'WAITING'
  | 'ANSWERED'
  | 'APPROVED'
  | 'WROTE';

export type CommentOptionType = 'STUDENT' | 'STUDENT_COUNCIL';

export interface WritePetitionType {
  title: string;
  content: string;
}

export interface CommentType {
  option: CommentOptionType;
  id: number;
  comment: string;
  createdAt: string;
  hasPermission: boolean;
  writer: Writer;
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
  percentageOfApprover: number;
  status: StatusType;
  answer: CommentType[];
  title: string;
  createdAt: string;
  approved: boolean;
  writer: Writer;
  hasPermission: boolean;
}
