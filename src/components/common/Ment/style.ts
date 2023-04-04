import styled from 'styled-components';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const Ment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Text = styled(T.H2)`
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
`;

export const LogoWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Logo = styled.img``;

export const LogoText = styled(T.H5)`
  color: ${color.black};
`;
