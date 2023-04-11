import Logo from 'assets/logo.svg';
import Profile from 'assets/loginProfile.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MiniButton from 'components/common/MiniButton';
import SearchInput from 'components/common/SearchInput';
import { useUser } from 'hooks/useUser';
import ProfilePopover from './ProfilePopover';
import * as S from './style';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [profilePopoverIsOpen, setProfilePopoverIsOpen] = useState(false);

  return (
    <S.Header>
      <S.HeaderWrap>
        <S.LogoWrap onClick={() => navigate('/')}>
          <S.Logo src={Logo} />
          <S.LogoText>학생청원</S.LogoText>
        </S.LogoWrap>
        <S.NavWrap>
          <SearchInput
            height="40px"
            width="240px"
            placeholder="청원 검색"
            type="text"
            name="stupetitionSearch"
          />
          {user.authority ? (
            <>
              <S.Profile
                src={Profile}
                onClick={() => setProfilePopoverIsOpen(!profilePopoverIsOpen)}
              />
              <ProfilePopover
                isOpen={profilePopoverIsOpen}
                setProfilePopoverIsOpen={setProfilePopoverIsOpen}
              />
            </>
          ) : (
            <MiniButton
              value="로그인"
              option="UNFILLED"
              onClick={() => navigate('/login')}
            />
          )}
        </S.NavWrap>
      </S.HeaderWrap>
    </S.Header>
  );
};

export default Header;
