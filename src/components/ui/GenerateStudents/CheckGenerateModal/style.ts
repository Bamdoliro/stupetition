import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';
import styled from 'styled-components';

export const BlurBackground = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  scrollbar-width: none;
`;

export const CheckGenerateModal = styled.div`
  position: absolute;
  width: 450px;
  height: 250px;
  left: calc(50% - 450px / 2);
  top: calc(50% - 250px / 2);
  padding: 40px 48px;
  background: ${color.white};
  border-radius: 8px;
`;

export const CheckGenerateModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 59px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled(T.H3)`
  color: ${color.gray900};
`;

export const Content = styled(T.p2)`
  color: ${color.gray900};
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 11px;
`;
