import { LogoutFeature } from 'features/user/logout.feature';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { useUser } from 'hooks/useUser';
import * as S from './style';

export interface ProfilePopoverPropsType {
  isOpen: boolean;
  setProfilePopoverIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ProfilePopover = ({
  isOpen,
  setProfilePopoverIsOpen,
}: ProfilePopoverPropsType) => {
  const { user } = useUser();
  const close = () => setProfilePopoverIsOpen(false);
  const navigate = useNavigate();
  const { logout } = LogoutFeature();

  return (
    <S.ProfilePopover
      style={{
        height: user.authority === 'ROLE_STUDENT_COUNCIL' ? '224px' : '178px',
      }}
      display={isOpen ? 'flex' : 'none'}
    >
      <S.Button
        onClick={() => {
          navigate('/petition/my');
          close();
        }}
      >
        <S.ButtonText>내 청원</S.ButtonText>
      </S.Button>
      {user.authority === 'ROLE_STUDENT_COUNCIL' && (
        <S.Button
          onClick={() => {
            navigate('/student/generate');
            close();
          }}
        >
          <S.ButtonText>학생 아이디 생성</S.ButtonText>
        </S.Button>
      )}
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
