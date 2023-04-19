import { color } from 'styles/theme.style';
import { font } from 'styles/text.style';
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
  ${font.btn2}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 8px;
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
