import { ButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const MiniButton = ({
  value,
  onClick,
  padding,
  width,
  option,
}: ButtonPropsType) => {
  if (option === 'FILLED') {
    return (
      <S.FilledButton style={{ padding, width }} onClick={onClick}>
        <S.FilledButtonText>{value}</S.FilledButtonText>
      </S.FilledButton>
    );
  }
  if (option === 'UNFILLED') {
    return (
      <S.UnfilledButton style={{ padding, width }} onClick={onClick}>
        <S.UnfilledButtonText>{value}</S.UnfilledButtonText>
      </S.UnfilledButton>
    );
  }
  return (
    <S.ScarceFilledButton style={{ padding, width }} onClick={onClick}>
      <S.ScarceFilledButtonText>{value}</S.ScarceFilledButtonText>
    </S.ScarceFilledButton>
  );
};

export default MiniButton;
