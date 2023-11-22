import styled from 'styled-components';
import { font } from 'styles/text.style';
import { color } from 'styles/theme.style';

export const Ment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  // 나중에 수정합시다
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Text = styled.p`
  ${font.H2}
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
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
