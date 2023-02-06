import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JoinType } from 'type/auth/auth.type';
import { useMutation } from 'react-query';
import { joinUser } from 'api/auth';
import Input from 'components/common/Input';
import SearchInput from 'components/common/SearchInput';
import Button from 'components/common/Button';
import * as S from './style';

const JoinContents = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<JoinType>({
    email: '',
    password: '',
    rePassword: '',
    schoolId: 0,
  });

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
    const { password, rePassword } = userData;
    if (password === rePassword) {
      mutate(userData);
    } else {
      alert('비밀번호가 맞지 않습니다');
    }
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
            onChange={onChange}
          />
          <Input
            desc="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="password"
            onChange={onChange}
          />
          <Input
            desc="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            name="rePassword"
            onChange={onChange}
          />
          <SearchInput
            desc="학교"
            placeholder="학교를 입력해주세요"
            type="text"
            name="schoolId"
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
