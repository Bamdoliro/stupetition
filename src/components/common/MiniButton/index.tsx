import { ButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const MiniButton = ({
  value,
  onClick,
  padding,
  width,
  option,
}: ButtonPropsType) => {
  switch (option) {
    case 'FILLED':
      return (
        <S.FilledButton style={{ padding, width }} onClick={onClick}>
          <S.FilledButtonText>{value}</S.FilledButtonText>
        </S.FilledButton>
      );
    case 'UNFILLED':
      return (
        <S.UnfilledButton style={{ padding, width }} onClick={onClick}>
          <S.UnfilledButtonText>{value}</S.UnfilledButtonText>
        </S.UnfilledButton>
      );
    case 'SCARCE_FILLED':
      return (
        <S.ScarceFilledButton style={{ padding, width }} onClick={onClick}>
          <S.ScarceFilledButtonText>{value}</S.ScarceFilledButtonText>
        </S.ScarceFilledButton>
      );
    default:
      return (
        <S.FilledButton style={{ padding, width }} onClick={onClick}>
          <S.FilledButtonText>{value}</S.FilledButtonText>
        </S.FilledButton>
      );
  }
};

export default MiniButton;
