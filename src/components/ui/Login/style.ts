import styled from 'styled-components';
import Background from 'assets/background.png';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const LoginLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.gray300};
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginWrap = styled.div<{ isOpenLoginCouncil: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ isOpenLoginCouncil }) =>
    isOpenLoginCouncil ? '294px' : '492px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 215px;
`;

export const LoginBox = styled.div<{ isOpenLoginCouncil: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ isOpenLoginCouncil }) => isOpenLoginCouncil && '30px'};
  width: 553px;
  height: 100%;
  background-color: ${color.white};
  border-radius: 8px;
  padding: 0px 64px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled(T.H1)`
  color: ${color.gray900};
  padding-bottom: 8px;
`;

export const SubTitle = styled(T.p2)`
  color: ${color.gray600};
`;

export const Council = styled(T.p2)`
  color: ${color.main};
  cursor: pointer;
`;
