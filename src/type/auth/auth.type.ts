import { Dispatch, SetStateAction } from 'react';

export interface JoinType {
  email: string;
  password: string;
  rePassword: string;
  schoolId: number;
  schoolName: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface JoinContentsPropsType {
  setSearchSchoolOpen: Dispatch<SetStateAction<boolean>>;
  setJoinData: Dispatch<SetStateAction<JoinType>>;
  joinData: JoinType;
}
