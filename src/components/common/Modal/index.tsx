import { MouseEventHandler, ReactNode } from 'react';
import MiniButton from 'components/common/MiniButton';
import * as S from './style';

type ModalOptionType = 'CONFIRM' | 'ALERT';

interface PropsType {
  option: ModalOptionType;
  title: string;
  content: ReactNode;
  closeText: string;
  confirmText: string;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  handleConfirm: MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({
  option,
  title,
  content,
  closeText,
  confirmText,
  handleClose,
  handleConfirm,
}: PropsType) => {
  return (
    <S.BlurBackground>
      {option === 'CONFIRM' ? (
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
      ) : (
        <S.Alert>
          <S.AlertWrap>
            <S.AlertTextBox>
              <S.AlertTitle>{title}</S.AlertTitle>
              <S.AlertContent>{content}</S.AlertContent>
            </S.AlertTextBox>
            <S.AlertButtonBox>
              <MiniButton
                option="FILLED"
                value="확인"
                onClick={handleConfirm}
              />
            </S.AlertButtonBox>
          </S.AlertWrap>
        </S.Alert>
      )}
    </S.BlurBackground>
  );
};

export default Modal;
