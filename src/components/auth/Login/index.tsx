import { customAxios } from 'lib/axios/customAxios';
import { useState } from 'react';
import { LoginType } from 'type/auth/auth.type';
import { authorization } from 'lib/token/authorization';
import {
  setAccessToken,
  setRefreshToken,
  deleteAccessToken,
  deleteRefreshToken,
} from 'lib/token/token';
import { useMutation } from 'react-query';
import { postLogin } from 'api/auth';
import * as S from './style';

const Login = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    email: '',
    password: '',
  });

  const { mutate } = useMutation(postLogin, {
    onSuccess: (res) => {
      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshtoken);
      alert('로그인 성공 !!');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const login = () => {
    mutate(loginData);
  };

  const logout = async () => {
    const response = await customAxios.delete('/auth', authorization());
    if (response.status === 200) {
      deleteAccessToken();
      deleteRefreshToken();
      alert('로그아웃 성공 !!');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <S.Login>
      <S.Input
        placeholder="아이디를 입력하세요."
        name="email"
        type="email"
        onChange={onChange}
      />
      <S.Input
        placeholder="비밀번호를 입력하세요."
        name="password"
        type="password"
        onChange={onChange}
      />
      <S.Button onClick={login}>로그인</S.Button>
      <S.Button onClick={logout}>로그아웃</S.Button>
    </S.Login>
  );
};

export default Login;
