import { ButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const Button = ({
  onClick,
  padding,
  width,
  option,
  value,
}: ButtonPropsType) => {
  return option === 'FILLED' ? (
    <S.FilledButton style={{ padding, width }} onClick={onClick}>
      <S.FilledButtonText>{value}</S.FilledButtonText>
    </S.FilledButton>
  ) : (
    <S.UnfilledButton style={{ padding, width }} onClick={onClick}>
      <S.UnfilledButtonText>{value}</S.UnfilledButtonText>
    </S.UnfilledButton>
  );
};

export default Button;
