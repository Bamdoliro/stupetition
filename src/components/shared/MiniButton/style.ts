import { color } from 'styles/theme';
import * as T from 'styles/text';
import styled from 'styled-components';

export const FilledButtonText = styled(T.btn2)`
  color: ${color.white};
`;

export const UnfilledButtonText = styled(T.btn2)`
  color: ${color.gray600};
`;

export const ScarceFilledButtonText = styled(T.btn2)`
  color: ${color.white};
`;

export const FilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${color.main};
  color: ${color.white};
  &:hover {
    background-color: ${color.hover};
  }
`;

export const UnfilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  &:hover {
    border: 1px solid ${color.gray300};
    ${UnfilledButtonText} {
      color: ${color.gray900};
    }
  }
`;

export const ScarceFilledButton = styled.button`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: #b4d2ff;
  color: ${color.white};
`;
