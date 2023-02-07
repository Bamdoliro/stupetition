import styled from 'styled-components';
import { color } from 'styles/theme';

export const FilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0px 22px;
  border-radius: 12px;
  background-color: ${color.main};
  font-weight: 600;
  font-size: 16px;
  color: ${color.white};
`;

export const UnfilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0px 22px;
  border-radius: 12px;
  background-color: ${color.white};
  font-weight: 600;
  font-size: 16px;
  color: ${color.gray500};
  border: 1px solid ${color.gray500};
`;
