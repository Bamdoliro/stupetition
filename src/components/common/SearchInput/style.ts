import styled from 'styled-components';
import { color } from 'styles/theme.style';

export const Desc = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
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
  border-radius: 0px 8px 8px 0px;
  background-color: ${color.gray100};
  color: ${color.gray900};
  width: 100%;
  height: 100%;
  font-size: 1rem;
  &::placeholder {
    color: ${color.gray500};
  }
`;
