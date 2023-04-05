import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { ChangeEvent, useState } from 'react';
import { LoginType } from 'types/auth.type';
import { LoginFeature } from 'features/auth/login.feature';
import * as S from './style';

const Council = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: '',
    password: '',
  });

  const { login } = LoginFeature(loginData);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  return (
    <>
      <S.Council>
        <Input
          desc="아이디"
          placeholder="아이디를 입력해주세요"
          type="text"
          name="username"
          value={loginData.username}
          onChange={onChange}
        />
        <Input
          desc="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          value={loginData.password}
          onChange={onChange}
        />
      </S.Council>
      <Button onClick={login} option="FILLED" width="50%" value="로그인" />
    </>
  );
};

export default Council;
