import { LogoutFeature } from 'features/home/main/logout/logout.feature';
import { ProfilePopoverPropsType } from 'types/common/header.type';
import * as S from './style';

const ProfilePopover = ({ isOpen, close }: ProfilePopoverPropsType) => {
  const { logout } = LogoutFeature();
  return (
    <S.ProfilePopover style={{ display: `${isOpen ? '' : 'none'}` }}>
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
    </S.ProfilePopover>
  );
};

export default ProfilePopover;
