import { useState } from 'react';
import { LoginType } from 'types/auth/auth.type';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import { useMutation } from 'react-query';
import { loginUser } from 'apis/auth.api';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userData } from 'atoms/user';
import { AUTHORITY, SCHOOL_NAME } from 'constants/user.constant';
import { ACCESS_KEY, REFRESH_KEY } from 'constants/token.constant';
import { color } from 'styles/theme';
import * as T from 'styles/text';
import * as S from './style';

const Login = () => {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userData);
  const [loginData, setLoginData] = useState<LoginType>({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginMutate = useMutation(loginUser, {
    onSuccess: (res) => {
      localStorage.setItem(AUTHORITY, res.user.authority);
      localStorage.setItem(SCHOOL_NAME, res.user.schoolName);
      localStorage.setItem(ACCESS_KEY, res.accessToken);
      localStorage.setItem(REFRESH_KEY, res.refreshToken);
      setUserData({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        authority: res.user.authority,
        schoolName: res.user.schoolName,
      });

      alert('로그인 성공 !!');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const login = () => {
    loginMutate.mutate(loginData);
  };

  return (
    <S.LoginLayout>
      <S.Wrap>
        <S.LoginBox>
          <S.Title>로그인</S.Title>
          <S.SubTitle>
            신규 사용자이신가요?{' '}
            <S.Join onClick={() => navigate('/join')}>계정만들기</S.Join>
          </S.SubTitle>
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
              placeholder="아이디를 입력해주세요"
              type="password"
              name="password"
              onChange={onChange}
            />
          </S.InputWrap>
          <Button
            onClick={login}
            option="FILLED"
            padding="12px 24px"
            width="225px"
            value="로그인"
          />
        </S.LoginBox>
      </S.Wrap>
    </S.LoginLayout>
  );
};

export default Login;
