import Logo from 'assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMutation } from 'react-query';
import { userData } from 'atom/user';
import { logoutUser } from 'api/auth';
import { ACCESS_KEY, REFRESH_KEY } from 'lib/config/token.config';
import { AUTHORITY, SCHOOL_NAME } from 'lib/config/user.config';
import SearchInput from '../SearchInput';

import * as S from './style';

const Header = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userData);
  const logoutMutate = useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
      alert('로그아웃 성공 !!');
      window.location.reload();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logout = () => {
    logoutMutate.mutate();
  };
  return (
    <S.Container>
      <S.Wrap>
        <S.LogoWrap>
          <S.Img src={Logo} />
          <S.Logo onClick={() => window.location.reload()}>학생청원</S.Logo>
        </S.LogoWrap>
        <S.NavWrap>
          <SearchInput
            height="40px"
            width="240px"
            placeholder="청원 검색"
            type="text"
            name="stupetitionSearch"
          />
          {user?.authority ? (
            <S.Logout onClick={logout}>로그아웃</S.Logout>
          ) : (
            <S.Login onClick={() => navigate('/login')}>로그인</S.Login>
          )}
        </S.NavWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Header;
