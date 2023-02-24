import styled from 'styled-components';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const BlurBackground = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Confirm = styled.div`
  position: absolute;
  width: 416px;
  height: 268px;
  left: calc(50% - 416px / 2);
  top: calc(50% - 268px / 2);
  padding: 48px;
  background: ${color.white};
  border-radius: 12px;
`;

export const ConfirmWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const ConfirmTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ConfirmTitle = styled(T.H3)`
  color: ${color.gray900};
`;

export const ConfirmContent = styled(T.p2)`
  color: ${color.gray900};
`;

export const ConfirmButtonBox = styled.div`
  display: flex;
  gap: 6px;
`;
