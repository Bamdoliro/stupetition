import customAxios from 'lib/axios/customAxios';
import { useState } from 'react';
import { LoginType } from 'type/auth/login.type';
import { setAccessToken, setRefreshToken } from 'lib/token/token';
import * as S from './style';

const Login = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    email: '',
    password: '',
  });

  const onClick = async () => {
    const response = await customAxios.post('/user/login', loginData);
    if (response.status === 200) {
      alert('로그인 성공 !!');
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
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
      <S.Button onClick={onClick}>로그인</S.Button>
    </S.Login>
  );
};

export default Login;
