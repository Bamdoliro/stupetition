import styled from 'styled-components';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const BlurBackground = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

// confirm

export const Confirm = styled.div`
  position: absolute;
  width: 416px;
  height: 268px;
  left: calc(50% - 416px / 2);
  top: calc(50% - 268px / 2);
  padding: 36px;
  background: ${color.white};
  border-radius: 8px;
`;

export const ConfirmWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  justify-content: space-between;
`;

// alert

export const Alert = styled.div`
  position: absolute;
  width: 416px;
  height: 268px;
  left: calc(50% - 416px / 2);
  top: calc(50% - 268px / 2);
  padding: 36px;
  background: ${color.white};
  border-radius: 8px;
`;

export const AlertWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AlertTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AlertTitle = styled(T.H3)`
  color: ${color.gray900};
`;

export const AlertContent = styled(T.p2)`
  color: ${color.gray900};
`;

export const AlertButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
