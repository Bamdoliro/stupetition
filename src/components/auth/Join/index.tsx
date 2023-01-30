import React, { useState } from 'react';
import { JoinType } from 'type/auth/auth.type';
import { useMutation } from 'react-query';
import { joinUser } from 'api/auth';
import * as S from './style';

const Join = () => {
  const [userData, setUserData] = useState<JoinType>({
    email: '',
    password: '',
    schoolId: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const { mutate } = useMutation(joinUser, {
    onSuccess: () => {
      alert('회원가입 성공 !!');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const submit = () => {
    mutate(userData);
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
      <S.Button onClick={submit}>회원가입</S.Button>
    </S.SignUp>
  );
};

export default Join;
