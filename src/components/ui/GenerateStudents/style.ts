import styled from 'styled-components';
import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';

export const GenerateStudentsLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const GenerateStudentsWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 88px;
`;

export const GenerateStudentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 56.6%;
  height: 71.1%;
`;

export const Title = styled(T.H1)`
  color: ${color.gray900};
`;

export const ColInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 48.5%;
`;

export const RowInputWrap = styled.div`
  width: 100%;
  gap: 1.5%;
  display: flex;
`;

export const InputWrap = styled.div`
  width: 48.5%;
`;
