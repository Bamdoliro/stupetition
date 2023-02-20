import styled from 'styled-components';
import { color } from 'styles/theme';

export const FilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${color.main};
`;

export const UnfilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${color.white};
  border: 1px solid ${color.gray500};
`;
