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

export const SchoolWrap = styled.ul`
  height: 100%;
  max-height: 100%;
  overflow: auto;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
