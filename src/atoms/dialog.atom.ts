import { atom } from 'recoil';

export const dialogState = atom<boolean>({
  key: 'dialogState',
  default: false,
});
