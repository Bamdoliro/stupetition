import { ButtonHTMLAttributes } from 'react';
import { MiniButtonOptionType } from 'types/common/button.type';
import * as S from './style';

interface MiniButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  option: MiniButtonOptionType;
}

const MiniButton = ({ value, onClick, width, option }: MiniButtonPropsType) => {
  return (
    <S.MiniButton option={option} style={{ width }} onClick={onClick}>
      {value}
    </S.MiniButton>
  );
};

export default MiniButton;
