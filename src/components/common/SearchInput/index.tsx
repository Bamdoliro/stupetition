import { InputPropsType } from 'type/common/input.type';
import SearchSvg from 'assets/search.svg';
import * as S from './style';

const SearchInput = ({
  desc,
  placeholder,
  type,
  name,
  onChange,
  onFocus,
}: InputPropsType) => {
  return (
    <div>
      <S.Desc>{desc}</S.Desc>
      <S.Wrap>
        <S.Img src={SearchSvg} />
        <S.Input
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
        />
      </S.Wrap>
    </div>
  );
};

export default SearchInput;
