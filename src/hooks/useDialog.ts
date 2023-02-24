import { confirmState } from 'atoms/dialog.atom';
import { useRecoilState } from 'recoil';

export const useConfirm = () => {
  const [confirm, setConfirm] = useRecoilState(confirmState);
  const openConfirm = () => {
    setConfirm(true);
  };
  const closeConfirm = () => {
    setConfirm(false);
  };

  return { openConfirm, closeConfirm, confirm };
};
