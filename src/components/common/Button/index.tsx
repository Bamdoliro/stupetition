import { ButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const Button = ({ onClick, width, option, value }: ButtonPropsType) => {
  switch (option) {
    case 'FILLED':
      return (
        <S.FilledButton style={{ width }} onClick={onClick}>
          <S.FilledButtonText>{value}</S.FilledButtonText>
        </S.FilledButton>
      );
    case 'UNFILLED':
      return (
        <S.UnfilledButton style={{ width }} onClick={onClick}>
          <S.UnfilledButtonText>{value}</S.UnfilledButtonText>
        </S.UnfilledButton>
      );
    default:
      return (
        <S.FilledButton style={{ width }} onClick={onClick}>
          <S.FilledButtonText>{value}</S.FilledButtonText>
        </S.FilledButton>
      );
  }
};

export default Button;
