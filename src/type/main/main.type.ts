import { Dispatch, SetStateAction } from 'react';
import { StatusType } from 'type/board/board.type';

export interface PetitionListPropsType {
  createdAt: string;
  title: string;
}

export interface RadioPropsType {
  status: string;
  setStatus: Dispatch<SetStateAction<StatusType>>;
}

export interface ProgressbarPropsType {
  numberOfAgreers: number;
}
