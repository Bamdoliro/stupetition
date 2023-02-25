import { StatusType } from 'types/petition.type';

export type StatusNameType = '진행중' | '대기중' | '완료' | '만료';

interface TabDataType {
  id: number;
  status: StatusType;
  name: StatusNameType;
}

export const MainTabDatas: TabDataType[] = [
  {
    id: 0,
    status: 'PETITION',
    name: '진행중',
  },
  {
    id: 1,
    status: 'WAITING',
    name: '대기중',
  },
  {
    id: 2,
    status: 'ANSWERED',
    name: '완료',
  },
  {
    id: 3,
    status: 'EXPIRED',
    name: '만료',
  },
];
