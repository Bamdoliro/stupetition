import { customAxios } from 'lib/axios/customAxios';
import { useState } from 'react';
import { LoginType } from 'type/auth/auth.type';
import { authorization } from 'lib/token/authorization';
import Input from 'components/common/Input';
import {
  setAccessToken,
  setRefreshToken,
  deleteAccessToken,
  deleteRefreshToken,
} from 'lib/token/token';
import { useMutation } from 'react-query';
import { logoutUser, loginUser } from 'api/auth';
import * as S from './style';

const Login = () => {
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
      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshtoken);
      alert('로그인 성공 !!');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logoutMutate = useMutation(logoutUser, {
    onSuccess: () => {
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
      <S.LoginWrap>
        <S.LoginBox>
          <S.Title>로그인</S.Title>
          <S.SubTitle>
            신규 사용자이신가요? <S.Join>계정만들기</S.Join>
          </S.SubTitle>
          <S.InputWrap>
            <Input
              placeholder="아이디를 입력해주세요"
              type="email"
              name="email"
              onChange={onChange}
            />
          </S.InputWrap>
        </S.LoginBox>
      </S.LoginWrap>
      {/*
      <S.Input
        placeholder="비밀번호를 입력하세요."
        name="password"
        type="password"
        onChange={onChange}
      />
      <S.Button onClick={login}>로그인</S.Button>
      <S.Button onClick={logout}>로그아웃</S.Button> */}
    </S.Container>
  );
};

export default Login;
