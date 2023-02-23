export type StatusType = 'PETITION' | 'EXPIRED' | 'WAITING' | 'ANSWERED';

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

export interface CommentType {
  id: number;
  comment: string;
  createdAt: string;
  writer: Writer;
}

export interface PostPetitionType {
  comment: string;
  petitionId?: number;
}

export interface Writer {
  authority: string;
  email: string;
  schoolName: string;
  status: string;
  userId: number;
}
