import styled from 'styled-components';
import Background from 'assets/background.png';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const LoginLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.gray300};
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 215px;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 553px;
  height: 492px;
  background-color: ${color.white};
  border-radius: 8px;
  padding: 0px 64px;
`;

export const Title = styled(T.H1)`
  color: ${color.gray900};
  padding-bottom: 8px;
`;

export const SubTitle = styled(T.p2)`
  color: ${color.gray600};
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 42px 0px;
  gap: 18px;
  width: 425px;
`;
