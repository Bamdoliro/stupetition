import React, { useState } from 'react';
import customAxios from 'lib/axios/customAxios';
import * as S from './style';

const Join = () => {
  const [joinData, setJoinData] = useState();
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
      console.log(userData);
      const response = await customAxios.post('/user/join', userData);
      if (response.data.status === 400) {
        alert(response.data.message);
        return;
      }
      setJoinData(response.data);
    } catch (err: any) {
      alert(err.response.data.message);
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
