import { color } from 'styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 350px;
  height: 54px;
  border-radius: 18px;
  padding: 0.375rem;
  background-color: ${color.gray50};
  margin: 2.25rem 0px 3rem 0;
`;

export const TabButton = styled.div`
  height: 42px;
  width: 80px;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${color.gray900};

  cursor: pointer;

  ${RadioInput}:hover + & {
    background-color: ${color.gray100};
  }
  ${RadioInput}:checked + & {
    color: ${color.white};
    background-color: ${color.main};
  }
`;
