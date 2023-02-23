import { InputPropsType } from 'types/common/input.type';
import * as S from './style';

const Input = ({
  desc,
  placeholder,
  type,
  name,
  value,
  onChange,
}: InputPropsType) => {
  return (
    <div>
      {desc ? <S.Desc>{desc}</S.Desc> : ''}
      <S.Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="false"
      />
    </div>
  );
};

export default Input;
