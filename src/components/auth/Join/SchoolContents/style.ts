import styled from 'styled-components';
import { color } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${color.black};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
  height: 60%;
`;

export const SchoolWrap = styled.ul`
  height: 67.2%;
  max-height: 67.2%;
  overflow: auto;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
