import { ButtonHTMLAttributes } from 'react';
import { ButtonOptionType } from 'types/common/button.type';
import * as S from './style';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  imgSrc?: string;
  option: ButtonOptionType;
}

const Button = ({
  imgSrc,
  onClick,
  width = '88px',
  option,
  value,
}: ButtonPropsType) => {
  return (
    <S.Button style={{ width }} option={option} onClick={onClick}>
      {imgSrc && <S.Img src={imgSrc} />}
      {value}
    </S.Button>
  );
};

export default Button;
