import Logo from 'assets/logo.svg';
import Profile from 'assets/loginProfile.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMutation } from 'react-query';
import { userData } from 'atom/user';
import { logoutUser } from 'api/auth';
import SearchInput from '../SearchInput';

import * as S from './style';

const Header = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userData);
  const logoutMutate = useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
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
          <S.Logo src={Logo} />
          <S.LogoText onClick={() => navigate('/')}>학생청원</S.LogoText>
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
            <S.Profile src={Profile} onClick={logout} />
          ) : (
            <S.Login>
              <S.LoginText onClick={() => navigate('/login')}>
                로그인
              </S.LoginText>
            </S.Login>
          )}
        </S.NavWrap>
      </S.Wrap>
    </S.Container>
  );
};

export default Header;
