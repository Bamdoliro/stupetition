import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { DeleteUserFeature } from 'features/user/deleteUser.feature';
import { useState } from 'react';
import * as S from './style';

const DeleteUser = () => {
  const [password, setPassword] = useState<string>('');
  const { deleteUserSubmit } = DeleteUserFeature(password);

  return (
    <S.DeleteUserLayout>
      <S.Wrap>
        <S.DeleteUserBox>
          <S.DeleteUserContent>
            <S.DeleteUserWrap>
              <S.Title>계정 탈퇴</S.Title>
              <S.InputWrap>
                <Input
                  desc="현재 비밀번호를 입력하세요"
                  placeholder="현재 비밀번호를 입력해주세요"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </S.InputWrap>
              <Button
                onClick={deleteUserSubmit}
                option="FILLED"
                padding="12px 22px"
                width="174px"
                value="계정 탈퇴"
              />
            </S.DeleteUserWrap>
          </S.DeleteUserContent>
        </S.DeleteUserBox>
      </S.Wrap>
    </S.DeleteUserLayout>
  );
};

export default DeleteUser;
