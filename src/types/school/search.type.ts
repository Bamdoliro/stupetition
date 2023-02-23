import { ChangeEventHandler } from 'react';

export interface SchoolType {
  name: string;
  id: number;
  emailDomain?: string;
}

export interface SchoolListType {
  name: string;
  id: number;
  emailDomain?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
