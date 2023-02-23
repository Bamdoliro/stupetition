import styled from 'styled-components';
import * as T from 'styles/text';
import { color } from 'styles/theme';

export const Container = styled.div`
  width: 64%;
  height: 75.5%;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
