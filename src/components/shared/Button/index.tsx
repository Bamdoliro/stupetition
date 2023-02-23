import { ButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const Button = ({
  onClick,
  padding,
  width,
  option,
  element,
}: ButtonPropsType) => {
  return option === 'FILLED' ? (
    <S.FilledButton style={{ padding, width }} onClick={onClick}>
      {element}
    </S.FilledButton>
  ) : (
    <S.UnfilledButton style={{ padding, width }} onClick={onClick}>
      {element}
    </S.UnfilledButton>
  );
};

export default Button;
