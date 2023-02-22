import { useMutation } from 'react-query';
import { logoutUser } from 'api/auth';
import { ProfilePopoverPropsType } from 'types/common/header.type';
import * as S from './style';

const ProfilePopover = ({ isOpen, close }: ProfilePopoverPropsType) => {
  const logoutMutate = useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
      window.location.reload();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logout = () => {
    logoutMutate.mutate();
  };

  return (
    <S.Container style={{ display: `${isOpen ? '' : 'none'}` }}>
      <S.Button>
        <S.ButtonText>동의한 청원</S.ButtonText>
      </S.Button>
      <S.Button>
        <S.ButtonText>내가 쓴 청원</S.ButtonText>
      </S.Button>
      <S.Line />
      <S.Button onClick={logout}>
        <S.ButtonText>로그아웃</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default ProfilePopover;
