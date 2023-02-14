import styled from 'styled-components';
import * as T from 'styles/text';
import { color } from 'styles/theme';

export const FilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${color.main};
  color: ${color.white};
`;

export const UnfilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${color.white};
  border: 1px solid ${color.gray500};
`;

export const FilledButtonText = styled(T.H5)`
  color: ${color.white};
`;

export const UnfilledButtonText = styled(T.H5)`
  color: ${color.gray500};
`;
