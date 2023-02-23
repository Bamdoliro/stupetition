import { InputPropsType } from 'types/common/input.type';
import SearchSvg from 'assets/search.svg';
import * as S from './style';

const SearchInput = ({
  desc,
  placeholder,
  type,
  name,
  value,
  width,
  height,
  onChange,
  onFocus,
}: InputPropsType) => {
  return (
    <div>
      {desc && <S.Desc>{desc}</S.Desc>}
      <S.SearchInput style={{ width, height }}>
        <S.Img src={SearchSvg} />
        <S.Input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          autoComplete="false"
        />
      </S.SearchInput>
    </div>
  );
};

export default SearchInput;
