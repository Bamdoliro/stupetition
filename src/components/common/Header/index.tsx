import Logo from 'assets/logo.svg';
import SearchInput from '../SearchInput';
import * as S from './style';

const Header = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.LogoWrap>
          <S.Img src={Logo} />
          <S.Logo>학생청원</S.Logo>
        </S.LogoWrap>
        <S.NavWrap>
          <SearchInput
            height="40px"
            width="240px"
            placeholder="청원 검색"
            type="text"
            name="stupetitionSearch"
          />
          <S.Login>로그인</S.Login>
        </S.NavWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Header;
