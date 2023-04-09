import { modalState } from 'atoms/modal';
import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

export const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const openModal = (m: ReactNode) => {
    setModal(m);
  };
  const closeModal = () => {
    setModal(null);
  };

  return { openModal, closeModal, modal };
};
