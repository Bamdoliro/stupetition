import React, { useState } from 'react';
import customAxios from 'lib/axios/customAxios';
import { AxiosError as Error } from 'axios';
import { CreateUserRequest } from 'type/user';
import * as S from './style';

const Join = () => {
  const [userData, setUserData] = useState<CreateUserRequest>({
    email: '',
    password: '',
    schoolId: -1,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onClick = async () => {
    const response = await customAxios.post('/user/join', userData);
    if (response.status === 200) {
      alert('회원가입 성공 !!');
      return;
    }
    alert(response);
  };

  return (
    <S.SignUp>
      <S.Input
        onChange={onChange}
        name="email"
        type="email"
        placeholder="아이디를 입력하세요"
      />
      <S.Input
        onChange={onChange}
        name="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <S.Input
        onChange={onChange}
        name="schoolId"
        placeholder="학교 ID를 입력하세요"
      />
      <S.Button onClick={onClick}>회원가입</S.Button>
    </S.SignUp>
  );
};

export default Join;
