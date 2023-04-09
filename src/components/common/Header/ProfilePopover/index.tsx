import { LogoutFeature } from 'features/LogoutFeature';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import * as S from './style';

export interface PropsType {
  isOpen: boolean;
  setProfilePopoverIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ProfilePopover = ({ isOpen, setProfilePopoverIsOpen }: PropsType) => {
  const navigate = useNavigate();
  const close = () => setProfilePopoverIsOpen(false);

  const { useLogoutMutation } = LogoutFeature();
  const logoutMutate = useLogoutMutation();

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
      <S.Button
        onClick={() => {
          window.location.href = 'https://www.instagram.com/bamdoliro/';
        }}
      >
        <S.ButtonText>문의하기</S.ButtonText>
      </S.Button>
      <S.Line />
      <S.Button onClick={() => logoutMutate.mutate()}>
        <S.ButtonText>로그아웃</S.ButtonText>
      </S.Button>
    </S.ProfilePopover>
  );
};

export default ProfilePopover;
