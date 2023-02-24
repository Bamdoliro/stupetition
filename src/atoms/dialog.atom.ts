import { atom } from 'recoil';

export const dialogState = atom<boolean>({
  key: 'dialogState',
  default: false,
});

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});
