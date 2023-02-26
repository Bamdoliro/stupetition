import { StatusType } from 'types/petition.type';

export type StatusNameType =
  | '진행중'
  | '대기중'
  | '완료'
  | '만료'
  | '동의한 청원'
  | '내가 쓴 청원';

interface TabDataType {
  id: number;
  option: StatusType;
  name: StatusNameType;
}

export const MainTabDatas: TabDataType[] = [
  {
    id: 0,
    option: 'PETITION',
    name: '진행중',
  },
  {
    id: 1,
    option: 'WAITING',
    name: '대기중',
  },
  {
    id: 2,
    option: 'ANSWERED',
    name: '완료',
  },
  {
    id: 3,
    option: 'EXPIRED',
    name: '만료',
  },
];

export const MyPetitionTabDatas: TabDataType[] = [
  {
    id: 0,
    option: 'APPROVED',
    name: '동의한 청원',
  },
  {
    id: 1,
    option: 'WAITING',
    name: '내가 쓴 청원',
  },
];
