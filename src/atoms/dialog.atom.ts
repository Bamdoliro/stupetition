import { ReactNode } from 'react';
import { atom } from 'recoil';

export const modalState = atom<ReactNode>({
  key: 'modalState',
  default: null,
});
