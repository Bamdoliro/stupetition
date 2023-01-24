import { customAxios } from 'lib/axios/customAxios';
import { useState } from 'react';
import { LoginType } from 'type/auth/login.type';
import { authorization } from 'lib/token/authorization';
import {
  setAccessToken,
  setRefreshToken,
  deleteAccessToken,
  deleteRefreshToken,
} from 'lib/token/token';
import * as S from './style';

const Login = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    email: '',
    password: '',
  });

  const logIn = async () => {
    const response = await customAxios.post('/auth', loginData);
    if (response.status === 200) {
      alert('로그인 성공 !!');
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
    }
  };

  const logOut = async () => {
    const response = customAxios.delete('/auth', await authorization());
    deleteAccessToken();
    deleteRefreshToken();
    console.log(response);
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
      <S.Button onClick={logIn}>로그인</S.Button>
      <S.Button onClick={logOut}>로그아웃</S.Button>
    </S.Login>
  );
};

export default Login;
