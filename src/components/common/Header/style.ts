import { color } from 'styles/theme.style';
import styled from 'styled-components';
import { font } from 'styles/text.style';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100vw;
  height: 64px;
  background-color: ${color.white};
  @media print {
    display: none;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86.1%;
  height: 100%;
  background-color: ${color.white};
`;

export const Logo = styled.div`
  ${font.H5}
  color: ${color.black};

  height: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

export const Icon = styled.img``;

export const Profile = styled.img`
  cursor: pointer;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 40px;
`;
