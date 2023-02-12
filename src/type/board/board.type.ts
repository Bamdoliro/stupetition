export interface CreateBoardType {
  title: string;
  content: string;
}

export interface GetBoardType {
  createdAt: string;
  id: number;
  numberOfAgreers: number;
  title: string;
}

export type StatusType = 'PETITION' | 'EXPIRED' | 'WAITING' | 'ANSWERED';

export interface CommentType {
  comment: string;
  createdAt: string;
}

export interface GetBoardDetailType {
  agreerComments: CommentType[];
  content: string;
  id: number;
  numberOfAgreers: number;
  status: StatusType | undefined;
  studentCouncilComment: string;
  title: string;
  userEmail: string;
}
