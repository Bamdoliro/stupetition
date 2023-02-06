import styled from 'styled-components';
import { color } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  width: 64%;
  height: 73.5%;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${color.black};
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
`;
