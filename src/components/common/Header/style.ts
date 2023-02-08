import * as T from 'styles/text';
import { color } from 'styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 56px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86.1%;
  height: 100%;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Img = styled.img``;

export const Logo = styled(T.H5)`
  color: ${color.black};
`;

export const Login = styled(T.H5)`
  color: ${color.black};
  cursor: pointer;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
