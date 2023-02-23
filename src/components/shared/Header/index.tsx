import Logo from 'assets/logo.svg';
import Profile from 'assets/loginProfile.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userData } from 'atoms/user';
import { useState } from 'react';
import MiniButton from '../MiniButton';
import SearchInput from '../SearchInput';
import ProfilePopover from './ProfilePopover';
import * as S from './style';

const Header = () => {
  const navigate = useNavigate();

  const user = useRecoilValue(userData);
  const [profilePopoverIsOpen, setProfilePopoverIsOpen] = useState(false);

  return (
    <S.Header>
      <S.Wrap>
        <S.LogoWrap>
          <S.Logo src={Logo} />
          <S.LogoText onClick={() => navigate('/')}>학생청원</S.LogoText>
        </S.LogoWrap>
        <S.NavWrap>
          <SearchInput
            height="40px"
            width="240px"
            placeholder="청원 검색"
            type="text"
            name="stupetitionSearch"
          />
          {user?.authority ? (
            <>
              <S.Profile
                src={Profile}
                onClick={() => setProfilePopoverIsOpen(!profilePopoverIsOpen)}
              />
              <ProfilePopover
                isOpen={profilePopoverIsOpen}
                close={() => setProfilePopoverIsOpen(false)}
              />
            </>
          ) : (
            <MiniButton
              value="로그인"
              option="UNFILLED"
              padding="10px 16px"
              onClick={() => navigate('/login')}
            />
          )}
        </S.NavWrap>
      </S.Wrap>
    </S.Header>
  );
};

export default Header;
