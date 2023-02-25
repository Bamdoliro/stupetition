import { dialogState } from 'atoms/dialog.atom';
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
