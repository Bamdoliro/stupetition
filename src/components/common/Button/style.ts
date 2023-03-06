import styled from 'styled-components';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const FilledButtonText = styled(T.H5)`
  color: ${color.white};
`;

export const UnfilledButtonText = styled(T.H5)`
  color: ${color.gray600};
`;

export const FilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  border-radius: 8px;
  background-color: ${color.main};
  &:hover {
    background-color: ${color.hover};
  }
`;

export const UnfilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
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
