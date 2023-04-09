import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { LoginFeature } from 'features/LoginFeature';
import * as S from './style';

const Council = () => {
  const { handleLoginData, useLoginMutation, loginData } = LoginFeature();
  const loginMutate = useLoginMutation();

  return (
    <>
      <S.Council>
        <Input
          desc="아이디"
          placeholder="아이디를 입력해주세요"
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleLoginData}
        />
        <Input
          desc="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleLoginData}
        />
      </S.Council>
      <Button
        onClick={() => loginMutate.mutate()}
        option="FILLED"
        width="50%"
        value="로그인"
      />
    </>
  );
};

export default Council;
