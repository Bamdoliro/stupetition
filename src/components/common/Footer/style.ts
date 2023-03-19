import styled from 'styled-components';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const Footer = styled.footer`
  width: 100%;
  height: 90px;
  padding: 0px 100px;
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 117px;
  border-top: 1px solid ${color.gray300};
  height: 100%;
  width: 100%;
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
