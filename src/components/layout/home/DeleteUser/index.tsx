import Button from 'components/common/Button';
import Dialog from 'components/common/Dialog';
import Input from 'components/common/Input';
import { DeleteUserFeature } from 'features/user/deleteUser.feature';
import { useDialog } from 'hooks/useDialog';
import { useState } from 'react';
import * as S from './style';

const DeleteUser = () => {
  const [password, setPassword] = useState<string>('');
  const { closeDialog, openDialog } = useDialog();
  const { deleteUserSubmit } = DeleteUserFeature(password);

  return (
    <>
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
                  onClick={openDialog}
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
      <Dialog
        option="CONFIRM"
        title="계정 탈퇴"
        content="정말 계정을 탈퇴하시겠습니까?"
        canceltext="취소"
        checktext="탈퇴"
        cancel={closeDialog}
        check={deleteUserSubmit}
      />
    </>
  );
};

export default DeleteUser;
