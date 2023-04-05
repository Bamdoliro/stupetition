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
}

export interface Writer {
  authority: string;
  username: string;
  schoolName: string;
  status: string;
  userId: number;
  hasPermission: boolean;
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
