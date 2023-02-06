import { InputPropsType } from 'type/common/input.type';
import * as S from './style';

const Input = ({ desc, placeholder, type, name, onChange }: InputPropsType) => {
  return (
    <div>
      {desc === undefined ? '' : <S.Desc>{desc}</S.Desc>}
      <S.Input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
