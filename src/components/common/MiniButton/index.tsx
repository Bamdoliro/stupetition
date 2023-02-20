import { openStdin } from 'process';
import { ButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const MiniButton = ({
  value,
  onClick,
  padding,
  width,
  option,
}: ButtonPropsType) => {
  let element: React.ReactNode;
  if (option === 'FILLED') {
    element = (
      <S.FilledButton style={{ padding, width }} onClick={onClick}>
        <S.FilledButtonText>{value}</S.FilledButtonText>
      </S.FilledButton>
    );
  } else if (option === 'UNFILLED') {
    element = (
      <S.UnfilledButton style={{ padding, width }} onClick={onClick}>
        <S.UnfilledButtonText>{value}</S.UnfilledButtonText>
      </S.UnfilledButton>
    );
  } else {
    element = (
      <S.ScarceFilledButton style={{ padding, width }} onClick={onClick}>
        <S.ScarceFilledButtonText>{value}</S.ScarceFilledButtonText>
      </S.ScarceFilledButton>
    );
  }
  return element;
};

export default MiniButton;
