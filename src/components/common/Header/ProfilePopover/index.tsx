import { LogoutFeature } from 'features/home/logout.feature';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import * as S from './style';

export interface ProfilePopoverPropsType {
  isOpen: boolean;
  setProfilePopoverIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ProfilePopover = ({
  isOpen,
  setProfilePopoverIsOpen,
}: ProfilePopoverPropsType) => {
  const close = () => setProfilePopoverIsOpen(false);
  const navigate = useNavigate();
  const { logout } = LogoutFeature();
  return (
    <S.ProfilePopover display={isOpen ? 'flex' : 'none'}>
      <S.Button
        onClick={() => {
          navigate('/petition/my');
          close();
        }}
      >
        <S.ButtonText>내 청원</S.ButtonText>
      </S.Button>
      <S.Line />
      <S.Button
        onClick={() => {
          navigate('/update/password');
          close();
        }}
      >
        <S.ButtonText>비밀번호 변경</S.ButtonText>
      </S.Button>
      <S.Button onClick={logout}>
        <S.ButtonText>로그아웃</S.ButtonText>
      </S.Button>
    </S.ProfilePopover>
  );
};

export default ProfilePopover;
