import { MouseEventHandler, ReactNode } from 'react';
import MiniButton from 'components/common/MiniButton';
import * as S from './style';

interface PropsType {
  title: string;
  content: ReactNode;
  closeText: string;
  confirmText: string;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  handleConfirm: MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({
  title,
  content,
  closeText,
  confirmText,
  handleClose,
  handleConfirm,
}: PropsType) => {
  return (
    <S.BlurBackground>
      <S.Confirm>
        <S.ConfirmWrap>
          <S.ConfirmTextBox>
            <S.ConfirmTitle>{title}</S.ConfirmTitle>
            <S.ConfirmContent>{content}</S.ConfirmContent>
          </S.ConfirmTextBox>
          <S.ConfirmButtonBox>
            <MiniButton
              option="UNFILLED"
              value={closeText}
              onClick={handleClose}
            />
            <MiniButton
              option="FILLED"
              value={confirmText}
              onClick={handleConfirm}
            />
          </S.ConfirmButtonBox>
        </S.ConfirmWrap>
      </S.Confirm>
    </S.BlurBackground>
  );
};

export default Modal;
