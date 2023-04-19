import styled from 'styled-components';
import { font } from 'styles/text.style';
import { color } from 'styles/theme.style';

export const Desc = styled.p`
  ${font.caption}
  color: ${color.gray600};
  padding-bottom: 12px;
`;

export const Input = styled.input`
  ${font.p2}
  height: 48px;
  width: 100%;
  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${color.gray100};
  color: ${color.gray900};
  &::placeholder {
    color: ${color.gray500};
  }
`;
