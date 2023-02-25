import { dialogState, modalState } from 'atoms/dialog.atom';
import { useRecoilState } from 'recoil';

export const useDialog = () => {
  const [dialog, setDialog] = useRecoilState(dialogState);
  const openDialog = () => {
    setDialog(true);
  };
  const closeDialog = () => {
    setDialog(false);
  };

  return { openDialog, closeDialog, dialog };
};

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
