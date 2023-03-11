import styled from 'styled-components';
import * as T from 'styles/text.style';
import { color } from 'styles/theme.style';

export const PrintPDFLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: ${color.white};
`;

export const PrintPDFWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42%;
  height: 100%;
  gap: 64px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;

export const Title = styled(T.H1)`
  color: ${color.gray900};
`;

export const Desc = styled(T.p2)`
  color: ${color.gray900};
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
  @media print {
    display: none;
  }
`;

export const UserListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const UserListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
