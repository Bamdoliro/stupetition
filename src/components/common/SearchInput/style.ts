import styled from 'styled-components';
import { font } from 'styles/text.style';
import { color } from 'styles/theme.style';

export const Desc = styled.p`
  ${font.caption}
  color: ${color.gray600};
  padding-bottom: 12px;
`;

export const SearchInput = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${color.gray100};
  padding: 0px 0px 0px 16px;
`;

export const Img = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 9px;
`;

export const Input = styled.input`
  ${font.p2}
  border-radius: 0px 8px 8px 0px;
  background-color: ${color.gray100};
  color: ${color.gray900};
  width: 100%;
  height: 100%;
  &::placeholder {
    color: ${color.gray500};
  }
`;
