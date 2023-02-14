import { color } from 'styles/theme';
import * as T from 'styles/text';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 72px;
  margin-bottom: 46px;
`;

export const HeaderWrap = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FilledButtonText = styled(T.btn2)`
  color: ${color.white};
`;

export const UnfilledButtonText = styled(T.btn2)`
  color: ${color.gray600};
`;

export const ScarceFilledButtonText = styled(T.btn2)`
  color: ${color.white};
`;

export const FilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: ${color.main};
  color: ${color.white};
`;

export const UnfilledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: ${color.white};
  border: 1px solid ${color.gray200};
  &:hover {
    border: 1px solid ${color.gray300};
    ${UnfilledButtonText} {
      color: ${color.gray900};
    }
  }
`;

export const ScarceFilledButton = styled.button`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: #b4d2ff;
  color: ${color.white};
`;

export const ContentsWrap = styled.div`
  width: 56.6%;
  height: 70%;
`;

export const TitleInput = styled.input`
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: 0.25px;
  width: 100%;
  margin-bottom: 39px;
  &::placeholder {
    color: ${color.gray200};
  }
`;

export const ContentInput = styled.textarea`
  padding: 16px 20px;
  border: 1px solid ${color.gray200};
  border-radius: 16px;
  width: 100%;
  height: 100%;
  resize: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  &::placeholder {
    color: ${color.gray400};
  }
`;
