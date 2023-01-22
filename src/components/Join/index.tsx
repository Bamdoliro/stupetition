import React, { useState } from 'react';
import customAxios from 'lib/axios/customAxios';
import { AxiosError } from 'axios';
import * as S from './style';

const Join = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    schoolId: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const response = await customAxios.post('/user/join', userData);
      if (response.data.status === 400) {
        alert(response.data.message);
        return;
      }
      alert('회원가입 성공 !!');
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.response?.data?.message);
      }
    }
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
      <S.Button onClick={onSubmit}>회원가입</S.Button>
    </S.SignUp>
  );
};

export default Join;
