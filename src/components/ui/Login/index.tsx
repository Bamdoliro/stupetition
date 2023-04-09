import Button from 'components/common/Button';
import Ment from 'components/common/Ment';
import { useGoogleLink } from 'features/GoogleLoginFeature';
import GoogleImg from 'assets/google.svg';
import { useState } from 'react';
import * as S from './style';
import Council from './Council';

const Login = () => {
  const [isOpenLoginCouncil, setIsOpenLoginCouncil] = useState(true);
  const { data } = useGoogleLink();

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
              onClick={() => window.location.replace(data)}
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
