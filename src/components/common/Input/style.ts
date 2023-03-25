import styled from 'styled-components';
import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';

export const Desc = styled(T.caption)`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${color.gray600};
  padding-bottom: 12px;
`;

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${color.gray100};
  color: ${color.gray900};
  font-size: 1rem;
  &::placeholder {
    color: ${color.gray500};
  }
`;
