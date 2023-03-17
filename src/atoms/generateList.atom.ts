import { atom } from 'recoil';
import { GenerateStudentsListType } from 'types/user.type';

export const generateListState = atom<GenerateStudentsListType[]>({
  key: 'generateListState',
  default: [],
});
