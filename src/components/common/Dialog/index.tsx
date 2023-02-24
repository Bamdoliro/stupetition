import { useDialog } from 'hooks/useDialog';
import { MouseEventHandler } from 'react';
import MiniButton from 'components/common/MiniButton';
import * as S from './style';

interface DialogPropsType {
  option: 'CONFIRM' | 'ALERT';
  title: string;
  content: string;
  canceltext: string;
  checktext: string;
  cancel: MouseEventHandler<HTMLButtonElement>;
  check: MouseEventHandler<HTMLButtonElement>;
}

const Dialog = ({
  option,
  title,
  content,
  canceltext,
  checktext,
  cancel,
  check,
}: DialogPropsType) => {
  const { dialog } = useDialog();
  return (
    <S.BlurBackground display={dialog ? 'flex' : 'none'}>
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
                value={canceltext}
                onClick={cancel}
              />
              <MiniButton option="FILLED" value={checktext} onClick={check} />
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
              <MiniButton option="FILLED" value="확인" onClick={check} />
            </S.AlertButtonBox>
          </S.AlertWrap>
        </S.Alert>
      )}
    </S.BlurBackground>
  );
};

export default Dialog;
