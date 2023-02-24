import { useConfirm } from 'hooks/useDialog';
import { MouseEventHandler } from 'react';
import MiniButton from '../../MiniButton';
import * as S from './style';

interface ConfirmPropsType {
  title: string;
  content: string;
  canceltext: string;
  checktext: string;
  cancel: MouseEventHandler<HTMLButtonElement>;
  check: MouseEventHandler<HTMLButtonElement>;
}

const Confirm = ({
  title,
  content,
  canceltext,
  checktext,
  cancel,
  check,
}: ConfirmPropsType) => {
  const { confirm } = useConfirm();
  return (
    <S.BlurBackground display={confirm ? 'flex' : 'none'}>
      <S.Confirm>
        <S.ConfirmWrap>
          <S.ConfirmTextBox>
            <S.ConfirmTitle>{title}</S.ConfirmTitle>
            <S.ConfirmContent>{content}</S.ConfirmContent>
          </S.ConfirmTextBox>
          <S.ConfirmButtonBox>
            <MiniButton option="UNFILLED" value={canceltext} onClick={cancel} />
            <MiniButton option="FILLED" value={checktext} onClick={check} />
          </S.ConfirmButtonBox>
        </S.ConfirmWrap>
      </S.Confirm>
    </S.BlurBackground>
  );
};

export default Confirm;
