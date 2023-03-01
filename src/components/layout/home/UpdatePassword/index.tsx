import Button from 'components/common/Button';
import Input from 'components/common/Input';
import * as S from './style';

const UpdatePassword = () => {
  return (
    <S.UpdatePasswordLayout>
      <S.Wrap>
        <S.UpdatePasswordBox>
          <S.UpdatePasswordContent>
            <S.UpdatePasswordWrap>
              <S.Title>비밀번호 변경</S.Title>
              <S.InputWrap>
                <Input
                  desc="이전 비밀번호"
                  placeholder="이전 비밀번호를 입력하세요"
                  type="password"
                  name="password"
                  // value={joinData.email}
                  // onChange={onChange}
                />
                <Input
                  desc="새 비밀번호"
                  placeholder="새 비밀번호를 입력하세요"
                  type="password"
                  name="password"
                  // value={joinData.email}
                  // onChange={onChange}
                />
                <Input
                  desc="비밀번호 확인"
                  placeholder="새 비밀번호를 입력하세요"
                  type="password"
                  name="password"
                  // value={joinData.email}
                  // onChange={onChange}
                />
              </S.InputWrap>
              <Button
                // onClick={join}
                option="FILLED"
                padding="12px 22px"
                width="174px"
                value="비밀번호 변경"
              />
            </S.UpdatePasswordWrap>
          </S.UpdatePasswordContent>
        </S.UpdatePasswordBox>
      </S.Wrap>
    </S.UpdatePasswordLayout>
  );
};

export default UpdatePassword;
