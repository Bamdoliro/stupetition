import { modalState } from 'atoms/dialog.atom';
import { useRecoilState } from 'recoil';

export const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return { openModal, closeModal, modal };
};
