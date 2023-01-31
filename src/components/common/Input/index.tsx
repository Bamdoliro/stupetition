import { InputPropsType } from 'type/common/input.type';
import * as S from './style';

const Input = ({ placeholder, type, name, onChange }: InputPropsType) => {
  return (
    <>
      <S.Desc>학교 이메일 주소</S.Desc>
      <S.Input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
