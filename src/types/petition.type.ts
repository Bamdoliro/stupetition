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
  hasPermission?: boolean;
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
  hasPermission: boolean;
}
