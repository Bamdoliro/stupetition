import { ButtonPropsType } from 'type/common/button.type';
import * as S from './style';

const Button = ({ value, onClick, width, option }: ButtonPropsType) => {
  return option === 'FILLED' ? (
    <S.FilledButton style={{ width }} onClick={onClick}>
      {value}
    </S.FilledButton>
  ) : (
    <S.UnfilledButton style={{ width }} onClick={onClick}>
      {value}
    </S.UnfilledButton>
  );
};

export default Button;
