import { modalState } from 'atoms/modal.atom';
import { useRecoilValue } from 'recoil';

const GlobalModal = () => {
  const modal = useRecoilValue(modalState);

  const provide = () => {
    if (!modal) return null;
    return modal;
  };

  return <>{provide()}</>;
};

export default GlobalModal;
