import { MiniButtonPropsType } from 'types/common/button.type';
import * as S from './style';

const MiniButton = ({ value, onClick, width, option }: MiniButtonPropsType) => {
  return (
    <S.MiniButton option={option} style={{ width }} onClick={onClick}>
      <S.MiniButtonText>{value}</S.MiniButtonText>
    </S.MiniButton>
  );
};

export default MiniButton;
