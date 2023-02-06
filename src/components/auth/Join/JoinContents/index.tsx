import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JoinType } from 'type/auth/auth.type';
import { useMutation } from 'react-query';
import { joinUser } from 'api/auth';
import { useRecoilState } from 'recoil';
import { joinData } from 'atom/join';
import Input from 'components/common/Input';
import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import * as S from './style';

const JoinContents = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState<JoinType>(joinData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const { mutate } = useMutation(joinUser, {
    onSuccess: () => {
      alert('회원가입 성공 !!');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const submit = () => {
    const { password, rePassword, schoolId } = userData;
    if (password === rePassword && schoolId !== 0) {
      mutate(userData);
    } else {
      alert('비밀번호가 맞지 않습니다');
    }
    setUserData({
      email: '',
      password: '',
      rePassword: '',
      schoolId: 0,
      schoolName: '',
    });
  };

  return (
    <>
      <S.Title>회원가입</S.Title>
      <div>
        <S.InputWrap>
          <Input
            desc="학교 이메일 주소"
            placeholder="학교 이메일 주소를 입력해주세요"
            type="email"
            name="email"
            value={userData.email}
            onChange={onChange}
          />
          <Input
            desc="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={userData.password}
            onChange={onChange}
          />
          <Input
            desc="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            name="rePassword"
            value={userData.rePassword}
            onChange={onChange}
          />
          <SearchInput
            desc="학교"
            placeholder="학교를 입력해주세요"
            type="text"
            name="schoolId"
            value={userData.schoolName}
            onFocus={() => navigate('/join/school')}
          />
        </S.InputWrap>
        <Button
          value="회원가입"
          onClick={submit}
          option="FILLED"
          width="174px"
        />
      </div>
    </>
  );
};

export default JoinContents;
