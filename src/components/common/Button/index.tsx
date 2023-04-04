import { ButtonHTMLAttributes } from 'react';
import { ButtonOptionType } from 'types/common/button.type';
import * as S from './style';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  option: ButtonOptionType;
}

const Button = ({
  onClick,
  width = '88px',
  option,
  value,
}: ButtonPropsType) => {
  return (
    <S.Button style={{ width }} option={option} onClick={onClick}>
      <S.ButtonText>{value}</S.ButtonText>
    </S.Button>
  );
};

export default Button;
