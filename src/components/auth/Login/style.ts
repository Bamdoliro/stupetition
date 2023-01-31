import styled from 'styled-components';
import { color } from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.gray300};
`;

export const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 13.4375rem;
`;

export const LoginBox = styled.div`
  width: 550px;
  height: 500px;
  background-color: ${color.white};
  border-radius: 12px;
  padding: 5rem;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 8px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${color.gray600};
`;

export const Join = styled.a`
  color: ${color.main};
  cursor: pointer;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 42px 0px;
  gap: 18px;
`;

export const Button = styled.button``;
