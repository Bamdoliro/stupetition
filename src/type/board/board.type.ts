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
