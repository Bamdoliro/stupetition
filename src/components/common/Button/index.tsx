import { ButtonPropsType } from 'type/common/button.type';
import * as S from './style';

const Button = ({ value, onClick }: ButtonPropsType) => {
  return <S.Button onClick={onClick}>{value}</S.Button>;
};

export default Button;
