import { atom } from 'recoil';

export const confirmState = atom<boolean>({
  key: 'cofirm',
  default: false,
});
