import { useState } from 'react';
import { LoginType } from 'type/auth/auth.type';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import {
  setAccessToken,
  setRefreshToken,
  deleteAccessToken,
  deleteRefreshToken,
} from 'lib/storage/token';
import { useMutation } from 'react-query';
import { logoutUser, loginUser } from 'api/auth';
import { useNavigate } from 'react-router-dom';
import {
  deleteAuthority,
  deleteSchoolName,
  setAuthority,
  setSchoolName,
} from 'lib/storage/user';
import { useSetRecoilState } from 'recoil';
import { userData } from 'atom/user';
import * as S from './style';

const Login = () => {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userData);
  const [loginData, setLoginData] = useState<LoginType>({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginMutate = useMutation(loginUser, {
    onSuccess: (res) => {
      setAuthority(res.user.authority);
      setSchoolName(res.user.schoolName);
      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshtoken);
      setUserData({
        authority: res.user.authority,
        schoolName: res.user.schoolName,
      });

      alert('로그인 성공 !!');
      navigate('/main');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logoutMutate = useMutation(logoutUser, {
    onSuccess: () => {
      deleteAuthority();
      deleteSchoolName();
      deleteAccessToken();
      deleteRefreshToken();
      alert('로그아웃 성공 !!');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const login = () => {
    loginMutate.mutate(loginData);
  };

  const logout = () => {
    logoutMutate.mutate();
  };

  return (
    <S.Container>
      <S.Wrap>
        <S.LoginBox>
          <S.Title>로그인</S.Title>
          <S.SubTitle>
            신규 사용자이신가요?{' '}
            <S.Join onClick={() => navigate('/join')}>계정만들기</S.Join>
          </S.SubTitle>
          <S.InputWrap>
            <Input
              desc="학교 이메일 주소"
              placeholder="학교 이메일 주소를 입력해주세요"
              type="email"
              name="email"
              onChange={onChange}
            />
            <Input
              desc="비밀번호"
              placeholder="아이디를 입력해주세요"
              type="password"
              name="password"
              onChange={onChange}
            />
          </S.InputWrap>
          <Button
            value="로그인"
            onClick={login}
            option="FILLED"
            width="174px"
          />
        </S.LoginBox>
      </S.Wrap>
    </S.Container>
  );
};

export default Login;
