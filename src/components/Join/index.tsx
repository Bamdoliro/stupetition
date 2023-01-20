import React, { useState } from 'react';
import axios from 'axios';
import config from 'config/config.json';
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

  const onSubmit = () => {
    try {
      const response = axios.post(`${config.BASE_URL}/user/join`, userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.SignUp onSubmit={onSubmit}>
      <S.Input
        onChange={onChange}
        name="email"
        placeholder="아이디를 입력하세요"
      />
      <S.Input
        onChange={onChange}
        name="password"
        placeholder="비밀번호를 입력하세요"
      />
      <S.Input
        onChange={onChange}
        name="schoolId"
        placeholder="학교 ID를 입력하세요"
      />
      <S.Button>회원가입</S.Button>
    </S.SignUp>
  );
};

export default Join;
