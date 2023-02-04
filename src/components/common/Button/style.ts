import styled from 'styled-components';
import { color } from 'styles/theme';

export const Button = styled.button`
  width: 225px;
  height: 48px;
  padding: 0px 22px;
  border-radius: 12px;
  background-color: ${color.main};
  font-weight: 600;
  font-size: 16px;
  color: ${color.white};
`;
