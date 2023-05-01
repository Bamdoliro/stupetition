import { color } from "styles/theme.style";
import styled from "styled-components";
import { font } from "styles/text.style";

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
  height: 440.4px;
  left: calc(50% - 636px / 2);
  top: calc(50% - 440.4px / 2);
  padding: 47px;
  background: ${color.white};
  border-radius: 8px;
`;

export const CheckWriteModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

export const Warning = styled.p`
  ${font.p3}
  color: ${color.red};
`;

export const PreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Preview = styled.p`
  ${font.p3}
  color: ${color.gray600};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
