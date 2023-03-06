import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { UpdatePasswordFeature } from 'features/user/updatePassword.feature';
import { ChangeEvent, useState } from 'react';
import { UpdatePasswordType } from 'types/user.type';
import * as S from './style';

const UpdatePassword = () => {
  const [updatePasswordData, setUpdatePasswordData] =
    useState<UpdatePasswordType>({
      currentPassword: '',
      password: '',
      rePassword: '',
    });

  const { submit } = UpdatePasswordFeature(updatePasswordData);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatePasswordData({ ...updatePasswordData, [name]: value });
  };

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
                  name="currentPassword"
                  value={updatePasswordData.currentPassword}
                  onChange={onChange}
                />
                <Input
                  desc="새 비밀번호"
                  placeholder="새 비밀번호를 입력하세요"
                  type="password"
                  name="password"
                  value={updatePasswordData.password}
                  onChange={onChange}
                />
                <Input
                  desc="비밀번호 확인"
                  placeholder="새 비밀번호를 다시 입력하세요"
                  type="password"
                  name="rePassword"
                  value={updatePasswordData.rePassword}
                  onChange={onChange}
                />
              </S.InputWrap>
              <Button
                onClick={submit}
                option="FILLED"
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
