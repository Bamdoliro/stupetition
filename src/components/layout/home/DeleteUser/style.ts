import styled from 'styled-components';

import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';

export const DeleteUserLayout = styled.div`
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

export const DeleteUserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 146px;
  width: 798px;
  height: 100%;
  background-color: ${color.white};
`;

export const DeleteUserContent = styled.div`
  width: 64%;
  height: 75.5%;
`;

export const DeleteUserWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

export const Title = styled(T.H1)`
  color: ${color.gray900};
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
`;
