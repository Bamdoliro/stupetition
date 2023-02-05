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

export type StatusType = string;
