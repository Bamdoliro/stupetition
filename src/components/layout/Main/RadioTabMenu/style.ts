import { color } from 'styles/theme';
import styled from 'styled-components';

export const RadioTabMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background-color: ${color.white};
`;

export const TabButton = styled.div``;
export const RadioInput = styled.input`
  display: none;
`;

export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 130%;
  letter-spacing: 0px;
  color: ${color.gray600};

  cursor: pointer;

  ${RadioInput}:hover + & {
    color: ${color.gray900};
  }
  ${RadioInput}:checked + & {
    color: ${color.gray900};
    background-color: ${color.gray200};
  }
`;
