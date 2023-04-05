import Button from 'components/common/Button';
import Ment from 'components/common/Ment';
import { GoogleAuthLink } from 'features/auth/googleAuth.feature';
import GoogleImg from 'assets/google.svg';
import { useState } from 'react';
import * as S from './style';
import Council from './Council';

const Login = () => {
  const { google } = GoogleAuthLink();
  const [isOpenLoginCouncil, setIsOpenLoginCouncil] = useState(true);

  return (
    <S.LoginLayout>
      <S.LoginWrap isOpenLoginCouncil={isOpenLoginCouncil}>
        <Ment posistion="flex-start" />
        <S.LoginBox isOpenLoginCouncil={isOpenLoginCouncil}>
          <div>
            <S.Title>로그인</S.Title>
            <S.TextBox>
              {isOpenLoginCouncil ? (
                <>
                  <S.SubTitle>학생회인가요?</S.SubTitle>
                  <S.Council onClick={() => setIsOpenLoginCouncil(false)}>
                    학생회 로그인하러 가기
                  </S.Council>
                </>
              ) : (
                <>
                  <S.SubTitle>학생인가요?</S.SubTitle>
                  <S.Council onClick={() => setIsOpenLoginCouncil(true)}>
                    로그인하러 가기
                  </S.Council>
                </>
              )}
            </S.TextBox>
          </div>
          {isOpenLoginCouncil ? (
            <Button
              imgSrc={GoogleImg}
              onClick={google}
              option="UNFILLED"
              width="100%"
              value="학교 계정으로 로그인"
            />
          ) : (
            <Council />
          )}
        </S.LoginBox>
      </S.LoginWrap>
    </S.LoginLayout>
  );
};

export default Login;
