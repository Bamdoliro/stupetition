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
`;

export const Preview = styled.div`
  position: absolute;
  width: 40%;
  height: 90%;
  left: calc(50% - 40% / 2);
  top: calc(50% - 90% / 2);
  background: ${color.white};
  border-radius: 12px;
  padding: 40px 48px;
`;

export const PreviewWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const UserListBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow: auto;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 11px;
  position: absolute;
  bottom: 0;
`;
