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

export const CheckWriteModal = styled.div`
  position: absolute;
  width: 636px;
  height: 414px;
  left: calc(50% - 636px / 2);
  top: calc(50% - 414px / 2);
  padding: 48px;
  background: ${color.white};
  border-radius: 12px;
`;

export const CheckWriteModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Title = styled(T.H3)`
  color: ${color.gray900};
`;

export const PreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Preview = styled(T.p3)`
  color: ${color.gray600};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
