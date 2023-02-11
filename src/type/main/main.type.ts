import { Dispatch, SetStateAction } from 'react';
import { StatusType } from 'type/board/board.type';

export interface PetitionListPropsType {
  createdAt: string;
  title: string;
  numberOfAgreers: number;
  id: number;
  status: 'PETITION' | 'EXPIRED' | 'WAITING' | 'ANSWERED';
}

export interface RadioPropsType {
  status: string;
  setStatus: Dispatch<SetStateAction<StatusType>>;
}

export interface ProgressbarPropsType {
  numberOfAgreers: number;
  width: string;
  height: string;
  option: 'LIST' | 'DETAIL';
}
