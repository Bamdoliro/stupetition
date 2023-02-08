import { InputPropsType } from 'type/common/input.type';
import SearchSvg from 'assets/search.svg';
import * as S from './style';

const SearchInput = ({
  desc,
  placeholder,
  type,
  name,
  value,
  width,
  onChange,
  onFocus,
}: InputPropsType) => {
  return (
    <div>
      {desc ? <S.Desc>{desc}</S.Desc> : ''}
      <S.Wrap style={{ width }}>
        <S.Img src={SearchSvg} />
        <S.Input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
      </S.Wrap>
    </div>
  );
};

export default SearchInput;
