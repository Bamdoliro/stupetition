import { useLogoutMutation } from 'features/LogoutFeature';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import * as S from './style';

interface PropsType {
  isOpen: boolean;
  setProfilePopoverIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ProfilePopover = ({ isOpen, setProfilePopoverIsOpen }: PropsType) => {
  const navigate = useNavigate();
  const close = () => setProfilePopoverIsOpen(false);

  const logoutMutate = useLogoutMutation();

  return (
    <S.ProfilePopover display={isOpen ? 'flex' : 'none'}>
      <S.Button
        onClick={() => {
          navigate('/petition/my');
          close();
        }}
      >
        내 청원
      </S.Button>
      <S.Button
        onClick={() => {
          window.open('https://www.instagram.com/bamdoliro/', '_blank');
          close();
        }}
      >
        문의하기
      </S.Button>
      <S.Line />
      <S.Button onClick={() => logoutMutate.mutate()}>로그아웃</S.Button>
    </S.ProfilePopover>
  );
};

export default ProfilePopover;
