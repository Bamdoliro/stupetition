import styled from 'styled-components';
import { color } from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.gray300};
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 9.125rem;
  width: 56%;
  height: 100%;
  background-color: ${color.white};
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${color.black};
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0rem;
  gap: 36px;
  width: 64%;
`;
