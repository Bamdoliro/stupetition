import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100vw;
  height: 72px;
  background-color: ${color.white};
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86.1%;
  height: 100%;
  background-color: ${color.white};
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Logo = styled.img``;

export const LogoText = styled(T.H5)`
  color: ${color.black};
  cursor: pointer;
`;

export const Profile = styled.img`
  cursor: pointer;
`;

export const Logout = styled(T.H5)`
  color: ${color.black};
  cursor: pointer;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 40px;
`;
