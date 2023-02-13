import styled from 'styled-components';
import { color } from 'styles/theme';

export const Desc = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${color.gray500};
  padding-bottom: 12px;
`;

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${color.gray100};
  color: ${color.black};
  font-size: 16px;
`;
