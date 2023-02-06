import { ButtonPropsType } from 'type/common/button.type';
import * as S from './style';

const Button = ({ value, onClick, width, option }: ButtonPropsType) => {
  return option === 'FILLED' ? (
    <S.FillButton style={{ width }} onClick={onClick}>
      {value}
    </S.FillButton>
  ) : (
    <S.UnfillButton style={{ width }} onClick={onClick}>
      {value}
    </S.UnfillButton>
  );
};

export default Button;
