import styled from 'styled-components';
import * as T from 'styles/text';
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
  align-items: center;
  justify-content: flex-end;
  padding-right: 13.4375rem;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 42.9%;
  height: 60%;
  background-color: ${color.white};
  border-radius: 8px;
  padding: 5rem;
`;

export const Title = styled(T.H1)`
  color: ${color.gray900};
  padding-bottom: 8px;
`;

export const SubTitle = styled(T.p2)`
  color: ${color.gray600};
`;

export const Join = styled(T.p2)`
  display: inline-block;
  color: ${color.main};
  cursor: pointer;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 42px 0px;
  gap: 18px;
`;
